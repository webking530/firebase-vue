<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">

      <SettingsTitle v-bind:title="'ChipIn Account Summary'"></SettingsTitle>

      <b-row class="mb-5">
        <b-col cols="12" class="text-center">

          <img
            src="../../../assets/chipin.svg"
            class="text-center mt-3 mb-3 mx-auto d-block"
            height="31"
          />
          <h3 class="text-light">Revenue: {{ total }}</h3>
          <p class="text-light font-weight-light">
            {{ pending }} Pending | {{ in_transit }} in transit to Bank
          </p>
          <p v-if="next_payment_date" class="text-light font-weight-light">
            Next payment date: {{ next_payment_date }}
          </p>
          <small
            v-if="payout_desc"
            class="font-weight-light mt-0 mb-3 text-center text-light"
            >*&nbsp;{{ payout_desc }}</small
          >
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <!-- Section Heading -->
        <b-col
          cols="12"
          class="text-uppercase text-light font-weight-light mt-4 heading"
        >
          Summary
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light">
          <router-link
            :to="{ name: 'ChipInAccountType' }"
            class="text-light font-weight-light"
          >
            Account Type

            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
            <span class="float-right text-light mr-2">ChipIn</span>
          </router-link>
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <!-- Section Heading -->
        <b-col
          cols="12"
          class="text-uppercase text-light font-weight-light mt-4 heading"
        >
          Accounting
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light">
          <router-link
            :to="{ name: 'ChipInTransactions' }"
            class="text-light font-weight-light"
          >
            Transactions
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light">
          <router-link
            :to="{ name: 'ChipInSubscriptions' }"
            class="text-light font-weight-light"
          >
            ChipIn / ChipIn+ Subscriptions
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light">
          <router-link
            :to="{ name: 'ChipInPayouts' }"
            class="text-light font-weight-light"
          >
            Payout History
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <!-- Section Heading -->
        <b-col
          cols="12"
          class="text-uppercase text-light font-weight-light mt-4 heading"
        >
          Payment
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light">
          <router-link
            :to="{ name: 'ChipInBankAccounts' }"
            class="text-light font-weight-light"
          >
            Bank Account Settings
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </router-link>
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <!-- Section Heading -->
        <b-col
          cols="12"
          class="text-uppercase text-light font-weight-light mt-4 heading"
        >
          Settings
          <hr class="bg-light" />
        </b-col>

        <!-- Section link -->
        <b-col cols="12" class="text-light font-weight-light mb-4">
          <a
            target="_blank"
            :href="account_link"
            class="text-light font-weight-light"
          >
            Manage ChipIn Account Details
            <img
              src="../../../assets/arrow-right.svg"
              class="float-right arrow"
              alt="Right arrow"
            />
          </a>
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
  name: "Account",
  data() {
    return {
      loaded: false,
      access: null,
      account_type: null,
      pending: "0.00",
      balance: "0.00",
      in_transit: "0.00",
      total: "0.00",
      cleared: "0.00",
      next_payment_date: null,
      account_link: null,
      payout_enabled: false,
      payout_desc: null,
      account_disabled: false,
      account_verified: false,
      external_account_needed: false,
      personal_information_needed: false,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
  },
  methods: {
    ...mapActions("Chipinmanager", ["account"]),
  },
  beforeMount() {
    this.account()
      .then((res) => {
        console.log(res.data);
        this.pending = res.data.pending;
        this.balance = res.data.available;
        this.cleared = res.data.cleared;
        this.total = res.data.total;
        this.in_transit = res.data.in_transit;
        this.next_payment_date = res.data.next_payment_date;
        this.account_link = res.data.account_link;
        this.account_type = res.data.account_type;
        this.access = res.data.access;

        this.payout_enabled = res.data.payout_enabled;
        this.payout_desc = res.data.payout_desc;
        this.account_disabled = res.data.account_disabled;
        this.account_verified = res.data.account_verified;
        this.personal_information_needed = res.data.personal_information_needed;
        this.external_account_needed = res.data.external_account_needed;

        this.loaded = true;
      })
      .catch((error) => {
        this.name = "Sorry something went wrong!";
        console.log(error);
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

.title {
  font-size: 48px;
  line-height: 36px;
}

.arrow {
  height: 24px;
}

.label-text {
  font-size: 18px;
}

@media (max-width: 575.98px) {
  .title {
    font-size: 36px;
    line-height: 36px;
  }
}

@media (max-width: 375px) {
  .title {
    font-size: 20px;
    line-height: 24px;
  }

  .username {
    font-size: 18px;
    line-height: 36px;
    color: #fff;
  }

  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }

  .arrow {
    height: 18px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 100;
  }

  .heading {
    font-size: 13px;
    font-weight: 400;
  }

  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }

  .arrow {
    height: 18px;
  }
}
</style>
