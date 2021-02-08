<template>
  <div class="product-wrapper">
    <button class="product-lock"></button>
    <div class="product-title">
      <h2>{{ product.title }}</h2>
      <p>
        {{ product.longDesc }}
      </p>
    </div>

    <img class="generic-board" src="@/assets/skateboard-generic.png" alt="" />

    <div class="product-price">
      <h5>{{ product.price }} SEK</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  // mounted() {
  // this.title = this.$props.product.title;
  // this.content = this.$props.product.content;
  // },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.product-wrapper {
  background-color: white;
  border: 2px solid black;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.product-title {
  text-align: center;
  h2 {
    padding: 1rem;
  }
}
.product-lock {
  @include lock-button;
}
.generic-board {
  height: 25rem;
  width: 25rem;
  align-self: center;
}
</style>