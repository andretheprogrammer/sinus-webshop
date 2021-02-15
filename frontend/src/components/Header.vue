<template>
  <header>
    <div class="navbar">
      <img id="logo" src="@/assets/sinus-logo.svg" alt @click="routeToStart" />
      <div class="header-links">
        <div class="menu-item">
          <router-link v-if="isAdmin" to="/adminproducts">
            <button>Admin view</button>
          </router-link>
        </div>
        <div class="menu-item">
          <router-link v-if="isAdmin" to="/orders">
            <button>Admin order view</button>
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/products">
            <button>Products</button>
          </router-link>
        </div>
        <Login v-if="!loggedIn" />
        <div v-else class="menu-item">
          <button class="account-btn" @click="$store.dispatch('logout')">
            <i class="material-icons product-lock">account_circle</i>
          </button>
        </div>
        <div class="menu-item">
          <router-link to="/checkout">
            <button class="cart-btn">
              <div v-if="cartItems.length > 0" class="cart-amount">
                <p>
                  {{ cartItems.length }}
                </p>
              </div>
              <i class="material-icons product-lock">shopping_bag</i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "@/components/Login";

export default {
  components: {
    Login,
  },
  computed: {
    ...mapGetters(["isAdmin", "cartItems"]),
    loggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    routeToStart() {
      if (this.$route.path == `/`) {
        return;
      } else {
        this.$router.push(`/`);
      }
    },

    // calculateCart() {
    //   for (this.item in this.cartItems) {
    //     for (let i = 0; i < this.amount; i++) {
    //       this.count++;
    //     }
    //   }
    // console.log(this.count);
    // return this.count;
  },
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
  .cart-amount {
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