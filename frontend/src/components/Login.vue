<template>
  <div class="menu-item">
    <button @click="show = !show">Login</button>
    <div v-if="show" class="login-window">
      <div class="login-form">
        <input type="text" v-model="email" placeholder="Email" id="email" />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          name
          id="password"
        />
        <button @click="loginUser()">Login</button>
      </div>
    </div>
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
}

.login-form {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: auto;
  width: 100%;

  input {
    padding: 0.3rem 0.4rem;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid gray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
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