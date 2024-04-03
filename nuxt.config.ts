// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@nuxt/fonts'],
	css: ['swiper/css', '~/assets/css/main.css'],
	components: [
		{ path: "~/components/atoms", pathPrefix: false },
		"~/components",
	],
})