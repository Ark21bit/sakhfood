<template>
	<div class="relative" @mouseenter="isDropdownItemsShow = true" @mouseleave="isDropdownItemsShow = false">
		<div class="dropdown-header group/dropdownh">
			<button type="button" class="flex gap-1.5 items-center text-tekstovyy text-5 font-500 leading-0.8 -tracking-0.01em text-left justify-between w-full">
				<slot name="dropdown-header-content" :isShow="isShow">
					{{ title }}
				</slot>
				<slot name="dropdown-header-icon" :isDropdownItemShow="isDropdownItemsShow">
					<span class="text-3 transition-transform duration-400 text-firmennyy hover:rotate-180 i-custom:dropdown-select" :class="{ 'rotate-180': isDropdownItemsShow }"></span>
				</slot>
			</button>
		</div>
		<Transition enterActiveClass="transition-opacity" leaveActiveClass="transition-opacity" enterFromClass="opacity-0" leaveToClass="opacity-0"> 
			<div v-show="isDropdownItemsShow" class="flex flex-col overflow-hidden absolute z-10 bg-white">
				<slot />
			</div>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	isShow: { type: Boolean, default: false },
	title: String,
	absolute: { type: Boolean, default: false },
})

let isDropdownItemsShow = ref(props.isShow)

const slots = defineSlots<{
	default: any,
	'dropdown-header-content'?: any,
	'dropdown-header-icon'?: any,
}>()
</script>
