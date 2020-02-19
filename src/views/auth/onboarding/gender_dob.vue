<template>
  <div>
    <b-container class="mt-5 header-spacing">
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
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;f</b-badge
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

          <h2 class="text-center text-light font-weight-light">
            <b class="font-weight-bold">Hey Girls! Hey Boys!</b> <br />
            Superstar DJ’s... <br />
            Here we go...
          </h2>

          <b-card class="my-3 pb-2 shadow-sm bg-dark text-center" no-body>
            <b-card-body>
              <p class="mt-4 text-light font-weight-lighter text-center">
                Please choose your sex
              </p>

              <div class="row">
                <div class="col">
                  <img
                    v-if="form.gender === 'male'"
                    src="../../../assets/person-selected.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('')"
                  />
                  <img
                    v-else
                    src="../../../assets/person.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('male')"
                  />
                  <p class="text-light font-weight-lighter">Male</p>
                </div>
                <div class="col">
                  <img
                    v-if="form.gender === 'unknown'"
                    src="../../../assets/person-selected.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('')"
                  />
                  <img
                    v-else
                    src="../../../assets/person.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('unknown')"
                  />
                  <p class="text-light font-weight-lighter">
                    Prefer not to say
                  </p>
                </div>
                <div class="col">
                  <img
                    v-if="form.gender === 'female'"
                    src="../../../assets/person-selected.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('')"
                  />
                  <img
                    v-else
                    src="../../../assets/person.svg"
                    alt="Discover Icon"
                    class="mr-2"
                    @click="Gender('female')"
                  />
                  <p class="text-light font-weight-lighter">Female</p>
                </div>
                <div class="col-12">
                  <b-form-invalid-feedback
                    v-if="!api_error & !form.gender"
                    id="gender-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </div>
              </div>

              <p class="mt-4 text-light font-weight-lighter text-center">
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
                  v-if="date_of_birth_day && submission_success"
                  size="lg"
                  type="submit"
                  variant="outline-light"
                  class="my-3 px-5"
                  >{{ date_of_birth_str }}</b-button
                >
                <p
                  v-if="date_of_birth_day && submission_success"
                  class="mt-4 text-light font-weight-lighter"
                >
                  <b>Cool!</b> Born on a {{ date_of_birth_day }} eh?
                </p>

                <b-button
                  v-if="!submission_success"
                  size="lg"
                  type="submit"
                  variant="info"
                  class="my-5 px-5"
                  >Submit</b-button
                >
                <b-button
                  v-if="submission_success"
                  size="lg"
                  type="submit"
                  variant="info"
                  class="my-5 px-5"
                  >Create Account</b-button
                >
              </b-form>
            </b-card-body>

            <p class="text-light font-weight-light">
              <small class="text-light font-weight-light"
                >Anyone over the age of 13 is welcome to use Trackd.</small
              >
            </p>
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
            this.api_error_msg = error.data.errors[0];
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
            this.$router.push("/");
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
      "getCampaignCode",
    ]),
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
