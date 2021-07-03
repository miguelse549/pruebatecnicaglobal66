<template>
  <div>
    <Loading />

    <div class="h-screen flex flex-col items-center justify-evenly">
      <div>
        <img src="../assets/logo.svg" alt="logoPokemon" />
      </div>
      <div class="flex flex-col items-center max-w-screen-sm">
        <h1 class="font-bold text-2xl text-fontColor-darkgray text-h2">
          Welcome to Pokédex
        </h1>
        <p class="px-5 text-center pt-5 text-fontColor-gray text-p">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </div>

      <PButton :nameButton="'Get Started'"></PButton>
    </div>
  </div>
</template>
<script>
import PButton from "@/components/UI/PButton.vue";
import Loading from "@/components/UI/Loading.vue";

export default {
  data() {
    return {};
  },
  components: {
    PButton,
    Loading,
  },
};
</script>
<
    Loadingstyle scoped>


</style>
