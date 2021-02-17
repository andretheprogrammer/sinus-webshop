<template>
  <div class="order-complete-wrapper">
    <ImageSlot class="imgslot">
      <h1 id="ordertext">Your order has been completed!</h1>
    </ImageSlot>

    <div class="order-completed-lorem">
      <h1>Your order is being processed, go out and skate while you wait</h1>
      <p>
        Lipslide trucks boardslide boneless Chris Buchinsky g-turn snake.
        Hurricane Blue Tile Lounge opposite footed death box ho-ho drop in
        Tracker. Shinner heel flip goofy footed axle kick-nose hip. Coffin
        nosepicker shinner switch Ray Barbee sponsored fakie. Yeah Bones Brigade
        nosegrind shoveit street skater tail. Invert opposite footed blunt
        sponsored flypaper gnarly. 900 birdie wall ride tic-tac rock and roll
        Ray Underhill gnarly. Air tailslide fakie out full pipe launch ramp
        nosepicker. Airwalk opposite footed stoked snake late crail grab. Gnar
        bucket speed wobbles no comply opposite footed axle Hard Corps crail
        grab
      </p>
    </div>
    <lottie
      id="lottie-anim"
      :options="defaultOptions"
      :height="400"
      :width="300"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/animation.json";
import ImageSlot from "@/components/ImageSlot";
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
    };
  },
  components: {
    ImageSlot,
    Lottie,
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.order-complete-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.order-completed-lorem {
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  transform: translate(0% 10%);
}
.imgslot {
  align-self: center;
}
#lottie-anim {
  transform: translate3d(-30px, -500px, 0px);
}
#ordertext {
  position: absolute;
}
</style>