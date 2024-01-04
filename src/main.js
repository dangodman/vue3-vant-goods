import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/reset.css";
import "./tailwind.css";
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount("#app");
