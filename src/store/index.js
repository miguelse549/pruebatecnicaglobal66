import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listFavorite: [],
    },
    mutations: {
        addPokemonFavorite(state, payload) {
            state.listFavorite.push(payload)
        },
        
        deleteFavorite(state, payload) {
            state.listFavorite = payload

        }
    },
    actions: {

    },
    modules: {}
})