<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">
      <SettingsTitle v-bind:title="'ChipIn+ Song Settings'"></SettingsTitle>

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
        </div>
        <b-button v-if="search_results.length > 0" variant="link" class="text-light font-weight-light mt-3" @click="clearSearch">Clear</b-button>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'ChipIn+ Song Settings'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Lock All Songs
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="lock_all_songs"        
            @change="send($event, 'lock_all_songs')"
          >
          </SettingsToggleSwitch>
        </b-col>

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

            <b-container v-for="song in search_results" :key="song.id">
              <b-row>
              
                <b-col cols="3">
                  <p class="text-light font-weight-light">
                    {{ song.name }}
                  </p>
                </b-col>
                <b-col cols="9">
                  <SettingsToggleSwitch
                    v-model="song.locked"
                    
                    @change="lock_song($event, song.id, 'song')"
                  >
                  </SettingsToggleSwitch>
                  <span class="text-light font-weight-light" v-if="song.locked"
                    >Locked</span
                  ><span class="text-light font-weight-light" v-else
                    >Unlocked</span
                  >
                </b-col>
              
                <hr class="bg-light"/>
              </b-row>
            </b-container>
          </div>

          

          <b-row v-else>
            <b-container v-for="song in songs" :key="song.id">
              <b-row>
              
                <b-col cols="3">
                  <p class="text-light font-weight-light">
                    {{ song.name }}
                  </p>
                </b-col>
                <b-col cols="9">
                  <SettingsToggleSwitch
                    v-model="song.locked"
                    
                    @change="lock_song($event, song.id, 'song')"
                  >
                  </SettingsToggleSwitch>
                  <span class="text-light font-weight-light" v-if="song.locked"
                    >Locked</span
                  ><span class="text-light font-weight-light" v-else
                    >Unlocked</span
                  >
                </b-col>
              
                <hr class="bg-light"/>
              </b-row>
            </b-container>
          </b-row>
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
  name: "ChipInPlusSongSettings",
  data() {
    return {
      loaded: false,
      search_param: null,
      search_results: [],
      lock_all_songs: null,
      songs: [],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsToggleSwitch,
  },
  methods: {
    ...mapActions("Account", {
      song_update: "EditSongProfile",
      accountchipinsettings: "accountchipinsettings",
      updateaccountsettings: "updateaccountsettings",
      chipinplus_search: "chipinplus_search",
    }),

    send(event, name) {
      let data = {};
      data[name] = event;

      this.updateaccountsettings(data).then((res) => {
        console.log("response: ", res.data);
      });
    },
    lock_song(event, song, type) {
      let data = {};
      var locked;
      if (event === "false" || event === false) {
        data["locked"] = false;
        locked = false;
      }
      if (event === "true" || event === true) {
        data["locked"] = true;
        locked = true;
      }

      console.log(data);
      console.log(song);

      this.song_update([song, data]).then((res) => {
        res;

        var result;

        if (type === "search") {
          result = this.search_results.filter((obj) => {
            return obj.id === song;
          });

          result[0].locked = locked;
        }
        if (type === "song") {
          result = this.songs.filter((obj) => {
            return obj.id === song;
          });

          result[0].locked = locked;
        }
      });
    },
    clearSearch() {
      this.search_param = null;
      this.search_results = [];
    },
    search_change() {
      if (this.search_param.length > 3) {
        this.chipinplus_search(this.search_param)
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
    this.accountchipinsettings().then((res) => {
      console.log(res.data);
      this.lock_all_songs = res.data.lock_all_songs;
      this.songs = res.data.results;
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

.custom-switch.b-custom-control-lg .custom-control-label,
.input-group-lg .custom-switch .custom-control-label {
  font-size: 1em !important;
  line-height: 1.5em;
  position: relative;
  top: -3px;
}
.custom-switch .custom-control-label span {
  position: relative;
  top: 3px;
}
</style>
