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
        <li v-for="(order, index) in ordersInProgress" :key="index" @click="openModal(order)">
          <div class="order-item">
            <h3>Order ID: {{ order._id }}</h3>
            <h4>Ordered products ID: {{ order.items }}</h4>
            <p>TimeStamp: {{ order.timeStamp }}</p>
            <p>Ordervalue: {{ order.orderValue }}</p>
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
          <li
            class="infobox-item"
            v-for="(item, index) in ordersDone"
            :key="index"
            @click="openModal(item)"
          >
            <div class="infobox">
              <h3>Order ID: {{ item._id }}</h3>
              <h4>Ordered products ID: {{ item.items }}</h4>

              <p>TimeStamp: {{ item.timeStamp }}</p>
              <p>Ordervalue: {{ item.orderValue }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="order-info-wrapper">
      <Overlay v-if="chosenOrder" :show="showModal" @close="closeModal">
        <OrderInfo :order="chosenOrder" @close="closeModal" />
      </Overlay>
    </div>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
import Overlay from "@/components/Overlay";
import OrderInfo from "@/components/OrderInfo";
export default {
  data() {
    return {
      showModal: false
    };
  },
  created() {
    if (this.user.role == "admin") {
      this.$store.dispatch("getAllOrders");
    } else alert("hej");
  },
  components: {
    Overlay,
    OrderInfo
  },
  computed: {
    ...mapGetters([
      "ordersResponse",
      "ordersInProgress",
      "ordersDone",
      "chosenOrder",
      "isAdmin",
      "productResponse",
      "orderItems",
      "user",
      "isLoggedIn"
    ])
  },
  methods: {
    openModal(order) {
      this.$store.dispatch("setChosenOrder", order);
      if (this.orderItems.length > 0) {
        this.showModal = true;
      } else {
        alert("Contains discontinued items");
      }
    },

    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.order-item {
  margin: 0.3rem;
  background-color: gainsboro;
  border-radius: 13px;
  padding: 0.5rem;
  box-shadow: 1px 1px 1px 0px whitesmoke;
  cursor: pointer;
}
li {
  width: 40%;
  text-align: left;
}

.infobox:hover {
  background-color: black;
}
.infobox-item {
  margin: 0.3rem;
  border-radius: 15px;
  padding: 0.5rem;
  width: fit-content;
}
.no-orders {
  text-align: center;
}
.wrapper {
  align-items: center;
}
section {
  display: flex;
  flex-direction: column;
}
</style>