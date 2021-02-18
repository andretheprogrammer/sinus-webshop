<template>
  <div class="menu-item burger-menu" v-click-outside-window="closeWindow">
    <div v-if="isLoggedIn">
      <button @click="show=!show">
        <i class="material-icons">menu</i>
      </button>
      <div v-if="show" class="dropdown">
        <div class="menu">
          <ul>
            <li v-if="isAdmin" @click="closeWindow">
              <router-link class="menu-link" to="/adminproducts">Admin</router-link>
            </li>
            <li v-if="isAdmin" @click="closeWindow">
              <router-link class="menu-link" to="/orders">Orders</router-link>
            </li>
            <li @click="closeWindow">
              <router-link class="menu-link" to="/products">Products</router-link>
            </li>
            <li v-if="isLoggedIn" @click="closeWindow">
              <router-link class="menu-link" to="/account">My Account</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-link v-else to="/products">
      <button>Products</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      windowWidth: 0
    };
  },
  directives: {
    "click-outside-window": {
      bind: function(el, binding) {
        const ourClickEventHandler = event => {
          if (typeof binding.value !== "function") {
            console.warn(
              "[Vue-click-outside:] provided expression",
              binding.expression,
              "is not a function."
            );
          }

          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;

        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function(el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      }
    }
  },
  computed: {
    ...mapGetters(["isAdmin", "cartItems", "isLoggedIn"])
  },
  methods: {
    closeWindow() {
      this.show = false;
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth > 720) this.closeWindow();
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.dropdown {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 10rem;
  background: whitesmoke;
  box-shadow: 0 0 11px 7px rgba(0, 0, 0, 0.1);
  top: 6rem;
  left: 0;
  z-index: 99;
}

.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: auto;
  width: 100%;
  transition: opacity 0.5s;
  text-align: center;

  li {
    margin: 14px auto;

    .menu-link {
      padding: 10px 20px;
      font-family: inherit;
      font-weight: bold;
      color: black;
    }
  }
}
</style>