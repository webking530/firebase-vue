<template>
  <b-modal
    id="location-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Location"
  >
    <template #modal-header="">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col>
            <b-button
              size="sm"
              variant="link"
              class="float-right"
              v-b-modal.skills-onboarding-modal
              @click="$bvModal.hide('location-onboarding-modal')"
            >
              <img
                src="../../assets/back-icon.svg"
                class="align-top"
                height="40"
                alt="Back icon"
              />
            </b-button>
          </b-col>

          <b-col cols="8">
            <img
              src="../../assets/trackd-icon-colours.svg"
              class="mb-4 mx-auto text-center mt-2"
              height="35"
              alt="Logo"
            />
          </b-col>

          <b-col class="float-right">
            <!--
            <b-button
              size="sm"
              variant="link"
              class="float-right"
              @click="close()"
            >
              <img
                src="../../assets/section-close.svg"
                class="mx-auto text-right float-right mt-2"
                height="23"
                alt="Close"
              />
            </b-button>
            -->
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-row>
      <b-col cols="10" offset="1" sm="8" offset-sm="2" md="8" offset-md="2">
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
          <b-col class="p-1">
            <b-badge pill variant="info" class="w-100 text-info text-small"
              >&nbsp;d</b-badge
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
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;e</b-badge
            >
          </b-col>
        </b-row>

        <h2 class="text-left text-light text-des">
          <b>Rockin’</b> in a free world!
        </h2>

        <p class="mt-4 text-light text-fdes text-left">
          I can see you’re here from <br />
          the <span v-if="united_location">the</span> <b>{{ country.name }}?</b>
        </p>

        <p class="mt-4 text-light text-fdes-sec text-left">
          <b>Oops!</b> No problem! Here’s an old school way to choose!
        </p>

        <div
          size="lg"
          style="background: transparent; color: #555555;"
          class="tag-box text-sub-loc d-flex ml-2"
        >
          {{ country.name }}
          <span class="ml-3">x</span>
        </div>

        <b-card class="my-5 pb-2 shadow-sm bg-dark text-left" no-body>
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
                  class="bg-white location_text "
                  id="username"
                  v-model="$v.form.text.$model"
                  :state="validateState('text')"
                  placeholder="Choose State"
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

              <b-form-group
                id="input-group-cityname"
                label=""
                label-for="cityname"
                class=""
              >
                <b-form-input
                  size="lg"
                  class="bg-white location_text"
                  id="cityname"
                  v-model="$v.form.text_loc_city.$model"
                  :state="validateState('text_loc_city')"
                  placeholder="Choose City"
                  type="text"
                ></b-form-input>
                <b-form-invalid-feedback
                  v-if="!api_error"
                  id="cityname-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
                <b-form-invalid-feedback
                  v-if="api_error"
                  id="cityname-feedback"
                  >{{ api_error_msg }}</b-form-invalid-feedback
                >
              </b-form-group>
              <b-button
                v-if="submission_success"
                block
                size="lg"
                variant="outline-light"
                class="my-3 px-3 tag-box text-sub"
              >
                {{ city.name }}, {{ county.name }}, {{ country.name }}
              </b-button>

              <b-button
                size="lg"
                type="submit"
                variant="info"
                class="my-5 px-4 next-btn float-right"
                >Next</b-button
              >
              <b-button
                size="lg"
                variant="outline-light"
                class="mx-3 my-5 px-4 next-btn float-right"
                v-b-modal.gender-onboarding-modal
                @click="$bvModal.hide('location-onboarding-modal')"
                >Skip</b-button
              >
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "OnboardingLocation",
  mixins: [validationMixin],
  data() {
    return {
      loaded: false,
      country: { id: null, name: null },
      county: { id: null, name: null },
      city: { id: null, name: null },
      form: {
        text: null,
        text_loc_city: null,
        text_loc_state: null,
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
      text_loc_city: {
        required,
      },
      text_loc_state: {
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
            this.api_error_msg = error.data.message;
          });
      } else {

        let formData = {};

        formData["device_id"] = "kjnjnxjkankjsnj";
        formData["country"] = this.country.id;
        formData["county"] = this.county.id;
        formData["city"] = this.city.id;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.update_account(formData)
          .then((res) => {
            //console.log(res.data)
            res;
            this.$store.country = this.country;
            this.$store.county = this.county;
            this.$store.city = this.city;
            // go to next screen
            this.$bvModal.hide("location-onboarding-modal");
            this.$bvModal.show("gender-onboarding-modal");
            // this.$router.push({name: 'OnboardingGenderDOB'})
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
    united_location() {
      if (this.country) {
        if (this.country.name === "United Kingdom") {
          return true;
        } else if (
          this.country.name !== null &&
          this.country.name.includes("United")
        ) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
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
  mounted() {
    //this.$refs['forgot-password'].show()
    this.$bvModal.hide("location-onboarding-modal");
  },
};
</script>

<style>
.card-body {
  padding: 0 !important;
}
.header-spacing {
  margin-top: 120px !important;
}

.text-small {
  font-size: 0.5em !important;
}

.badge-pill {
  padding: 0.001em;
}

.next-btn {
  border-radius: 10px !important;
}

.badge {
  padding: 0 !important;
}

.text-sub-loc {
  font-size: 17px;
}

div .location_text {
  border-radius: 8px !important;
}

.css-down-arrow::before {
    left: -5px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: #9daac8;
}

.css-down-arrow, .css-down-arrow::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.css-down-arrow {
    position: relative;
    height: 15px;
    width: 15px;
}

.location_text {
  background: url("../../assets/drop-down-arrow-white.svg") right 0.75rem center/8px 10px no-repeat !important;
  font-size: 17px !important;
  line-height: 22px !important;
}
</style>
