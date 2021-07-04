<template>
  <div>
    <Modal
      v-if="showModal"
      :imgUrl="details.imgUrl"
      :name="details.name"
      :weight="details.weight"
      :height="details.height"
      :types="details.types"
      @closeModal="closeModal"
    />
    <div class="main-container bg-background-lightgray pt-10">
      <div class="container-width mx-auto">
        <div class="search flex items-center bg-white">
          <i class="fas fa-search mr-2 text-fontColor-ligthgray"></i
          ><input
            class="w-full"
            type="text"
            placeholder="Search"
            v-model="search"
            @keyup="getPokemons(search)"
          />
        </div>
        <Card
          class="mt-3"
          v-for="(pokemon, index) of dataPokemons"
          :key="index"
          :namePokemon="pokemon.name"
          :isFavorite="true"
          @clicked="detailsPokemon(pokemon.name)"
        />
        <div
          class="flex flex-col items-center noitems"
          v-if="dataPokemons.length === 0"
        >
          <h1 class="text-h1 text-fontColor-darkgray">Uh-oh!</h1>
          <p class="text-pd text-fontColor-gray">
            You look lost on your journey!
          </p>
          <PButton
            class="mt-3"
            :nameButton="'Go back home'"
            @clicked="redirectToHome"
          />
        </div>
      </div>
      <BottonNavegation />
    </div>
  </div>
</template>

<script>
import PButton from "@/components/UI/PButton.vue";
import BottonNavegation from "@/components/UI/BottonNavegation.vue";
import Modal from "@/components/UI/Modal.vue";
import Card from "@/components/UI/Card.vue";
import axios from "axios";
export default {
  name: "SearchPokemon",
  data() {
    return {
      dataPokemons: [],
      search: "",
      showModal: false,
      details: {
        name: null,
        weight: null,
        height: null,
        types: null,
        imgUrl:null
      },
    };
  },
  components: {
    PButton,
    BottonNavegation,
    Card,
    Modal,
  },
  methods: {
    redirectToHome() {
      this.$router.push({
        name: "Home",
      });
    },
    getPokemons(value) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          this.dataPokemons = response.data.results;
          if (value) {
            var filterPokemon = this.dataPokemons.filter(
              (pokemon) =>
                pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
            );
            this.dataPokemons = filterPokemon;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detailsPokemon(name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          //this.details = response.data;
          const { data } = response;
          this.details.name = data.name;
          this.details.weight = data.weight;
          this.details.height = data.height;
          this.details.types = data.types.map((type) => type.type.name);
          this.details.types = this.details.types.join();
          this.details.imgUrl=data.sprites.other.dream_world.front_default;
          console.log(response.data);
          this.showModal = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeModal() {
      this.showModal = false;
    },
  },
  async created() {
    await this.getPokemons();
  },
};
</script>

<style scoped>
.main-container {
  height: calc(100vh - 80px);
  overflow-x: scroll;
}
.container-width {
  max-width: 570px;
  padding: 0 30px;
  max-height: calc(100vh - 80px);
}
.search {
  height: 50px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  margin-bottom: 40px;
}
input {
  height: 30px;
}
input:focus {
  outline: none;
}

.noitems {
  margin-top: 50px;
}
.noitems > *:not(:last-child) {
  padding-bottom: 10px;
}
</style>
