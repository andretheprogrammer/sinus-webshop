<template>
  <div class="register-wrapper">
    <!-- <img id="imgHero" src="@/assets/skate-hero-1.jpg" alt="" /> -->
    <ImageSlot>
      <template v-slot:info-slot>
        <h1 v-if="!isLoggedIn" class="image-text">Join the rolling family</h1>
        <h1 v-else class="image-text">Welcome!</h1>
      </template>
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

      <form
        v-if="!isLoggedIn"
        class="register-form"
        @submit.prevent="submitUser"
        autocomplete="off"
      >
        <div class="register-input">
          <h4>Register thy self</h4>
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    async submitUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        repeatPassword: this.password,
        adress: { street: "", city: "", zip: "" },
      };
      await this.$store.dispatch("registerUser", user);
      this.email = "";
      this.password = "";
      this.name = "";
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
  width: fit-content;
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
  width: 65%;
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
  margin: 0 auto;
  justify-content: center;
}
.register-form {
  display: flex;
}
</style>