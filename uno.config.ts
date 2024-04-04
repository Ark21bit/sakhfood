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

		boxShadow: {
			header: '0 9px 20px 0 rgba(166, 166, 166, 0.05), 0 37px 37px 0 rgba(166, 166, 166, 0.04), 0 83px 50px 0 rgba(166, 166, 166, 0.03), 0 147px 59px 0 rgba(166, 166, 166, 0.01), 0 230px 64px 0 rgba(166, 166, 166, 0);',
			"default-img": "0 2px 5px 0 rgba(56, 61, 41, 0.05), 0 10px 10px 0 rgba(56, 61, 41, 0.04), 0 22px 13px 0 rgba(56, 61, 41, 0.03), 0 39px 16px 0 rgba(56, 61, 41, 0.01), 0 61px 17px 0 rgba(56, 61, 41, 0);"
		}
	},
	rules: [
		[/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })],
		[/^flex-([\.\d]+)$/, ([_, num]) => ({ "flex": `${num} ${num} 0%` })],
	]
})