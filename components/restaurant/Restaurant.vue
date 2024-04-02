<template>
	<div class="col-span-full bg-#EEF5F0/70 rounded-5 lg:rounded-10 lg:mx-8 px-3 lg:px-10 py-4.5 lg:pt-11 lg:pb-10">
		<div class="container mx-auto flex flex-col gap-4 lg:gap-8">
			<h2 class="font-700 text-6 lg:text-8.5 leading-1.1 -tracking-[.02em] text-tekstovyy">Заведения в Южно-Сахалинске</h2>
			<div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-1.5 lg:gap-4">
				<RestaurantCard v-bind="restaraunt" v-for="restaraunt in restaraunts" />
			</div>
			<Button :tag="NuxtLink" to="/" class="lg:mx-auto" variant="outline">Все заведения в Южно-Сахалинске</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
defineProps<{
	restaraunts:any[]
}>()
</script>