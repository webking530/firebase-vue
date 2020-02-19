<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      
        <SettingsTitle v-bind:title="'Payments'"></SettingsTitle>
        
        <b-row>
          <b-col cols="12">

          <small class="clear d-md-none font-weight-light text-light"
            >*table may be scrollable left - right</small
          >

          <b-table
            class="table text-light mt-3"
          v-if="payments"
          :items="payments"
          :fields="fields"
        >
          <template v-slot:cell(username)="row">
            <router-link
                :to="{ name: 'ArtistUsername', params: { id: row.username } }"
                class="text-light d-block font-weight-light"
              >
                {{ row.username }}
              </router-link>
          </template>
        </b-table>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";

export default {
  name: "Payments",
  data() {
    return {
      loaded: false,
      payments: [],
      fields: [
        { key: "username", label: "Made By" },
        { key: "location", label: "Location" },
        { key: "amount", label: "Amount" },
        { key: "status", label: "Status" },
      ],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  methods: {
    loadData() {
      let token = null;

      try {
        token = this.$store.getters.getToken.access;
      } catch (err) {
        this.$router.replace({ name: "auth-error" });
      }

      //localStorage.getItem('accessToken')
      let headers = {
        Authorization: "JWT " + token,
      };

      axios
        .get("/chipin/account/payments/", { headers: headers })
        .then((res) => {
          //console.log(res.data)
          this.payments = res.data.results;
          this.loaded = true;
        })
        .catch((error) => {
          this.name = "Sorry something went wrong!";
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.loadData();
  },
};
</script>
