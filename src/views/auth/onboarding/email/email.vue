<template>
  <div>
    <b-container class="mt-5 header-spacing">
      <b-row>
        <b-col cols="12" offset="0" sm="12" offset-sm="0" md="6" offset-md="3">
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
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;g</b-badge
              >
            </b-col>
          </b-row>

          <h2 class="text-center text-light font-weight-normal">
            Inbox the music!
          </h2>

          <h4 class="text-light font-weight-lighter text-center">
            Please enter your email address
          </h4>

          <b-card class="my-5 pb-2 shadow-sm bg-dark text-center" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="input-group-email"
                  label=""
                  label-for="email"
                  class=""
                >
                  <b-form-input
                    size="lg"
                    class="bg-dark text-light"
                    id="email"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    placeholder="Enter your email address"
                    type="email"
                  ></b-form-input>
                  <b-form-invalid-feedback v-if="!api_error" id="email-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                  <b-form-invalid-feedback
                    v-if="api_error"
                    id="email-feedback"
                    >{{ api_error_msg }}</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-button
                  size="lg"
                  type="submit"
                  variant="info"
                  class="my-5 px-5"
                  >Submit</b-button
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
          this.$router.push({ name: "OnboardingEmailAccount" });
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
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
