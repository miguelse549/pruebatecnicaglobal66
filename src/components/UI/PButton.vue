<template>
  <div>
    <button
      class="
        padding-x
        bg-button-red
        text-white
        font-bold
        rounded-full
        hover:bg-button-redDark
      "
    >
      <i class="mr-2" v-if="icon" :class="icon"></i>{{ nameButton }}
    </button>
  </div>
</template>
<script>
export default {
  name: "PButton",
  props: {
    nameButton: {
      type: String,
      default: "Botón",
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
.padding-x{
    padding: 11px 20px;
}

</style>