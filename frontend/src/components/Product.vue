<template>
  <div class="product-wrapper">
    <section>
      <img class="generic-board" :src="getIcon(product)" alt />
    </section>
    <section class="right-side">
      <button class="product-lock"></button>
      <div class="product-price">
        <h5>{{ product.price }} SEK</h5>
      </div>
      <div class="product-title">
        <h2>{{ product.title }}</h2>
        <h3>{{ product.shortDesc }}</h3>
        <p>
          {{ product.longDesc }}
        </p>
      </div>
      <button class="product-btn">Take my money!</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    },
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
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
}
.product-title {
  text-align: left;
  h2 {
    text-transform: uppercase;
  }
  h2,
  h3 {
    padding-bottom: 0.5rem;
  }
  padding: 0.5rem;
  min-width: 250px;
}
.product-lock {
  @include lock-button;
}
.generic-board {
  height: 100%;
  width: 20rem;
  align-self: left;
  background-color: lightgray;
}

.right-side {
  display: flex;
  flex-direction: column;
}
section {
  padding: 2rem;
}
.product-btn {
  background-color: black;
  color: white;
  border-radius: 30px;
  margin-top: 0.5rem;
}
</style>