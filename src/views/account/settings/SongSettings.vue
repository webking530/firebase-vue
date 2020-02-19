<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">
      <SettingsTitle v-bind:title="'Individual Song Profile Settings'"></SettingsTitle>

      <b-row class="row mb-5">
        <div class="col-12">
          <label for="input-search" class="sr-only">Search</label>
          <b-input-group class="mb-3 mt-4 mr-sm-2 mb-sm-0">
            <b-input-group-prepend
              class="p-2 search-input"
              style="
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                  "
            >
              <img src="../../../assets/search-icon.svg" />
            </b-input-group-prepend>
            <b-form-input
              id="input-search"
              class="search-input text-light font-weight-light"
              placeholder="Search"
              v-model="search_param"
              v-on:input="search_change()"
              style="
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
              "
            ></b-form-input>
          </b-input-group>
          <b-button v-if="search_results.length > 0" variant="link" class="text-light font-weight-light mt-3" @click="clearSearch">Clear</b-button>
        </div>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading
          v-if="search_results.length > 0"
          v-bind:name="
            'Search Results - ' + search_results.length + ' Songs Found'
          "
        ></SectionHeading>
        <SectionHeading v-else v-bind:name="'Songs'"></SectionHeading>

        <b-col cols="12">
          <div v-if="search_results.length > 0" class="row">
            <b-col cols="12" v-for="song in search_results" :key="song.id">
              <router-link
                :to="{ name: 'EditSongProfile', params: {id: song.id} }"
                class="
                    text-light
                    menu-dark
                    font-weight-light
                  "
              >
                {{ song.name }}
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              
              <hr class="bg-light" />
            </b-col>
          </div>

          <div v-else class="row">
            <b-col cols="12" v-for="song in songs" :key="song.id">
              <router-link
                :to="{ name: 'EditSongProfile', params: {id: song.id} }"
                class="
                    text-light
                    menu-dark
                    font-weight-light
                  "
              >
                {{ song.name }}
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>
          </div>
        </b-col>

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "SongSettings",
  data() {
    return {
      loaded: false,
      search_param: null,
      search_results: [],
      songs: [],
      next_page: null,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    InfiniteLoading
  },
  methods: {
    ...mapActions("Account", {
      mysongssettings_search: "mysongssettings_search",
      mysongssettings: "mysongssettings",
      mysongssettings_pagination: "mysongssettings_pagination",
    }),
    infiniteHandler($state) {
      this.mysongssettings_pagination(this.next_page).then((res) => {
        this.songs.push(...res.results);
        this.next_page = res.next;
        $state.loaded();
      });
    },
    clearSearch() {
      this.search_param = null;
      this.search_results = [];
    },
    search_change() {
      if (this.search_param.length > 3) {
        this.mysongssettings_search(this.search_param)
          .then((res) => {
            this.search_results = res.data.results;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (!this.search_param) {
        this.search_param = null;
        this.search_results = null;
      }
    },
  },
  mounted() {
    this.mysongssettings().then((res) => {
      this.songs = res.data.results;
      this.next_page = res.next;
      this.loaded = true;
    });
  },
};
</script>

<style>
.menu-dark {
  background: #000;
  color: #fff;
  border-radius: 0;
}
.search-input,
.search-input:focus {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  font-size: 18px;
  border: none;
}

</style>
