<template>
  <header>
    <div class="navbar">
      <img id="logo" src="@/assets/sinus-logo.svg" alt @click="routeToStart" />
      <div class="header-links">
        <div class="menu-item">
          <router-link to="/products">
            <button>Products</button>
          </router-link>
        </div>
        <Login v-if="!loggedIn" />
        <div v-else class="menu-item">
          <button class="account-btn" @click="logout">
            <i class="material-icons product-lock">account_circle</i>
          </button>
        </div>
        <div class="menu-item">
          <router-link to="/checkout">
            <button class="cart-btn">
              <i class="material-icons product-lock">shopping_bag</i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Login from "@/components/Login";

export default {
  components: {
    Login
  },
  computed: {
    loggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    routeToStart() {
      this.$router.push(`/`);
    },
    logout() {
      this.$store.state.isLoggedIn = false;
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
    border: none;
    background-color: transparent;
  }

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
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