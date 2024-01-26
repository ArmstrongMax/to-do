<script lang="ts" setup>
import { defineProps } from "vue";
import unchecked from "../../../public/unchecked.png";
import checkedIcon from "../../../public/checkedIcon.png";
const props = defineProps({ text: String, complited: Boolean });
</script>

<template>
	<li class="list-item">
		<div class="list-item-content">
			<img :src="complited ? checkedIcon : unchecked" style="width: 24px" />
			{{ props.text }}
		</div>
		<hr style="width: 100%"/>
	</li>
</template>

<style scoped>
.list-item {
	display: flex;
	flex-direction: column;
}
.list-item-content {
	display: flex;
	align-items: center;
	justify-content: start;
}
</style>
