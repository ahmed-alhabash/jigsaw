// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css:['vuetify/lib/styles/main.css', '@mdi/font/css/materialdesignicons.min.css','~/assets/main.css'],
  build:{
    transpile:['vuetify']
  }
})
