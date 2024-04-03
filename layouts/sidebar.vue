<template>
	<Header></Header>
	<main class="grid-container grow auto-rows-min [--width-conten:1600px] mt-8">
		<div class="grid grid-cols-[auto_1fr_auto] gap-4">
			<div class="flex flex-col gap-6 w-52">
				<Button class="w-full" color="white" size="sm">
					<template #prefix>
						<span class="i-custom:full-arrow rotate-180"></span>
					</template>
					Все рестораны
				</Button>
				<div class="flex flex-col">
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Акции</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-white text-4.25 font-700 leading-1.1 -tracking-0.01em bg-firmennyy">Соусы и восточные добавки</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Мангал</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Хинкали и манты</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Салаты</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Закуски</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Супы</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Горячие блюда</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Гарниры</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Выпечка</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Десерты</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Напитки</NuxtLink>
					<NuxtLink to="/" class="px-3.75 py-2.5 rounded-3.5 text-#718997 text-4.25 font-700 leading-1.1 -tracking-0.01em bg-transparent">Отзывы</NuxtLink>

				</div>
			</div>
			<div>
				<slot />
			</div>
			<div class="w-80"></div>
		</div>
	</main>
	<Footer class="mt-10 lg:mt-22.5" />
</template>

<script setup lang="ts">
useHead({
	bodyAttrs: { class: 'bg-#F7F9F2' }
})
</script>