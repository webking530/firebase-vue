<template>
  <b-modal
    ref="email-onboarding-modal"
    id="email-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Email"
    v-model="showModal"
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

        <h2 class="text-left text-light text-title">Inbox the music!</h2>

        <h4 class="text-light text-left text-des">
          Please enter your email address
        </h4>

        <br />
        <p class="text-light font-weight-lighter text-left text-fdes">
          Choose your email address below. <br />
          (We won’t share it or spam you!)
        </p>

        <b-card class="my-2 pb-2 shadow-sm bg-dark text-left" no-body>
          <b-card-body>
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group id="input-group-email" label-for="email">
                <b-form-input
                  size="lg"
                  class="bg-dark text-light input-box"
                  id="email"
                  ref="emailInput"
                  v-model="$v.form.email.$model"
                  :state="validateState('email')"
                  placeholder="Enter your email address"
                  type="email"
                  autofocus
                >
                </b-form-input>
                <b-form-invalid-feedback v-if="!api_error" id="email-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
                <b-form-invalid-feedback v-if="api_error" id="email-feedback">{{
                  api_error_msg
                }}</b-form-invalid-feedback>
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
import { mapActions, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "OnboardingEmail",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
      },
      api_error: false,
      api_error_msg: null,
      submission_success: false,
      showModal: false,
    };
  },
  validations: {
    form: {
      email: {
        email,
        required,
      },
    },
  },
  methods: {
    ...mapMutations("Onboarding", ["set_email"]),
    ...mapActions("Onboarding", ["validate_email"]),
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

      this.validate_email(formData)
        .then((res) => {
          console.log(res.data);
          // store email
          this.set_email(this.form);
          // go to next screen
          this.api_error = false;
          res;
          this.$bvModal.hide("email-onboarding-modal");
          this.$bvModal.show("account-onboarding-modal");
          // this.$router.push({name: 'OnboardingEmailAccount'})
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
  },
  watch: {
    showModal: function () {
      console.log(this.$refs.emailInput);
      this.$refs.emailInput.focus();
    },
  },
  mounted() {
    if (this.showModal) {
      this.$refs.emailInput.focus();
    }
    // this.$bvModal.show('email-onboarding-modal')
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
