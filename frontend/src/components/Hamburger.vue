<template>
  <div class="menu-item burger-menu" v-click-outside-window="closeWindow">
    <button @click="show=!show">Burger</button>
    <div v-if="show" class="dropdown">
      <div class="menu">
        <ul>
          <li v-if="isAdmin">
            <router-link to="/adminproducts">Admin</router-link>
          </li>
          <li v-if="isAdmin">
            <router-link to="/orders">Orders</router-link>
          </li>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/account">My Account</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isAdmin: true,
      isLoggedIn: true
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
  methods: {
    closeWindow() {
      this.show = false;
    }
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
}
</style>