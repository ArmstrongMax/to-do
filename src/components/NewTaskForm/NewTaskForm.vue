<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({ text: String, error: String });
defineEmits(["inputChange"]);
</script>

<template>
	<a-input
		:class="error ? 'error' : ''"
		:value="props.text"
		@change="$emit('inputChange', $event)"
		placeholder="Введите текст задания..."
	/>
	<span v-if="error" class="error">{{ error }}</span>
</template>

<style scoped>
.error {
	border-color: red;
	color: red;
}
</style>
