import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/reset.css";
import "./tailwind.css";
// import "amfe-flexible";
createApp(App).use(router).mount("#app");
