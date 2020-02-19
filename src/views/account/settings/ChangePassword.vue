<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container class="mb-5">
      <SettingsTitle v-bind:title="'Change Password'"></SettingsTitle>

      <form @submit.stop.prevent="Submit">
        <b-row class="mt-3 mb-5 label-text">
          <SectionHeading v-bind:name="'Password Credentials'"></SectionHeading>

          <b-col cols="12">
            <b-form-group
              id="input-group-2"
              label-class="text-light font-weight-light py-0 m-0 "
              label="Current Password:"
              label-for="input-2"
              label-cols="4"
              label-cols-sm="4"
              label-cols-lg="3"
            >
              <b-form-input
                type="password"
                v-model="$v.user.current_password.$model"
                placeholder="Enter current password"
                class="settings-text-input text-light input-width"
                :state="validateState('current_password')"
                v-on:input="resetServerError('current_password')"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.user.current_password.required"
                >This is a required field.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback
                v-if="!$v.user.current_password.minLength"
                >Password must be at least 6 characters
                long.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback v-if="server_errors.current_password">{{
                server_errors.current_password
              }}</b-form-invalid-feedback>
            </b-form-group>
            <hr class="bg-light" />
          </b-col>

          <b-col cols="12">
            <b-form-group
              id="input-group-2"
              label-class="text-light font-weight-light py-0 m-0 "
              label="New Password:"
              label-for="input-2"
              label-cols="4"
              label-cols-sm="4"
              label-cols-lg="3"
            >
              <b-form-input
                type="password"
                v-model="$v.user.new_password.$model"
                placeholder="Enter new password"
                class="settings-text-input text-light input-width"
                :state="validateState('new_password')"
                v-on:input="resetServerError('new_password')"
              ></b-form-input>
              <b-form-invalid-feedback v-if="!$v.user.new_password.required"
                >This is a required field.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback v-if="!$v.user.new_password.minLength"
                >Password must be at least 6 characters
                long.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback v-if="server_errors.new_password">{{
                server_errors.new_password
              }}</b-form-invalid-feedback>
            </b-form-group>
            <hr class="bg-light" />
          </b-col>

          <b-col cols="12">
            <b-form-group
              id="input-group-2"
              label-class="text-light font-weight-light py-0 m-0 "
              label="Confirm New Password:"
              label-for="input-2"
              label-cols="4"
              label-cols-sm="4"
              label-cols-lg="3"
            >
              <b-form-input
                type="password"
                v-model="$v.user.new_password_confirm.$model"
                placeholder="Enter new password"
                class="settings-text-input text-light input-width"
                :state="validateState('new_password_confirm')"
                v-on:input="resetServerError('new_password_confirm')"
              ></b-form-input>
              <b-form-invalid-feedback
                v-if="!$v.user.new_password_confirm.required"
                >This is a required field.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback
                v-if="!$v.user.new_password_confirm.minLength"
                >Password must be at least 6 characters
                long.</b-form-invalid-feedback
              >
              <b-form-invalid-feedback
                v-if="!$v.user.new_password_confirm.sameAsPassword"
                >Passwords must match</b-form-invalid-feedback
              >
              <b-form-invalid-feedback
                v-if="server_errors.new_password_confirm"
                >{{
                  server_errors.new_password_confirm
                }}</b-form-invalid-feedback
              >
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <p
              v-if="success"
              class="mb-3 mt-3 text-success text-left float-left"
            >
              Your password has been changed.
            </p>

            <b-button
              variant="info"
              type="submit"
              size="md"
              class="btn-rounded px-4 mt-3 py-2 float-right"
              >Change password</b-button
            >
          </b-col>
        </b-row>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";

export default {
  name: "ChangePassword",
  mixin: [validationMixin],
  data() {
    return {
      user: {
        current_password: "",
        new_password: "",
        new_password_confirm: "",
      },
      error: false,
      error_heading: "",
      error_text: "",
      server_errors: {
        current_password: null,
        new_password: null,
        new_password_confirm: null,
      },
      success: false,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
  },
  validations() {
    return {
      user: {
        current_password: {
          required,
          minLength: minLength(6),
          serverRequired() {
            return Boolean(!this.server_errors.current_password);
          },
        },
        new_password: {
          required,
          minLength: minLength(6),
          serverRequired() {
            return Boolean(!this.server_errors.new_password);
          },
        },
        new_password_confirm: {
          required,
          sameAsPassword: sameAs("new_password"),
          serverRequired() {
            return Boolean(!this.server_errors.new_password_confirm);
          },
        },
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions("Account", {
      update: "changepassword",
    }),
    validateState(name) {
      if (this.$v.user[name]) {
        const { $dirty, $error } = this.$v.user[name];
        return $dirty ? !$error : null;
      }
    },
    resetServerError(name) {
      if (this.server_errors[name]) {
        this.server_errors[name] = null;
      }
    },
    Submit() {
      this.error = false;

      this.$v.$touch();

      if (this.$v.$anyError) {
        this.error = true;
        return;
      } else {
        const post_data = {
          current_password: this.user.current_password,
          new_password: this.user.new_password,
          new_password_confirm: this.user.new_password_confirm,
        };

        this.update(post_data)
          .then((response) => {
            response;
            this.user.current_password = null;
            this.user.new_password = null;
            this.user.new_password_confirm = null;
            this.$v.$reset();
            this.success = true;
          })
          .catch((error) => {
            // Unauthorised
            if (error.response.status === 401) {
              this.$store.dispatch("logout");
            }

            if (error.response.status === 400) {
              window.scrollTo(document.querySelector("#error").offsetTop, 100);
              this.error = true;
              this.error_heading = "There are errors on the form";
              this.error_text = "Please fix the errors and re-submit the form";

              console.log(error.response.data);
              if (error.response.data) {
                //this.server_errors = error.response.data

                for (var key in error.response.data) {
                  this.server_errors[key] = error.response.data[key][0];
                }
                this.$v.$reset();
                this.$v.$touch();
              }
            }

            console.log(error.response);
          });
      }
    },
  },
};
</script>

<style>
.normal-text {
  font-size: 1em;
}
.capitalize {
  text-transform: capitalize;
}
.btn-rounded {
  border-radius: 10px;
}
.input-height-auto {
  height: auto !important;
}

.settings-text-input {
  background-color: #0E0E0F;
  color: #0E0E0F;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.input-width {
  width: 211px;
}

.label-text {
  font-size: 18px;
}

@media (min-width: 992px) {
  .input-width {
    width: 411px;
  }
}

.form-control:focus {
  background-color: #0E0E0F;
  color: #0E0E0F;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #0E0E0F;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #0E0E0F;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #0E0E0F;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #0E0E0F;
}
</style>
