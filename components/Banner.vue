<template>
	<Swiper class="w-full rounded-5 lg:rounded-10" v-bind="(options as any)">
		<SwiperPagination class="absolute bottom-6 left-6 lg:(bottom-8 left-11) z-1" />
		<SwiperSlide v-for="i in 5" class="flex flex-col gap-8 relative overflow-hidden p-6 pb-10 lg:p-11 lg:pb-11 min-h-60 lg:min-h-82.5 text-tekstovyy">
			<img class="absolute top-0 left-0 w-full h-full object-cover -z-1" src="/imgs/banner/image1.png" alt="">
			<h2 class="text-8.5 lg:text-16 font-700 leading-1 -tracking-0.04em">{{ `Доставка еды\n на Сахалине` }}</h2>
			<p class="max-w-40 lg:max-w-100 text-4.5 lg:text-7 leading-1.2 -tracking-0.04em">Надежный агрегатор доставки еды в Южно-Сахалинске</p>
		</SwiperSlide>
	</Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
const options: SwiperOptions = {
	modules: [Pagination, Autoplay],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
	speed: 600,
	rewind: true
}
</script>