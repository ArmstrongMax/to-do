<script lang="ts" setup>
import { useAppStore } from "@/store";
import { ListItem } from "../ListItem";
import { computed, onMounted } from "vue";

const { state, dispatch } = useAppStore();
const list = computed(() => state.tasks.tasksList);
onMounted(() => {
	dispatch("tasks/getTasks");
});
</script>

<template>
	<ul class="list">
		<ListItem v-for="item in list" :key="item.id" :text="item.text" />
	</ul>
</template>

<style scoped>
.list {
	display: grid;
	gap: 5px;
}
</style>
