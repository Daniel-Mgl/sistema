// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: [
    '../app/assets/css/reset.css',
    '../app/assets/css/fonts.css'
  ],

  modules: ['@nuxt/icon'],
})