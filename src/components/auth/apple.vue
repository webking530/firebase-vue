<template>
  <div>
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
      @click="logInWithApple"
    >
      <img
        src="../../assets/auth/apple.svg"
        class="mr-2 move-up apple-image"
        height="19"
        alt="Email Icon"
      />
      {{ text }} in with Apple
    </b-button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  props: ["text"],
  name: "appleLogin",
  methods: {
    ...mapActions("Auth", ["login_sso"]),
    ...mapMutations("Auth", ["setShowHomeOverlay"]),
    logInWithApple() {
      window.AppleID.auth
        .signIn()
        .then((response) => {
          if (response.authorization) {
            let sso_data = {
              backend: "apple-id", // apple-id / apple
              token: response.authorization.id_token,
            };
            this.login_sso(sso_data)
              .then((res) => {
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
                console.log(error);

                if (error.data) {
                  if (error.data.errors) {
                    this.$parent.$data.responseMsg = error.data.errors[0];
                    this.responseClass = "text-danger";
                  } else if (error.data.non_field_errors) {
                    this.$parent.$data.responseMsg =
                      error.data.non_field_errors[0];
                    this.$parent.$data.responseClass = "text-danger";
                  }
                } else {
                  this.$parent.$data.responseMsg =
                    "Sorry something went wrong.";
                  this.$parent.$data.responseClass = "text-danger";
                }
              });
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.data) {
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
          } else {
            this.$parent.$data.responseMsg = "Sorry something went wrong.";
            this.$parent.$data.responseClass = "text-danger";
          }
        });
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

.apple-image {
  padding-right: 10px;
}
</style>
