<template>
  <b-modal
    id="email-login-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Login"
  >
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

    <h4 class="font-weight-lighter py-3 h2">Login using email</h4>

    <b-row>
      <div class="col-10 offset-1 col-md-6 offset-md-3 mb-3 pb-3">
        <div v-if="responseMsg">
          <div v-if="foundStatus === false">
            <p :class="'font-weight-light ' + responseClass">
              Account Not found.
              <a
                class="create-link text-danger text-underline"
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

        <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
          <b-form-group
            id="input-group-username"
            label="Your Email or Username"
            label-class="text-left font-weight-light"
            label-for="username"
          >
            <b-form-input
              id="username"
              class="rect-box"
              v-model="$v.form.username.$model"
              :state="validateState('username')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-left" id="username-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group
            id="input-group-password"
            label="Your Password"
            label-class="text-left font-weight-light"
            label-for="password"
          >
            <b-form-input
              id="password"
              class="rect-box"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
              type="password"
            ></b-form-input>
            <b-form-invalid-feedback class="text-left" id="password-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>

          <span class="float-left mt-1 p-1">
            <b-link
              class="mr-1 text-light font-weight-light forget-link"
              variant="light"
              v-b-modal.forgot-password-modal
              @click="$bvModal.hide('email-login-modal')"
              >Forgot Password?</b-link
            >
          </span>

          <br /><br />

          <b-button
            type="submit"
            variant="outline-light"
            class="px-5 float-left"
            >Log In</b-button
          >
        </b-form>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "LoginEmail",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      showAPIError: false,
      APIErrorText: null,
      responseMsg: null,
      responseClass: null,
      foundStatus: true,
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
    ...mapActions("Auth", ["login"]),
    ...mapMutations("Auth", ["setShowHomeOverlay"]),
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

      this.login(this.form)
        .then((res) => {
          res;
          this.$bvModal.hide("home-overlay-modal");
          this.setShowHomeOverlay(false);
          this.$emit("overlayclosed", false);
          this.$bvModal.hide("email-login-modal");
        })
        .catch((error) => {
          console.log(error);

          if (error.data.errors) {
            this.responseMsg = error.data.errors[0];
            this.responseClass = "text-danger";
            this.foundStatus = false;
          } else if (error.data.non_field_errors) {
            this.responseMsg = error.data.non_field_errors[0];
            this.responseClass = "text-danger";
          } else {
            this.responseMsg = error.data.message;
            this.responseClass = "text-danger";
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
.forget-link {
  text-decoration: none;
}
.rect-box {
  border-radius: 0 !important;
}

.text-underline {
  text-decoration: underline;
}
.text-underline:hover {
  text-decoration: none;
}
</style>
