<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

#app {
  max-width: 100rem;
  margin: 0 auto;
}

body {
  background-color: lightgray;
}
</style>
