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
  },
  mounted() {
    this.orderItems = this.fillOrderItems;
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: gray;
  border: white 1px solid;
}
</style>