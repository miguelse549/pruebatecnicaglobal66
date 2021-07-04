<template>
  <div>
    <Modal
      v-if="showModal"
      :imgUrl="details.imgUrl"
      :name="details.name"
      :weight="details.weight"
      :height="details.height"
      :types="details.types"
      :isFavorite="details.isFavorite"
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
          :isFavorite="pokemon.isFavorite"
          @clicked="detailsPokemon(pokemon.name, pokemon.isFavorite)"
          @reloadList="reloadList"
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
import { mapState } from "vuex";
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
        imgUrl: null,
      },
    };
  },
  computed: {
    ...mapState(["listFavorite"]),
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
          for (let pokemon of this.dataPokemons) {
            pokemon.isFavorite = false;
          }
          this.isfavorite();
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
    detailsPokemon(name, isFavorite) {
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
          this.details.imgUrl = data.sprites.other.dream_world.front_default;
          this.details.isFavorite = isFavorite;
          this.showModal = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isfavorite() {
      for (let p1 of this.listFavorite) {
        for (let p2 of this.dataPokemons) {
          if (p1 === p2.name) {
            p2.isFavorite = true;
            break;
          }
        }
      }
    },
    closeModal() {
      this.showModal = false;
    },
    reloadList() {
      this.getPokemons();
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
  overflow-y: scroll;
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
