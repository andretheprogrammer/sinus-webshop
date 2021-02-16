<template>
  <div class="wrapper">
    <h1>{{ orderItems.title }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      orderItems: [],
    };
  },
  computed: {
    ...mapGetters(["chosenOrder", "orderResponse", "productResponse"]),
    fillOrderItems() {
      return this.productResponse.filter((item) => {
        return this.chosenOrder.items.includes(item._id);
      });
    },
  },
  mounted() {
    this.orderItems = this.filteredEntrys;
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: gray;
  border: white 1px solid;
}
</style>