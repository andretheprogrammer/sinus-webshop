<template>
  <div class="wrapper">
    <h1>ORDERS</h1>
    <h3>In progress</h3>
    <hr />

    <section>
      <div v-if="!ordersInProgress.length" class="no-orders">
        <h1>No orders in progress!</h1>
      </div>
      <ul v-else>
        <li v-for="(order, index) in ordersInProgress" :key="index">
          <div class="order-item">
            <h4>Ordered Items: {{ order.items }}</h4>
            <p>TimeStamp: {{ order.timeStamp }}</p>
            <p>Ordervalue: {{ order.orderValue }}</p>
            <p>ID: {{ order._id }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <hr />
      <div v-if="!ordersDone.length" class="no-orders">
        <h1>No orders finished</h1>
      </div>
      <div v-else class="finished-orders">
        <h1>Orders finished</h1>
        <hr />
        <ul>
          <li v-for="(item, index) in ordersDone" :key="index">
            <div class="item-item">
              <h3>Order ID: {{ item._id }}</h3>
              <h4>Ordered Items: {{ item.items }}</h4>
              <p>TimeStamp: {{ item.timeStamp }}</p>
              <p>Ordervalue: {{ item.orderValue }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["ordersResponse", "ordersInProgress", "ordersDone"]),
  },

  created() {
    let token = sessionStorage.getItem("jwt");
    this.$store.dispatch("getAllOrders", token);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.order-item {
  margin: 5px;
}
</style>