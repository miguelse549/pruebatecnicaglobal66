<template>
  <div
    class="
      h-screen
      flex
      items-center
      justify-center
      bg-black bg-opacity-80
      absolute
      w-full
      z-50
    "
  >
    <div class="c-modal flex flex-col justify-center bg-background-white">
      <div class="headerModal flex flex-col justify-center items-center">
        <div
          class="self-end mr-3 -mt-10 cursor-pointer"
          @click="$emit('closeModal')"
        >
          <i class="fas fa-times-circle text-white"></i>
        </div>
        <img
          style="width: 180px; height: 180px"
          :src="imgUrl"
          alt="image-pokemon"
        />
      </div>

      <div class="details px-8 pt-3">
        <p class="text-p text-fontColor-gray my-2">
          Name:
          <span class="capitalize" style="font-size: 16px; color: #7c7c7c">{{
            name
          }}</span>
        </p>
        <hr />
        <p class="text-p text-fontColor-gray my-2">
          Weight:
          <span style="font-size: 16px; color: #7c7c7c">{{ weight }}</span>
        </p>
        <hr />
        <p class="text-p text-fontColor-gray my-2">
          Height:
          <span style="font-size: 16px; color: #7c7c7c">{{ height }}</span>
        </p>
        <hr />
        <p class="text-p text-fontColor-gray my-2">
          Types:
          <span class="capitalize" style="font-size: 16px; color: #7c7c7c">{{
            types
          }}</span>
        </p>
        <hr />
      </div>

      <div class="actions flex justify-between px-8 my-5">
        <PButton
          :nameButton="nameButton"
          v-clipboard:copy="detailsPokemon"
          v-clipboard:success="onCopy"
        />
        <div
          class="
            circle
            self-center
            bg-background-gray
            rounded-full
            flex
            justify-center
            items-center
            cursor-pointer
          "
          @click="addFavorite()"
        >
          <i
            class="fas fa-star"
            :style="{ color: isFavorite ? '#ECA539' : '#BFBFBF' }"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PButton from "@/components/UI/PButton.vue";
import { mapState, mapMutations, createLogger } from "vuex";

export default {
  name: "Loading",
  props: {
    imgUrl: {
      type: String,
    },
    name: {
      type: String,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
    types: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nameButton: "Share to my friends",
      detailsPokemon: `Name: ${this.name}, Weight: ${this.weight}, Height: ${this.height}, Types: ${this.types}`,
    };
  },
  components: {
    PButton,
  },
  computed: {
    ...mapState(["listFavorite"]),
  },
  methods: {
    ...mapMutations(["addPokemonFavorite", "deleteFavorite"]),

    addFavorite() {
      if (!this.listFavorite.includes(this.name)) {
        this.addPokemonFavorite(this.name);
      } else {
        const index = this.listFavorite.indexOf(this.name);
        index > -1 ? this.listFavorite.splice(index, 1) : 0;
        this.deleteFavorite(this.listFavorite);
      }
    },
    onCopy() {
      this.nameButton = "Copied!";
    },
  },
};
</script>

<style scoped>
.c-modal {
  width: 315px;
  border-radius: 5px;
}
.headerModal {
  background-image: url("../../assets/background-image.png");
  background-size: cover;
  height: 300px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.details {
}
.actions {
}

.circle {
  width: 44px;
  height: 44px;
}

i {
  font-size: 26px;
}

@media (min-width: 768px) {
  .c-modal {
    width: 570px;
  }
}
</style>
