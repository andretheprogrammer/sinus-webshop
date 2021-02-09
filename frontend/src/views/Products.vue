<template>
  <div class="wrapper">
    <Header />
    <div class="showcase-products">
      <ul>
        <li
          v-for="product of productList"
          :key="product.id"
          @click="toggleModal(product)"
          class="product"
        >
          <div class="product-item">
            <div class="product-details">
              <h3>{{ product.title }}</h3>
              <p>{{ product.shortDesc }}</p>
            </div>
            <img class="img-product" :src="getIcon(product)" alt />
            <div class="price-container">
              <h3>{{ product.price }}</h3>
              <p class="sek">SEK</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <Overlay :show="showModal" @close="showModal = false">
      <ProductInfo :product="chosenProduct" />
    </Overlay>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import ProductInfo from "@/components/ProductInfo";

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Header,
    Overlay,
    ProductInfo,
  },
  methods: {
    toggleModal(product) {
      this.$store.commit("setChosenProduct", product);
      this.showModal = !this.showModal;
    },
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    },
  },
  computed: {
    chosenProduct: function () {
      return this.$store.state.chosenProduct;
    },
    productList: function () {
      return this.$store.state.productResponse;
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;
  padding: 1rem;
  background-color: gainsboro;
  cursor: pointer;
  height: 25rem;
}

.product:hover {
  background-color: lightsteelblue;
  cursor: pointer;
  .price-container {
    border: 2px solid white;
  }
}

.price-container {
  background-color: black;
  color: white;
  padding: 0.5rem;
  border-radius: 30px;
  display: flex;
  font-weight: 800;
  position: absolute;
  margin-left: 1rem;
  margin-top: 3rem;
  align-self: flex-start;
  .sek {
    font-weight: initial;
    font-size: small;
    margin-left: 2px;
    line-height: 5px;
  }
}

.product-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  width: 18rem;
}
.img-product {
  height: 20rem;
  padding: 3px;
}
.product-details {
  text-align: center;
  h3 {
    text-transform: uppercase;
  }
}
</style>