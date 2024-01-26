<script lang="ts" setup>
import { NewTaskForm } from "../NewTaskForm";
import { AppModal } from "../AppModal";
import { ref } from "vue";
import { useAppStore } from "@/store";

const isModalOpen = ref(false);
const text = ref<string>("");
const error = ref<string>("");
const { dispatch } = useAppStore();

const handleChange = (value: string) => {
	text.value = value;
	error.value = "";
};
const handleAccept = () => {
	if (!text.value) error.value = "Обязательное поле";
	else {
		dispatch("tasks/createTask", { text: text.value });
		text.value = "";
		isModalOpen.value = false;
	}
};
</script>

<template>
	<a-button @click="isModalOpen = true">Создать задачу +</a-button>
	<AppModal
		:isOpen="isModalOpen"
		@onClose="isModalOpen = false"
		title="Создание новой задачи"
		acceptText="Создать"
		@onAccept="handleAccept"
	>
		<NewTaskForm :text="text" @inputChange="($event) => handleChange($event.target.value)" :error="error" />
	</AppModal>
</template>

<style scoped></style>
