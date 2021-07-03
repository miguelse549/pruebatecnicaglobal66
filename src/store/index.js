import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listFavorite: [],
    },
    mutations: {
        addFavorite(state, payload) {
            state.listFavorite = payload
        },
        deleteFavorite(state, payload) {
            state.listFavorite = payload

        }
    },
    actions: {
        /*async getPokemons({ commit }) {
            await axios.get("https://pokeapi.co/api/v2/pokemon")
                .then(response => {
                    const { data } = response;
                    commit('loadData', data.results)
                    console.log("store " + JSON.stringify(data.results))

                })
                .catch(error => {
                    console.log(error)

                })

        }*/
    },
    modules: {}
})