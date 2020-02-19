<template>
  <b-modal
    id="account-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Account"
  >
    <template #modal-header="">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

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
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;d</b-badge
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
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;f</b-badge
            >
          </b-col>
        </b-row>

        <h2 class="text-left text-light text-title">Fantastic!</h2>

        <h4 class="text-light text-des text-left">
          Please tell me how you’d like to login
        </h4>

        <p class="mt-4 text-light text-fdes text-left">
          Choose a <b>username</b> and <b>password</b>
        </p>

        <b-card class="mb-5 pb-2 shadow-sm bg-dark" no-body>
          <b-card-body>
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group
                id="input-group-username"
                label="Username:"
                label-for="username"
                label-align-left
                class="text-light text-left text-fdes"
              >
                <b-form-input
                  size="lg"
                  class="bg-dark input-box"
                  id="username"
                  v-model="$v.form.username.$model"
                  :state="validateState('username')"
                  placeholder="Enter your username"
                  type="text"
                  autocomplete="false"
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
                id="input-group-password"
                label="Password:"
                label-for="password"
                label-align-left
                class="text-light pt-3 text-left text-fdes"
              >
                <b-form-input
                  size="lg"
                  class="bg-dark input-box"
                  id="password"
                  v-model="$v.form.password.$model"
                  :state="validateState('password')"
                  placeholder="Enter your password"
                  type="password"
                  autocomplete="false"
                ></b-form-input>
                <b-form-invalid-feedback
                  v-if="!api_error"
                  id="password-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
                <b-form-invalid-feedback
                  v-if="api_error"
                  id="password-feedback"
                  >{{ api_error_msg }}</b-form-invalid-feedback
                >
              </b-form-group>

              <div class="text-right">
                <b-button
                  size="lg"
                  type="submit"
                  variant="info"
                  class="mx-auto my-5 px-4 next-btn"
                  >Next</b-button
                >
              </div>
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
  name: "OnboardingAccount",
  mixins: [validationMixin],
  data() {
    return {
      ...mapGetters("Onboarding", { email: "getEmail" }),
      form: {
        username: null,
        password: null,
      },
      api_error: false,
      api_error_msg: null,
      submission_success: false,
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Onboarding", ["validate_email", "create_account"]),
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
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      const formData = this.form;

      formData["device_id"] = "kjnjnxjkankjsnj";
      formData["email"] = this.email();

      this.create_account(formData)
        .then((res) => {
          //console.log(res.data)
          res;
          // go to next screen
          this.$bvModal.hide("account-onboarding-modal");
          this.$bvModal.show("genres-onboarding-modal");
          // this.$router.push({name: 'OnboardingGenres'})
        })
        .catch((error) => {
          console.log(error.data);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
  },
  mounted() {
    //this.$refs['forgot-password'].show()
    this.$bvModal.hide("account-onboarding-modal");
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

.input-box {
  color: #f5a623 !important;
  font-weight: 400 !important;
}

.badge {
  padding: 0 !important;
}
</style>
