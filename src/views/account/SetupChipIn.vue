<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <div class="container mb-5 text-center">
      <SettingsTitle v-bind:title="'Register for ChipIn'"></SettingsTitle>

      <div class="row mb-5">
        <div class="col-12 mb-5">
          <p class="text-light strapline">
            Register for ChipIn or ChipIn+ today to unlock your profile’s full
            potential.
          </p>
        </div>

        <div class="col-12 mb-5">

        <p
          v-if="error_message"
          class="text-center font-weight-light text-danger py-3"
        >
          {{ error_message }}
        </p>
        
        
          <img
            src="../../assets/chipin.svg"
            class="text-center mt-3 mb-4 mx-auto d-block"
            height="44"
          />
          <p class="text-light font-weight-light">
            Enable your fans to show their appreciation through tipping.
          </p>

          <b-button
            variant="outline-light"
            class="px-5 mx-3 py-2 mt-4 mb-3 rounded-btn text-uppercase"
            target="_blank"
            href="https://faq.trackdmusic.com"
            >Find out more
          </b-button>
          <br />

          <b-button
            variant="info"
            :disabled="register_clicked"
            class="px-5 mx-3 py-2 my-3 rounded-btn text-uppercase"
            @click="Register"
            >Register Now</b-button
          >
        </div>

        <div class="col-12 mb-5">
          <img
            src="../../assets/chipin+.svg"
            class="text-center mt-3 mb-4 mx-auto d-block"
            height="44"
          />
          <p class="text-light font-weight-light">
            Monetize your profile through subscription content locking.
          </p>

          <b-button
            variant="outline-light"
            class="px-5 py-2 mx-3 mt-4 mb-3 rounded-btn text-uppercase"
            target="_blank"
            href="https://faq.trackdmusic.com"
            >Find out more
          </b-button>
          <br />

          <b-button
            variant="info"
            :disabled="register_clicked"
            class="px-5 mx-3 py-2 my-3 rounded-btn text-uppercase"
            @click="Register"
            >Register Now</b-button
          >
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SettingsBanner from "../../components/settings/Banner";
import SettingsTitle from "../../components/settings/Title";

export default {
  name: "SetupChipIn",
  data() {
    return {
      loaded: false,
      register_clicked: false,
      error_message: null,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  methods: {
    ...mapActions("Chipin", ["chipin_register"]),
    Register() {
      this.register_clicked = true;
      this.error_message = null;

      this.chipin_register()
        .then((res) => {
          this.register_clicked = false;
          window.location = res.data.url;
        })
        .catch((error) => {
          console.log(error.data);
          this.error_message = error.data.errors[0];
          this.register_clicked = false;
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.rounded-btn {
  border-radius: 10px;
}

.strapline {
  font-weight: 300;
  font-size: 28px;
  line-height: 30px;
}
</style>
