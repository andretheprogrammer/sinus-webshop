<template>
  <div class="wrapper">
    <Header />
    <div class="showcase-products">
      <ul>
        <li
          v-for="item of productList"
          :key="item.id"
          @click="toggleModal()"
          class="product"
        >
          <div class="product-item">
            <img class="img-product" :src="getIcon(item)" alt />
          </div>
          <div class="product-details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <h3>{{ item.price }}kr</h3>
          </div>
        </li>
      </ul>
    </div>

    <Overlay :show="showModal" @close="showModal = false">
      <Product :item="productList" />
    </Overlay>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Overlay from "@/components/Overlay";
import Product from "@/components/Product";

export default {
  props: {
    item: Object,
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
    toggleModal() {
      this.showModal = !this.showModal;
    },
    getIcon(item) {
      return require(`@/assets/${item.imgFile}`);
    },
  },
  computed: {
    productList() {
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
}
.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-product {
  height: 250px;
}
</style>