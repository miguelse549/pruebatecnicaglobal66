import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },

    {
        path: '/searchpokemon',
        name: 'SearchPokemon',
        component: () =>
            import ('../views/SearchPokemon.vue')
    },

    {
        path: '/modal',
        name: 'Modal',
        component: () =>
            import ('../components/UI/Modal.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router