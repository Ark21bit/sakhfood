<template>
	<footer class="grid-container bg-#1D3238 rounded-t-10 pt-6 lg:pt-12">
		<div>
			<div class="flex flex-col gap-6 items-center lg:flex-row justify-between">
				<img width="296" height="43" class="w-51.5 h-7.5 lg:(w-74 h-10.75)" src="/imgs/logo.svg" alt="">
				<div>
					<p class="text-white font-700 text-7 lg:text-10 max-lg:text-center">+7 800 888-50-40</p>
					<p class="text-firmennyy font-500 text-4 lg:text-5 text-center lg:text-right">Россия, бесплатно</p>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row gap-y-8 gap-x-15 mt-7 lg:mt-6 flex">
				<div class="flex flex-col gap-3 lg:gap-6 flex-1">
					<h2 class="text-white font-700 text-4.5 lg:text-5.5">О компании</h2>
					<div class="h-1px bg-white/10"></div>
					<ul class="columns-2 lg:columns-1 space-y-2 gap-5">
						<li v-for="item in about">
							<NuxtLink to="/" class="text-4 leading-1.2 text-white/60 ">{{ item }}</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="flex flex-col gap-3 lg:gap-6 flex-3">
					<h2 class="text-white font-700 text-4.5 lg:text-5.5 ">Блюда и кухни</h2>
					<div class="h-1px bg-white/10"></div>
					<ul class="columns-2 md:columns-3 lg:columns-4 space-y-2 gap-5">
						<li v-for="item in dishes">
							<NuxtLink to="/" class="text-4 leading-1.2 text-white/60 ">{{ item }}</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row lg:items-end gap-y-5 gap-x-10 justify-between mt-10.5 pt-5 pb-6 lg:py-4.5 border-t border-white/10 flex-wrap">
				<p class="text-white text-4 lg:text-4.5 font-500 max-lg:text-center">© SakhFood | 2022—2024</p>
				<div class="flex justify-center gap-3 lg:gap-10">
					<NuxtLink to="/" class="text-3 lg:text-3.25 underline text-seryy text-center">Пользовательское соглашение</NuxtLink>
					<NuxtLink to="/" class="text-3 lg:text-3.25 underline text-seryy text-center">Политика конфиденциальности</NuxtLink>
				</div>
				<div class="flex flex-col lg:flex-row items-center gap-y-5 gap-x-7 max-lg:order-first">
					<p class="text-seryy text-4 lg:text-4.5 font-500">Принимаем к оплате</p>
					<div class="flex items-center gap-4">
						<img class="shrink-0 grow-0" width="63" height="19" src="/imgs/payments/mir.png" alt="">
						<img class="shrink-0 grow-0" width="32" height="32" src="/imgs/payments/sbp.png" alt="">
						<img class="shrink-0 grow-0" width="59" height="19" src="/imgs/payments/visa.png" alt="">
						<img class="shrink-0 grow-0" width="39" height="24" src="/imgs/payments/mastercard.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const about = [
	"Пользовательское соглашение",
	"Правила рекомендаций",
	"Контакты",
	"Доставка",
	"Вопросы и ответы",
	"Стать партнёром",
	"Стать курьером",
	"Еда для бизнеса",
]

const dishes = [
	"Выпечка",
	"Блины",
	"Бургеры",
	"Чебуреки",
	"Кофе",
	"Десерты",
	"Фастфуд",
	"Грузинская кухня",
	"Хот-дог",
	"Икра горбуши",
	"Итальянская кухня",
	"Каша",
	"Манты",
	"Мороженое",
	"Обед",
	"Пироги",
	"Пицца",
	"Поке",
	"Пончики",
	"Рамен",
	"Русская кухня",
	"Салаты",
	"Сэндвичи",
	"Морепродукты",
	"Шашлык",
	"Шаурма",
	"Суп",
	"Стейки",
	"Роллы",
	"Сырники",
	"Торты",
	"Вегетарианские блюда",
	"Вок",
	"Завтраки",
	"Здоровая еда",
]
</script>