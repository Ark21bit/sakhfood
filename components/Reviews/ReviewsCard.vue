<template>
	<div class="p-4 lg:p-5 pb-2 lg:pb-3 rounded-4 lg:rounded-5 bg-white">
		<p class="text-tekstovyy text-4.25 font-700">{{ name }}</p>
		
		<Rating :rating class="mt-2.5" />

		<div v-if="imgs?.length ?? 0 > 0" class="flex gap-2 mt-3">
			<img v-for="img in imgs" :src="img" class="size-18 rounded-3 object-cover object-center" alt="">
		</div>

		<p class="text-#455862 text-3.75 leading-1.2 mt-3">{{ comments }}</p>

		<div v-if="dishReviews?.length ?? 0 > 0" class="flex flex-col gap-1 pt-3.5 border-t border-#D2DDE3/50 mt-3.5">
			<Button v-if="!isShow" @click="isShow = true" suffix-icon="i-custom:arrow-down" size="xs" color="green-light">Отзывы к блюдам {{ dishReviews?.length }}</Button>
			<template v-if="isShow">
				<div v-for="item in dishReviews" class="flex gap-2 justify-between items-center py-4 px-4.5 rounded-2.5 bg-#e7f2db/50">
					<div>
						<p class="text-tekstovyy text-4 font-700">{{ item.name }}</p>
						<Rating :rating="item.rating" class="mt-2" />
						<p class="text-#718997 text-3.5 leading-1.2 font-500 mt-3">
							Комментарий<span class="font-700">:</span> 
							<span class="font-400">{{ item.comment }}</span>
						</p>
					</div>
					<span class="i-custom:arrow-right text-4.5 text-firmennyy"></span>
				</div>
			</template>
		</div>

		<div class="mt-3 py-2 flex items-center border-t border-#D2DDE3/50 gap-3 text-3.25 leading-1.2">
			<p class="mr-auto text-seryy">{{ format(date, 'D MMMM, hh:mm') }}</p>
			<div class="flex items-center gap-1 text-tekstovyy font-500">
				<span class="text-5.25 text-firmennyy i-custom:like"></span>
				{{ likes }}
			</div>
			<div class="flex items-center gap-1 text-tekstovyy font-500">
				<span class="text-5.25 text-firmennyy i-custom:unlike"></span>
				{{ dislikes }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { format } from '@formkit/tempo'
const isShow = ref(false)

defineProps<{
	name: string,
	rating: number,
	imgs?: string[],
	date: Date,
	comments: string,
	likes: number,
	dislikes: number,
	dishReviews?: { name: string, rating: number, comment: string }[]
}>()
</script>