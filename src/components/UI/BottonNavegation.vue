<template>
  <div>
    <PButton :nameButton="'All'" />
    <PButton :nameButton="'Favorites'" />
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