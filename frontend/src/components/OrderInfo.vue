<template>
  <div class="wrapper">
    <h1>{{ chosenOrder }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["chosenOrder", "orderResponse"]),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: gray;
  border: white 1px solid;
}
</style>