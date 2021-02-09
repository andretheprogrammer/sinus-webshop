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
            <div class="product-header">
              <h3>{{ product.title }}</h3>
              <i class="material-icons">shopping_bag</i>
            </div>
            <p>{{ product.shortDesc }}</p>
            <img class="img-product" :src="getIcon(product)" alt />
            <div class="price-container">
              <h3>{{ product.price }}</h3>
              <p class="sek-p">SEK</p>
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
    product: Object
  },
  data() {
    return {
      showModal: false
    };
  },
  components: {
    Header,
    Overlay,
    ProductInfo
  },
  methods: {
    toggleModal(product) {
      this.$store.commit("setChosenProduct", product);
      this.showModal = !this.showModal;
    },
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    }
  },
  computed: {
    chosenProduct: function() {
      return this.$store.state.chosenProduct;
    },
    productList: function() {
      return this.$store.state.productResponse;
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
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
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);

  .product-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    h3 {
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      background-color: #eee;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  p {
    align-self: flex-start;
    margin: 0.3rem 0px 0px 2rem;
    font-size: 17px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }
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
</style>