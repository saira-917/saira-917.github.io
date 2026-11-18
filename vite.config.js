import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        experience: 'experience.html',
        projects: 'projects.html',
        contact: 'contact.html',
      },
    },
  },
})
