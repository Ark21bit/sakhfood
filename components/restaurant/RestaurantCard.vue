<template>
	<div :class="time.open ? 'bg-white' : 'bg-#e0e6e4'" class="flex gap-3 lg:gap-4.5 shadow-[0_3px_16px_0] lg:shadow-[0_3px_20px_0] shadow-black/4 p-3 lg:p-4 rounded-4 lg:rounded-5 items-center">
		<div class="shrink-0 relative">
			<div class="flex gap-1 flex-wrap absolute inset-1.25 lg:inset-1.5 items-start">
				<Tag v-if="bestPrice" size="sm">Лучшая цена</Tag>
			</div>
			<img class="rounded-2 lg:rounded-2.5 size-33 lg:size-42 object-center object-cover" :src="img" alt="">
		</div>
		<div class="flex flex-col gap-1.75 lg:gap-2.5">
			<p class="text-tekstovyy text-4.25 lg:text-5.5 font-500 vertical-trim-height">{{ title }}</p>
			<p class="text-4 lg:text-4.5">{{ price.text }}</p>
			<p class="text-seryy text-3.25 lg:text-4">{{ description }}</p>
			<div class="grid grid-cols-[auto_1fr] gap-y-1.5 gap-x-3.5 lg:gap-x-4 text-3 lg:text-3.75 text-seryy">
				<p class="flex items-center gap-1.25 lg:gap-1.5">
					<span class="text-3.5 lg:text-4.5 text-firmennyy i-custom:star"></span>
					{{ rating }}
				</p>
				<p class="flex items-center gap-1.25 lg:gap-1.5">
					<span class="text-3.5 lg:text-4.5 text-firmennyy i-custom:message"></span>
					{{ countReviews }} отзыва
				</p>
				<p class="flex items-center gap-1.25 lg:gap-1.5">
					<span class="text-3.5 lg:text-4.5 text-firmennyy i-custom:money"></span>
					<span v-for="n in price.value">₽</span>
					<span v-for="n in 3 - price.value" class="text-#D2DDE3">₽</span>
				</p>
				<p class="flex gap-1.25 lg:gap-1.5" :class="{ 'items-center': time.open }">
					<span class="text-3.5 lg:text-4.5 text-firmennyy i-custom:timelapse"></span>
					<span class="[vertical-trim:Cap_height]" :class="{ 'text-#E15435': !time.open }">
						{{ time.open ? time.value : `закрыто \n ${time.value}` }}
					</span>
				</p>
			</div>
			<p v-if="freeDelivery" class="text-seryy text-3.25 -mt-0.875 max-lg:hidden">Бесплатная доставка</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	img: string
	title: string
	description: string
	rating: string
	countReviews: number
	price: {
		text: string
		value: number
	}
	time: {
		value: string,
		open: boolean
	}
	bestPrice: boolean
	freeDelivery: boolean
}>()
</script>