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
      @click="logInWithGoogle"
    >
      <img
        src="../../assets/auth/google.svg"
        class="move-up google-image"
        width="24"
        alt="Email Icon"
      />
      {{ text }} with Google
    </b-button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  props: ["text"],
  name: "googleLogin",
  methods: {
    ...mapActions("Auth", ["login_sso"]),
    ...mapMutations("Auth", ["setShowHomeOverlay"]),
    logInWithGoogle() {
      this.$gAuth
        .signIn()
        .then((response) => {
          let access_token = null;

          let res = Object.keys(response);

          for (const key of res) {
            let inner = Object.keys(response[key]);

            for (const ikey of inner) {
              if (ikey === "access_token") {
                access_token = response[key][ikey];
              }
            }
          }

          if (!access_token) {
            this.$parent.$data.responseMsg = "Sorry there was a problem";
            this.$parent.$data.responseClass = "text-danger";
            return;
          }

          let sso_data = {
            backend: "google-oauth2",
            token: access_token,
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

          this.$router.push("/");
        })
        .catch((error) => {
          console.log("error", error);
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

.google-image {
  margin-right: 12px;
}
</style>
