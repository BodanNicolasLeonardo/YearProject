<template>
	<div class="login-container">
		<div class="login-content">
			<div class="login-box">
				<h1>Reset Password</h1>
				<form @submit.prevent>
					<input type="email" placeholder="Email address" class="input" />
					<router-link to="/" class="btn">Reset Password</router-link>
				</form>

				<div class="links">
					<p>Remember your password? <router-link to="/">Login</router-link></p>
				</div>

				<div class="divider">
					<span>or</span>
				</div>

				<router-link to="/google" class="google-btn">
					<img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
					Continue with Google
				</router-link>
			</div>
		</div>

		<footer>
			<a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
		</footer>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
	name: 'ResetPassword',
	components: {
		RouterLink
	}
}
</script>

<style scoped>
.login-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: Arial, sans-serif;
	color: #000;
	background-color: white;
}

.login-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.login-box {
	text-align: center;
	padding: 2rem;
	border: 1px solid #000000;
	border-radius: 12px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.1);
	width: 320px;
	background: #fff;
	margin: 0 auto;
}

h1 {
	margin-bottom: 1.5rem;
}

.input {
	width: 100%;
	padding: 0.6rem;
	margin-bottom: 1rem;
	border: 1px solid #ccc;
	border-radius: 8px;
}

.btn {
	width: 100%;
	background-color: #0d3b3b;
	color: white;
	padding: 0.6rem;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	text-decoration: none;
	display: inline-block;
	text-align: center;
}

.btn:hover {
	background-color: #0b2e2e;
}

.links {
	font-size: 0.9rem;
	margin: 1rem 0;
	text-align: center;
}

.links a {
	color: #0b2e2e;
	text-decoration: none;
	font-weight: 600;
}

.divider {
	display: flex;
	align-items: center;
	justify-content: center;
	color: #666;
	font-size: 0.9rem;
	margin: 1rem 0;
}

.google-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 0.6rem;
	background: white;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
}

.google-btn img {
	width: 20px;
	height: 20px;
}

footer {
	margin-top: 1.5rem;
	font-size: 0.85rem;
	color: #555;
	text-align: center;
}

footer a {
	color: #000000;
	text-decoration: none;
}
</style>

<style scoped>

</style>