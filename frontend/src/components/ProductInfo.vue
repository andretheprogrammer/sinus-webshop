<template>
  <div class="product-wrapper">
    <section>
      <img class="skate-img" :src="getIcon(product)" />
    </section>
    <section class="right-side">
      <div class="product-price"></div>

      <div class="product-content">
        <h2 class="product-title">{{ product.title }}</h2>
        <h3>{{ product.shortDesc }}</h3>
        <p>
          {{ product.longDesc }}
        </p>

        <h5>{{ product.price }} SEK</h5>
      </div>
      <div class="product-button" @click="addCart(product)">
        Take my money!
        <span class="material-icons"> skateboarding </span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductInfo",
  computed: {
    ...mapGetters(["chosenProduct", "productResponse"]),
  },
  props: {
    product: Object,
  },
  methods: {
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    },
    addCart(product) {
      this.$store.dispatch("addItemToCart", product);
      this.$emit("close");
    },

    goCheckout() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.product-wrapper {
  background-color: gainsboro;
  border: 2px solid black;
  min-width: 20rem;
  text-align: center;
  padding: 1rem;
  display: flex;
}

.product-content {
  text-align: left;
  user-select: none;
  h2 {
    text-transform: uppercase;
  }
  h2,
  h3 {
    padding-bottom: 0.5rem;
  }
  h5 {
    margin-top: 5px;
    font-size: large;
  }
  padding: 0.5rem;
  min-width: 250px;
}
.product-lock {
  @include lock-button;
}
.skate-img {
  height: 100%;
  width: 25rem;
  align-self: left;
  margin-top: 1rem;
}

.right-side {
  display: flex;
  align-self: center;
  flex-direction: column;
}
.product-button {
  @include product-btn;
  display: flex;
  :active,
  :visited {
    text-decoration: none;
  }
  border: 2px solid transparent;
  transition: border 1s ease-out;
}
.material-icons {
  transition: transform 1s ease-in;
}
.product-button:hover {
  border: 2px solid darkorange;
  /* transform: scale(1.5); */
  .material-icons {
    transform: rotate(-20deg);
  }
}

.material-icons {
  align-self: center;
}
</style>