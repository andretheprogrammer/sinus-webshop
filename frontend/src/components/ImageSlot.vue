<template>
  <div class="container">
    <img class="image-frame" src="@/assets/skate-hero-1.jpg" alt="" />
    <div class="centered">
      <slot> </slot>
      <!-- :style="{
        'background-image': 'url(' + require('@/assets/skate-hero-1.jpg') + ')',
      }" -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  color: white;
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  bottom: 50%;
  width: 30vw;
  transform: translate(77%, 40%);
}
slot {
  position: absolute;
}

.image-frame {
  height: 50vh;
  width: 100vh;
}
</style>