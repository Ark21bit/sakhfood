<template>
	<component :is="tag" :class="buttonClass">
		<slot name="prefix">
			<span v-if="prefixIcon" :class="[iconClass, prefixIcon]"></span>
		</slot>
		<slot />
		<slot name="suffix">
			<span v-if="suffixIconName" :class="[iconClass, suffixIconName]"></span>
		</slot>
	</component>
</template>

<script lang="ts" setup>
type ButtonColor = 'green' | 'seryy' | 'white' | 'green-light'
type ButtonSize = 'sm' | 'md' | 'xs'
type ButtonVariant = 'outline' | 'solid'
const props = defineProps({
	tag: { type: [Object, String], default: 'button' },
	color: { type: String as PropType<ButtonColor>, default: 'green' },
	size: { type: String as PropType<ButtonSize>, default: 'md' },
	variant: { type: String as PropType<ButtonVariant>, default: 'solid' },
	class: { type: [String, Object, Array], default: undefined },
	prefixIcon: String,
	suffixIcon: String,
	loading: Boolean,
	loadingIcon: { type: String, default: '' },
	padded: { type: Boolean, default: false },
})

const slots = defineSlots<{
	default: any,
	prefix?: any,
	suffix?: any,
	loading?: any,
}>()

const suffixIconName = computed(() => {
	if (props.loading) return props.loadingIcon
	return props.suffixIcon
})

const ui = {
	color: {
		"green-light": {
			solid: 'bg-firmennyy/10 text-firmennyy',
			outline: 'bg-transparent ring-1.5 ring-inset ring-firmennyy/50 text-firmennyy',
		},
		green: {
			solid: 'bg-firmennyy text-white hover:bg-#61BF16',
			outline: 'bg-transparent ring-1.5 ring-inset ring-firmennyy/50 text-firmennyy hover:(bg-#50A80A/20 ring-transparent) ',
		},
		seryy: {
			solid: 'bg-#ebf0f2 text-#718997 hover:bg-#DFE6E9',
			outline: ''
		},
		white: {
			solid: 'bg-white text-firmennyy',
			outline: ''
		}
	},
	size: {
		xs: 'text-3.75 leading-0.8 -tracking-0.01em',
		sm: 'text-4 lg:text-4 leading-0.8 -tracking-0.01em',
		md: 'text-4 lg:text-4.5 leading-0.8 -tracking-0.01em',
	},
	gap: {
		xs: 'gap-2',
		sm: 'gap-1.5',
		md: 'gap-1.5',
	},
	padding: {
		xs: 'py-2.75 px-7',
		sm: 'py-3.5 lg:py-3.75 px-7',
		md: 'py-3.5 lg:py-3.75 px-7',
	},
	base: 'flex shrink-0 items-center justify-center transition-box-shadow,background-color',
	icon: {
		base: "shrink-0",
		size: {
			xs: 'text-4',
			sm: "text-4",
			md: "text-4",
		}
	},
	rounded: 'rounded-3 lg:rounded-3.5',
	font: "font-500"
}

const iconClass = computed(() => {
	return [ui.icon.base, ui.icon.size[props.size]]
})

const buttonClass = computed(() => {
	const variant = ui.color?.[props.color]?.[props.variant]
	return [
		ui.base,
		ui.font,
		ui.rounded,
		ui.size[props.size],
		ui.gap[props.size],
		!props.padded && ui.padding[props.size],
		variant,
		props.class
	]
})
</script>
