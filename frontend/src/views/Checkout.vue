<template>
  <div class="wrapper">
    <h1>YOUR CART</h1>
    <div class="section-wrapper">
      <section>
        <p>ITEMS_________________________</p>
        <Cart />
      </section>
      <section class="name-city">
        <p>Delivery______________________</p>
        <label>Name</label>
        <input type="text" placeholder="Sixten Von Sauerkraut" />
        <label>Street Adress</label>
        <input type="text" placeholder="Roligavägen 1337" />
        <label>City</label>
        <input type="text" placeholder="Ankeborg" />
        <label>Zipcode</label>
        <input type="text" placeholder="13377" />
      </section>
      <section class="card-city">
        <p>Payment________________________</p>
        <label>Card Owner</label>
        <input type="text" />
        <label>Card Number</label>
        <input type="text" />
        <label>Valid until</label>
        <input type="text" />
        <label>CCV</label>
        <input type="text" />
      </section>
      <button @click="makeOrder">Press to make an order</button>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart";
export default {
  components: {
    Cart,
  },
  methods: {
    makeOrder() {
      let cartItem = this.$store.state.cartItems;
      cartItem.forEach((element) => {});
      this.$store.dispatch("makeOrder", {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.wrapper {
  text-align: center;
}
.section-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
}
section {
  margin: 1.5rem;
}
input {
  @include input-standard;
}
label {
  margin-top: 0.5rem;
}
.name-city {
  display: flex;
  flex-direction: column;
}
.card-city {
  display: flex;
  flex-direction: column;
}
</style>