<template>
  <b-modal
    id="forgot-password-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Login"
  >
    <!-- Header back button -->

    <template #modal-header="{ close }">
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
          </b-col>
        </b-row>
      </b-container>
    </template>

    <h4 class="font-weight-lighter py-3 h2">Forgot Login Details</h4>

    <b-row>
      <div class="col-10 offset-1 col-md-6 offset-md-3">
        <p class="font-weight-light text-left">
          Enter your username or email address below to receive a reminder via
          email
        </p>

        <div v-if="responseMsg">
          <div v-if="foundStatus === false">
            <p :class="'font-weight-light ' + responseClass">
              Account Not found.
              <a
                class="create-link text-danger"
                v-b-modal.signup-modal
                @click="$bvModal.hide('login-modal')"
                >Create Account?</a
              >
            </p>
          </div>
          <div v-else>
            <p :class="'font-weight-light ' + responseClass">
              {{ responseMsg }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-10 offset-1 col-md-6 offset-md-3 mb-3 pb-3">
        <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
          <b-form-group
            id="input-group-userid"
            label="Your Email or Username:"
            label-class="text-left font-weight-light"
            label-for="userid"
          >
            <b-form-input
              id="userid"
              class="rect-box"
              v-model="$v.form.userid.$model"
              :state="validateState('userid')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-left" id="userid-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>

          <b-button
            type="submit"
            variant="outline-light"
            class="px-5 float-left"
            >Submit</b-button
          >
        </b-form>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ForgotPassword",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        userid: null,
      },
      showAPIError: false,
      responseMsg: null,
      responseClass: null,
      foundStatus: true,
    };
  },
  validations: {
    form: {
      userid: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Auth", ["resetpassword"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    Submit() {
      this.showAPIError = false;
      this.responseMsg = null;

      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.resetpassword(this.form)
        .then((res) => {
          this.responseClass = "text-success";
          this.responseMsg = res.data.message;
        })
        .catch((error) => {
          console.log(error);

          if (error.data.non_field_errors) {
            this.responseMsg = error.data.non_field_errors[0];
            this.responseClass = "text-danger";
          } else {
            this.responseMsg = error.data.message;
            this.responseClass = "text-danger";
            this.foundStatus = false;
          }
        });
    },
  },
  mounted() {
    //this.$refs['forgot-password'].show()
    this.$bvModal.hide("email-login-modal");
  },
};
</script>

<style>
.rect-box {
  border-radius: 0 !important;
}
.create-link {
  text-decoration: underline 1px solid #e76e66;
}
</style>
