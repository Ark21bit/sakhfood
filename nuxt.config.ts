// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', '@nuxt/fonts', '@vueuse/nuxt'],
	css: ['swiper/css', '~/assets/css/main.css'],
	components: [
		{ path: "~/components/atoms", pathPrefix: false },
		"~/components",
	],
	fonts: {
		families: [
			{
				name: 'Onest',
				styles: ['normal'],
				provider: 'google',
				weights: [400, 500, 700],
			}
		]
	}
})