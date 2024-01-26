<script lang="ts" setup>
import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
</script>

<template>
	<div class="app-container">
		<AppHeader />
		<div class="content-outer-container">
			<div class="content-inner-container">
				<router-view />
			</div>
		</div>
		<AppFooter />
	</div>
</template>

<style scoped>
.app-container {
	background-color: rgb(233, 231, 231);
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: max-content auto max-content;
}
.content-outer-container {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}
.content-inner-container {
	overflow: auto;
	border: 1px solid gray;
	width: 90%;
	height: 90%;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	padding: 20px;
}
</style>
