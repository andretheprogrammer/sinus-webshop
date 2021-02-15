<template>
  <div class="menu-item" v-click-outside-window="closeWindow">
    <button @click="show = !show">Login</button>
    <transition mode="out-in" name="login-anim">
      <div v-show="show" class="animate login-window">
        <div class="login-form">
          <input type="text" v-model="email" placeholder="Email" id="email" />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            id="password"
          />
          <button @click="loginUser">Login</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      email: "",
      password: "",
    };
  },
  directives: {
    "click-outside-window": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
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
      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loginUser() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.show = false;
    },
    closeWindow() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.login-window {
  position: absolute;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 10rem;
  background: whitesmoke;
  box-shadow: 0 0 11px 7px rgba(0, 0, 0, 0.1);
  transform: translateX(-5%);
  top: 6rem;
  z-index: 99;
}

.login-form {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: auto;
  width: 100%;
  transition: opacity 0.5s;

  input {
    @include input-standard;
  }

  button {
    margin: 0.2rem 0 0 auto;
    padding: 0.3rem 1.2rem;
    font-weight: 0;
    font-size: 14px;
    color: white;
    background: black;
    border-radius: 20px;
  }
}
</style>