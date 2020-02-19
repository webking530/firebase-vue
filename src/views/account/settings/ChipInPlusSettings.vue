<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      <SettingsTitle v-bind:title="'ChipIn+ Settings'"></SettingsTitle>

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'ChipIn+ Pricing'"></SectionHeading>

        <b-col cols="12">
          <b-form-group
            label-class="text-light font-weight-light"
            id="input-group-2"
            label="Subscription Amount:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsSelectInput
              v-model="chipin_plus_subscription"
              :options="chipin_subscription_tiers"
              :type="'chipin_plus_subscription'"
              @change="send"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />
        </b-col>


        <b-col cols="12">
          <router-link
            :to="{ name: 'ChipInPlusSongSettings' }"
            class="text-light menu-dark font-weight-light"
          >
            ChipIn+ Song Settings
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
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";
import SettingsSelectInput from "../../../components/settings/select-input.vue";

export default {
  name: "ChipInPlusSettings",
  data() {
    return {
      loaded: false,
      account_type: null,
      user_id: null,
      lock_all_songs: null,
      chipin_plus_subscription: null,
      chipin_subscription_tiers: [{ value: null, text: "Please select" }],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsSelectInput,
  },
  methods: {
    ...mapActions("Account", ["accountsettings", "updateaccountsettings"]),
    send(event, name) {
      let data = {};
      data[name] = event;

      this.updateaccountsettings(data).then((res) => {
        console.log("response: ", res.data);
      });
    },
  },
  mounted() {
    this.accountsettings().then((res) => {
      this.account_type = res.data.account_type;
      this.chipin_subscription_tiers = this.chipin_subscription_tiers.concat(
        res.data.chipin_subscription_tiers
      );
      this.chipin_plus_subscription = res.data.chipin_plus_subscription;
      this.lock_all_songs = res.data.lock_all_songs;
      this.loaded = true;
    });
  },
};
</script>

<style scoped>
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
.switch-spacing {
  position: relative;
  top: -3px;
}

.label-text {
  font-size: 18px;
}
</style>
