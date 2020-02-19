<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      
        <SettingsTitle v-bind:title="'Payouts'"></SettingsTitle>
        
        <b-row>
          <b-col cols="12">

          <small class="clear d-md-none font-weight-light text-light"
            >*table may be scrollable left - right</small
          >

          <b-table
            class="table text-light mt-3"
          v-if="payouts"
          :items="payouts"
          :fields="fields"
        >
        </b-table>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";

export default {
  name: "Payouts",
  data() {
    return {
      loaded: false,
      payouts: [],
      fields: [
        { key: "arrival_date", label: "Est. Arrival Date" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
      ],
    };
  },
  methods: {
    ...mapActions("Chipinmanager", { api_payouts: "payouts" }),
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  beforeMount() {
    this.api_payouts()
      .then((res) => {
        console.log(res.data);
        this.payouts = res.data.results;
        this.loaded = true;
      })
      .catch((error) => {
        this.name = "Sorry something went wrong!";
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
.table thead th {
  font-weight: 400;
  color: #4a4a4a !important;
}
</style>
