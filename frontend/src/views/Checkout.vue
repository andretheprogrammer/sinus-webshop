<template>
  <div class="wrapper">
    <Header />
    <h1>YOUR CART</h1>
    <div class="section-wrapper">
      <section>
        <p>ITEMS_________________________</p>
        <Cart />
      </section>
      <section>
        <p>Delivery______________________</p>
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
</style>