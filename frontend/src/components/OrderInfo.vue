<template>
  <div class="wrapper">
    <ul>
      <li
        class="order-item"
        v-for="orderItem in orderItems"
        :key="orderItem._id"
      >
        <div class="order-item-info">
          <div class="upper">
            <div class="order-item-section">
              <i class="material-icons">title</i>
              <h3>Title:</h3>
              <p>{{ orderItem.title }}</p>
            </div>
            <div class="order-item-section">
              <i class="material-icons">sell</i>

              <h3>Price:</h3>
              <p>{{ orderItem.price }}</p>
            </div>
            <div class="order-item-section">
              <i class="material-icons">category</i>

              <h3>Category:</h3>
              <p>{{ orderItem.category }}</p>
            </div>
            <div class="order-item-section"></div>
            <div class="lower">
              <i class="material-icons">dialpad</i>
              <h3>Serial:</h3>
              <p>{{ orderItem.serial }}</p>
            </div>
            <div class="order-item-section">
              <i class="material-icons">tag</i>

              <h3>ID:</h3>
              <p>{{ orderItem._id }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "chosenOrder",
      "orderItems",
      "orderResponse",
      "productResponse",
    ]),
  },

  mounted() {
    console.log("orderinfo");
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: gray;
  border: white 1px solid;
}
.order-item {
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: gainsboro;
}
.order-item-info {
  display: flex;
  max-width: 60rem;
}
h1 {
  margin-left: 5px;
  margin-right: 5px;
}
.order-item-section {
  display: flex;
}
.material-icons {
  font-size: 13px;
  margin-left: 10px;
}
.lower {
  display: flex;
}
</style>