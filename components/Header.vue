<template>
	<div :style="{ height: `${height}px` }" :class="{ 'hidden': !isMounted }"></div>

	<header ref="header" class="grid-container shadow-header top-0 left-0 w-full z-50 bg-white" :class="{ 'fixed': isMounted }">
		<div class="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto_auto] items-center gap-1.5 lg:gap-y-4 lg:gap-x-8 py-4">
			<NuxtLink to="/">
				<Logo class="text-firmennyy hover:text-#61BF16 transition-color max-lg:hidden" />
				<img class="w-11 lg:w-60.5 lg:hidden" src="/imgs/logo-m.svg" alt="">
			</NuxtLink>
			<Button class="grow max-lg:col-start-2 max-lg:row-start-2" color="seryy">Найти ресторан или блюдо</Button>
			<Button>Укажите адрес доставки</Button>
			<Button class="max-lg:p-3" color="seryy" prefix-icon="i-custom:profile">
				<span class="max-lg:hidden">Войти</span>
			</Button>

			<div class="col-span-full h-px w-full bg-#EBF0F2 max-lg:hidden"></div>

			<Nav class="col-span-2 max-lg:hidden" />
			<button class="flex lg:hidden rounded-3 bg-#EBF0F2 text-seryy p-2.5">
				<span class="i-custom:hamburger-menu text-6"></span>
			</button>
			<Button class="lg:col-span-2 ml-auto max-lg:(p-3 bg-#ebf0f2 text-#718997) lg:w-80" prefix-icon="i-custom:basket">
				<span class="max-lg:hidden">В корзине 6 шт за 2680₽</span>
			</Button>
		</div>
	</header>
</template>

<script setup lang="ts">
const header = ref()

const { height } = useElementSize(header)
const isMounted = ref(false)

onMounted(() => {
	isMounted.value = true
})
</script>