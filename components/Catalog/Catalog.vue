<template>
	<div class="flex flex-col gap-4 lg:gap-6">
		<div class="flex">
			<h2 class="text-6 lg:text-8.5 font-700 leading-1.1 -tracking-0.02em">{{ title }}</h2>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
			<CatalogCard v-for="item in items" :img="item.img" :title="item.title"/>
			<Button class="col-span-2 col-start-1 md:col-start-2 lg:col-start-3 mt-.5 lg:mt-5" :tag="NuxtLink" :to="link.to" variant="outline">{{ link.text }}</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

defineProps<{
	items:{img:string,title:string}[],
	link:{to:string,text:string},
	title:string
}>()
</script>