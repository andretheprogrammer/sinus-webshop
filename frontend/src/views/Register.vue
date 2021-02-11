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

      <form id="signup-form" class="register-input">
        <h4>Register</h4>
        <label>Name</label>
        <input type="text" v-model="name" />
        <label>Email</label>
        <input type="email" v-model="email" />
        <label>Password</label>
        <input type="password" v-model="password" />
        <button @click="submitUser">Register</button>
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
      user: {},
    };
  },
  methods: {
    // isFieldsFilled() {
    //   const signupForm = document.getElementById("signup-form");
    //   const nameInput = signupForm.querySelector("input[name=name]");
    //   const emailInput = signupForm.querySelector("input[email=email]");
    //   const passwordInput = signupForm.querySelector(
    //     "input[password=password]"
    //   );
    // },
    // processSignupForm(e) {
    //   e.preventDefault();
    //   this.name = nameInput.value;
    //   this.email = emailInput.value;
    //   this.password = passwordInput.value;
    // },
    submitUser() {
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password,
        repeatPassword: this.password,
      };

      this.$store.dispatch("registerUser", this.user);
    },
    // created() {
    //   signupForm.addEventListener("submit", processSignupForm);
    // },
  },
  components: {
    ImageSlot,
  },
};
</script>

<style lang="scss">
@import "@/styles/_global.scss";

.register-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 100%;
  background: transparent;
  border-radius: 8px;
}

.fat-text {
  font-weight: 600;
}
.register-intro {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding-left: 5rem;
}

.register-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 5rem;
}

.bottom-regwrapper {
  display: flex;
  gap: 6rem;
  padding-bottom: 50rem;
  align-self: flex-start;
  width: 100%;
}
</style>