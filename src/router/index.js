import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'
import CadastroProduto from '../views/CadastroProdutos.vue'

// ADICIONE ESTA LINHA 👇
const ListarMotos = () => import('../views/ListarMotos.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/produtos', component: CadastroProduto },

    // NOVA ROTA 👇
    { path: '/motos', component: ListarMotos }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
