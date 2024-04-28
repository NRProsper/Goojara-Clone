import './assets/main.css'
import {useLoadingStore} from "@/stores/loading.js";
import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const loadingStore = useLoadingStore();

app.mount('#app')
