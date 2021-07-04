<template>
  <div
    class="
      card
      w-full
      bg-background-white
      flex
      justify-between
      items-center
      px-3
      cursor-pointer
    "
    
  >
    <h3 class="text-h3 text-fontColor-darkgray capitalize w-full" @click="$emit('clicked')">
      {{ namePokemon }}
    </h3>
    <div
      class="
        circle
        bg-background-gray
        rounded-full
        flex
        justify-center
        items-center
      "
    >
      <i
        class="fas fa-star"
        :style="{ color: isFavorite ? '#ECA539' : '#BFBFBF' }"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    namePokemon: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },

  },
};
</script>

<style scoped>
.card {
  height: 60px;
  border-radius: 5px;
}
.circle {
  width: 44px;
  height: 44px;
}

i {
  font-size: 26px;
}
</style>