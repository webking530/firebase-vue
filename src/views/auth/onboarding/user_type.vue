<template>
  <div>
    <b-container class="mt-5 header-spacing">
      <b-row>
        <b-col cols="12" offset="0" sm="12" offset-sm="0" md="6" offset-md="3">
          <b-row class="mb-5">
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;a</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;b</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;c</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge
                pill
                variant="warning"
                class="w-100 text-warning text-small"
                >&nbsp;d</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;e</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;f</b-badge
              >
            </b-col>
            <b-col class="p-1">
              <b-badge pill variant="info" class="w-100 text-info text-small"
                >&nbsp;g</b-badge
              >
            </b-col>
          </b-row>

          <h2 class="text-center text-light font-weight-light">
            How can Trackd <b class="font-weight-bold">turn up</b> the volume?
          </h2>

          <h4 class="mt-4 text-light font-weight-lighter text-center">
            Are you a Musician, DJ or other Artist?
          </h4>

          <b-card class="my-5 pb-2 shadow-sm bg-dark text-center" no-body>
            <b-card-body>
              <b-form @submit.stop.prevent="onSubmit">
                <b-button
                  size="lg"
                  variant="outline-light"
                  @click="Discover"
                  class="px-5"
                >
                  <img
                    src="../../../assets/discover-icon.png"
                    alt="Discover Icon"
                    class="mr-2"
                  />
                  <b>No!</b> Just show me the music
                </b-button>

                <b-button
                  size="lg"
                  variant="outline-light"
                  @click="Creator"
                  class="px-5 mt-5"
                >
                  <img
                    src="../../../assets/creator-icon.png"
                    alt="Creator Icon"
                    class="mr-2"
                  />
                  <b>Yes!</b> Show me the tools!
                </b-button>
              </b-form>
            </b-card-body>
          </b-card>

          <p class="mt-4 text-light font-weight-lighter text-center">
            Don’t worry, choose one for now, you can do <b>both</b> later!
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "OnboardingAccount",
  data() {
    return {
      api_error: false,
      api_error_msg: null,
      submission_success: false,
    };
  },
  computed: {
    ...mapGetters("Onboarding", ["getCampaignCode"]),
  },
  methods: {
    ...mapActions("Onboarding", ["update_account"]),
    ...mapMutations("Onboarding", {
      onboarding_set_user_type: "set_user_type",
    }),
    ...mapMutations(["storeUserType"]),
    Creator() {
      const formData = {};

      formData["user_type"] = "creator";

      this.update_account(formData)
        .then((res) => {
          //console.log(res.data)
          res;
          // store email
          // go to next screen
          this.onboarding_set_user_type(formData.user_type);
          this.storeUserType(formData.user_type);
          this.api_error = false;
          this.$router.push({ name: "OnboardingSkills" });
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
    Discover() {
      const formData = {};

      formData["user_type"] = "discover";

      let campaign_code = this.getCampaignCode;
      if (campaign_code) {
        formData["campaign_code"] = campaign_code;
      }

      this.update_account(formData)
        .then((res) => {
          //console.log(res.data)
          res;
          // store email
          // go to next screen
          this.onboarding_set_user_type(formData.user_type);
          this.storeUserType(formData.user_type);
          this.api_error = false;
          this.$router.push({ name: "OnboardingLocation" });
        })
        .catch((error) => {
          console.log(error);
          this.api_error = true;
          this.api_error_msg = error.data.errors[0];
        });
    },
  },
};
</script>

<style scoped>
.header-spacing {
  margin-top: 120px !important;
}

.text-small {
  font-size: 0.01em;
}

.badge-pill {
  padding: 0.001em;
}
</style>
