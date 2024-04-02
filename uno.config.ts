import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup, presetIcons } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			collections: {
				custom: FileSystemIconLoader(
					'./assets/iconsUnoCSS',
					svg => svg.replace(/#50A80A/, 'currentColor')
				),
			}
		})
	],
	blocklist: [
		'container'
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	],
	theme: {
		fontFamily: {
			Onest: 'Onest',
		},
		colors: {
			"tekstovyy": "#2c3e48",
			"seryy": "#80929c",
			"firmennyy": "#50a80a",
		},
	},
	rules: [
		[/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })],
		[/^flex-([\.\d]+)$/, ([_, num]) => ({ "flex": `${num} ${num} 0%` })],
	]
})