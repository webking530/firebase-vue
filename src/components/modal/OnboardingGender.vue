<template>
  <b-modal
    id="gender-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Gender"
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
              v-b-modal.location-onboarding-modal
              @click="$bvModal.hide('gender-onboarding-modal')"
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
              >&nbsp;g</b-badge
            >
          </b-col>
        </b-row>

        <h2 class="text-left text-light text-title">Hey Girls! Hey Boys!</h2>
        <h2 class="text-left text-light text-des" style="">
          Superstar DJ’s...Here we go...
        </h2>

        <b-card class="my-3 pb-2 shadow-sm bg-dark text-left" no-body>
          <b-card-body>
            <p class="mt-4 text-light text-fdes-sec text-left">
              Please choose your sex
            </p>

            <div class="row text-center mx-0 gender_list">
              <div class="col " style="">
                <img
                  v-if="form.gender === 'female'"
                  src='../../assets/person-selected.svg'
                  alt="Discover Icon"
                  class=""
                  @click="Gender('')"
                />
                <img
                  v-else
                  src='../../assets/person.svg'
                  alt="Discover Icon"
                  class=""
                  @click="Gender('female')"
                />
                <p class="text-light text-sub">Female</p>
              </div>
              <div class="col" style=";min-width:150px;">
                <img
                  v-if="form.gender === 'unknown'"
                  src="../../assets/person-selected.svg"
                  alt="Discover Icon"
                  class=""
                  @click="Gender('')"
                />
                <img
                  v-else
                  src='../../assets/person-unknown.svg'
                  alt="Discover Icon"
                  class=""
                  @click="Gender('unknown')"
                />
                <p class="text-light text-sub">Prefer not to say</p>
              </div>
              <div class="col " style="">
                <img
                  v-if="form.gender === 'male'"
                  src='../../assets/person-selected.svg'
                  alt="Discover Icon"
                  class=""
                  @click="Gender('')"
                />
                <img
                  v-else
                  src='../../assets/person.svg'
                  alt="Discover Icon"
                  class=""
                  @click="Gender('male')"
                />
                <p class="text-light text-sub">Male</p>
              </div>
              <div class="col-12">
                <b-form-invalid-feedback
                  v-if="!api_error & !form.gender"
                  id="gender-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
              </div>
            </div>

            <p class="mt-4 text-light text-fdes text-left">
              Finally, please type your <b>birthdate</b>
            </p>

            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group
                id="input-group-username"
                label=""
                label-for="username"
                class=""
              >
                <b-form-input
                  size="lg"
                  class="bg-dark text-light input-box"
                  id="username"
                  v-model="$v.form.text.$model"
                  :state="validateState('text')"
                  placeholder="Type here"
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
                v-if="date_of_birth_day && submission_success"
                size="lg"
                type="submit"
                variant="outline-light"
                class="my-3 px-5 text-sub"
                >{{ date_of_birth_str }}</b-button
              >
              <p
                v-if="date_of_birth_day && submission_success"
                class="mt-4 text-light font-weight-lighter"
              >
                <b>Cool! </b>Born on a {{ date_of_birth_day }} eh?
              </p>

              <p
                class="
                  col-12 col-sm-6
                  my-3
                  px-0
                  float-left
                  text-light text-short
                "
              >
                Anyone over the age of 13 is welcome to use Trackd.
              </p>
              <b-button
                v-if="!submission_success"
                size="lg"
                type="submit"
                variant="info"
                class="my-3 px-4 float-right next-btn"
                >Next</b-button
              >
              <b-button
                v-if="submission_success"
                size="lg"
                type="submit"
                variant="info"
                class="my-3 px-4 next-btn float-right"
                >Next</b-button
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
  name: "OnboardingGender",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        gender: null,
        text: null,
      },
      options: [
        { text: "Male", value: "male" },
        { text: "Prefer not to say", value: "unknown" },
        { text: "Female", value: "female" },
      ],
      date_of_birth_val: null,
      date_of_birth_str: null,
      date_of_birth_day: null,
      api_error: false,
      api_error_msg: null,
      submission_success: false,
    };
  },
  validations: {
    form: {
      gender: {
        required,
      },
      text: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Onboarding", ["update_account", "date_of_birth"]),
    validateState(name) {
      if (this.api_error) {
        return false;
      } else {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      }
    },
    Gender(value) {
      this.form.gender = value;
    },
    onSubmit() {
      this.api_error = false;
      this.api_error_msg = null;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      let campaign_code = this.getCampaignCode;

      if (!this.submission_success) {
        let formData = {};
        formData["device_id"] = "jhshbswhsw";
        formData["text"] = this.form.text;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.date_of_birth(formData)
          .then((res) => {
            console.log(res.data);
            this.date_of_birth_val = res.data.date;
            this.date_of_birth_str = res.data.date_text;
            this.date_of_birth_day = res.data.date_day;
            // store email
            // go to next screen
            this.submission_success = true;
          })
          .catch((error) => {
            console.log(error.data);
            this.api_error = true;
            this.api_error_msg = error.data.message;
          });
      } else {
        const formData = {};
        formData["date_of_birth"] = this.form.gender;
        formData["date_of_birth"] = this.date_of_birth_val;
        formData["onboarded"] = true;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.update_account(formData)
          .then((res) => {
            console.log(res.data);
            // store email
            // go to next screen
            this.$bvModal.hide("gender-onboarding-modal");
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error.data);
            this.api_error = true;
            this.api_error_msg = error.data.message;
          });
      }
    },
  },
  computed: {
    ...mapGetters("Onboarding", [
      "isCreator",
      "getUserType",
      "getCampaignCode",
    ]),
  },
  mounted() {
    //this.$refs['forgot-password'].show()
    this.$bvModal.hide("gender-onboarding-modal");
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
@media (min-width: 575.98px) {
  .gender_list .col{
    padding: 0 !important;
    flex-grow: 0;
    padding-right: 10px;
  }

  .text-des {
    min-width:500px;
  }
}

</style>
