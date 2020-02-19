<template>
  <div>
    <!-- MODAL -->

    <b-modal
      :ref="'chipin-modal-' + user_id"
      :id="'chipin-modal-' + user_id"
      size="lg"
      content-class="bg-dark text-light text-center"
      centered
      hide-footer
      header-close-variant="light"
    >
      <template #modal-header="{ close }">
        <b-container fluid>
          <b-row class="text-center">
            <!-- Required for equal spacing -->
            <b-col></b-col>

            <b-col cols="8">
              <img
                src="../assets/trackd-icon-colours.svg"
                class="mb-4 mx-auto text-center mt-2"
                height="35"
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
                  height="23"
                  alt="Close"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>

      <b-row>
        <b-col md="6" offset-md="3" class="mb-3">
          <img
            src="../assets/chipin-badge.svg"
            class="m-4 mb-4 d-block mx-auto"
            height="45"
            alt="Logo"
          />

          <h4 class="font-weight-lighter py-3 h2">Support This Artist!</h4>

          <h4 class="font-weight-light mt-2 line-height">
            Make a ChipIn&reg; Donation to <br />
            {{ username }}
          </h4>

          <div class="form-group">
            <label class="mt-3 font-weight-light" for="currency"
              >Select Currency</label
            >
            <b-form-select
              v-model="chipin_form.currency"
              :state="validateState('currency')"
              :options="currencies"
            ></b-form-select>
            <b-form-invalid-feedback class="mt-2"
              >This is a required field.</b-form-invalid-feedback
            >
          </div>

          <p class="mb-2 font-weight-light">Select the amount</p>

          <b-form-checkbox
            v-model="chipin_form.amount"
            value="500"
            name="check-button"
            class="mr-2"
            @change="chipin_form.other = false && show_error == false"
            button
            button-variant="outline-light"
          >
            {{ chosen_currency }}5
          </b-form-checkbox>

          <b-form-checkbox
            v-model="chipin_form.amount"
            value="1000"
            name="check-button"
            class="mx-2"
            @change="chipin_form.other = false && show_error == false"
            button
            button-variant="outline-light"
          >
            {{ chosen_currency }}10
          </b-form-checkbox>

          <b-form-checkbox
            v-model="chipin_form.amount"
            value="2000"
            name="check-button"
            class="mx-2"
            @change="chipin_form.other = false && show_error == false"
            button
            button-variant="outline-light"
          >
            {{ chosen_currency }}20
          </b-form-checkbox>

          <b-form-checkbox
            v-model="chipin_form.other"
            name="check-button"
            class="mx-2"
            button
            button-variant="outline-light"
          >
            Other
          </b-form-checkbox>

          <div v-if="chipin_form.other" class="input-group mb-3 mt-3">
            <div class="input-group-prepend" v-if="chosen_currency">
              <span class="input-group-text" id="basic-addon1">{{
                chosen_currency
              }}</span>
            </div>
            <input
              type="number"
              v-model="chipin_form.other_amount"
              class="form-control"
              placeholder="Enter amount"
              aria-describedby="basic-addon2"
            />
          </div>

          <div
            class="mt-2 d-block invalid-feedback"
            v-if="
              form_submitted &&
              (!chipin_form.other_amount || !chipin_form.amount)
            "
          >
            This is a required field.
          </div>

          <b-form-checkbox
            class="mb-3 mt-3 font-weight-light"
            id="checkbox-1"
            v-model="chipin_form.payment_type"
            value="subscription"
            unchecked-value="one_time"
          >
            Support this Artist! Make this a monthly ChipIn&reg;
          </b-form-checkbox>

          <b-button
            variant="info"
            class="font-weight-light px-3"
            @click="confirmPayment"
            >ChipIn&reg; Now!</b-button
          >
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="10" offset="1">
          <b-row class="text-left">
            <b-col cols="12" sm="2" md="3">
              <img
                src="../assets/songs-start-here.svg"
                class="mt-4 d-block mx-auto"
                height="40"
                alt="Logo"
              />
            </b-col>
            <b-col cols="12" sm="8" md="col">
              <p class="text-muted font-weight-light text-left mt-4 small">
                Songs Start Here is a charitable organisation focused on
                supporting artists, musicians, and songwriters to help fulfil
                their full potential. Donations are optional and do not provide
                app functionality. *Regular ChipIn Supporter payments renew each
                month until cancelled. Only Bank processing fees apply. Trackd
                or Songs Start Here do not take a dime. Full terms are available
                <a
                  target="_blank"
                  class="text-muted font-weight-normal"
                  href=" https://www.songsstarthere.org/privacy-policy-terms"
                >
                  here.</a
                >
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  props: ["user_id", "username", "show_modal"],
  data: function () {
    var opts = {
      spk: process.env.VUE_APP_STRIPE_KEY,
      stripe: undefined,
      connected_account: null,
      chipin_form: {
        amount: null,
        other: false,
        other_amount: null,
        payment_type: "subscription", //'one_time',
        currency: null,
      },
      form_submitted: false,
      form_error: null,
      show_error: false,
      checkout_session_id: null,
      payment_loading: false,
      currencies: [
        { value: null, text: "Please select" },
        { value: "usd", text: "United States Dollar ($)" },
        { value: "gbp", text: "Pound Sterling (£)" },
        { value: "eur", text: "Euro (€)" },
      ],
    };
    Object.assign(opts, this.props);
    return opts;
  },
  mixins: [validationMixin],
  validations: {
    chipin_form: {
      currency: {
        required,
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.chipin_form[name];
      //console.log(this.$v.chipin_form[name])
      return $dirty ? !$error : null;
    },
    confirmPayment() {
      var self = this;

      this.$v.chipin_form.$touch();

      if (!this.chipin_form.amount && !this.chipin_form.other_amount) {
        self.form_submitted = false;
        self.show_error = true;
        return;
      } else if (this.chipin_form.other && this.chipin_form.other_amount < 1) {
        self.form_submitted = false;
        self.show_error = true;
        return;
      }
      if (this.$v.chipin_form.$anyError) {
        self.form_submitted = false;
        return;
      }

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
          "/chipin/api/checkout/trackd-web/",
          {
            payment_type: self.chipin_form.payment_type,
            currency: self.chipin_form.currency,
            amount: self.chipin_amount_payment,
            payment_to: parseInt(payment_to),
          },
          { headers: headers }
        )
        .then((res) => {
          ////console.log(res.data)

          self.checkout_session_id = res.data.checkout_session_id;
          self.connected_account = res.data.connected_account;

          return self.stripe.redirectToCheckout({
            sessionId: res.data.checkout_session_id,
          });
        })
        .catch((error) => {
          error;
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
    chipin_amount() {
      if (this.chipin_form.other || this.chipin_form.amount) {
        return false;
      }

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
        //console.log(res.data.id)

        self.stripe = Stripe(self.spk, { stripeAccount: res.data.id });
      })
      .catch((error) => {
        //console.log(error)
        return;
      });

    //console.log('show_modal: ', self.show_modal)

    if (self.show_modal == "true") {
      self.$refs["chipin-modal-" + self.user_id].show();
    }
  },
};
</script>

<style>
.line-height {
  line-height: 1.45em;
}
</style>
