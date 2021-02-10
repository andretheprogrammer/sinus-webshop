<template>
  <div class="container">
    <img id="imgHero" src="@/assets/skate-hero-1.jpg" alt="" />
    <div class="centered">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>