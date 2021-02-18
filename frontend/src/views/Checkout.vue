<template>
  <div class="wrapper">
    <h1>YOUR CART</h1>
    <div class="section-wrapper">
      <section class="cart-container">
        <p>ITEMS</p>
        <hr />
        <Cart />
      </section>

      <form class="submit-form" @submit.prevent="makeOrder">
        <section class="form-section">
          <p>DELIVERY</p>
          <hr />
          <label>Name</label>
          <input type="text" v-model="customer.name" required />
          <label>Street Adress</label>
          <input type="text" v-model="customer.adress.street" required />
          <label>City</label>
          <input type="text" v-model="customer.adress.city" required />
          <label>Zipcode</label>
          <input type="text" v-model="customer.adress.zip" required />
        </section>

        <section class="form-section">
          <p>PAYMENT</p>
          <hr />
          <label>Card Owner</label>
          <input type="text" />
          <label>Card Number</label>
          <input type="text" />
          <label>Valid until</label>
          <input type="text" />
          <label>CCV</label>
          <input type="text" />
          <button class="submit-btn" type="submit">
            Make Order
            <span class="material-icons"> mouse </span>
          </button>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cart from "@/components/Cart";
export default {
  data() {
    return {
      customer: {},
    };
  },
  created() {
    if (this.user.email) {
      this.customer = this.user;
      console.log("logged in user", this.customer);
    } else {
      this.customer = {
        email: "",
        name: "",
        role: "",
        adress: { street: "", city: "", zip: "" },
        payment: { cardOwner: "", cardNumber: "", validUntil: "", cvv: "" },
        orderHistory: [],
        password: "",
        _id: "",
      };
    }
  },
  components: {
    Cart,
  },
  computed: {
    ...mapGetters(["user"]),
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

        this.$store.dispatch("makeOrder", {
          items: list,
          user: this.customer,
        });
        this.$router.push("/thanks");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_global.scss";

input {
  @include input-standard;
}

.wrapper {
  display: flex;
  align-items: center;
  text-align: center;
}

.section-wrapper {
  display: flex;
  justify-content: center;
}
section {
  margin: 1.5rem;
}

.submit-btn {
  margin: 0.2rem 0 0 auto;
  padding: 0.3rem 1.2rem;
  font-weight: 0;
  font-size: 14px;
  color: white;
  background: black;
  display: flex;
  border-radius: 15px;
  align-items: center;
  padding: 0.2rem 0.1rem;
}
.submit-btn:hover {
  transform: scale(1.1);
  padding: 5px;
}

.submit-btn :visited {
  outline: none;
}
.submit-btn :focus {
  outline: none;
}

.submit-form {
  display: flex;

  .form-section {
    display: flex;
    flex-direction: column;
  }
  p {
    align-self: center;
  }
}
.cart-container {
  background-color: gainsboro;
  padding: 0 2rem 2rem 2rem;
}
.material-icons {
  font-size: 15px;
}
</style>