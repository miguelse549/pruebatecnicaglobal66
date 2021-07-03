<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input
      type="text"
      placeholder="Search"
      v-model="search"
      @keyup="searchPokemons(search)"
    />

    <h1>LISTA GENERAL</h1>
    <ul v-for="(pokemon, index) in this.dataPokemons" :key="index">
      <li>{{ pokemon.name }}</li>
      <button @click="addFavorites(pokemon)">favoritos</button>
    </ul>

    <h1>FAVORITOS</h1>
    <ul v-for="(pokemon, index) in this.listFavorite" :key="index">
      <li>{{ pokemon.name }}</li>
      <button @click="addFavorites(pokemon, pokemon.favorite)">
        favoritos
      </button>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
      dataPokemons: [],
      listF: [],
    };
  },
  computed: {
    ...mapState(["listFavorite"]),
  },
  methods: {
    ...mapMutations(["addFavorite"]),

    searchPokemons(value) {
      var filterPokemon = this.dataPokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      this.dataPokemons = filterPokemon;
      // console.log("valor" + JSON.stringify(filterPokemon));
      if ((value = null || value == "")) {
        this.getPokemons();
      }
    },

    /*addFavorites(pokemon) {
      this.listF.push(pokemon);
      this.addFavorite(this.listF);
    },*/

    async getPokemons() {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          this.dataPokemons = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getPokemons();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
