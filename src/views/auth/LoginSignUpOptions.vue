<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" lg="6" offset-lg="3" offset-md="3">
          <h3 class="text-center">Login</h3>

          <b-card class="my-5 pb-2 shadow-sm" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="loginSubmit">
                <b-form-group
                  id="input-group-username"
                  label="Username:"
                  label-for="username"
                >
                  <b-form-input
                    id="username"
                    v-model="$v.form.username.$model"
                    :state="validateState('username')"
                  ></b-form-input>
                  <b-form-invalid-feedback id="username-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  id="input-group-password"
                  label="Password:"
                  label-for="password"
                >
                  <b-form-input
                    id="password"
                    v-model="$v.form.password.$model"
                    :state="validateState('password')"
                    type="password"
                  ></b-form-input>
                  <b-form-invalid-feedback id="password-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-button type="submit" variant="primary" class="px-5"
                  >Log In</b-button
                >

                <span class="float-right mt-1 p-1">
                  <b-link class="mr-1 small" :to="{ name: 'ForgotUsername' }"
                    >Forgot Username</b-link
                  >
                  /
                  <b-link class="ml-1 small" :to="{ name: 'ForgotPassword' }"
                    >Forgot Password</b-link
                  >
                </span>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>

        <!--
                <b-col cols="12" md="6" lg="6">

                    <h3 class="text-center">Sign Up</h3>

                    <b-card class="my-5 shadow-sm" no-body>
                        <b-card-body class="text-center">

                            <b-row>

                                <b-col cols="6" offset="3">

                                    <b-button :to="{name: 'SignUpPolicyholder'}" variant="outline-primary btn-block" class="my-5">Existing Policyholder</b-button>

                                    <b-button :to="{name: 'SignUpVet'}" variant="outline-primary btn-block" class="my-5">Vetinary</b-button>

                                </b-col>
                            </b-row>
                            
                        </b-card-body>
                        
                    </b-card>

                </b-col>
                -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LoginSignUpOptions",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      showAlert: this.$store.state.unAuthorisedAlert,
      showAPIError: false,
      APIErrorText: "",
      showLogoutAlert: this.$store.state.logoutAlert,
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
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    loginSubmit() {
      this.$store.state.logoutAlert = false;
      this.showAPIError = false;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const formData = {
        username: this.form.username,
        password: this.form.password,
      };
      this.$store.dispatch("login", formData).catch((error) => {
        //console.log(error);
        this.APIErrorText = error.data.non_field_errors[0];
        this.showAPIError = true;
      });
    },
  },
};
</script>

<style scoped></style>
