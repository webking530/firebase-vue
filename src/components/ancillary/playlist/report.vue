<template>
  <b-modal
    id="report-playlist-modal"
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

          <b-col cols="12">
            <img
              src="../../../assets/trackd-icon-colours.svg"
              class="mb-4 float-right mt-2"
              @click="close()"
              height="35"
              alt="Logo"
            />
            <h4 class="font-weight-lighter text-left h2  mt-5">
              Report Playlist
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-container fluid>
      <b-row>
        <div
          class="col-11 mb-3 pb-3 pl-3
      4"
        >
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
            <b-form-group>
              <b-form-input
                id="username"
                class="text-input"
                size="lg"
                v-model="$v.form.username.$model"
                placeholder="Reason"
                :state="validateState('username')"
              ></b-form-input>
              <b-form-invalid-feedback class="text-left" id="username-feedback"
                >This is a required field.</b-form-invalid-feedback
              >
            </b-form-group>

            <b-button
              type="submit"
              variant="info"
              class="px-4 py-2 mt-3 btn-rounded float-right text-uppercase"
              >Report</b-button
            >
          </b-form>
        </div>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "DuplicatePlaylist",
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

.btn-rounded {
  border-radius: 10px;
}

.text-input {
  background-color: #222222;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #222222;
  color: #9b9b9b;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #9b9b9b;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9b9b9b;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9b9b9b;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #9b9b9b;
}

.b-dropdown-form:focus {
  outline: none !important;
}
</style>
