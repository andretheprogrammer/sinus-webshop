<template>
  <div class="product-wrapper">
    <section>
      <img class="edit-product-img" :src="getIcon(product)" />
    </section>
    <section class="right-side">
      <form @submit.prevent="editProduct()" class="product-content">
        <input v-model="product.title" />
        <input v-model="product.shortDesc" />
        <input v-model="product.longDesc" />
        <input v-model="product.price" />

        <select v-model="product.imgFile" name="imgSelect" id="images">
          <option value="skateboard-greta.png">Gretas fury</option>
          <option value="wheel-rocket.png">wheel rocket</option>
          <option value="hoodie-fire.png">hoodie fire</option>
          <option value="wheel-rocket.png">Blue hoodie</option>
          <option value="skateboard-generic.png">Generic skate</option>
        </select>

        <select
          v-model="product.category"
          name="categories"
          id="category"
          required
        >
          <option value="board">Board</option>
          <option value="clothes">Clothes</option>
          <option value="wheels">Wheels</option>
        </select>
        <input class="edit-btn" type="submit" value="ändra" />
      </form>
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
    editProduct() {
      console.log("product -->", this.product);
      this.$store.dispatch("editNewProduct", this.product);
      this.$store.dispatch("getProducts");
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.product-wrapper {
  background-color: whitesmoke;
  border: 2px solid black;
  width: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
}

.product-content {
  text-align: left;
  padding: 0.5rem;
  min-width: 250px;
  display: flex;
  flex-direction: column;
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
}
.edit-btn {
  @include product-btn;
}

select {
  background-color: transparent;
}
input {
  background-color: transparent;
  @include input-standard;
  margin: 0;
}
.product-lock {
  @include lock-button;
}
.edit-product-img {
  height: 100%;
  width: 10rem;
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
}
</style>