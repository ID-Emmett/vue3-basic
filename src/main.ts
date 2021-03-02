import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
const app = createApp(App);
app.use(router); //配置路由
app.mount("#app");
