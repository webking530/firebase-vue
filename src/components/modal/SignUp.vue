<template>
  <b-modal
    id="signup-modal"
    centered
    hide-footer
    title-sr-only
    size="lg"
    content-class="bg-dark text-light text-center pb-5"
    title="Sign Up"
    header-close-variant="light"
  >
    <template #modal-header="{ close }">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

          <b-col cols="8">
            <img
              src="../../assets/trackd-icon-colours.svg"
              class="mx-auto text-center mt-2"
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
                height="19"
                alt="Close"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <h4 class="font-weight-lighter mt-2 pb-3 h2">Create a Free Account</h4>

    <b-row>
      <div class="col-10 offset-1 col-md-8 offset-md-2">
        <GoogleButton v-bind:text="'Connect'"></GoogleButton>
        <FacebookButton v-bind:text="'Connect'"></FacebookButton>
        <AppleButton v-bind:text="'Sign in'"></AppleButton>

        <b-button
          block
          variant="outline-light"
          class="
            login-btn-spacing
            pr-0 pr-md-5
            py-2
            my-2
            font-weight-light
            text-left
          "
          v-b-modal.email-onboarding-modal
          @click="$bvModal.hide('signup-modal')"
        >
          <img
            src="../../assets/auth/email.svg"
            class="mr-2 email-image"
            height="16"
            alt="Email Icon"
          />
          Connect using email
        </b-button>

        <span
          class="
            font-weight-lighter
            text-left text-light
            float-left
            pl-0
            ml-0
            mt-2
            mb-5
            signup-text
          "
        >
          Already enjoying Trackd?
          <a
            class="signup-link"
            v-b-modal.login-modal
            @click="$bvModal.hide('signup-modal')"
            >Login Now</a
          >
        </span>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import FacebookButton from "../auth/facebook.vue";
import GoogleButton from "../auth/google.vue";
import AppleButton from "../auth/apple.vue";

export default {
  name: "SignUp",
  components: {
    FacebookButton,
    GoogleButton,
    AppleButton,
  },
};
</script>

<style>
.signup-text {
  font-size: 15px;
}

.signup-link {
  margin-left: 1px;
  text-decoration: underline;
  color: white;
  font-size: 15px;
}

.signup-link:hover {
  text-decoration: none;
  color: white;
  font-size: 15px;
}

.move-up {
  position: relative;
  top: -2px;
}

.login-btn-spacing {
  padding-left: 5.5em !important;
}

.login-btn-spacing > img {
  filter: invert(0);
}

.login-btn-spacing:hover > img {
  filter: invert(1);
}

.email-image {
  padding-right: 12px;
}

@media (max-width: 575.98px) {
  .login-btn-spacing {
    padding-left: 3.75em !important;
  }
}

@media (max-width: 375px) {
  .login-btn-spacing {
    padding-left: 1.5em !important;
  }
}

@media (max-width: 320px) {
  .login-btn-spacing {
    padding-left: 0.5em !important;
    padding-right: 0 !important;
  }
}
</style>
