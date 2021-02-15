<template>
  <h1>{{ chosenOrder }}</h1>
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