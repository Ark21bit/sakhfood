<template>
	<component :is="tag" :class="UI.root">
		<slot />
	</component>
</template>

<script setup lang="ts">
type TagSize = 'sm' | 'md'
type TagColor = 'green'
const props = defineProps({
	size: { default: 'md', type: String as PropType<TagSize> },
	tag: { type: [Object, String], default: 'span' },
	color: { default: 'green', type: String as PropType<TagColor> },
})

const UI = computed(() => ({
	root: [
		{ 'text-2.5 lg:text-3.25 leading-0.8 backdrop-blur-5 px-2 lg:px-2.5 py-1.25 lg:py-1.5': props.size === 'sm' },
		{ 'text-4 leading-0.85 backdrop-blur-20 px-4 lg:py-2.5': props.size === 'md' },
		{ 'bg-firmennyy/75 text-white': props.color === 'green' },
		'font-700 shadow-[0_3px_20px_0] shadow-black/8 rounded-1.5 lg:rounded-2'
	]
}))
</script>