<template>
  <div class="wrapper">
    <p v-if="!cartItems.length">No items in cart</p>
    <ul v-else>
      <li v-for="product of cartItems" :key="product._id">
        <section>
          <img
            class="cart-img"
            :src="require(`@/assets/${product.imgFile}`)"
            alt
          />
        </section>
        <section>
          <h1>{{ product.title }}</h1>
          <p>{{ product.shortDesc }}</p>

          <p>SN {{ product.serial }}</p>
        </section>
      </li>
    </ul>
    <div class="total-price">
      <h2>Total:</h2>
      <h2>{{ totalSum }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems: function () {
      return this.$store.state.cartItems;
    },
    totalSum() {
      let total = 0;
      for (let s of this.$store.state.cartItems) {
        total += s.price;
      }
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

li {
  background-color: whitesmoke;
  margin: 5px;
  border-radius: 15px;
  padding: 0.5rem;
  padding-bottom: 0;
  display: flex;
  cursor: pointer;
}
li:hover {
  border: 1px solid grey;
}
.cart-img {
  height: 3rem;
  align-self: flex-end;
}
.total-price {
  display: flex;
  justify-content: space-between;
}
</style>