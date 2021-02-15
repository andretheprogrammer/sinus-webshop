<template>
  <div class="wrapper">
    <h1>YOUR CART</h1>
    <div class="section-wrapper">
      <section>
        <p>ITEMS</p>
        <hr />
        <Cart />
      </section>

      <form @submit.prevent="makeOrder">
        <section class="name-city">
          <p>Delivery</p>
          <label>Name</label>
          <input type="text" placeholder="Sixten Von Sauerkraut" required />
          <label>Street Adress</label>
          <input type="text" placeholder="Roligavägen 1337" />
          <label>City</label>
          <input type="text" placeholder="Ankeborg" />
          <label>Zipcode</label>
          <input type="text" placeholder="13377" />
        </section>

        <section class="card-city">
          <p>Payment________________________</p>
          <label>Card Owner</label>
          <input type="text" />
          <label>Card Number</label>
          <input type="text" />
          <label>Valid until</label>
          <input type="text" />
          <label>CCV</label>
          <input type="text" />
        </section>
        <input type="submit" placeholder="Press to make an order" />
      </form>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart";
export default {
  components: {
    Cart,
  },
  methods: {
    makeOrder() {
      let list = [];
      let cartItems = this.$store.state.cartItems;
      if (cartItems.length < 1) {
        alert("no things in cart gringo");
      } else {
        cartItems.forEach((product) => {
          {
            for (let i = 0; i < product.amount; i++) {
              list.push(product.item._id);
            }
          }
        });
        console.log(this.$store.state.isLoggedIn);

        this.$store.dispatch("makeOrder", {
          items: list,
          user: this.$store.state.user,
        });
        this.$router.push("/thanks");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";
.wrapper {
  text-align: center;
}
.section-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
}
section {
  margin: 1.5rem;
}
input {
  @include input-standard;
}

.name-city {
  display: flex;
  flex-direction: column;
}
.card-city {
  display: flex;
  flex-direction: column;
}
</style>