<script lang="ts" setup>
import { NewTask } from "../../components/NewTask";
</script>

<template>
	<div class="header-container">
		<NewTask />
		<h1>To Do list</h1>
    <router-link to="/tasks">Tasks</router-link>
    <router-link to="/timer">Timer</router-link>
    <router-link to="/calendar">Calendar</router-link>
	</div>
</template>

<style scoped>
.header-container {
	height: 50px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
}
</style>
