<template>
  <div>
    <b-container class="mt-5 header-spacing" v-id="loaded">
      <b-row>
        <b-col cols="12" offset="0" sm="12" offset-sm="0" md="6" offset-md="3">
          <b-row class="mb-5">
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;a</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;b</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;c</b-badge
              >
            </b-col>
            <b-col :v-if="isCreator" class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;d</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;e</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge
                pill
                variant="warning"
                class="w-100 text-warning text-small"
                >&nbsp;f</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;g</b-badge
              >
            </b-col>
          </b-row>

          <h2 class="text-center text-light font-weight-light">
            <b class="font-weight-bold">Rockin’</b> in a free world!
          </h2>

          <p class="mt-4 text-light font-weight-lighter text-center">
            I can see you’re here from
            <span
              v-if="
                country.name === 'United Kingdom' ||
                country.name.includes('United')
              "
              >the</span
            >
            <b>{{ country.name }}?</b>
          </p>

          <p class="mt-4 text-light font-weight-lighter text-center">
            Thats great! Can you confirm <b>what city you’re in</b> so we can
            tailor your experience?
          </p>

          <b-card class="my-5 pb-2 shadow-sm bg-dark text-center" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="input-group-username"
                  label=""
                  label-for="username"
                  class=""
                >
                  <b-form-input
                    size="lg"
                    class="bg-dark text-light"
                    id="username"
                    v-model="$v.form.text.$model"
                    :state="validateState('text')"
                    placeholder=""
                    type="text"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="!api_error"
                    id="username-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                  <b-form-invalid-feedback
                    v-if="api_error"
                    id="username-feedback"
                    >{{ api_error_msg }}</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-button
                  v-if="submission_success"
                  block
                  size="lg"
                  variant="outline-light"
                  class="my-3 px-5"
                >
                  {{ city.name }}, {{ county.name }}, {{ country.name }}
                </b-button>

                <b-button
                  size="lg"
                  type="submit"
                  variant="info"
                  class="my-5 px-5"
                  >Submit</b-button
                >
                <br />
                <b-button
                  size="lg"
                  variant="outline-light"
                  :to="{ name: 'OnboardingGenderDOB' }"
                  class="px-5"
                  >Skip</b-button
                >
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "OnboardingAccount",
  mixins: [validationMixin],
  data() {
    return {
      loaded: false,
      country: { id: null, name: null },
      county: { id: null, name: null },
      city: { id: null, name: null },
      form: {
        text: null,
      },
      api_error: false,
      api_error_msg: null,
      submission_success: false,
    };
  },
  validations: {
    form: {
      text: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Onboarding", ["location", "get_location", "update_account"]),
    validateState(name) {
      if (this.api_error) {
        return false;
      } else {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      }
    },
    onSubmit() {
      this.api_error = false;
      this.api_error_msg = null;

      let campaign_code = this.getCampaignCode;

      if (!this.submission_success) {
        this.$v.form.$touch();

        if (this.$v.form.$anyError) {
          return;
        }

        let formData = this.form;

        formData["device_id"] = "kjnjnxjkankjsnj";
        formData["country"] = this.country.id;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.location(formData)
          .then((res) => {
            console.log(res.data);
            this.country = res.data.current_country;
            this.county = res.data.current_county;
            this.city = res.data.current_city;
            this.submission_success = true;
          })
          .catch((error) => {
            console.log(error.data);
            this.api_error = true;
            this.api_error_msg = error.data.errors[0];
          });
      } else {
        let formData = {};

        formData["device_id"] = "kjnjnxjkankjsnj";
        formData["country"] = this.country.id;
        formData["county"] = this.county.id;
        formData["city"] = this.city.id;
        formData["text"] = this.form.text;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.location(formData)
          .then((res) => {
            //console.log(res.data)
            res;
            this.$store.country = this.country;
            this.$store.county = this.county;
            this.$store.city = this.city;
            // go to next screen
            this.$router.push({ name: "OnboardingGenderDOB" });
          })
          .catch((error) => {
            console.log(error.data);
            this.api_error = true;
            this.api_error_msg = error.data.errors[0];
          });
      }
    },
  },
  computed: {
    ...mapGetters("Onboarding", [
      "isCreator",
      "getUserType",
      "getCountry",
      "getCampaignCode",
    ]),
  },
  created() {
    this.loaded = false;

    this.get_location()
      .then((res) => {
        //console.log(res.data)
        res;
        this.country = res.data.current_country;
        // store email
        // go to next screen
        this.loaded = true;
      })
      .catch((error) => {
        console.log(error.data);
        this.api_error = true;
        this.api_error_msg = error.data.errors[0];
      });
  },
};
</script>

<style scoped>
.header-spacing {
  margin-top: 120px !important;
}

.text-small {
  font-size: 0.01em;
}

.badge-pill {
  padding: 0.001em;
}
</style>
