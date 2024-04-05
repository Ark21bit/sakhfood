<template>
	<div class="flex items-center justify-center gradient-default-img">
		<div class="font-500 bg-white text-#a9aba5 -rotate-1" :class="sizeclass?.[size]">Нет фото</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	size: { type: String as PropType<'sm' | 'md'>, default: 'md' }
})
const sizeclass = {
	sm:'rounded-1 px-1.5 py-1.25 text-2 shadow-default-img-sm',
	md:'rounded-2 p-3 text-4.25 shadow-default-img-md'
}
</script>