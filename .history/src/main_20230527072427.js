import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from '@/elementUI/index.js'
createApp(App).use(store).use(elementUI).use(router).mount('#app')
