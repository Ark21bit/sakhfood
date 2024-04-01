// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@nuxt/fonts'],
	css: ['~/assets/css/main.css']
})