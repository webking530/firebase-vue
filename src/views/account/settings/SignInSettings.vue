<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">
      <SettingsTitle
        v-bind:title="'Sign-In, Password & Security'"
      ></SettingsTitle>

      <b-row class="label-text">
        <SectionHeading v-bind:name="'Sign-In Settings'"></SectionHeading>

        <b-col cols="12">
            <p class="text-light font-weight-light">
            Sign In type&nbsp;<span class="float-right capitalize">{{
              get_sign_in_type
            }}</span>
            </p>
          <hr class="bg-light" />
        </b-col>

        <b-col cols="12">
            <p class="text-light font-weight-light">
            Last Login Date&nbsp;
            <span class="float-right">
              {{ profile.last_login }}
            </span>
            </p>

        </b-col>

      </b-row>

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'Sign-In Credentials'"></SectionHeading>

        <b-col cols="12">

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0"
            label="Username:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
            :state="username_error"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.username"
              v-bind:placeholder_text="`Enter username`"
              v-bind:type="'username'"
              @change="send"
              :state="username_error"
              class="input-width"
            ></SettingsTextInput>
              <b-form-invalid-feedback
                v-if="username_error_msg"
                >{{username_error_msg}}
                </b-form-invalid-feedback>
          </b-form-group>
          <hr class="bg-light" />

        </b-col>

        <b-col cols="12">

          <b-form-group
            class="my-0 py-0"
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Email:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
            :state="email_error"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.email"
              v-bind:placeholder_text="`Enter email`"
              v-bind:type="'email'"
              @change="send"
              :state="email_error"
              class="input-width"
            ></SettingsTextInput>

              <b-form-invalid-feedback
                v-if="email_error_msg"
                >{{email_error_msg}}
                </b-form-invalid-feedback
              >

          </b-form-group>
          <hr class="bg-light" />

          <!-- <b-form-group>
            <SettingsRadioInput v-model="selected" :options="options" :selected="selected" @change="test"></SettingsRadioInput>
          </b-form-group> -->

        </b-col>


        <b-col cols="12">

          <router-link
            :to="{ name: 'ChangePassword' }"
            class="
                menu-dark
                font-weight-light
                d-block
              "
          >
            Change Password
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>

        </b-col>

      </b-row>
      

    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SettingsTextInput from "../../../components/settings/text-input.vue";
// import SettingsRadioInput from '../../../components/settings/radio-button-input.vue'
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";

export default {
  name: "SignInSettings",
  data() {
    return {
      email_error: false,
      email_error_msg: null,
      username_error: false,
      username_error_msg: null,
      loaded: false,
      profile: {
        sign_in_type: null,
        username: null,
        email: null,
        last_login: null,
      },
      // selected: 'third',
      // options: [
      //     { text: 'Toggle this custom radio', value: 'first' },
      //     { text: 'Or toggle this other custom radio', value: 'second' },
      //     { text: 'This one is Disabled', value: 'third', disabled: true },
      // ]
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsTextInput,
    // SettingsRadioInput,
  },
  computed: {
    get_sign_in_type() {
      if (!this.loaded) {
        return "";
      } else {
        return this.profile.sign_in_type;
      }
    },
  },
  methods: {
    // test(value) {
    //   console.log(value);
    // },
    ...mapActions("Account", {
      get: "signinsettings",
    }),
    ...mapActions("Onboarding", {
      validate_username: "validate_username",
      validate_email: "validate_email",
      update: "set_username",
    }),
    send(event, name) {
      this.username_error = false
      this.username_error_msg = null
      this.email_error = false
      this.email_error_msg = null
      var data = {};
      data['device_id'] = 'hfhfjddkdns'
      data[name] = event;

      if (name === "email") {
        this.validate_email(data)
          .then((res) => {
            res;

            this.update(data)
              .then((res) => {
                res;
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error)
            this.email_error = true
            this.email_error_msg = error.data.errors[0] 
          });
      } else if (name === "username") {
        this.validate_username(data)
          .then((res) => {
            res;

            this.update(data)
              .then((res) => {
                res;
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
            this.username_error = true
            this.username_error_msg = error.data.errors[0] 
          });
      }
    },
  },
  mounted() {
    this.get()
      .then((res) => {
        this.profile = res.data;
        this.loaded = true;
      })
      .catch((error) => {
        console.log(error);
        this.$router.replace("/error");
        //console.log(error);
      });
  },
};
</script>

<style scoped>
.normal-text {
  font-size: 1em;
}
.capitalize {
  text-transform: capitalize;
}
.menu-dark {
  background: #000;
  color: #fff;
  border-radius: 0;
}

.menu-light {
  color: #9b9b9b;
}
.menu-light-bg {
  background: #9b9b9b;
}

.input-height-auto {
  height: auto !important;
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
</style>
