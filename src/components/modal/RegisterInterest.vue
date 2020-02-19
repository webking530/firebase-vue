<template>
  <b-modal
    ref="register-interest-modal"
    id="register-interest-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Register Interest"
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

    <h4 class="font-weight-lighter py-3 h2">Register Your Interest</h4>

    <b-row>
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <p class="font-weight-light text-left">
          Fill out the form below and we will be in contact.
        </p>

        <div v-if="responseMsg">
          <p :class="'font-weight-light ' + responseClass">{{ responseMsg }}</p>
        </div>
      </div>

      <div class="col-10 offset-1 col-md-8 offset-md-2 mb-3 pb-3">
        <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
          <b-form-group
            id="input-group-name"
            label="Your Name:"
            label-class="text-left font-weight-light"
            label-for="name"
          >
            <b-form-input
              id="userid"
              class="rect-box"
              v-model="$v.form.name.$model"
              :state="validateState('name')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-left" id="userid-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group
            id="input-group-userid"
            label="Your Email:"
            label-class="text-left font-weight-light"
            label-for="email"
          >
            <b-form-input
              id="email"
              class="rect-box"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-left" id="userid-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group
            id="input-group-userid"
            label="Bio, music and social media links:"
            label-class="text-left font-weight-light"
            label-for="info"
          >
            <b-form-textarea
              id="userid"
              class="rect-box"
              v-model="$v.form.info.$model"
              :state="validateState('info')"
              rows="8"
            ></b-form-textarea>
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
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "RegisterInterest",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: null,
        email: null,
        info: null,
      },
      showAPIError: false,
      responseMsg: null,
      responseClass: null,
      foundStatus: true,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      info: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Chipin", ["chipin_interest"]),
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

      this.chipin_interest(this.form)
        .then((res) => {
          this.form = {
            name: null,
            email: null,
            info: null,
          };
          this.$v.form.$reset();
          this.responseClass = "text-success";
          this.responseMsg = res.data.message;

          let modalId = "register-interest-modal";

          setTimeout(() => {
            this.$bvModal.hide(modalId);
          }, 2000);
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
  mounted() {},
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
