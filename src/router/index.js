import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import CadastroProduto from '../views/CadastroProdutos.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/produtos', component: CadastroProduto }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router