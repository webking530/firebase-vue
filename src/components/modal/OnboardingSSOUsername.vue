<template>
  <b-modal
    ref="sso-username-onboarding-modal"
    id="sso-username-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Email"
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
            <b-badge
              pill
              variant="warning"
              class="w-100 text-warning text-small"
              >&nbsp;a</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
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

        <h2 class="text-center text-light font-weight-normal">Fantastic!</h2>

        <h4 class="text-light font-weight-lighter text-center text-des">
          Please choose a username
        </h4>

        <br />
        <p class="text-light font-weight-lighter text-left text-fdes">
          Choose your email address below. <br />
          (We won’t share it or spam you!)
        </p>

        <b-card class="my-2 pb-2 shadow-sm bg-dark text-left" no-body>
          <b-card-body>
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group id="input-group-email" class="">
                <label
                  for=""
                  class="font-weight-light text-light text-left float-left"
                  >Choose a username below. <br />(Yes, you can always change it
                  later!)</label
                >
                <b-form-input
                  size="lg"
                  class="bg-dark text-light text-warning"
                  id="username"
                  v-model="$v.form.username.$model"
                  @change="valid_username($event, 'username', false)"
                  :state="validateState('username')"
                  placeholder="Enter username"
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
                size="lg"
                type="submit"
                variant="info"
                class="my-5 px-4 float-right next-btn"
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
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "OnboardingSSOUsername",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: null,
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
    },
  },
  methods: {
    ...mapActions("Onboarding", ["validate_username", "set_username"]),
    validateState(name) {
      if (this.api_error) {
        return false;
      } else {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      }
    },
    valid_username() {
      const formData = this.form;

      formData["device_id"] = "kjnjnxjkankjsnj";

      this.validate_username(formData)
        .then((res) => {
          //console.log(res.data)
          res;
          // store email
          // go to next screen
          this.api_error = false;
          //this.$bvModal.hide("sso-username-onboarding-modal");
          //this.$bvModal.hide("genres-onboarding-modal");
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
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

      this.set_username(formData)
        .then((res) => {
          //console.log(res.data)
          res;
          // store email
          // go to next screen
          this.api_error = false;
          this.$bvModal.hide("sso-username-onboarding-modal");
          this.$bvModal.show("genres-onboarding-modal");
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
  },
  mounted() {
    this.$bvModal.hide("signup-modal");
    this.$bvModal.hide("login-modal");
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
  font-size: 0.3em !important;
}

.badge-pill {
  padding: 0.001em;
}

.badge {
  padding: 0 !important;
}
</style>
