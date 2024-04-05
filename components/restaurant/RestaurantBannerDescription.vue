<template>
	<div class="flex p-2.5 gap-4 justify-between rounded-8 overflow-hidden relative min-h-82">
		<div class="absolute inset-0 ">
			<img class="w-full h-full object-cover object-center" src="/imgs/restaraunts/image4.png" alt="">
		</div>

		<div class="flex flex-col gap-2 ml-2.5 my-2.5">
			<div class="flex gap-2 flex-wrap">
				<Tag>Лучшая цена</Tag>
			</div>

			<div class="flex flex-col gap-0.5 mt-auto items-start">
				<div class="flex items-center gap-3 p-5 bg-black/35 backdrop-blur-32 rounded-4 text-white text-8.5 font-500 leading-0.8 ">
					Кинза-за
					<span class="flex items-center justify-center size-7 rounded-full text-5 bg-white/30">i</span>
				</div>

				<div class="flex gap-0.5">
					<!-- <div class="flex items-center gap-3 p-3 pr-4.5 bg-black/35 backdrop-blur-32 rounded-4 text-white text-5.5 font-500 leading-0.8 ">
						<span class="i-custom:supply text-8"></span>
						<div class="flex flex-col">
							45—70
							<span class="text-4 font-400 opacity-80">Минут</span>
						</div>
					</div> -->
					<div class="flex items-center gap-3 p-3 pr-4.5 bg-black/35 backdrop-blur-32 rounded-4 text-white text-5.5 font-500 leading-0.8 ">
						<span class="i-custom:star text-8"></span>
						<div class="flex flex-col">
							4.8
							<span class="text-4 font-400 opacity-80">Отлично</span>
						</div>

						<div class="h-full w-px bg-white/20"></div>

						<div class="flex flex-col">
							753
							<span class="text-4 font-400 opacity-80">Отзыва</span>
						</div>
					</div>

					<div class="flex p-4 bg-black/35 backdrop-blur-32 rounded-4 text-white">
						<span class="i-custom:heart-outline text-7"></span>
					</div>
				</div>

				<div class="flex gap-0.5 flex-wrap">
					<div class="px-3 py-2.25 bg-black/35 backdrop-blur-32 rounded-2.5 text-white text-4 font-500 leading-0.8 ">Работает сегодня 10:00—24:00</div>
					<div class="px-3 py-2.25 bg-black/35 backdrop-blur-32 rounded-2.5 text-white text-4 font-500 leading-0.8 ">Восточная кухня</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-2 p-5 backdrop-blur-32 bg-black/50 rounded-4 text-white leading-1.2 text-3.5 max-w-110">
			<p class="text-4 font-500">«Кинза-за» — ресторан нескучной восточной кухни с колоритными блюдами, вином и авторскими коктейлями. «Кинза-за» — это место, где можно отвлечься от дел, душевно пообщаться, вкусно и много поесть, повеселиться и послушать музыку.</p>
			<div class="bg-white/20 h-px"></div>
			<p>Восточная / Грузинская / Шашлык / Выпечка / ₽₽</p>
			<div class="bg-white/20 h-px"></div>
			<p>{{ `Работаем до с 11:00 до 22:25 \n Екатеринбург, Родонитовая улица, 19` }}</p>
			<p class="text-3 opacity-60 mt-auto">Исполнитель (продавец): общество с ограниченной ответственностью "КИНЗА", 620089, Екатеринбург, ул Родонитовая, д 19, пом 32, ИНН 6679109094, рег. номер 1176658066122</p>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>