<template>
  <b-modal
    id="filter-modal"
    centered
    hide-footer
    title-sr-only
    size="lg"
    content-class="bg-dark text-light text-center"
    title="Sign Up"
    header-close-variant="light"
  >
    <template #modal-header="{ close }">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

          <b-col cols="8">
            <img
              src="../../assets/trackd-icon-colours.svg"
              class="mb-4 mx-auto text-center mt-2"
              height="35"
              alt="Logo"
            />
          </b-col>

          <b-col class="float-right">
            <b-button
              size="sm"
              variant="link"
              class="float-right"
              @click="close()"
            >
              <img
                src="../../assets/section-close.svg"
                class="mx-auto text-right float-right mt-2"
                height="23"
                alt="Close"
              />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <h4 class="font-weight-lighter py-3 h2">Filter</h4>

    <b-row class="mb-5 pb-5">
      <div class="col-8 offset-2 col-md-6 offset-md-3">
        <!-- <div>
              <FilterSelector></FilterSelector>
            </div> -->

        <div>
          <b-form-select
            v-model="selected"
            :options="options"
            @change="onChange"
          ></b-form-select>
        </div>
      </div>
    </b-row>

    <b-button
      class="float-right next-button mr-5 mb-4"
      @click="$bvModal.hide('filter-modal')"
      >NEXT</b-button
    >
  </b-modal>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

// import FilterSelector from '../FilterSelector.vue'

export default {
  name: "FilterModal",
  data() {
    return {
      selected: "Show Featured",
      options: [
        { value: "", text: "Trending" },
        { value: "artist", text: "Show Artists" },
        { value: "", text: "Show Feed" },
        { value: "", text: "Show Featured" },
        { value: "playlist", text: "My Playlists" },
        { value: "", text: "Followed Artists" },
        { value: "", text: "Genre" },
      ],
    };
  },
  methods: {
    ...mapActions("Library", ["home_filter"]),
    ...mapMutations("Library", [
      "setSections",
      "setFilteredSections",
      "setFilterApplied",
    ]),

    onChange(selection) {
      if (selection === "") {
        this.setFilterApplied(false);
        this.setFilteredSections([]);
      } else {
        this.home_filter(selection)
          .then((res) => {
            this.setFilterApplied(true);
            this.setFilteredSections(res.data.sections);
          })
          .catch((error) => {
            error;
            this.$router.replace("/error");
            console.log(error);
          });
      }
    },
  },
  // components: { FilterSelector },
};

// setTimeout(function() {
//   filterSelector.select('Show Featured');
// });
</script>

<style scoped>
.small {
  font-size: 14px;
}

.underline {
  text-decoration: underline;
}

.underline:hover {
  text-decoration: none;
}

.next-button {
  background-color: rgb(74, 173, 215);
  border-radius: 10px;
  width: 4.625em;
  height: 2.5em;
}
</style>
