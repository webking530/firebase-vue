<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container class="mb-5">
      
        <SettingsTitle v-bind:title="'Bank Accounts'"></SettingsTitle>

        <b-row>
          <b-col cols="12">
        
        <p class="text-light">
          Please fill in the form below to add a bank account.
        </p>

        <b-form
          @submit.stop.prevent="addBankAccount"
          class="text-left text-white mt-3"
        >
          <b-alert v-if="error" show variant="danger">
            <h4 class="alert-heading">Error</h4>
            <p class="alert-danger">
              {{ error }}
            </p>
          </b-alert>

          <div class="row">
            <div class="col-12 col-md-4">
              <b-form-group label="Account Type" label-for="account_type">
                <b-form-select
                  id="account_type"
                  name="account_type"
                  v-model="$v.form.account_type.$model"
                  :options="options.account_type"
                  :state="validateState('account_type')"
                  class="select-input"
                ></b-form-select>

                <b-form-invalid-feedback
                  >This is a required field.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-12 col-md-8">
              <b-form-group label="Account Name" label-for="account_name">
                <b-form-input
                  id="account_name"
                  name="account_name"
                  placeholder="Joe/Jane Bloggs"
                  v-model="$v.form.account_name.$model"
                  :state="validateState('account_name')"
                  class="text-input"
                ></b-form-input>

                <b-form-invalid-feedback
                  >This is a required field</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-12 col-md-6">
              <b-form-group label="Account Number" label-for="account_number">
                <b-form-input
                  id="account_number"
                  name="account_number"
                  placeholder="00000000000"
                  v-model="$v.form.account_number.$model"
                  :state="validateState('account_number')"
                  class="text-input"
                ></b-form-input>

                <b-form-invalid-feedback
                  >This is a required field</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-12 col-md-6">
              <b-form-group
                label="Routing Number/Sort Code"
                label-for="routing_number"
              >
                <b-form-input
                  id="routing_number"
                  name="routing_number"
                  placeholder="00000000000"
                  v-model="$v.form.routing_number.$model"
                  :state="validateState('routing_number')"
                  class="text-input"
                ></b-form-input>

                <b-form-invalid-feedback
                  >This is a required field</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-12 col-md-6">
              <b-form-group label="Account Country" label-for="country">
                <b-form-select
                  id="country"
                  name="country"
                  v-model="$v.form.country.$model"
                  :options="options.country"
                  :state="validateState('country')"
                  class="select-input"
                ></b-form-select>

                <b-form-invalid-feedback
                  >This is a required field.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>

            <div class="col-12 col-md-6">
              <b-form-group label="Account Currency" label-for="currency">
                <b-form-select
                  id="country"
                  name="country"
                  v-model="$v.form.currency.$model"
                  :options="options.currency"
                  :state="validateState('currency')"
                  class="select-input"
                ></b-form-select>

                <b-form-invalid-feedback
                  >This is a required field.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>
          </div>

          <b-form-group class="text-center mt-2">
            <b-button type="submit" variant="mx-auto mt-2 px-4" class="text-light submit-btn">
              Add Bank Account
            </b-button>
          </b-form-group>
        </b-form>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script src="https://js.stripe.com/v3/"></script>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, requiredUnless } from "vuelidate/lib/validators";
import SettingsBanner from "../../../../components/settings/Banner";
import SettingsTitle from "../../../../components/settings/Title";


let stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);
let elements = stripe.elements();
let card = undefined;

export default {
  name: "Account",
  mixins: [validationMixin],
  data() {
    return {
      error: null,
      form: {
        account_name: null,
        account_number: null,
        routing_number: null,
        country: '',
        currency: '',
        account_type: '',
      },
      options: {
        account_type: [
          {
            id: "individual",
            text: "Personal",
          },
          {
            id: "company",
            text: "Company",
          },
        ],
        currency: [],
        countries: [],
      },
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  computed: {
    RoutingNumberRequired() {
      if (this.currency === "eur") {
        return false;
      } else {
        return true;
      }
    },
  },
  validations: {
    form: {
      account_name: {
        required,
      },
      account_number: {
        required,
      },
      routing_number: {
        required: requiredUnless("RoutingNumberRequired"),
      },
      country: {
        required,
      },
      currency: {
        required,
      },
      account_type: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Chipinmanager", ["add_bankaccount", "get_bankaccount"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    loadData() {
      this.get_bankaccount()
        .then((res) => {
          //console.log(res.data)
          this.options = res.data.options;
        })
        .catch((error) => {
          this.name = "Sorry something went wrong!";
          console.log(error);
        });
    },
    addBankAccount() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.error = null;
      var self = this;

      stripe
        .createToken("bank_account", {
          country: this.form.country,
          currency: this.form.currency,
          routing_number: this.form.routing_number,
          account_number: this.form.account_number,
          account_holder_name: this.form.account_name,
          account_holder_type: this.form.account_type,
        })
        .then(function (result) {
          // Handle result.error or result.token
          if (result.token) {
            self
              .get_bankaccount(result.token.id)
              .then((res) => {
                self.$router.replace({ name: "ChipInBankAccounts" });
              })
              .catch((error) => {
                this.name = "Sorry something went wrong!";
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
};
</script>

<style>

.select-input {
  background: #0E0E0F url("../../../../assets/select-box-arrow.svg") no-repeat right
    0.75rem center/20px 15px !important;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
  text-align: left !important;
  text-align-last: left !important;
}

.text-input {
  background-color: #0E0E0F;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #0E0E0F;
  color: #9b9b9b;
}

.submit-btn {
  border: solid white 1px;
  background-color: transparent;
  width: 185px;
  height: 37px;
}


</style>
