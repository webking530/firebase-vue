<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" offest-md="3" lg="6" offset-lg="3">
          <h3 class="text-center">Existing Policyholder Sign Up</h3>

          <p class="text-muted mt-3 text-center">
            Please fill in the fields below and to create your account.
          </p>

          <b-card class="my-5 pb-2 shadow-sm" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="input-group-surname"
                  label="Surname:"
                  label-for="surname"
                >
                  <b-form-input
                    id="surname"
                    v-model="$v.form.surname.$model"
                    :state="validateState('surname')"
                    placeholder="Doe"
                  ></b-form-input>
                  <b-form-invalid-feedback id="surname-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  id="input-group-policy-number"
                  label="Policy Number:"
                  label-for="policy-number"
                >
                  <b-form-input
                    id="policy-number"
                    v-model="$v.form.policy_number.$model"
                    :state="validateState('policy_number')"
                    placeholder="0000001"
                  ></b-form-input>
                  <b-form-invalid-feedback id="policy-number-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

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

                <b-form-group> (Further fields required) </b-form-group>
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
  name: "Customer",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        surname: null,
        policy_number: null,
        email: null,
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
      surname: {
        required,
      },
      policy_number: {
        required,
      },
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

      this.$store.state.accessToken = "jhbsbdjde";
      this.$router.replace("/policies");
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
