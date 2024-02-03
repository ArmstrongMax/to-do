<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { AppModal } from "../AppModal";
import { NewTaskForm } from "../NewTaskForm";
import unchecked from "../../../public/unchecked.png";
import checked from "../../../public/checked.png";
import pen from "../../../public/pen.png";
import trash from "../../../public/trash.png";
import { useAppStore } from "@/store";

export type Props = { text: string; id: string; complited: boolean };

const props = defineProps<Props>();
const isDeletePromptOpen = ref(false);
const isEditOpen = ref(false);
const text = ref<string>(props.text);
const error = ref<string>("");
const { dispatch } = useAppStore();

const handleDelete = () => {
	dispatch("tasks/deleteTask", { id: props.id });
	isDeletePromptOpen.value = false;
};

const handleEdit = () => {
	if (!text.value) error.value = "Обязательное поле";
	else {
		dispatch("tasks/editTask", { text: text.value, id: props.id });
		isEditOpen.value = false;
	}
};

const handleChange = (value: string) => {
	text.value = value;
	error.value = "";
};
</script>

<template>
	<li class="list-item">
		<div class="list-item-content">
			<div class="text-container">
				<img :src="complited ? checked : unchecked" style="width: 24px" />
				{{ props.text }}
			</div>
			<div class="actions-buttons-container">
				<a-button @click="isEditOpen = true"><img :src="pen" style="width: 24px" /></a-button>
				<a-button @click="isDeletePromptOpen = true"><img :src="trash" style="width: 24px" /></a-button>
			</div>
		</div>
		<hr style="width: 100%" />
	</li>
	<AppModal
		:isOpen="isDeletePromptOpen"
		@onClose="isDeletePromptOpen = false"
		title="Удаление задачи"
		acceptText="Удалить"
		@onAccept="handleDelete"
	>
		<span>Вы уверены, что хотите удалить задачу "{{ props.text }}"?</span>
	</AppModal>
	<AppModal
		:isOpen="isEditOpen"
		@onClose="isEditOpen = false"
		title="Редактирование задачи"
		acceptText="Сохранить"
		@onAccept="handleEdit"
	>
		<NewTaskForm :text="text" @inputChange="($event) => handleChange($event.target.value)" :error="error" />
	</AppModal>
</template>

<style scoped>
.list-item {
	display: flex;
	flex-direction: column;
}
.list-item-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.text-container {
	display: flex;
	align-items: center;
	justify-content: start;
}
.actions-buttons-container {
	display: flex;
	gap: 10px;
}
</style>
