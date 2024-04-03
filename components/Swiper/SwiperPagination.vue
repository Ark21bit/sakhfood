<template>
	<div class="swiper-pagination flex gap-1 lg:gap-1.25"></div>
</template>
<style>
.swiper-pagination-bullet {
	--at-apply: 'bg-black/20 w-5.5 lg:w-7.5 h-1 lg:h-1.25 rounded-full transition-width duration-600 flex overflow-hidden';
}

.swiper-pagination-bullet-active {
	--at-apply: 'w-25 lg:w-35 after:(animate-[3000ms_linear_600ms_swiper-pagination-animation] bg-firmennyy content-empty)'
}

.swiper-pagination-clickable .swiper-pagination-bullet {
	--at-apply: 'cursor-pointer';
}


@keyframes swiper-pagination-animation {
	0% {
		width: 0;
	}

	100% {
		width: 100%;
	}
}
</style>