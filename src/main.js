import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from './pages/HomeComponent.vue'
import VacanciesComponent from './pages/Vacancies.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component : HomeComponent,
    },
    {
        path:'/Vacancies',
        component : VacanciesComponent,
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})

createApp(App).use(router).mount('#app')
