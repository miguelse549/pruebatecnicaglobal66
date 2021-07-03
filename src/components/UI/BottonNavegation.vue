<template>
  <div class="cnavigation fixed w-full bottom-0 bg-background-white">
    <div class="flex items-center h-full csize mx-auto justify-evenly">
      <PButton
        :backgroundcolor="'#F22539'"
        :size="275"
        :nameButton="'All'"
        :icon="'fas fa-list'"
      />
      <PButton
        :backgroundcolor="'#BFBFBF'"
        :size="275"
        :nameButton="'Favorites'"
        :icon="'fas fa-star'"
      />
    </div>
  </div>
</template>
<script>
import PButton from "@/components/UI/PButton.vue";
export default {
  components: {
    PButton,
  },
};
</script>
<style scoped>
.cnavigation{
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  height: 80px; 
}
.csize{
  max-width: 600px;
}

</style>