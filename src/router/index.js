//'createRouter'cria o sistema de rotas do Vue e 'createWebHistory' define o tipo de navegação
import { createRouter, createWebHistory } from 'vue-router'
//importa também a rota do Home e o CadastroProduto
import Home from '../views/TheHome.vue'
import CadastroProduto from '../views/CadastroProdutos.vue'

// Lazy Loading. Importa o componente somente quando a rota /motos for acessada
const ListarMotos = () => import('../views/ListarMotos.vue')


const routes = [
    { path: '/', component: Home }, //Quando o usuário acessa '/', o Vue exibe o componente Home
    { path: '/produtos', component: CadastroProduto }, //Quando o usuário acessa o /produtos, o Vue troca o conteúdo e renderiza o componente CadastroProduto

    //Quando o usuário acessa /motos, o Vue Router executa a função listarMotos, ali em cima
    { path: '/motos', component: ListarMotos }
]

//Aqui criamos a instância do roteador. Ele controla qual pagina carrega, nav entre rotas, histórico, transações etc
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
