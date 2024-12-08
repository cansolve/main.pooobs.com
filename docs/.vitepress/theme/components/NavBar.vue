<template>
	<nav>
		<ul>
			<li v-for="item in nav" :key="item.text">
				<a v-if="item.link" :href="item.link">{{ item.text }}</a>
			</li>
			<slot name="custom-nav"></slot>
			<!-- 插槽位置 -->
		</ul>
	</nav>
</template>

<script>
	import { resolveComponent } from 'vue'

	export default {
		props: {
			nav: Array
		}
	}
</script>
