<template>
	<div class="relative flex flex-col gap-5 overflow-hidden">
		<h2 class="text-tekstovyy text-8.5 font-700">Бесплатная доставка еды 24 часа домой и в офис</h2>
		<p class="text-#455862 text-4.5 leading-1.45 [&>span]:(font-500 text-firmennyy)" :class="{ 'max-h-90': !isShow }">
			<span>Доставка еды</span> — это самый удобный способ попробовать блюда разных кухонь мира быстро и без хлопот, ведь SakhFood привозит заказы 24 часа 7 дней в неделю. Термосумка сохраняет тепло горячих блюд, поддерживает оптимальную температуру для прохладительных напитков. Вы получаете
			именно то, что
			заказывали, всё свежее, горячее и аппетитное. Где заказать готовую еду с бесплатной доставкой? Выбор очевиден! В меню SakhFood:<br>

			<br><span>Суши и роллы. Японская кухня</span> – одна из самых популярных на Сахалине. Соберите себе индивидуальный сет или закажите набор из нашего меню.
			<br><span>Пицца</span> — итальянскую кухню любят многие петербуржцы. Универсальный вариант: это блюдо подойдет и для обеденного перерыва в офис и для домашнего ужина вдвоем или в компании друзей.
			<br><span>Осетинские пироги</span> — горячие, с разными начинками и воздушным тестом с поджаристой корочкой.
			<br><span>Бургеры</span> — сытный стритфуд для любых случаев.
			<br><span>Салаты</span> — лёгкие и питательные для быстрого перекуса.
			<br><span>Закуски</span> — удобный формат для шумных компаний.
			<br><span>Десерты</span> и сладкие пироги — угощение на каждый день.
			<br><span>Соусы</span> — добавляют вкуса и выразительности каждому блюду.
			<br><span>Напитки</span> — натуральные соки, морсы, лимонады и не только.
		</p>
		<div v-if="!isShow" class="absolute bottom-0 flex items-end justify-center w-full h-66 bg-gradient-to-b from-transparent to-white">
			<Button @click="isShow = true" variant="outline">Показать полностью</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
const isShow = ref(false)
</script>