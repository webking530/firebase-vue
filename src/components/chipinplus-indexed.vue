<template>
  <div>
    <!-- MODAL -->

    <b-modal
      :ref="'chipin-plus-modal-' + user_id + '-' + index"
      :id="'chipin-plus-modal-' + user_id + '-' + index"
      size="lg"
      content-class="bg-dark text-light  "
      centered
      hide-footer
      header-close-variant="light"
    >
      <template #modal-header="{ close }">
        <b-container fluid>
          <b-row>
            <b-col class="float-left">
              <img
                src="../assets/trackd-icon-colours.svg"
                class="mb-4 mx-auto text-left mt-2"
                height="25"
                alt="Logo"
              />
            </b-col>

            <b-col class="float-right">
              <b-button
                size="sm"
                variant="link"
                class="float-right"
                @click="close()"
              >
                <img
                  src="../assets/section-close.svg"
                  class="mx-auto text-right float-right mt-2"
                  height="20"
                  alt="Close"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>

      <b-row>
        <b-col class="mb-3" cols="10" offset="1" sm="8" offset-sm="2">
          <b-row class="mb-3">
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;a</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge
                pill
                variant="warning"
                class="w-100 text-warning text-small"
                >&nbsp;b</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge
                pill
                variant="secondary"
                class="w-100 text-secondary text-small"
                >&nbsp;c</b-badge
              >
            </b-col>
          </b-row>

          <div class="row m-0 pb-3 p-0">
            <div style="width: 100%">
              <b-row>
                <div>
                  <b-img
                    v-if="image"
                    rounded="circle"
                    :src="getImagePath(image, { width: 100, height: 100 })"
                    blank-color="#ccc"
                    alt="placeholder"
                    height="100"
                    width="100"
                    class="light-grey-border"
                  ></b-img>
                  <b-img
                    v-else
                    rounded="circle"
                    blank
                    blank-color="#ccc"
                    alt="placeholder"
                    height="100"
                    width="100"
                    class="light-grey-border"
                  ></b-img>
                </div>

                <b-col col class="song-profile-des">
                  <p class="font-weight-light mb-1 mt-2">Subscribe Now to</p>
                  <h5 class="font-weight-normal text-light mb-1 mt-2">
                    {{ username }}
                  </h5>
                  <span class="mt-2"
                    >The track you have selected to play requires a subscription
                    to this Artist to unlock their content</span
                  >
                </b-col>
              </b-row>
            </div>

            <b-button-group class="months-btn">
              <b-button class="month-one">1 Month</b-button>
              <b-button class="month-twelve">12 Months Offer</b-button>
            </b-button-group>

            <div id="chipin-form">
              <h1 class="text-center font-weight-bold text-light mb-0 pb-0">
                {{ price }}
              </h1>
              <p class="text-center p-0 mb-3">
                <small class="text-center font-weight-light p-0 m-0"
                  >(renews every month. Cancel Anytime)</small
                >
              </p>
              <h4 class="text-center text-light mb-0 pb-0">Whats Included?</h4>

              <b-row class="mt-4">
                <b-col>
                  <b-row>
                    <b-col class="included-info" cols="2">
                      <img src="../assets/tick.svg" alt="" />
                    </b-col>
                    <b-col>
                      <p class="font-weight-light mb-1 mt-1 subscription">
                        Access all of this Artist’s music included in your
                        subscription
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3">
                    <b-col class="included-info" cols="2">
                      <img src="../assets/tick.svg" alt="" />
                    </b-col>
                    <b-col>
                      <p class="font-weight-light mb-1 mt-1 subscription">
                        Interact directly with the Artist *
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3 mb-4">
                    <b-col class="included-info" cols="2">
                      <img src="../assets/tick.svg" alt="" />
                    </b-col>
                    <b-col>
                      <p class="font-weight-light mb-1 mt-1 subscription">
                        Access Exclusive Content †
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3 mb-4">
                    <b-col class="included-info" cols="2">
                      <img src="../assets/tick.svg" alt="" />
                    </b-col>
                    <b-col>
                      <p class="font-weight-light mb-1 mt-1 subscription">
                        Stream in browser, iOS app or offline
                      </p>
                    </b-col>
                  </b-row>
                  <b-row class="mt-3 mb-4">
                    <b-col class="included-info" cols="2">
                      <img src="../assets/tick.svg" alt="" />
                    </b-col>
                    <b-col>
                      <p class="font-weight-light mb-1 mt-1 subscription">
                        Support and encourage Artists, fairly.
                      </p>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-container fluid>
        <b-row>
          <b-col
            class="float-left"
            style="display: inline-flex; align-items: center"
          >
            <img
              src="../assets/chipin-plus-badge-full.svg"
              height="25"
              alt="Logo"
            />
          </b-col>

          <b-col class="float-right">
            <p class="text-right mb-0">
              <b-button
                class="px-4 py-2 rounded-btn subscription-btn"
                size="md"
                variant="info"
                @click="confirmPayment"
              >
                Next
              </b-button>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";

