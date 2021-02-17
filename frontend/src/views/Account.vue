<template>
  <div class="wrapper">
    <div class="user-card">
      <form class="user-form" @submit.prevent>
        <section class="form-section">
          <div class="name-header">
            <h2 class="user-name">{{ user.name }}</h2>
            <button class="arrow-btn" @click="showOrders = !showOrders">
              <p v-if="!showOrders">Show</p>
              <p v-if="showOrders">Hide</p>
            </button>
          </div>
          <label class="small-title">Street Adress</label>
          <input type="text" v-model="user.adress.street" readonly />
          <label class="small-title">City</label>
          <input type="text" v-model="user.adress.city" readonly />
          <label class="small-title">Zipcode</label>
          <input type="text" v-model="user.adress.zip" readonly />
        </section>
        <transition mode="in-out" name="show-order">
          <section v-if="showOrders" class="form-section">
            <div class="order-container">
              <h2 class="small-title">Orderhistory</h2>

              <ul class="order-items">
                <li
                  v-for="order of user.orderHistory"
                  :key="order._id"
                  class="order"
                >
                  <p>
                    <span>id:</span>
                    {{ order }}
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </transition>
      </form>
    </div>
  </div>
</template>

<script >
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showOrders: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

.user-card {
  display: flex;
  background: whitesmoke;
  margin: 0 auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
}

input {
  @include input-standard;
}

.wrapper {
  text-align: left;
  padding-top: 2rem;
}

.section-wrapper {
  display: flex;
  justify-content: center;
}
section {
  margin: 1.5rem;
  width: 14rem;
}

.user-form {
  display: flex;
  flex-direction: row;

  .form-section {
    display: flex;
    flex-direction: column;
    padding: 0.1rem 0.4rem;

    .name-header {
      display: inline-flex;
      flex-direction: row;
      margin: 0 0 20px 0;

      .arrow-btn {
        margin: 0 0 0 auto;
        background: rgba(0, 0, 0, 0.05);
        border: none;
        border-radius: 0.5rem;
      }

      .user-name {
        font-size: 1.2rem;
      }
    }
  }
}

.small-title {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
}

.order-container {
  height: 100%;
  margin: auto auto;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.4);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 12rem;

  h2 {
    text-align: center;
    margin: 0.7rem;
  }

  .order-items {
    overflow: hidden;
    overflow-y: scroll;
    max-height: 16rem;

    .order {
      margin: 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      p {
        font-size: 15px;
        color: black;
      }

      span {
        color: rgba(0, 0, 0, 0.4);
        font-size: 12px;
      }
    }
  }
}
</style>