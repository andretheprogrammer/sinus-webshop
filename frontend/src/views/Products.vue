<template>
  <div class="wrapper">
    <div>
      <ul class="showcase-products">
        <li
          v-for="product of productResponse"
          :key="product.id"
          @click="openModal(product)"
          class="product"
        >
          <div class="product-item">
            <div class="product-header">
              <h3>{{ product.title }}</h3>
              <i class="material-icons">shopping_bag</i>
            </div>
            <p>{{ product.shortDesc }}</p>
            <div
              class="img-product"
              :style="{ 'background-image': 'url(' + getIcon(product) + ')' }"
            >
              <div class="price-container">
                <h3>{{ product.price }}</h3>
                <p class="sek">SEK</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <Overlay v-if="chosenProduct" :show="showModal" @close="closeModal">
      <ProductInfo :product="chosenProduct" @close="closeModal" />
    </Overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Overlay from "@/components/Overlay";
import ProductInfo from "@/components/ProductInfo";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    product: Object,
  },

  components: {
    Overlay,
    ProductInfo,
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal(product) {
      this.$store.dispatch("setChosenProduct", product);
      this.showModal = true;
    },
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    },
    isModalActive() {
      this.$store.state.activeModal;
    },
  },
  computed: {
    ...mapGetters(["productResponse", "chosenProduct"]),
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

.showcase-products {
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