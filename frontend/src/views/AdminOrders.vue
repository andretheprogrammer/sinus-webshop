<template>
  <div class="wrapper">
    <h1>ORDERS</h1>
    <h3>In progress</h3>
    <hr />

    <section>
      <div v-if="!ordersInProgress.length" class="no-orders">
        <h1>No orders in progress!</h1>
      </div>
      <ul>
        <li
          v-for="(order, index) in ordersInProgress"
          :key="index"
          @click="openModal(order)"
        >
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
      <div class="finished-orders">
        <h1>Orders finished</h1>
        <hr />
        <ul>
          <li
            v-for="(item, index) in ordersDone"
            :key="index"
            @click="openModal(item)"
          >
            <div class="infobox-item">
              <div class="infobox">
                <h3>Order ID: {{ item._id }}</h3>
                <h4>Ordered products ID: {{ item.items }}</h4>

                <p>TimeStamp: {{ item.timeStamp }}</p>
                <p>Ordervalue: {{ item.orderValue }}</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="order-info-wrapper">
          <Overlay v-if="chosenOrder" :show="showModal" @close="closeModal">
            <OrderInfo :order="chosenOrder" @close="closeModal" />
          </Overlay>
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
import Overlay from "@/components/Overlay";
import OrderInfo from "@/components/OrderInfo";
export default {
  created() {
    this.$store.dispatch("getAllOrders");
  },
  data() {
    return {
      showModal: false,
    };
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
      "isLoggedIn",
    ]),
    // checkOrderItems: function() {
    //   console.log(this.orderItems);
    //   return this.orderItems.some(function(el) {
    //     console.log(el);
    //     let b = el !== null && typeof el !== "undefined";
    //     console.log(b);
    //     return b;
    //   });
    // }
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

    // async fillOrderItems() {
    //   console.log(this.chosenOrder.items[0]);
    //   let id = this.chosenOrder.items[0];

    //   let response = await this.$store.dispatch("getProductById", id);
    //   console.log(
    //     "hello",
    //     response.find(e => id == e._id)
    //   );
    // },

    closeModal() {
      this.showModal = false;
    },
  },
  create() {
    if (!this.isLoggedIn && !this.isAdmin) {
      console.log(this.isLoggedIn, this.isAdmin);
      alert("something is fucked up, pls log out and in again");
      this.$router.push("/");
    }
  },
  components: {
    Overlay,
    OrderInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.order-item {
  margin: 0.3rem;
  background-color: white;
  border-radius: 15px;
  padding: 0.5rem;
  width: fit-content;
}
.infobox-item {
  margin: 0.3rem;
  background-color: white;
  border-radius: 15px;
  padding: 0.5rem;
  width: fit-content;
}
</style>