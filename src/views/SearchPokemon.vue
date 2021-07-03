<template>
  <div class="bg-background-lightgray min-h-screen pt-10">
    <div class="container-width mx-auto">
      <div class="search flex items-center bg-white">
        <i class="fas fa-search mr-2 text-fontColor-ligthgray"></i
        ><input class="w-full" type="text" placeholder="Search" />
      </div>
      <div class="flex flex-col items-center noitems">
        <h1 class="text-h1 text-fontColor-darkgray">Uh-oh!</h1>
        <p class="text-pd text-fontColor-gray">
          You look lost on your journey!
        </p>
        <PButton class="mt-3" :nameButton="'Go back home'" />
      </div>
    </div>
    <BottonNavegation />
  </div>
</template>

<script>
import PButton from "@/components/UI/PButton.vue";
import BottonNavegation from "@/components/UI/BottonNavegation.vue";
export default {
  name: "SearchPokemon",
  components: { PButton, BottonNavegation },
};
</script>

<style scoped>
.container-width{
  max-width: 570px;
  padding: 0 30px;
}
.search{
  height: 50px;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
}
input{
  height: 30px;
  
}
input:focus{
  outline:none
}

.noitems{
  margin-top: 50px;
}
.noitems > *:not(:last-child){
  padding-bottom: 10px;

}


</style>
