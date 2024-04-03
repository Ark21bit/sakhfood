<template>
	<div class="flex justify-between gap-3 items-center">
		<Dropdown absolute title="Категории">
			<NuxtLink to="/">Категория 1</NuxtLink>
			<NuxtLink to="/">Категория 2</NuxtLink>
			<NuxtLink to="/">Категория 3</NuxtLink>
		</Dropdown>
		<Dropdown absolute title="Блюда">
			<NuxtLink to="/">Блюдо 1</NuxtLink>
			<NuxtLink to="/">Блюдо 2</NuxtLink>
			<NuxtLink to="/">Блюдо 3</NuxtLink>
		</Dropdown>
		<Dropdown absolute title="Кухня">
			<NuxtLink to="/">Кухня 1</NuxtLink>
			<NuxtLink to="/">Кухня 2</NuxtLink>
			<NuxtLink to="/">Кухня 3</NuxtLink>
		</Dropdown>
		<Dropdown absolute title="Заведения">
			<NuxtLink to="/">Заведение 1</NuxtLink>
			<NuxtLink to="/">Заведение 2</NuxtLink>
			<NuxtLink to="/">Заведение 3</NuxtLink>
		</Dropdown>
		<Dropdown absolute title="Дополнительно">
			<NuxtLink to="/">Дополнительно 1</NuxtLink>
			<NuxtLink to="/">Дополнительно 2</NuxtLink>
			<NuxtLink to="/">Дополнительно 3</NuxtLink>
		</Dropdown>
		<NuxtLink class="text-tekstovyy text-5 font-500 leading-0.8 -tracking-0.01em" to="/">Акции</NuxtLink>
	</div>
</template>

<script setup lang="ts">

</script>