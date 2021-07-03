<template>
  <div class="h-screen flex flex-col items-center justify-evenly">
    <div>
      <img src="../../public/logo.svg" alt="logoPokemon" />
    </div>

    <div class="flex flex-col items-center max-w-screen-sm">
      <h1 class="font-bold text-2xl text-fontColor-darkgray text-h2">
        Welcome to Pokédex
      </h1>
      <p class="px-5 text-center pt-5 text-fontColor-gray text-p">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>

    <PButton :nameButton="'Get Started'"></PButton>
  </div>

  <!--<div class="about">
    <h1 class="font-lato">Name: Squirtle</h1>
    <h2 class="bg-background-200">Lorem ipsum dolor sit.</h2>
    <h3 class="bg-background-100">Name: Squirtle</h3>
  </div>-->
</template>
<script>
import PButton from "@/components/UI/PButton.vue";
export default {
  data() {
    return {};
  },
  components: {
    PButton,
  },
};
</script>
<style scoped>


</style>
