import { createStore, createLogger, useStore, Store } from "vuex";
import { TaskModuleState, tasksModule } from "./modules/tasks";
import { InjectionKey } from "vue";

export interface State {
	tasks: TaskModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
	plugins: [createLogger()],
	modules: {
		tasks: tasksModule,
	},
});

export const useAppStore = () => useStore(key);
