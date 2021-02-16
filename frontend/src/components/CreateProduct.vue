<template>
  <div class="product-factory">
    <form @submit.prevent="createProduct()">
      <div class="p-photo">
        <label>Product Photo</label>

        <input v-model="product.imgFile" class="input-big" type="text" />
      </div>
      <div class="create-desc">
        <label>Product title</label>
        <input v-model="product.title" class="input" type="text" required />
        <label>Product price</label>
        <input v-model="product.price" class="input" type="text" required />
        <label>Product short desc</label>
        <input v-model="product.shortDesc" class="input" type="text" required />
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

      <input type="submit" />
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

.product-factory {
  display: flex;
  flex-direction: row;
  background-color: grey;
  width: 100%;
  justify-content: center;
}
form {
  display: flex;
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
  cursor: pointer;
}
.input-big {
  @include input-standard;
  background-color: transparent;

  border: 1px solid white;
  cursor: pointer;

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
</style>