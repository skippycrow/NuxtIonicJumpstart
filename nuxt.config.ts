// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/ionic", "@nuxtjs/tailwindcss"],
  ssr: false,
  devtools: { enabled: true },
});
