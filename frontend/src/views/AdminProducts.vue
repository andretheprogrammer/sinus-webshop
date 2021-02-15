<template>
  <div class="admin-wrapper">
    <h1>ADMIN PRODUCTS</h1>
    <p>Add / Edit</p>
    <hr />
    <EditProduct />
    <ul>
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
    <div class="product-info-wrapper">
      <Overlay v-if="chosenProduct" :show="showModal" @close="closeModal">
        <ProductInfo :product="chosenProduct" @close="closeModal" />
      </Overlay>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditProduct from "../components/EditProduct.vue";
import Overlay from "../components/Overlay.vue";
import ProductInfo from "../components/ProductInfo.vue";
export default {
  components: { ProductInfo, EditProduct, Overlay },
  created() {
    this.$store.dispatch("getProducts");
  },
  data() {
    return {
      showModal: false,
    };
  },

  computed: {
    ...mapGetters(["productResponse", "chosenProduct"]),
  },
  methods: {
    getIcon(product) {
      return require(`@/assets/${product.imgFile}`);
    },
    closeModal() {
      this.showModal = false;
    },
    openModal(product) {
      this.$store.dispatch("setChosenProduct", product);
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.admin-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
</style>