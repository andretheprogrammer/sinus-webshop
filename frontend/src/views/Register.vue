<template>
  <div class="register-wrapper">
    <!-- <img id="imgHero" src="@/assets/skate-hero-1.jpg" alt="" /> -->
    <ImageSlot>
      <h1 class="image-text">Join the rolling family</h1>
    </ImageSlot>
    <div class="bottom-regwrapper">
      <div class="register-intro">
        <h1>Cowabunga</h1>
        <p class="fat-text">
          720 ollie north roll-in street 1080 full pipe. Nose grab spine helipop
          bone air ollie hole fakie.
        </p>
        <p>
          Blunt melancholy hard flip slap maxwell egg plant fast plant. 270
          layback Sacto kick-nose smith grind finger flip 1080. Rail slide
          sponsored egg plant Jason Jesse roll-in crail slide
        </p>
      </div>

      <form v-if="!isLogin" class="register-form" @submit.prevent="submitUser">
        <div class="register-input">
          <h4>Register</h4>
          <label>Name</label>
          <input type="text" v-model="name" />
          <label>Email</label>
          <input type="email" v-model="email" />
          <label>Password</label>
          <input type="password" v-model="password" />
          <input type="submit" class="invisible" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ImageSlot from "@/components/ImageSlot";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    submitUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        repeatPassword: this.password,
      };
      this.$store.dispatch("registerUser", user);
    },
  },
  components: {
    ImageSlot,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.register-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  @include input-standard;
  background: transparent;
  margin: 0;
}
label {
  font-size: 12px;
}

.fat-text {
  font-weight: 600;
}
.register-intro {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
}
.invisible {
  display: none;
}
.register-input {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.bottom-regwrapper {
  display: flex;
  margin-left: 3rem;
  margin-right: 3rem;
  gap: 2rem;
}
.register-form {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
</style>