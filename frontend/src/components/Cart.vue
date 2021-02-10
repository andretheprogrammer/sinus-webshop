<template>
  <div class="wrapper">
    <div class="no-items-wrapper" v-if="!cartItems.length">
      <p>No items in cart</p>
    </div>
    <ul v-else>
      <li v-for="(product, index) of cartItems" :key="index">
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
        <section class="x-btn">
          <i @click="removeItem(index)" class="material-icons">highlight_off</i>
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
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
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
  align-items: center;
  justify-content: space-between;

  width: 100%;
  cursor: pointer;
}
li:hover {
  border: 1px solid black;
}
.cart-img {
  height: 3rem;
  align-self: flex-end;
}
.total-price {
  display: flex;
  justify-content: space-between;
}
.x-btn {
  justify-self: flex-end;
}
.no-items-wrapper {
  margin-top: 1vh;
  padding-top: 2vh;
  min-height: 14vh;
  background-color: grey;
}
</style>