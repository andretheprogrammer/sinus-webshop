<template>
  <main>
    <Header />
    <div class="register-wrapper">
      <img id="imgHero" src="@/assets/skate-hero-1.jpg" alt="" />
      <div class="bottom-regwrapper">
        <div class="register-intro">
          <h1>Cowabunga</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            commodi similique dolorum dolore praesentium. Totam perferendis
            consequatur ad inventore, fuga eos, sed nulla cum atque eaque, culpa
            earum sit quos.
          </p>
        </div>

        <div class="register-input">
          <h4>Register</h4>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
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

#imgHero {
  width: 50rem;
}
.register-intro {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
}

.register-input {
  display: flex;
  flex-direction: column;
}

.bottom-regwrapper {
  display: flex;
  gap: 6rem;
}
</style>