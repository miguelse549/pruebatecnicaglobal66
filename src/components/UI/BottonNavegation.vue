<template>
  <div class="cnavigation fixed w-full bottom-0 bg-background-white">
    <div class="flex items-center h-full csize mx-auto justify-evenly">
      <PButton
        :backgroundcolor="colorAll"
        :size="275"
        :nameButton="'All'"
        :icon="'fas fa-list'"
        @clicked="changeTab(1)"
      />
      <PButton
        :backgroundcolor="colorFavorites"
        :size="275"
        :nameButton="'Favorites'"
        :icon="'fas fa-star'"
        @clicked="changeTab(2)"
      />
    </div>
  </div>
</template>
<script>
import PButton from "@/components/UI/PButton.vue";
export default {
  data() {
    return {
      colorAll: "#F22539",
      colorFavorites: "#BFBFBF",
    };
  },
  components: {
    PButton,
  },
  methods: {
    changeTab(tab) {
      if (tab == 1) {
        this.colorAll = "#F22539";
        this.colorFavorites = "#BFBFBF";
        this.$emit("reloadList");
      } else {
        this.colorFavorites = "#F22539";
        this.colorAll = "#BFBFBF";
        this.$emit("loadFavorites");
      }
    },
  },
};
</script>
<style scoped>
.cnavigation {
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
}
.csize {
  max-width: 600px;
}
</style>