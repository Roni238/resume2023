import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SliderVue from '@/components/SliderVue.vue'
import ProjectSlider from '@/components/ProjectSlider.vue'


const app = createApp(App).use(store).use(router)
app.mount('#app')
app.component(SliderVue.name,SliderVue)
app.component(ProjectSlider.name,ProjectSlider)