export default {
  props: ["user_id", "username", "show_modal", 'index', 'user_image'],
  name: "ChipInPlus",
  mixins: [validationMixin],
  data() {
    return {
      spk: process.env.VUE_APP_STRIPE_KEY,
      stripe: undefined,
      connected_account: null,
      image: null,
      price: null,
      data: {},
      form_error: null,
      checkout_session_id: null,
      payment_loading: false,
    };
  },
  methods: {
    confirmPayment() {
      var self = this;

      let token = null;
      let payment_to = null;

      /*try {
        token = this.$store.getters.getToken.access;
      } catch (err) {
        self.$router.replace({name: 'auth-error'})
      }*/

      payment_to = self.user_id;

      //localStorage.getItem('accessToken')
      // if token set headers otherwise dont
      /*let headers = {
        'Authorization': 'JWT ' + token
      }*/
      let headers = {};

      axios
        .post(
          "/chipin/api/plus/payment/?web=true",
          {
            payment_type: "subscription",
            //"currency": self.chipin_form.currency,
            //"amount": self.chipin_amount_payment,
            payment_to: parseInt(payment_to),
          },
          { headers: headers }
        )
        .then((res) => {
          //console.log(res.data)

          self.checkout_session_id = res.data.checkout_session_id;
          self.connected_account = res.data.connected_account;

          return self.stripe.redirectToCheckout({
            sessionId: res.data.checkout_session_id,
          });
        })
        .catch((error) => {
          self.payment_loading = false;
          return;
        });
    },
  },
  computed: {
    chipin_amount_payment() {
      if (this.chipin_form.other) {
        return Number(this.chipin_form.other_amount) * 100;
      } else {
        return this.chipin_form.amount;
      }
    },
    chosen_currency() {
      if (this.chipin_form.currency) {
        if (this.chipin_form.currency == "gbp") {
          return "£";
        }
        if (this.chipin_form.currency == "eur") {
          return "€";
        }
        if (this.chipin_form.currency == "usd") {
          return "$";
        }
      } else {
        return null;
      }
    },
  },
  beforeMount() {},
  mounted: function () {
    var self = this;

    // GET Connected account

    var account_id = null;

    axios
      .post("/chipin/api/checkout/account/", {
        id: parseInt(self.user_id),
      })
      .then((res) => {
        account_id = res.data.id;
        this.username = res.data.username;
        this.image = res.data.image;
        this.price = res.data.chipin_plus_price;
        //this.$store.dispatch('storePhoto', this.image)

        //self.stripe = Stripe(self.spk, { stripeAccount: res.data.id });
        self.stripe = Stripe(self.spk, { stripeAccount: res.data.id });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  },
};
</script>

<style scoped>
#chipin-form {
  width: 100%;
  margin-top: 10px;
}

#chipin-form > h1 {
  font-weight: 900 !important;
  font-size: 36px;
  line-height: 21px;
  letter-spacing: 0.152972px;
}

#chipin-form > p {
  font-weight: 300 !important;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.152972px;
}

#chipin-form > h4 {
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.152972px;
}

.light-grey-border {
  border: 2px solid #9b9b9b;
}

.red-text {
  color: #ff0000;
}

.dark-text {
  color: #595959;
}

.super-small {
  font-size: 0.7em;
  color: #595959;
}

.rounded-btn {
  border-radius: 10px;
}

.line-height {
  line-height: 1.45em;
}

.included-info {
  display: inline-flex;
  align-items: center;
  float: left;
}

.song-profile-des > p {
  font-weight: 200 !important;
  font-size: 34px;
  line-height: 36px;
}

.song-profile-des > h5 {
  font-weight: 500 !important;
  font-size: 34px;
  line-height: 36px;
}

.song-profile-des > span {
  font-weight: 300 !important;
  font-size: 18px;
  line-height: 24px;
  display: block;
  margin-top: 20px;
}

.months-btn {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
}

.months-btn > button {
  border-radius: 7px;
  font-family: "SFPro";
}

.month-one {
  border-top-right-radius: 7px !important;
  border-bottom-right-radius: 7px !important;
  background: white;
  color: black;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  width: 50%;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-right: -5px;
  z-index: 2;
}

.month-twelve {
  background: black;
  color: white;
  background: rgba(118, 118, 128, 0.12);
  border: 1px solid #ffffff;
  border-left: none;
  width: 50%;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
}

.subscription {
  font-weight: 300 !important;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.152972px;
}

.subscription-btn {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
}
</style>
