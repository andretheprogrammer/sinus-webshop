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
            <div class="img-product" :style="{'background-image': 'url('+ getIcon(product) +')'}">
              <div class="price-container">
                <h3>{{ product.price }}</h3>
                <p class="sek">SEK</p>
              </div>
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
  width: 90%;
  margin: auto;
  justify-content: center;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22rem;
  width: 14rem;
  margin: 0.3rem;
  padding: 1rem 1rem 0 1rem;
  background-color: gainsboro;
  cursor: pointer;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
}

.product:hover {
  background-color: lightsteelblue;
  cursor: pointer;
  .price-container {
    border: 1px solid white !important;
    box-shadow: 0 0 5px white;
  }
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .product-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: left;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;

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
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
  }

  .img-product {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;

    .price-container {
      display: flex;
      flex-direction: row;
      background-color: black;
      color: white;
      padding: 0.5rem;
      border-radius: 30px;
      font-weight: 800;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      margin-bottom: 2rem;
      border: 1px solid transparent;

      .sek {
        color: inherit;
        font-weight: initial;
        font-size: small;
        margin-left: 2px;
        line-height: 5px;
      }
    }
  }
}
</style>