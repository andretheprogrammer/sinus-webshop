<template>
  <div class="product-factory">
    <form @submit.prevent="createProduct()">
      <div class="p-photo">
        <label>Product Photo</label>

        <input class="input-big" type="text" />
      </div>
      <div class="create-desc">
        <label>Product Name</label>
        <input class="input" type="text" required />
        <label>Product short desc</label>
        <input class="input" type="text" required />
        <label>Product price</label>
        <input class="input" type="text" required />
        <label>Product Serial</label>
        <input class="input" type="text" required />
      </div>
      <div class="p-desc">
        <label>Product description</label>
        <input class="input-big" type="text" required />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch();
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
}
form {
  display: flex;
}
.create-desc {
  display: flex;
  flex-direction: column;
}
.input {
  @include input-standard;
  height: 2rem;
  background-color: transparent;
  border: 1px solid white;
}
.input-big {
  @include input-standard;
  background-color: transparent;

  border: 1px solid white;

  height: 10rem;
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