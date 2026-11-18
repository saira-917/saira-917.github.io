import { siteData } from './data.js'

export function renderLayout() {
  const currentPage = document.body.dataset.page || 'home'

  _insertHeader(currentPage)
  _insertFooter()
  _insertBottomNav(currentPage)
  _bindMobileMenu()
}

function _insertHeader(currentPage) {
  const navHtml = siteData.nav.map(({ label, href, page }) => {
    const active = page === currentPage
    return active
      ? `<a class="text-primary font-bold border-b border-primary pb-0.5 font-label-md text-label-md uppercase tracking-widest" href="${href}">${label}</a>`
      : `<a class="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest hover:text-primary transition-colors duration-300" href="${href}">${label}</a>`
  }).join('')

  const drawerLinks = siteData.nav.map(({ label, href, page }) => {
    const active = page === currentPage
    return `<a href="${href}" class="flex items-center gap-3 px-4 py-3 rounded-full font-label-md text-label-md uppercase tracking-widest transition-all duration-200 ${active ? 'bg-secondary-container text-primary font-bold' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'}">${label}</a>`
  }).join('')

  const header = document.createElement('header')
  header.className = 'w-full sticky top-0 bg-background/80 backdrop-blur-md border-b border-outline/10 z-50 transition-all duration-300'
  header.innerHTML = `
    <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-20 relative">
      <button id="mobile-menu-btn" aria-label="Open menu" class="text-primary hover:opacity-70 transition-opacity p-2">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <a class="font-headline-sm text-headline-sm tracking-widest text-primary absolute left-1/2 -translate-x-1/2 whitespace-nowrap hover:opacity-80 transition-opacity" href="/index.html">
        ${siteData.name.toUpperCase()}
      </a>
      <nav class="hidden md:flex gap-8 items-center" aria-label="Main navigation">
        ${navHtml}
      </nav>
    </div>
    <div id="mobile-menu" class="hidden fixed inset-0 z-40 md:hidden">
      <div id="mobile-overlay" class="absolute inset-0 bg-on-background/20 backdrop-blur-sm"></div>
      <nav class="absolute left-0 top-0 bottom-0 w-72 bg-surface border-r border-outline/10 flex flex-col p-8 gap-3 shadow-lg" aria-label="Mobile navigation">
        <div class="flex justify-between items-center mb-6">
          <span class="font-headline-sm text-headline-sm text-primary tracking-widest">${siteData.name.split(' ')[0].toUpperCase()}</span>
          <button id="mobile-menu-close" aria-label="Close menu" class="text-primary hover:opacity-70 transition-opacity">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        ${drawerLinks}
        <div class="mt-auto pt-8 border-t border-outline/10">
          <p class="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest">${siteData.tagline}</p>
        </div>
      </nav>
    </div>
  `
  document.body.insertBefore(header, document.body.firstChild)
}

function _insertFooter() {
  const socialsHtml = siteData.socials.map(({ label, href }) =>
    `<a class="text-on-surface-variant/80 hover:text-primary hover:tracking-wider transition-all duration-500 focus:ring-1 focus:ring-primary/20 rounded px-2 py-1 uppercase font-label-md text-label-md" href="${href}">${label}</a>`
  ).join('')

  const footer = document.createElement('footer')
  footer.className = 'w-full py-16 bg-surface-container-lowest border-t border-outline/10 md:mb-0 mb-16'
  footer.innerHTML = `
    <div class="flex flex-col items-center gap-8 px-margin-mobile md:px-margin-desktop text-center max-w-container-max mx-auto">
      <div class="font-headline-sm text-headline-sm text-secondary-fixed-dim tracking-widest">${siteData.name.toUpperCase()}</div>
      <div class="flex flex-wrap justify-center gap-6">
        ${socialsHtml}
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mt-4">
        © ${new Date().getFullYear()} ${siteData.name.toUpperCase()}. CRAFTED WITH INTENTION.
      </p>
    </div>
  `

  const main = document.querySelector('main')
  if (main) {
    main.insertAdjacentElement('afterend', footer)
  } else {
    document.body.appendChild(footer)
  }
}

function _insertBottomNav(currentPage) {
  const linksHtml = siteData.bottomNav.map(({ label, href, page, icon }) => {
    const active = page === currentPage
    return `
      <a href="${href}" class="flex flex-col items-center justify-center gap-0.5 transition-all ${active ? 'text-primary font-bold -translate-y-0.5' : 'text-on-surface-variant/60 hover:text-primary'}">
        <span class="material-symbols-outlined text-xl${active ? ' fill' : ''}">${icon}</span>
        <span class="font-label-sm text-label-sm">${label}</span>
      </a>`
  }).join('')

  const nav = document.createElement('nav')
  nav.setAttribute('aria-label', 'Mobile bottom navigation')
  nav.className = 'md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-background/90 backdrop-blur-xl border-t border-outline/5 shadow-sm h-16 px-margin-mobile flex justify-around items-center'
  nav.innerHTML = linksHtml
  document.body.appendChild(nav)
}

function _bindMobileMenu() {
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu')
    if (!menu) return
    if (e.target.closest('#mobile-menu-btn')) {
      menu.classList.remove('hidden')
      document.body.style.overflow = 'hidden'
    } else if (e.target.closest('#mobile-menu-close') || e.target.closest('#mobile-overlay')) {
      menu.classList.add('hidden')
      document.body.style.overflow = ''
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const menu = document.getElementById('mobile-menu')
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden')
        document.body.style.overflow = ''
      }
    }
  })
}
