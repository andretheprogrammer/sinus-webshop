<template>
  <div class="product-factory">
    <form @submit.prevent="createProduct()">
      <div class="p-photo">
        <label for="images">Image</label>

        <select v-model="product.imgFile" name="input-big" id="images" required>
          <option value="skateboard-greta.png">Gretas fury</option>
          <option value="wheel-rocket.png">wheel rocket</option>
          <option value="hoodie-fire.png">hoodie fire</option>
          <option value="wheel-rocket.png">Blue hoodie</option>
          <option value="skateboard-generic.png">Generic skate</option>
        </select>
        <img
          class="create-product-img"
          v-if="getIcon(product)"
          :src="getIcon(product)"
          alt
        />
      </div>

      <div class="create-desc">
        <label>Product title</label>
        <input v-model="product.title" class="input" type="text" required />
        <label>Product price</label>
        <input v-model="product.price" class="input" type="text" required />
        <label>Product short desc</label>
        <input v-model="product.shortDesc" class="input" type="text" required />
        <label for="category">Category</label>
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
        <input class="create-product-btn" type="submit" />
      </div>
      <div class="p-desc">
        <label>Product description</label>
        <input
          v-model="product.longDesc"
          class="input-big"
          type="text"
          required
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgFile: "",
        category: "",
      },
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("createNewProduct", this.product);
      this.$store.dispatch("getProducts");
      this.$router.go();
    },
    getIcon(product) {
      if (product.imgFile) {
        return require(`@/assets/${product.imgFile}`);
      }
    },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    // },
    // submitFile() {
    //   let formData = new FormData();
    //   formData.append("file", this.file);
    //   this.$store.dispatch("submitFile", formData);
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
@media (max-width: 500px) {
  form {
    display: flex;
    flex-direction: column;
  }
  .create-product-img {
    max-width: 10px;
  }
}

.product-factory {
  display: flex;
  flex-direction: row;
  background-color: #404040;
  color: white;
  width: 100%;
  justify-content: center;
}

form {
  display: flex;
  margin: 1rem;
}
.create-desc {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
}
.input {
  @include input-standard;
  height: 2rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
}
.input-big {
  @include input-standard;
  background-color: transparent;

  border: 1px solid white;
  cursor: pointer;
  color: white;

  height: 14rem;
}
.p-desc {
  display: flex;
  flex-direction: column;
}
.p-photo {
  display: flex;
  flex-direction: column;
}
.create-product-img {
  margin-top: 1rem;
  height: 10rem;
  width: 10rem;
}
.create-product-btn {
  @include product-btn;
  outline: none;
}
select {
  color: black;
  appearance: none;
  background-image: url("../assets/arrow_down.png");
  background-repeat: no-repeat;
  background-position: right;
  border: 1px solid white;
  padding: 0.5em;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  line-height: inherit;
}
</style>