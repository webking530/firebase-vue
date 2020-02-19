<template>
  <div class="container mt-5">
    <div class="row mt-5">
      <div
        v-if="loaded"
        class="col-12 offset-0 col-md-6 offset-md-3 text-center mt-5"
      >
        <h4 class="mb-4 menu-dark font-weight-light text-light">Cards</h4>

        <router-link :to="{ name: 'ChipInAddCard' }" class="btn btn-info mb-5">
          Add Card
        </router-link>

        <b-table class="bg-white" v-if="cards" :items="cards" :fields="fields">
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Cards",
  data() {
    return {
      loaded: false,
      cards: [],
      fields: [
        { key: "brand", label: "Brand" },
        { key: "last4", label: "Last 4" },
        { key: "expiry", label: "Expiry Date" },
        { key: "postcode", label: "PostCode" },
      ],
    };
  },
  methods: {
    ...mapActions("Chipinmanager", { api_cards: "cards" }),
  },
  beforeMount() {
    this.api_cards()
      .then((res) => {
        console.log(res.data);
        this.cards = res.data.results;
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
