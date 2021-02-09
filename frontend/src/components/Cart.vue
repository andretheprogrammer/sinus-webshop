<template>
  <div class="wrapper">
    <ul>
      <li v-for="product of cartItems" :key="product._id">
        <img :src="getIcon(product)" alt />

        <h1>{{ product.title }}</h1>
        <p>{{ product.shortDesc }}</p>

        <p>SN {{ product.serial }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems: function () {
      return this.$store.state.cartItems;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
li {
  background-color: whitesmoke;
  margin: 5px;
  border-radius: 5px;
  padding: 0.5rem;
}
</style>