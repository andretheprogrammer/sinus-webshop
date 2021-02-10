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
  right: 50%;
  left: 50%;
  bottom: 50%;
  width: 30vw;
  transform: translate(-50%, -50%);
}
slot {
  position: absolute;
}

.image-frame {
  height: 50vh;
  width: 120vh;
}
</style>