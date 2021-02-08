<template>
  <header>
    <img id="logo" src="@/assets/sinus-logo.svg" alt="" />
    <div class="header-links">
      <router-link to="/"> <button>Home</button> </router-link>
      <router-link to="/products"><button>Products</button> </router-link>
      <button class="login-btn"></button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
#logo {
  height: 5rem;
}
header {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
</style>