<template>
	<div>
		<h2 class="text-tekstovyy text-6 lg:text-8.5 font-700">{{ title }}</h2>
		<div class="grid grid-cols-[repeat(auto-fill,minmax(162px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-2.5 lg:gap-x-4 gap-y-2 lg:gap-y-6 mt-4 lg:mt-7">
			<RestaurantProductsCard v-for="product in products" v-bind="product" />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Product } from './RestaurantProductsCard.vue';

defineProps<{
	title: string,
	products: Product[]
}>()
</script>