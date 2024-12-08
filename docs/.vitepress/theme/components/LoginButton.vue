<template>
	<button @click="handleLogin" class="login-button">登录</button>
</template>

<script>
	export default {
		methods: {
			handleLogin() {
				alert('登录功能未实现')
			}
		}
	}
</script>

<style scoped>
	.login-button {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.login-button:hover {
		background-color: #0056b3;
	}
</style>
