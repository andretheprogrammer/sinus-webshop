<template>
  <div id="app">
    <Header />
    <hr />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
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

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0)
  );
  margin-bottom: 1rem;
}
</style>
