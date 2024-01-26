<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
export type Props = { title: string; acceptText: string; isOpen: boolean };
export type Emits = { onClose: []; onAccept: [] };
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
	<Teleport to="body">
		<div v-if="props.isOpen" class="outer-container" @click="emit('onClose')">
			<div class="inner-container" @click.stop>
				<div class="title-container">
					<h3>{{ props.title }}</h3>
				</div>
				<div class="content-container">
					<slot></slot>
				</div>
				<div class="buttons-container">
					<a-button @click="emit('onAccept')">{{ props.acceptText || "Ок" }}</a-button>
					<a-button @click="emit('onClose')">Закрыть</a-button>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style scoped>
.outer-container {
	width: 100%;
	height: 100%;
	top: 0;
	position: absolute;
	background-color: rgb(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
}

.inner-container {
	overflow: hidden;
	border-radius: 10px;
	width: 500px;
	height: 500px;
	background-color: white;
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: 70px 1fr;
	box-shadow: 0px 3px 3px 3px gray;
}

.title-container {
	display: flex;
	justify-content: center;
	background-color: rgb(233, 231, 231);
}

.content-container {
	padding: 10px;
}

.buttons-container {
	display: flex;
	justify-content: end;
	gap: 10px;
	background-color: rgb(233, 231, 231);
	padding: 10px;
}
</style>
