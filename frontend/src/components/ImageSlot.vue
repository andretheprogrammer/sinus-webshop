<template>
  <div class="container">
    <img class="image-frame" src="@/assets/skate-hero-1.jpg" alt="" />
    <div class="centered">
      <slot class="info-slot" name="info-slot"> </slot>
      <slot name="animation-slot"> </slot>
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
  overflow: hidden;
}
.centered {
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  bottom: 50%;
  width: 30vw;
  transform: translate(-50%, -50%);
}

.image-frame {
  height: 50vh;
  width: 90%;
}
</style>