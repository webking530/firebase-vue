<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      
        <SettingsTitle v-bind:title="'Bank Accounts'"></SettingsTitle>
        
        <b-row>
          <b-col cols="12">

          <small class="clear d-md-none font-weight-light text-light"
            >*table may be scrollable left - right</small
          >

        <p class="text-center pb-0">
        <router-link
          :to="{ name: 'ChipInAddBankAccount' }"
          class="btn btn-info mb-5 text-center d-inline-block px-4 py-2 mx-auto  btn-rounded"
        >
          Add Bank Account
        </router-link></p>

        <p class="text-light text-warning text-center" v-if="!accounts">
          Please add a bank account in order to be able to receive ChipIn
          payments.
        </p>

          <b-table
            class="table text-light mt-3"
          v-if="accounts"
          :items="accounts"
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
import SettingsBanner from "../../../../components/settings/Banner";
import SettingsTitle from "../../../../components/settings/Title";

export default {
  name: "Account",
  data() {
    return {
      loaded: false,
      accounts: [],
      fields: [
        { key: "account_holder_name", label: "Account Name" },
        { key: "bank_name", label: "Bank Name" },
      ],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  methods: {
    ...mapActions("Chipinmanager", ["bankaccounts"]),
  },
  beforeMount() {
    this.bankaccounts()
      .then((res) => {
        console.log(res.data);
        this.accounts = res.data.results;
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
.btn-rounded {
  border-radius: 10px;
  text-transform: uppercase;
}
</style>
