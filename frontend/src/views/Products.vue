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
            <transition mode="in-out" name="add-p">
              <div class="product-header">
                <h3>{{ product.title }}</h3>
                <i @click.stop="addToCart(product)" class="material-icons"
                  >shopping_bag</i
                >
              </div>
            </transition>
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
    <div class="product-info-wrapper">
      <Overlay v-if="chosenProduct" :show="showModal" @close="closeModal">
        <ProductInfo :product="chosenProduct" @close="closeModal" />
      </Overlay>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Overlay from "@/components/Overlay";
import ProductInfo from "@/components/ProductInfo";

export default {
  computed: {
    ...mapGetters(["productResponse", "chosenProduct"]),
  },
  created() {
    this.$store.dispatch("getProducts");
  },
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
    addToCart(product) {
      this.$store.dispatch("addItemToCart", product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.add-p-enter-active,
.add-p-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.add-p-enter,
.add-p-leave-to {
  transform: scale(0);
  opacity: 0;
}

.add-p-enter-to,
.add-p-leave {
  transform: scale(1);
  opacity: 1;
}
</style>