/**
 * SAIRA'S PORTFOLIO CONTENT
 *
 * This is your single source of truth for site-wide data.
 * Edit this file to update your name, socials, and shared content.
 * Page-specific content (experience, projects, contact) lives in each HTML file
 * and is marked with <!-- PLACEHOLDER: ... --> comments.
 */

export const siteData = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  name: 'Saira Chowdhury',
  tagline: 'Computer Engineering · Stony Brook University',

  // ── Social links (update hrefs with your real URLs) ───────────────────────
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sairachowdhury' },
    { label: 'GitHub',   href: 'https://github.com/saira-917' },
    { label: 'Email',    href: 'mailto:chowdhurysaira4@gmail.com' },
  ],

  // ── Navigation pages (keep in sync with HTML filenames) ───────────────────
  nav: [
    { label: 'Home',       href: '/index.html',      page: 'home' },
    { label: 'Experience', href: '/experience.html',  page: 'experience' },
    { label: 'Projects',   href: '/projects.html',    page: 'projects' },
    { label: 'Contact',    href: '/contact.html',     page: 'contact' },
  ],

  // ── Bottom navigation (mobile) ─────────────────────────────────────────────
  bottomNav: [
    { label: 'Story',   href: '/index.html',      page: 'home',       icon: 'auto_stories' },
    { label: 'Path',    href: '/experience.html',  page: 'experience', icon: 'timeline' },
    { label: 'Works',   href: '/projects.html',    page: 'projects',   icon: 'folder_special' },
    { label: 'Connect', href: '/contact.html',     page: 'contact',    icon: 'chat_bubble' },
  ],
}
