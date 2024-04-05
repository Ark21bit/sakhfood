<template>
	<RestaurantBannerDescription />
	<Actions class="mt-12"></Actions>
	<div class="flex flex-col gap-10 lg:gap-14 mt-12">
		<RestaurantProducts v-bind="item" v-for="item in products" />
	</div>
	<Reviews class="mt-9 lg:mt-16 max-w-190" />
</template>

<script setup lang="ts">
import type { Product } from '~/components/Restaurant/RestaurantProductsCard.vue';

definePageMeta({
	layout: 'sidebar'
})


const products: { title: string, products: Product[] }[] = [
	{
		title: 'Соусы и восточные добавки',
		products: [
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true,
				much: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
		]
	},
	{
		title: 'Мангал',
		products: [
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true,
				much: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
		]
	},
	{
		title: 'Хинкали и манты',
		products: [
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
				basket: true,
				much: true
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
					old: 1850
				},
				image: '/imgs/restaraunts/image5.png',
				weight: {
					new: 620,
					old: 320
				},
				tags: [
					'Двойная порция'
				],
			},
			{
				title: 'Шашлык из cвинoй шеи',
				price: {
					new: 1620,
				},
				weight: {
					new: 320
				}
			},
		]
	},
]
</script>