<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" offest-md="3" lg="6" offset-lg="3">
          <h3 class="text-center">Vetinary Sign Up</h3>

          <p class="text-muted mt-3 text-center">
            Please fill in the fields below and to create your account.
          </p>

          <b-card class="my-5 pb-2 shadow-sm" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="input-group-forename"
                  label="Forename:"
                  label-for="forename"
                >
                  <b-form-input
                    id="forename"
                    v-model="$v.form.forename.$model"
                    :state="validateState('forename')"
                  ></b-form-input>
                  <b-form-invalid-feedback id="forename-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  id="input-group-surname"
                  label="Surname:"
                  label-for="surname"
                >
                  <b-form-input
                    id="surname"
                    v-model="$v.form.surname.$model"
                    :state="validateState('surname')"
                  ></b-form-input>
                  <b-form-invalid-feedback id="surname-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  id="input-group-vetinary-name"
                  label="Vetinary Company Name:"
                  label-for="vetinary-name"
                >
                  <b-form-input
                    id="vetinary-name"
                    v-model="$v.form.vetinary_name.$model"
                    :state="validateState('vetinary_name')"
                  ></b-form-input>
                  <b-form-invalid-feedback id="vetinary-name-feedback"
                    >This is a required field.</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  id="input-group-vetinary-number"
                  label="Vetinary Number:"
                  label-for="vetinary-number"
                >
                  <b-form-input
                    id="vetinary-number"
                    v-model="$v.form.vetinary_number.$model"
                    :state="validateState('vetinary_number')"
                    placeholder="0000001"
                  ></b-form-input>
                  <b-form-invalid-feedback id="vetinary-number-feedback"
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
  name: "Vet",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        forename: null,
        surname: null,
        vetinary_name: null,
        vetinary_number: null,
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
      forename: {
        required,
      },
      surname: {
        required,
      },
      vetinary_name: {
        required,
      },
      vetinary_number: {
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
