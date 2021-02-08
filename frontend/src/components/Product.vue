<template>
  <div class="product-wrapper">
    <div class="product-title">
      <h2>Title here</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum
        eos tempore accusamus suscipit deleniti mollitia, nihil minima atque
        architecto. Ad sunt illum libero itaque perspiciatis nisi, ipsam aut
        expedita!
      </p>
      <p>{{ item.title }}</p>
    </div>
    <button class="product-lock"></button>

    <img class="generic-board" src="@/assets/skateboard-generic.png" alt="" />

    <div class="product-price">
      <h5>799</h5>
      <p>SEK</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.product-wrapper {
  background-color: white;
  border: 2px solid black;
  text-align: center;
  padding: 2rem;
}
.generic-board {
  height: 25rem;
}
</style>