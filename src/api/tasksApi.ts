import axios from "axios";
import { tasksUrl } from "../../constants/api";
import { Task } from "@/types/genericTypes";

export const getList = async () => {
	try {
		return await axios.get<Array<Task>>(tasksUrl).then((response) => response.data);
	} catch (error) {
		console.log(error);
	}
};

export const createNewTask = async (body: { text: string }) => {
	try {
		await axios.post(tasksUrl, body).then((response) => response.status);
	} catch (error) {
		console.log(error);
	}
};

export const deleteTask = async (params: { id: string }) => {
	try {
		const status = await axios.delete(tasksUrl, { params }).then((response) => response.status);
	} catch (error) {
		console.log(error);
	}
};

export const updateTask = async (body: { id: string; text: string }) => {
	try {
		const status = await axios.put(tasksUrl, body).then((response) => response.status);
	} catch (error) {
		console.log(error);
	}
};
