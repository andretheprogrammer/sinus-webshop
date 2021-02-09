<template>
  <div class="wrapper">
    <Header />
    <h1>YOUR CART</h1>
    <div class="section-wrapper">
      <section>
        <p>ITEMS______________</p>
        <Cart />
      </section>
      <section>
        <p>Delivery______________</p>
      </section>
      <section>
        <p>Payment____________</p>
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