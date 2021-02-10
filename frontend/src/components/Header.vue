<template>
  <header>
    <div class="navbar">
      <img id="logo" src="@/assets/sinus-logo.svg" alt @click="routeToStart" />
      <div class="header-links">
        <router-link to="/products">
          <button>Products</button>
        </router-link>
        <button v-if="!loggedIn" @click="loggedIn = true">Login</button>
        <button v-else class="account-btn" @click="loggedIn = false">
          <i class="material-icons product-lock">account_circle</i>
        </button>
        <router-link to="/checkout">
          <button class="cart-btn">
            <i class="material-icons product-lock">shopping_bag</i>
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  },
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
  margin: 0 auto;
  padding: 1rem 0 0.2rem 0;
}

#logo {
  height: auto;
  max-height: 4rem;
  cursor: pointer;
  padding: 0.1rem;
  margin-right: auto;
}

.header-links {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  :hover {
    color: grey;
    cursor: pointer;
  }

  :active,
  :focus {
    border: none;
    outline: none;
    text-decoration: none;
  }

  button {
    font-weight: bold;
    font-size: 16px;
    font-family: inherit;
    margin: 0 0.5rem;
    border: none;
    background-color: transparent;
  }

  .cart-btn {
    @include lock-button;
    background-color: whitesmoke;
  }

  .account-btn {
    @include lock-button;
    background-color: silver;
  }
}
</style>