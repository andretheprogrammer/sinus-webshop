<template>
  <div class="wrapper">
    <div class="no-items-wrapper" v-if="!cartItems.length">
      <p>No items in cart</p>
    </div>
    <ul v-else>
      <li v-for="(product, index) of cartItems" :key="index">
        <section>
          <img
            class="cart-img"
            :src="require(`@/assets/${product.item.imgFile}`)"
            alt
          />
        </section>
        <section>
          <h1>{{ product.item.title }}</h1>
          <p class="small-text">{{ product.item.shortDesc }}</p>

          <p class="small-text">{{ product.item.serial }}</p>
        </section>
        <section class="upxdown">
          <div class="cart-container">
            <span class="material-icons" @click="incrementAmount(product)"
              >arrow_upward</span
            >
            <p>{{ product.amount }}</p>
            <span class="material-icons" @click="decrementAmount(product)"
              >arrow_downward</span
            >
          </div>
          <i @click="removeItem(index)" class="material-icons">highlight_off</i>
        </section>
      </li>
    </ul>
    <div class="total-price">
      <h2>Total:</h2>
      <h2>{{ totalSum }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalSum() {
      let total = 0;
      for (let s of this.$store.state.cartItems) {
        total += s.item.price * s.amount;
      }
      return total;
    },
  },
  methods: {
    decrementAmount(product) {
      if (product.amount > 1) {
        product.amount--;
      } else {
        this.$store.state.cartItems.splice(product, 1);
      }
    },
    incrementAmount(product) {
      product.amount++;
    },
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

li {
  background-color: whitesmoke;
  margin: 5px;
  border-radius: 15px;
  padding: 0.1rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  text-align: left;
  p {
    align-self: center;
  }
  .small-text {
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
    margin: 3px 0;
    width: 7rem;
  }
  span {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
.material-icons {
  font-size: 15px;
}
li:hover {
  border: 1px solid gray;
  transform: scale(1.03);
}
.cart-img {
  height: 3rem;
  margin-right: 1rem;
  align-self: flex-end;
}
.cart-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.total-price {
  display: flex;
  justify-content: space-between;
}
.upxdown {
  display: flex;
  align-items: center;
  justify-self: flex-end;
}
.no-items-wrapper {
  margin-top: 1vh;
  padding-top: 2vh;
  min-height: 14vh;
}
.material-icons:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>