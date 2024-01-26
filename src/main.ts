import Antd from "ant-design-vue";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import { key, store } from "./store";

createApp(App).use(router).use(store, key).use(Antd).mount("#app");
