<template>
  <header>
    <img id="logo" src="@/assets/sinus-logo.svg" alt="" @click="routeToStart" />
    <div class="header-links">
      <router-link to="/"> <button>Home</button> </router-link>
      <router-link to="/products"><button>Products</button> </router-link>
      <button class="login-btn"></button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    routeToStart() {
      this.$router.push(`/`);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

#logo {
  height: 5rem;
  cursor: pointer;
}
header {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
.login-btn {
  @include lock-button;
  margin: 5px;
}
</style>