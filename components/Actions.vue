<template>
	<div class="flex flex-col gap-5 lg:gap-7">
		<h2 class="text-tekstovyy text-6 lg:text-8.5 font-700">Акции и предложения</h2>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
			<div class="bg-#5248cb px-4.5 py-5 lg:p-6 rounded-4 lg:rounded-5 min-h-50 overflow-hidden relative">
				<div class="absolute inset-0 bg-cover bg-[url(/imgs/actions/rounds/purple-m.svg)] sm:bg-[url(/imgs/actions/rounds/purple.svg)]"></div>
				<p class="text-white text-5 lg:text-6 font-700 max-w-59">Новые рестораны японской кухни</p>
				<img class="max-w-none absolute w-44 -right-10 -bottom-15 lg:(-right-19 -bottom-20 w-68)" src="/imgs/actions/sushi.png" alt="">
			</div>
			<div class="bg-firmennyy px-4.5 py-5 lg:p-6 rounded-4 lg:rounded-5 min-h-50 overflow-hidden relative">
				<div class="absolute inset-0 bg-cover bg-[url(/imgs/actions/rounds/green-m.svg)] sm:bg-[url(/imgs/actions/rounds/green.svg)]"></div>
				<p class="text-white text-5 lg:text-6 font-700 max-w-59">Скидка на все хлебобулочные изделия после 20:00</p>
				<img class="max-w-none absolute -right-10 -bottom-6 w-36 lg:(-right-7 -bottom-9 w-54)" src="/imgs/actions/bread.png" alt="">
			</div>
			<div class="bg-#dc9037 px-4.5 py-5 lg:p-6 rounded-4 lg:rounded-5 min-h-50 overflow-hidden relative">
				<div class="absolute inset-0 bg-cover bg-[url(/imgs/actions/rounds/orange-m.svg)] sm:bg-[url(/imgs/actions/rounds/orange.svg)]"></div>
				<p class="text-white text-5 lg:text-6 font-700 max-w-59">Рестораны с едой за баллы</p>
				<img class="max-w-none absolute -right-15 -bottom-10 w-57 lg:(-right-41 -bottom-25 w-105)" src="/imgs/actions/pizza.png" alt="">
			</div>
			<div class="bg-#b9463f px-4.5 py-5 lg:p-6 rounded-4 lg:rounded-5 min-h-50 overflow-hidden relative">
				<div class="absolute inset-0 bg-cover bg-[url(/imgs/actions/rounds/red-m.svg)] sm:bg-[url(/imgs/actions/rounds/red.svg)]"></div>
				<p class="text-white text-5 lg:text-6 font-700 max-w-59">Подборка кафе с лучшими чайными картами</p>
				<img class="max-w-none absolute -right-17 -bottom-13 w-42 lg:(-right-9 -bottom-16 w-57)" src="/imgs/actions/tea.png" alt="">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>