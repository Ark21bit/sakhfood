import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
	],
    blocklist: [
        'container'
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    rules: [
        [/^leading-([\.\d]+)$/, ([_, num]) => ({ "line-height": `${num}` })]
    ]
})