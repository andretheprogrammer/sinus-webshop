<template>
  <header>
    <div class="navbar">
      <img id="logo" src="@/assets/sinus-logo.svg" alt @click="routeToStart" />
      <div class="header-links">
        <router-link to="/products">
          <button>Products</button>
        </router-link>
        <button class="login-btn"></button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    routeToStart() {
      this.$router.push(`/`);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.navbar {
  width: 90%;
  display: flex !important;
  align-items: center;
  margin: 1.5rem auto;
}

#logo {
  height: auto;
  max-height: 4rem;
  cursor: pointer;
  margin: 0.1rem;
  margin-right: auto;
}

.header-links {
  padding: 0.5rem 0 0 0;

  button {
    font-weight: bold;
    font-size: 16px;
    font-family: inherit;
    margin: 0 0.5rem;
    border: none;
    background-color: transparent;
  }

  button:hover {
    color: white;
  }
  .login-btn {
    @include lock-button;
    margin-bottom: 0.1rem;
    background-color: white;
    vertical-align: middle;
  }
}
</style>