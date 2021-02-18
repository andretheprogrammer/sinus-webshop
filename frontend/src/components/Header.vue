<template>
  <header>
    <div class="navbar">
      <img id="logo" src="@/assets/sinus-logo.svg" alt @click="routeToStart" />
      <div class="header-links">
        <div class="menu-item hide-items">
          <router-link v-if="isAdmin" to="/adminproducts">
            <button>Admin</button>
          </router-link>
          <router-link v-if="isAdmin" to="/orders">
            <button>Orders</button>
          </router-link>
          <router-link to="/products">
            <button>Products</button>
          </router-link>
          <router-link v-if="isLoggedIn" to="/account">
            <button>My Account</button>
          </router-link>
        </div>
        <Hamburger />

        <Login v-if="!isLoggedIn" />
        <div v-else class="menu-item">
          <button class="account-btn" @click="$store.dispatch('logout')">
            <i class="material-icons product-lock">exit_to_app</i>
          </button>
        </div>
        <div class="menu-item">
          <router-link to="/checkout">
            <div class="cart-btn">
              <div v-if="cartItems.length > 0" class="cart-amount">
                <div class="calc-cart">
                  <p>{{ calculateCart }}</p>
                </div>
              </div>
              <i class="material-icons product-lock">shopping_bag</i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "@/components/Login";
import Hamburger from "@/components/Hamburger";

export default {
  data() {
    return {
      result: 0
    };
  },
  components: {
    Login,
    Hamburger
  },
  computed: {
    ...mapGetters(["isAdmin", "cartItems", "isLoggedIn"]),
    calculateCart: function() {
      let result = 0;
      for (this.item of this.cartItems) {
        result += this.item.amount;
      }
      return result;
    }
  },

  methods: {
    routeToStart() {
      if (this.$route.path == `/`) {
        return;
      } else {
        this.$router.push(`/`);
      }
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
    color: black;
    :hover {
      color: black;
    }
  }

  .account-btn {
    @include lock-button;
    background-color: silver;
  }
  .cart-amount {
    position: absolute;
    transform: translate(-10px, -10px);
    background-color: orange;
    border-radius: 50px;
    p {
      font-size: 10px;
      line-height: 15px;
      width: 10px;
    }
  }
}
</style>