<template>
	<div class="flex flex-col gap-5">
		<div class="bg-white rounded-6 p-4 pt-5">
			<div class="flex gap-2 justify-between items-end">
				<p class="flex items-center gap-2 text-tekstovyy text-6 font-700">
					<span class="i-custom:basket text-5.5"></span>
					Корзина
				</p>
				<button class="text-4 text-seryy">Очистить</button>
			</div>
			<div class="flex bg-#f5f8f9 rounded-3.5 overflow-hidden mt-7">
				<button class="p-4 grow text-4.5 font-700 rounded-3.5 bg-firmennyy text-white">Доставка 50 мин</button>
				<button class="p-4 grow text-4.5 rounded-3.5 bg-transparent text-seryy">Самовывоз 35 мин</button>
			</div>
			<div class="flex flex-wrap justify-between gap-3.5 text-3.5 font-500 text-tekstovyy mt-5 min-h-5">
				<p>Минимальный заказ</p>
				<p class="flex items-center gap-1.5" :class="{ 'text-firmennyy': progress === 100 }">3500 ₽ <span v-if="progress === 100" class="i-custom:checkmark text-5"></span></p>
				<div class="h-1.75 bg-#EBF0F2 overflow-hidden w-full rounded-full">
					<div class="h-full bg-firmennyy" :style="{ width: `${progress}%` }"></div>
				</div>
			</div>

			<div v-if="true" class="flex flex-col gap-3.5 items-center justify-center text-center py-8 border-b border-#ebf0f2">
				<img class="size-32.5" width="130" height="130" src="/imgs/empty-cart.png" alt="">
				<p class="text-firmennyy text-5 font-700">В вашей корзине <br> пока пусто</p>
				<p class="text-seryy text-4 leading-1.3">Бесплатная доставка от 3500 ₽ <br> Время доставки 47–75 мин</p>
			</div>

			<div v-else class="mt-2.5">
				<div v-for="n in 5"  class="flex gap-2.5 py-3 border-b border-#ebf0f2">
					<div class="size-17.5 rounded-2.5 overflow-hidden">
						<img v-if="false" class="size-full" src="" alt="">
						<DefaultImg v-else class="size-full" size="sm"></DefaultImg>
					</div>
					<div class="flex flex-col gap-1.5 justify-between grow">
						<div class="flex items-center grow">
							<p class="text-tekstovyy text-3.75">Соус Наршараб</p>
						</div>
						<div class="flex items-center justify-between gap-2 w-full">
							<p class="flex gap-2 items-end text-tekstovyy text-5 font-500 ">
								109 ₽
								<span class="text-seryy text-4 font-400">40 г</span>
							</p>
							<div class="flex justify-between bg-#eef7e7 rounded-2.5 overflow-hidden text-4.5 font-500 w-24.5 items-center text-tekstovyy">
								<div class="bg-firmennyy/20 text-firmennyy rounded-2.5 w-7.75 h-7 flex items-center justify-center text-7 font-400">-</div>
								2
								<div class="bg-firmennyy/20 text-firmennyy rounded-2.5 w-7.75 h-7 flex items-center justify-center text-7 font-400">+</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex gap-2 items-center justify-between mt-3.5 text-4 font-500 text-firmennyy">
				<p class="flex items-end gap-2.5">
					Доставка 0 ₽ 
					<span class="line-through text-3.5 text-seryy">350 ₽</span>
				</p>
				<span class="flex items-center justify-center size-5 bg-firmennyy/15 rounded-full aspect-square">i</span>
			</div>

			<Button v-if="true" class="mt-3.5 w-full">Заказать за 379 ₽</Button>
		</div>
		<div class="flex flex-col gap-4">
			<Button variant="outline">
				<template #prefix>
					<span class="i-custom:incoming-call text-4.5"></span>
				</template>
				Заказать обратный звонок
			</Button>
			<p class="text-seryy opacity-70 text-3.25 leading-1.2 text-center">Не хотите заполнять поля и оформлять заказ? Закажите обратный звонок и менеджер заведения перезвонит и сделает это за вас</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const progress = computed(() => Math.min(Math.round(200 / 1800 * 100), 100))
</script>