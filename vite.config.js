import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: process.env.NODE_ENV === 'production'
    ? '/html-css-js-projects-clean-code/'
    : '/',
  server: {
    port: 3000
  }
})
