<template>
  <div class="container mb-5 mt-5">
    <div class="row mb-5 mt-5">
      <div class="col-12 offset-0 col-md-12 text-center mb-5 mt-5">
        <h4 class="mb-4 menu-dark font-weight-light text-light">Add Card</h4>

        <b-alert v-if="error" show variant="danger">
          <h4 class="alert-heading">Error</h4>
          <p class="alert-danger">
            {{ error }}
          </p>
        </b-alert>

        <div class="col-12 offset-0 col-md-6 offset-md-3 bg-white py-3">
          <div id="card-element"></div>
        </div>

        <b-form-group>
          <b-button
            id="submit-button"
            @click="addCard"
            class="disabled"
            variant="success mx-auto mt-5 px-4"
          >
            Add Card
          </b-button>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>

<script>
let stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);
let elements = stripe.elements();
var cardElement = elements.create("card");

cardElement.on("change", function (event) {
  if (event.complete) {
    // enable payment button
    var element = document.getElementById("submit-button");
    element.classList.remove("disabled");
  } else if (event.error) {
    // show validation to customer
  }
});

import { mapActions } from "vuex";

export default {
  name: "AddCard",
  data() {
    return {
      error: null,
      accounts: [],
    };
  },
  methods: {
    ...mapActions("Chipinmanager", ["cards", "post_cards"]),
    loadData() {
      this.cards()
        .then((res) => {
          //console.log(res.data)
          this.accounts = res.data.accounts;
        })
        .catch((error) => {
          this.name = "Sorry something went wrong!";
          console.log(error);
        });
    },
    addCard() {
      var cardElement = elements.getElement("card");

      this.error = null;

      let self = this;

      stripe.createToken(cardElement).then(function (result) {
        // Handle result.error or result.token
        if (result.token) {
          // send token to server

          self
            .post_cards(result.token.id)
            .then((res) => {
              self.$router.replace({ name: "ChipInCards" });
            })
            .catch((error) => {
              self.name = "Sorry something went wrong!";
              self.error = "Sorry something went wrong!";
            });
        } else if (result.error) {
          // parse error and show to user

          var msg = result.error.message;
          self.error = msg;
        }
      });
    },
  },
  beforeMount() {
    this.loadData();
  },
  mounted: function () {
    cardElement.mount("#card-element");
  },
};
</script>
