import { createApp } from 'vue'
import './style.css'
import router from './routes'
import store from "./store";
import App from './App.vue'
import {initTWE} from "tw-elements";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');

initTWE();
