import { createNewTask, deleteTask, getList, updateTask } from "@/api/tasksApi";
import { Nullable, Task } from "@/types/genericTypes";
import { Module } from "vuex";

export type TaskModuleState = {
	tasksList: Nullable<Array<Task>>;
};

export const tasksModule: Module<TaskModuleState, any> = {
	namespaced: true,
	state() {
		return {
			tasksList: null,
		};
	},
	mutations: {
		setTasksList(state, payload) {
			state.tasksList = payload;
		},
	},
	actions: {
		async getTasks({ commit }) {
			const list = await getList();
			commit("setTasksList", list);
		},
		async createTask({ dispatch }, payload: { text: string }) {
			await createNewTask(payload);
			dispatch("getTasks");
		},
		async editTask({ dispatch }, payload: { id: string; text: string }) {
			await updateTask(payload);
			dispatch("getTasks");
		},
		async deleteTask({ dispatch }, payload: { id: string }) {
			await deleteTask(payload);
			dispatch("getTasks");
		},
	},
	getters: {
		getTasksList: (state) => state.tasksList,
	},
};
