<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="6" offset="3">
          <h3 class="text-center">Forgot Password</h3>

          <p class="text-muted mt-3 text-center">
            Please fill in the fields below and we will send you a email to
            reset your password.
          </p>

          <b-alert
            v-if="submission_success"
            show
            variant="success"
            class="mt-3"
          >
            <h5 class="alert-heading">
              <b-icon icon="envelope" class="mr-2"></b-icon>Email has been sent!
            </h5>
            <p>
              Please check you're inbox for our email and follow the link to
              reset your password.
            </p>
            <hr />
            <p class="mb-0 small">
              <b-link :to="{ path: '/' }">Return to login</b-link>
            </p>
          </b-alert>

          <b-card class="my-5 pb-2 shadow-sm" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="input-group-email"
                  label="Email address:"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    placeholder="example@example.com"
                    type="email"
                  ></b-form-input>
                  <b-form-invalid-feedback id="email-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-button type="submit" variant="primary" class="px-5"
                  >Submit</b-button
                >
              </b-form>
            </b-card-body>
          </b-card>

          <p class="text-center my-3 small">
            <b-link :to="{ path: '/' }" class="text-secondary"
              >Return to login</b-link
            >
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "LoginSignUpOptions",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      showAlert: this.$store.state.unAuthorisedAlert,
      showAPIError: false,
      APIErrorText: "",
      showLogoutAlert: this.$store.state.logoutAlert,
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
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$store.state.logoutAlert = false;
      this.showAPIError = false;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.form.email = null;
      this.submission_success = true;
      /*
                const formData = {
                    username: this.form.username,
                    password: this.form.password,
                }
                this.$store.dispatch('login', formData).catch(error => {
                    //console.log(error);
                    this.APIErrorText = error.data.non_field_errors[0];
                    this.showAPIError = true;
                })
                */
    },
  },
};
</script>

<style scoped></style>
