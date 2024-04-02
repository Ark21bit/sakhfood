<template>
	<Catalog title="Выберите категорию" class="mt-10 lg:mt-18" :link="{ to: '/', text: 'Все категории еды' }" :items="catalog" />
	<Catalog title="Каталог блюд" class="mt-11 lg:mt-24" :link="{ to: '/', text: 'Все вкуснейшие блюда' }" :items="catalog" />
	<Catalog title="Кухня" class="mt-11 lg:mt-24" :link="{ to: '/', text: 'Все кухни мира' }" :items="catalog" />
	<Restaurant class="mt-11 lg:mt-24" :restaraunts />
	<MainEndText class="mt-11 lg:mt-24 max-lg:hidden" />
</template>

<script setup lang="ts">
const catalog = [
	{ img: '/imgs/catalog/image1.png', title: 'Суши, роллы' },
	{ img: '/imgs/catalog/image2.png', title: 'Пицца' },
	{ img: '/imgs/catalog/image3.png', title: 'Лапша, воки' },
	{ img: '/imgs/catalog/image4.png', title: 'Бургеры' },
	{ img: '/imgs/catalog/image5.png', title: 'Рамен' },
	{ img: '/imgs/catalog/image6.png', title: 'Пельмени' },
	{ img: '/imgs/catalog/image5.png', title: 'Пельмени' },
	{ img: '/imgs/catalog/image6.png', title: 'Бургеры' },
	{ img: '/imgs/catalog/image4.png', title: 'Рамен' },
	{ img: '/imgs/catalog/image3.png', title: 'Суши, роллы' },
	{ img: '/imgs/catalog/image2.png', title: 'Лапша, воки' },
	{ img: '/imgs/catalog/image1.png', title: 'Пицца' },
]

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