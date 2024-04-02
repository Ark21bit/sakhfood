<template>
	<Catalog title="Выберите категорию" class="mt-10 lg:mt-18" :link="{ to: '/', text: 'Все категории еды' }" :items="catalog" />
	<Catalog title="Каталог блюд" class="mt-11 lg:mt-24" :link="{ to: '/', text: 'Все вкуснейшие блюда' }" :items="catalog" />
	<Catalog title="Кухня" class="mt-11 lg:mt-24" :link="{ to: '/', text: 'Все кухни мира' }" :items="catalog" />
	<Restaurant class="mt-11 lg:mt-24" :restaraunts />
	<Actions class="mt-11 lg:mt-24" />

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-11 lg:mt-24">
		<div class="relative flex bg-#F4F8F5 items-center justify-between rounded-5 lg:rounded-10 px-5 lg:px-10 py-5.5 lg:py-8 gap-4 overflow-hidden">
			<div class="flex flex-col gap-4 lg:gap-5 shrink-0">
				<h2 class="text-tekstovyy text-6 lg:text-7 font-700 leading-1.1 -tracking-0.02em max-w-73">Присоединяйте свой ресторан</h2>
				<p class="text-seryy text-4.5 leading-1.2 -tracking-0.02em max-lg:max-w-43 max-w-73">Привлекайте новых посетителей и расширяйте зону продажи</p>
				<Button class="w-fit">Подключить</Button>
			</div>
			<img class="mix-blend-darken h-50 lg:h-47 max-lg:(absolute translate-x-1/3 right-0)" src="/imgs/join-your-restaurant1.png" alt="">
		</div>
		<div class="relative flex bg-#F4F8F5 items-center justify-between rounded-5 lg:rounded-10 px-5 lg:px-10 py-5.5 lg:py-8 gap-4 overflow-hidden">
			<div class="flex flex-col gap-4 lg:gap-5 shrink-0">
				<h2 class="text-tekstovyy text-6 lg:text-7 font-700 leading-1.1 -tracking-0.02em max-w-73">Займёмся доставкой ваших заказов</h2>
				<p class="text-seryy text-4.5 leading-1.2 -tracking-0.02em max-lg:max-w-43 max-w-73">Предоставим курьеров и эффективную систему доставки</p>
				<Button class="w-fit">Оставить заявку</Button>
			</div>
			<img class="mix-blend-darken h-43 lg:h-47  max-lg:(absolute translate-x-1/3 right-0)" src="/imgs/join-your-restaurant2.png" alt="">
		</div>

		<div class="relative flex flex-col sm:flex-row bg-#F4F8F5 lg:items-center justify-between rounded-5 lg:rounded-10 px-5 lg:px-10 py-5.5 lg:py-8 gap-4 col-span-full">
			<div class="flex flex-col gap-4 lg:gap-5">
				<h2 class="text-tekstovyy text-6 lg:text-7 font-700 leading-1.1 -tracking-0.02em max-w-92">Проще чем забронировать столик в ресторане</h2>
				<p class="text-seryy text-4.5 leading-1.2 -tracking-0.02em max-w-120">Еда уже почти у вас дома! Скачайте приложение и сделайте заказ в любимом ресторане прямо сейчас</p>
				<Button class="w-fit">
					Установить приложение
					<template #suffix>
						<span class="i-custom:full-arrow opacity-60 text-3.5"></span>
					</template>
				</Button>
			</div>
			<div class="flex max-sm:order-first sm:hidden lg:flex items-end h-full lg:absolute top-0 left-45% border-b border-black/10 lg:border-none w-full lg:w-auto pt-5 lg:pt-0">
				<img class="lg:h-115% mx-auto" src="/imgs/iPhone_11_Pro_Mockup.png" alt="">
			</div>
			<div class="flex items-center gap-2.5 lg:gap-7.5 shrink-0">
				<div class="flex flex-col gap-2">
					<NuxtLink to="/"><img width="135" height="40" src="/imgs/app-store.svg" /></NuxtLink>
					<NuxtLink to="/"><img width="135" height="40" src="/imgs/google-play.svg" /></NuxtLink>
				</div>
				<img width="123" height="123" class="size-21.5 lg:size-30.75" src="/imgs/qr-code.svg" />
			</div>
		</div>
	</div>

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