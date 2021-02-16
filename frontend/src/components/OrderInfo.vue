<template>
  <div class="wrapper">
    <h1>{{ orderItems }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["orderItems", "orderResponse", "productResponse"])
  },
  mounted() {
    console.log("orderinfo");
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: gray;
  border: white 1px solid;
}
</style>