<template>
  <div class="wrapper">
    <Header />
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
      <section>
        <p>Payment________________________</p>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Cart from "@/components/Cart";
export default {
  components: {
    Header,
    Cart,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.section-wrapper {
  display: flex;
}
.name-city {
}
</style>