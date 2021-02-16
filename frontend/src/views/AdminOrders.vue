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
        <li
          v-for="(order, index) in ordersInProgress"
          :key="index"
          @click="openModal(order)"
        >
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
          <li
            v-for="(item, index) in ordersDone"
            :key="index"
            @click="openModal(item)"
          >
            <div class="infobox-item">
              <div class="infobox">
                <h3>Order ID: {{ item._id }}</h3>
                <h4>Ordered Items: {{ item.items }}</h4>

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
      orderList: [],
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
    ]),
  },

  methods: {
    openModal(order) {
      this.$store.dispatch("setChosenOrder", order);
      this.filteredEntrys();
      this.showModal = true;
    },
    filteredEntrys() {
      this.chosenOrder.items.forEach((entry) => {
        console.log(entry);
        this.orderList.push(this.productResponse.find((e) => e._id == entry));
      });
      console.log("hej", this.chosenOrder, this.orderList);

      //   let entries = this.chosenOrder.items.filter((otherProduct) => {
      //     return this.productResponse
      //       .map((product) => {
      //         return product._id;
      //       })
      //       .includes(otherProduct._id);
      //   });
    },
    closeModal() {
      this.showModal = false;
    },
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
}
.infobox-item {
  margin: 0.3rem;
  background-color: white;
  border-radius: 15px;
  padding: 0.5rem;
}
</style>