<template>
  <div>
    <button
      class="
        flex
        justify-center
        align-items
        padding-x
        bg-button-red
        text-white
        font-bold
        rounded-full
        hover:bg-button-redDark
        w-40
        md:w-64
      "
      :style="{
        'background-color': backgroundcolor ? backgroundcolor : '',
      }"
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
    size: {
      type: Number,
      default: null,
    },
    backgroundcolor: {
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
i{
  font-size: 22px;
}



</style>