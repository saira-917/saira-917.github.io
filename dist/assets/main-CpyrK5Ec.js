(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Saira Chowdhury`,tagline:`Computer Engineering · Stony Brook University`,socials:[{label:`LinkedIn`,href:`#`},{label:`GitHub`,href:`https://github.com/saira-917`},{label:`Email`,href:`mailto:chowdhurysaira4@gmail.com`}],nav:[{label:`Home`,href:`/index.html`,page:`home`},{label:`Experience`,href:`/experience.html`,page:`experience`},{label:`Projects`,href:`/projects.html`,page:`projects`},{label:`Contact`,href:`/contact.html`,page:`contact`}],bottomNav:[{label:`Story`,href:`/index.html`,page:`home`,icon:`auto_stories`},{label:`Path`,href:`/experience.html`,page:`experience`,icon:`timeline`},{label:`Works`,href:`/projects.html`,page:`projects`,icon:`folder_special`},{label:`Connect`,href:`/contact.html`,page:`contact`,icon:`chat_bubble`}]};function t(){let e=document.body.dataset.page||`home`;n(e),r(),i(e),a()}function n(t){let n=e.nav.map(({label:e,href:n,page:r})=>r===t?`<a class="text-primary font-bold border-b border-primary pb-0.5 font-label-md text-label-md uppercase tracking-widest" href="${n}">${e}</a>`:`<a class="text-on-surface-variant font-label-md text-label-md uppercase tracking-widest hover:text-primary transition-colors duration-300" href="${n}">${e}</a>`).join(``),r=e.nav.map(({label:e,href:n,page:r})=>`<a href="${n}" class="flex items-center gap-3 px-4 py-3 rounded-full font-label-md text-label-md uppercase tracking-widest transition-all duration-200 ${r===t?`bg-secondary-container text-primary font-bold`:`text-on-surface-variant hover:text-primary hover:bg-surface-container-high`}">${e}</a>`).join(``),i=document.createElement(`header`);i.className=`w-full sticky top-0 bg-background/80 backdrop-blur-md border-b border-outline/10 z-50 transition-all duration-300`,i.innerHTML=`
    <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-20 relative">
      <button id="mobile-menu-btn" aria-label="Open menu" class="text-primary hover:opacity-70 transition-opacity p-2">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <a class="font-headline-sm text-headline-sm tracking-widest text-primary absolute left-1/2 -translate-x-1/2 whitespace-nowrap hover:opacity-80 transition-opacity" href="/index.html">
        ${e.name.toUpperCase()}
      </a>
      <nav class="hidden md:flex gap-8 items-center" aria-label="Main navigation">
        ${n}
      </nav>
    </div>
    <div id="mobile-menu" class="hidden fixed inset-0 z-40 md:hidden">
      <div id="mobile-overlay" class="absolute inset-0 bg-on-background/20 backdrop-blur-sm"></div>
      <nav class="absolute left-0 top-0 bottom-0 w-72 bg-surface border-r border-outline/10 flex flex-col p-8 gap-3 shadow-lg" aria-label="Mobile navigation">
        <div class="flex justify-between items-center mb-6">
          <span class="font-headline-sm text-headline-sm text-primary tracking-widest">${e.name.split(` `)[0].toUpperCase()}</span>
          <button id="mobile-menu-close" aria-label="Close menu" class="text-primary hover:opacity-70 transition-opacity">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        ${r}
        <div class="mt-auto pt-8 border-t border-outline/10">
          <p class="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest">${e.tagline}</p>
        </div>
      </nav>
    </div>
  `,document.body.insertBefore(i,document.body.firstChild)}function r(){let t=e.socials.map(({label:e,href:t})=>`<a class="text-on-surface-variant/80 hover:text-primary hover:tracking-wider transition-all duration-500 focus:ring-1 focus:ring-primary/20 rounded px-2 py-1 uppercase font-label-md text-label-md" href="${t}">${e}</a>`).join(``),n=document.createElement(`footer`);n.className=`w-full py-16 bg-surface-container-lowest border-t border-outline/10 md:mb-0 mb-16`,n.innerHTML=`
    <div class="flex flex-col items-center gap-8 px-margin-mobile md:px-margin-desktop text-center max-w-container-max mx-auto">
      <div class="font-headline-sm text-headline-sm text-secondary-fixed-dim tracking-widest">${e.name.toUpperCase()}</div>
      <div class="flex flex-wrap justify-center gap-6">
        ${t}
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mt-4">
        © ${new Date().getFullYear()} ${e.name.toUpperCase()}. CRAFTED WITH INTENTION.
      </p>
    </div>
  `;let r=document.querySelector(`main`);r?r.insertAdjacentElement(`afterend`,n):document.body.appendChild(n)}function i(t){let n=e.bottomNav.map(({label:e,href:n,page:r,icon:i})=>{let a=r===t;return`
      <a href="${n}" class="flex flex-col items-center justify-center gap-0.5 transition-all ${a?`text-primary font-bold -translate-y-0.5`:`text-on-surface-variant/60 hover:text-primary`}">
        <span class="material-symbols-outlined text-xl${a?` fill`:``}">${i}</span>
        <span class="font-label-sm text-label-sm">${e}</span>
      </a>`}).join(``),r=document.createElement(`nav`);r.setAttribute(`aria-label`,`Mobile bottom navigation`),r.className=`md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-background/90 backdrop-blur-xl border-t border-outline/5 shadow-sm h-16 px-margin-mobile flex justify-around items-center`,r.innerHTML=n,document.body.appendChild(r)}function a(){document.addEventListener(`click`,e=>{let t=document.getElementById(`mobile-menu`);t&&(e.target.closest(`#mobile-menu-btn`)?(t.classList.remove(`hidden`),document.body.style.overflow=`hidden`):(e.target.closest(`#mobile-menu-close`)||e.target.closest(`#mobile-overlay`))&&(t.classList.add(`hidden`),document.body.style.overflow=``))}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){let e=document.getElementById(`mobile-menu`);e&&!e.classList.contains(`hidden`)&&(e.classList.add(`hidden`),document.body.style.overflow=``)}})}t();