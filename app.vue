<template>
	<main class="grid-container grow auto-rows-min">
		<div class="col-span-full bg-#EEF5F0/70 rounded-5 lg:rounded-10 lg:mx-8 px-3 lg:px-10 py-4.5 lg:pt-11 lg:pb-10">
			<div class="container mx-auto flex flex-col gap-4 lg:gap-8">
				<h2 class="font-700 text-6 lg:text-8.5 leading-1.1 -tracking-[.02em] text-tekstovyy">Заведения в Южно-Сахалинске</h2>
				<div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))] gap-1.5 lg:gap-4">
					<RestaurantCard v-bind="restaraunt" v-for="restaraunt in restaraunts" />
				</div>
				<NuxtLink to="/" class="py-3.5 lg:py-3.75 px-7 ring-1.5 ring-inset ring-firmennyy/50 text-firmennyy text-4 lg:text-4.5 font-500 leading-0.8 -tracking-[.01em] w-full lg:w-fit lg:mx-auto rounded-3 lg:rounded-3.5 text-center">Все заведения в Южно-Сахалинске</NuxtLink>
			</div>
		</div>
	</main>
	<Footer class="mt-22.5"/>
</template>
<script lang="ts" setup>
const restaraunts = [
	{
		img: '/imgs/restaraunts/image1.png',
		title: 'Китайское кафе Bao-bao',
		price: {
			text: '50 мин — от 350 ₽',
			value: 1
		},
		rating: '4.9',
		countReviews: 853,
		description: 'Китайская кухня',
		time: {
			value: '12:00—24:00',
			open: true,
		},
		bestPrice: true,
		freeDelivery: false
	},
	{
		img: '/imgs/restaraunts/image3.png',
		title: 'Вкусно и точка',
		price: {
			text: '35 мин — от 250 ₽',
			value: 1
		},
		rating: '4.87',
		countReviews: 1602,
		description: 'Фастфуд',
		time: {
			value: '8:00—19:00',
			open: true,
		},
		bestPrice: false,
		freeDelivery: false
	},
	{
		img: '/imgs/restaraunts/image2.png',
		title: 'TomYumBar',
		price: {
			text: '60 мин — от 2000 ₽',
			value: 3
		},
		rating: '4.87',
		countReviews: 1431,
		description: 'Пан-зиатская кухня',
		time: {
			value: '10:00—19:00',
			open: true,
		},
		bestPrice: false,
		freeDelivery: true
	},
	{
		img: '/imgs/restaraunts/image2.png',
		title: 'TomYumBar',
		price: {
			text: '60 мин — от 2000 ₽',
			value: 3
		},
		rating: '4.87',
		countReviews: 1431,
		description: 'Пан-зиатская кухня',
		time: {
			value: '12:00—24:00',
			open: true,
		},
		bestPrice: false,
		freeDelivery: true
	},
	{
		img: '/imgs/restaraunts/image1.png',
		title: 'Китайское кафе Bao-bao',
		price: {
			text: '50 мин — от 350 ₽',
			value: 1
		},
		rating: '4.9',
		countReviews: 853,
		description: 'Китайская кухня',
		time: {
			value: '8:00—19:00',
			open: true,
		},
		bestPrice: true,
		freeDelivery: false
	},
	{
		img: '/imgs/restaraunts/image3.png',
		title: 'Вкусно и точка',
		price: {
			text: '35 мин — от 250 ₽',
			value: 1
		},
		rating: '4.87',
		countReviews: 1602,
		description: 'Фастфуд',
		time: {
			value: '8:00—19:00',
			open: false,
		},
		bestPrice: false,
		freeDelivery: false
	}
]
</script>
