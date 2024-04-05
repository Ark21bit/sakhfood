<template>
	<div class="flex flex-col gap-5 lg:gap-7">
		<h2 class="flex gap-1.5 lg:gap-2.5 items-center text-6 lg:text-8.5 text-tekstovyy font-700">
			<span class="i-custom:message text-firmennyy"></span>
			Отзывы о заведении
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-y-5 gap-x-4">
			<div class="flex flex-col gap-3.5">
				<div v-for="rating in ratings" class="flex gap-2.5 items-center font-500 text-3.5 text-tekstovyy">
					<img src="/imgs/rating-ellipse.svg" class="size-4.5 shadow-[0_3px_20px_0] shadow-black/8 rounded-full">
					<div class="flex gap-0.75">
						<Rating :rating="rating.rating"></Rating>
					</div>
					<p class="ml-1">{{ rating.precantage }}% отзывов</p>
				</div>
			</div>
			<div class="max-lg:row-start-1">
				<Button v-if="true" class="w-full lg:w-52">Написать отзыв</Button>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:gap-2.5 max-lg:mt-4">
			<div v-for="review in reviews" class="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-y-1.5 gap-x-4 items-start first:before:content-none max-lg:before:(content-empty w-12 h-0.75 mx-auto bg-firmennyy/40 rounded-full mb-2.5)">
				<ReviewsCard v-bind="review.value" />
				<div v-if="review?.answer" class="flex flex-col gap-3 lg:gap-5 p-4 lg:p-5 bg-firmennyy/10 rounded-4 lg:rounded-5">
					<p class="text-tekstovyy text-4.25 font-700">Ответ заведения <br> Кинза-за</p>
					<p class="text-#455862 text-3.75 leading-1.2">{{ review.answer }}</p>
				</div>
			</div>
			<Button class="mt-4" variant="outline">Показать ещё отзывы</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
const ratings = [
	{ rating: 5, precantage: 49 },
	{ rating: 4, precantage: 9 },
	{ rating: 3, precantage: 11 },
	{ rating: 2, precantage: 6 },
	{ rating: 1, precantage: 25 },
]

const reviews = [
	{
		value: {
			name: 'Анатолий Непотребов',
			rating: 5,
			date: new Date(),
			comments: 'Хорошее заведение. Привозят всё как и обещают. Правда в первый раз привезли не ту пиццу(но тоже вкусная). Позвонили в доставку. Они ошиблись, но предложили переделать или оставить эту. Всё же решили оставить, а то долго ждать 👌',
			likes: 3,
			dislikes: 1,
		},
		answer: 'Виктория, благодарим за заказ и отзыв! Спасибо за понимание 💖'
	},
	{
		value: {
			name: 'Евгений',
			rating: 4,
			imgs: [
				'/imgs/restaraunts/reviews/image1.png',
				'/imgs/restaraunts/reviews/image1.png',
				'/imgs/restaraunts/reviews/image1.png',
			],
			date: new Date(),
			comments: 'В целом все хорошо. Есть конечно моменты. Но ведь в мелочах всё и кроется!',
			likes: 3,
			dislikes: 1,
			dishReviews: [
				{
					name: 'Цыпленок табака',
					rating: 4,
					comment: 'Просто вкусно'
				},
				{
					name: 'Картофель отварной с маслом и зеленью',
					rating: 4,
					comment: 'Немного не солёное'
				},
				{
					name: 'Огурцы по-восточному',
					rating: 4,
					comment: 'Сочные в меру горькие'
				},
			]
		},
		answer: 'Евгений, благодарим за заказ. Мы готовим всем индивидуально. Крышки немного деформируются от высокой температуры приготовленного блюда.'
	},
	{
		value: {
			name: 'Евгений',
			rating: 4,
			date: new Date(),
			comments: 'В целом все хорошо. Есть конечно моменты. Но ведь в мелочах всё и кроется!',
			likes: 3,
			dislikes: 1,
			dishReviews: [
				{
					name: 'Цыпленок табака',
					rating: 4,
					comment: 'Просто вкусно'
				},
				{
					name: 'Картофель отварной с маслом и зеленью',
					rating: 4,
					comment: 'Немного не солёное'
				},
				{
					name: 'Огурцы по-восточному',
					rating: 4,
					comment: 'Сочные в меру горькие'
				},
				{
					name: 'Огурцы по-восточному',
					rating: 4,
					comment: 'Сочные в меру горькие'
				},
			]
		},
		answer: 'Евгений, благодарим за заказ. Мы готовим всем индивидуально. Крышки немного деформируются от высокой температуры приготовленного блюда.'
	},
]
</script>