import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'; // Импортируйте стили
import AOS from 'aos'; // Импортируйте AOS

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
AOS.init();