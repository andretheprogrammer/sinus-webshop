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
            <img class="img-product" :src="getIcon(product)" alt />
          </div>
          <div class="product-details">
            <h3>{{ product.title }}</h3>
            <p>{{ product.desc }}</p>
            <h3>{{ product.price }} SEK</h3>
          </div>
        </li>
      </ul>
    </div>

    <Overlay :show="showModal" @close="showModal = false">
      <Product :product="chosenProduct" />
    </Overlay>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import Product from "@/components/Product";

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
    Product,
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
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  background-color: gainsboro;
  cursor: pointer;
}

.product:hover {
  background-color: lightsteelblue;
  cursor: pointer;
}

.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-product {
  height: 250px;
}
.product-details {
  text-align: center;
}
</style>