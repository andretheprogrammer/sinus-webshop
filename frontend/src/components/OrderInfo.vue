<template>
  <div class="wrapper">
    <ul>
      <li
        class="order-item"
        v-for="orderItem in parseOrderItems"
        :key="orderItem._id"
      >
        <div v-if="orderItem" class="container">
          <div class="order-item-info">
            <div class="upper">
              <h3>Quantity: {{ orderItem.qty }}</h3>

              <div class="order-item-section">
                <i class="material-icons">title</i>
                <h3>Title:</h3>
                <p>{{ orderItem.item.title }}</p>
              </div>
              <div class="order-item-section">
                <i class="material-icons">sell</i>

                <h3>Price:</h3>
                <p>{{ orderItem.item.price }}</p>
              </div>
              <div class="order-item-section">
                <i class="material-icons">category</i>

                <h3>Category:</h3>
                <p>{{ orderItem.item.category }}</p>
              </div>
              <div class="order-item-section"></div>
              <div class="lower">
                <i class="material-icons">dialpad</i>
                <h3>Serial:</h3>
                <p>{{ orderItem.item.serial }}</p>
              </div>
              <div class="order-item-section">
                <i class="material-icons">tag</i>

                <h3>ID:</h3>
                <p>{{ orderItem.item._id }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-items-in-profile">
          <h1>Sorry!</h1>
          <p>Orderhistory is empty</p>
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
    parseOrderItems() {
      let parsedItems = [];
      this.orderItems.forEach((orderItem) => {
        let find = parsedItems.find((e) => e.item._id === orderItem._id);

        if (!find) {
          parsedItems.push({ item: orderItem, qty: 1 });
        } else {
          find.qty++;
        }
      });

      return parsedItems;
    },
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
h1,
h3 {
  color: black;
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
ul {
  padding: 1rem;
  line-height: 3rem;
  display: flex;
  gap: 1rem;
}

.material-icons {
  align-self: center;
}
</style>