<template>
  <div class="signup-buttons">
    <div id="fb-root"></div>
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
      @click="loginWithFacebook"
    >
      <img
        src="../../assets/auth/facebook.svg"
        class="mr-2 move-up facebook-image"
        height="19"
        alt="Email Icon"
      />
      {{ text }} with Facebook
    </b-button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "login_signup_social",
  props: ["text"],
  data() {
    return {
      facebook: null,
    };
  },
  methods: {
    ...mapActions("Auth", ["login_sso"]),
    ...mapMutations("Auth", ["setShowHomeOverlay"]),
    loginWithFacebook() {
      window.FB.login((response) => {
        //console.log('Facebook Response: ', response)

        let sso_data = {
          backend: "facebook",
          token: response.authResponse.accessToken,
        };

        this.login_sso(sso_data)
          .then((res) => {
            //console.log('here fb')
            //console.log(res)

            if (res.data.profile.onboarded) {
              this.$bvModal.hide("login-modal");
              this.setShowHomeOverlay(false);
            } else {
              this.$bvModal.hide("login-modal");
              this.$bvModal.show("sso-username-onboarding-modal");
              this.setShowHomeOverlay(false);
            }
          })
          .catch((error) => {
            console.log("error", error);

            if (error.data.errors) {
              this.$parent.$data.responseMsg = error.data.errors[0];
              this.responseClass = "text-danger";
            } else if (error.data.non_field_errors) {
              this.$parent.$data.responseMsg = error.data.non_field_errors[0];
              this.$parent.$data.responseClass = "text-danger";
            } else {
              this.$parent.$data.responseMsg = error.data.message;
              this.$parent.$data.responseClass = "text-danger";
            }
          });
      }, this.params);
    },
  },
};
</script>

<style scoped>
.login-btn-spacing {
  padding-left: 5.5em;
}

.login-btn-spacing > img {
  filter: invert(0);
}

.login-btn-spacing:hover > img {
  filter: invert(1);
}

.facebook-image {
  padding-right: 15px;
  padding-left: 3px;
}
</style>
