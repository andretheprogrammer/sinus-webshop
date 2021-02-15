<template>
  <div class="wrapper">
    <h1>ORDERS</h1>
    <h3>In progress</h3>
    <hr />

    <section>
      <div v-if="!orderResponse.length" class="no-orders">
        <h1>The list is empty!</h1>
      </div>
      <ul v-else>
        <li v-for="(order, index) in orderResponse" :key="index">
          {{ order }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["orderResponse"]),
  },

  created() {
    let token = sessionStorage.getItem("jwt");
    this.$store.dispatch("getAllOrders", token);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
</style>