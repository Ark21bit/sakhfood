<template>
	<NuxtLink to="/" class="text-tekstovyy hover:text-firmennyy flex flex-col items-center gap-3 ring ring-#f1f1f1 rounded-3.5 lg:rounded-5 shadow-[0_3px_20px_0] shadow-black/4 hover:shadow-[0_6px_18px_0] hover:shadow-black/16 px-8 lg:px-7.5 pt-4 lg:pt-3 pb-4.5 lg:pb-5 transition-box-shadow,color ">
		<img :src="img" class="shrink-0 w-25 h-15 lg:(w-37.5 h-25) object-center object-contain" alt="">
		<p class="text-3.5 lg:text-4.5 font-500 text-center">{{ title }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	title: string,
	img: string
}>()
</script>