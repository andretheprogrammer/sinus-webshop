<template>
  <main>
    <div class="register-wrapper">
      <!-- <img id="imgHero" src="@/assets/skate-hero-1.jpg" alt="" /> -->
      <ImageSlot>
        <h1 class="image-text">Join the rolling family</h1>
      </ImageSlot>
      <div class="bottom-regwrapper">
        <div class="register-intro">
          <h1>Cowabunga</h1>
          <p class="fat-text">
            720 ollie north roll-in street 1080 full pipe. Nose grab spine
            helipop bone air ollie hole fakie.
          </p>
          <p>
            Blunt melancholy hard flip slap maxwell egg plant fast plant. 270
            layback Sacto kick-nose smith grind finger flip 1080. Rail slide
            sponsored egg plant Jason Jesse roll-in crail slide
          </p>
        </div>

        <div class="register-input">
          <h4>Register</h4>
          <label>Name</label>
          <input type="text" v-model="name" @keyup.enter="submitUser" />
          <label>Email</label>
          <input type="email" v-model="email" @keyup.enter="submitUser" />
          <label>Password</label>
          <input type="password" v-model="password" @keyup.enter="submitUser" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ImageSlot from "@/components/ImageSlot";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      user: {}
    };
  },
  methods: {
    submitUser() {
      this.user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      console.log(this.user);
    }
  },
  components: {
    ImageSlot
  }
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

#imgHero {
  width: 70rem;
  height: 30rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
}
.fat-text {
  font-weight: 600;
}
.register-intro {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding-left: 11rem;
}
.image-text {
  font-family: "Open Sans";
}
.register-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 11rem;
}

.bottom-regwrapper {
  display: flex;
  gap: 6rem;
  padding-bottom: 50rem;
  align-self: flex-start;
  width: 100%;
}
</style>