<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">
      <SettingsTitle v-bind:title="'ChipIn Account Type'"></SettingsTitle>

      <b-row>
        <b-col>
          <p class="text-light font-weight-light mb-3">
            Trackd’s ChipIn<sup>®</sup> function allows artists to receive
            discretionary donations (tips) with ChipIn or charge a subscription
            to lock your content with ChipIn+. <br />
            <router-link :to="{ name: 'ChipIn' }" class="text-info"
              >More information is available here</router-link
            >
          </p>
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'Select Account Type'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Enable ChipIn (Donations)
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="chipin_account_type"
            
            :truevalue="chipin_account_type === 'chipin'"
            :custom_true_value="'chipin'"
            @change="chipin_update"

          >
          </SettingsToggleSwitch>
        </b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Enable ChipIn+ (Subscriptions)
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="chipin_account_type"
            
            :truevalue="chipin_account_type === 'chipin_plus'"
            :custom_true_value="'chipin_plus'"
            @change="chipin_plus_update"
          >
          </SettingsToggleSwitch>
        </b-col>

        <b-col cols="12">
          <router-link
            :to="{ name: 'ChipInPlusSettings' }"
            class="
                menu-dark
                font-weight-light
              "
            v-bind:class="{ disabled: chipin_account_type != 'chipin_plus' }"
          >
            <!-- If chipin user add logic -->
            ChipIn+ Settings
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
import SettingsToggleSwitch from "../../../components/settings/toggle-switch.vue"

export default {
  name: "ChipInAccountType",
  data() {
    return {
      loaded: false,
      chipin_account_type: null,
      user_id: null,
      chipin_account_options: [{ value: "", text: "" }],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsToggleSwitch,
  },
  methods: {
    ...mapActions("Account", ["accountsettings", "updateaccountsettings"]),
    update() {
      // console.log(e)
      let data = {};
      data["chipin_account_type"] = this.chipin_account_type;

      this.updateaccountsettings(data).then((res) => {
        console.log(res.data);
      });
    },

    chipin_update(e) {
      this.chipin_account_type = e
      this.update()
    },

    chipin_plus_update(e) {

      console.log(e)

      this.chipin_account_type = e
      this.update()
    }
  },
  mounted() {
    this.accountsettings().then((res) => {
      console.log(res.data);
      this.chipin_account_type = res.data.chipin_account_type;
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
.bg-menu-light {
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
