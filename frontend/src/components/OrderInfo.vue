<template>
  <h1>hi from orderinfo</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["chosenOrder", "orderResponse"]),
  },
};
</script>

<style>
</style>