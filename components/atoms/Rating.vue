<template>
	<div class="flex gap-0.75">
		<span v-for="n in rating" class="i-custom:star" :class="[colorClass, size]"></span>
		<span v-for="n in count - rating" class="i-custom:star-outline" :class="[colorClass, size]"></span>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	rating: { type: Number, default: 3 },
	count: { type: Number, default: 5 },
	size: { type: String, default: "text-4.5" },
	colorClass: { type: String, default: "text-firmennyy" }
})
</script>