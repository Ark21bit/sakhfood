<template>
	<div class="bg-white p-1.5 lg:p-3 ring ring-inset ring-#D2DDE3/30 rounded-4 lg:rounded-5 shadow[0_4px_14px_0] shadow-black/6">
		<div class="w-full aspect-[150/133] lg:aspect-[61/54] rounded-2.5 lg:rounded-3 overflow-hidden relative">
			<img v-if="image" class="w-full h-full object-cover object-center" :src="image" alt="">
			<DefaultImg v-else class="w-full h-full" />
			<div class="flex flex-wrap gap-1 absolute inset-1.25 lg:inset-1.5 items-start">
				<Tag v-for="tag in tags" size="sm">{{ tag }}</Tag>
			</div>
			<div v-if="basket" class="absolute inset-0 bg-firmennyy/60 flex flex-col gap-2.5 items-center justify-center">
				<div class="flex items-center justify-center rounded-full p-3 bg-white/20 backdrop-blur-40 aspect-square text-white">
					<span v-if="much" class="text-6.5 leading-[1.125rem]">3</span>
					<span v-else class="text-5.5 i-custom:checkmark block"></span>
				</div>
				<span class="text-center text-white leading-1 text-3.5 font-700">Добавлено <br> в корзину</span>
			</div>
		</div>
		<div class="mt-2.5 lg:mt-4 flex flex-col gap-2 lg:gap-3 text-tekstovyy  ">
			<p class="text-3.75 lg:text-4.25 min-h-9.25">{{ title }}</p>
			<p class="text-seryy text-3.25 lg:text-3.75">
				{{ weight.new }} гр
				<span v-if="weight?.old" class="text-2.75 lg:text-3 line-through">{{ weight.old }} гр</span>
			</p>
			<p class="text-5 lg:text-5.5" :class="price?.old ? 'text-firmennyy font-700' : 'font-500'">
				{{ price.new }} ₽
				<span v-if="price?.old" class="text-seryy line-through text-3.5 lg:text-4.25 font-500">{{ price.old }} ₽</span>
			</p>
		</div>
		<Button v-if="true" class="mt-3 w-full" color="green-light" size="sm">в корзину</Button>
	</div>
</template>

<script setup lang="ts">
export interface Product {
	title: string,
	price: {
		new: number,
		old?: number,
	},
	image?: string,
	weight: {
		new: number,
		old?: number,
	},
	tags?: string[],
	basket?: boolean,
	much?: boolean
}
defineProps<Product>()
</script>