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
              <b-badge
                pill
                variant="warning"
                class="w-100 text-warning text-small"
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

          <h2 class="text-center text-light font-weight-normal">Fantastic!</h2>

          <h4 class="text-light font-weight-lighter text-center">
            Please tell me how you’d like to login
          </h4>

          <p class="mt-4 text-light font-weight-lighter text-center">
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
                  class="text-light"
                >
                  <b-form-input
                    size="lg"
                    class="bg-dark text-light"
                    id="username"
                    v-model="$v.form.username.$model"
                    :state="validateState('username')"
                    placeholder=""
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
                  class="text-light pt-3"
                >
                  <b-form-input
                    size="lg"
                    class="bg-dark text-light"
                    id="password"
                    v-model="$v.form.password.$model"
                    :state="validateState('password')"
                    placeholder=""
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

                <div class="text-center">
                  <b-button
                    size="lg"
                    type="submit"
                    variant="info"
                    class="mx-auto my-5 px-5"
                    >Submit</b-button
                  >
                </div>
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
          this.$router.push({ name: "OnboardingGenres" });
        })
        .catch((error) => {
          console.log(error.data);
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
