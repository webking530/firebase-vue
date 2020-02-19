<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      <SettingsTitle v-bind:title="'Song Profile - Edit Genres'"></SettingsTitle>

      <!--<b-row class="row mb-5">
        <b-col >
            <label class="sr-only" for="input-search">Search</label>
            <b-input-group class="mb-2 mt-4 mr-sm-2 mb-sm-0">
            <b-input-group-prepend
                class="p-2 search-input"
                style="
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                "
                :class="{ 'mobile-search-bar': isMobile() }"
            >
                <img src="../../../assets/search-icon.svg" />
            </b-input-group-prepend>
            <b-form-input
                id="input-search"
                class="search-input text-light font-weight-light"
                style="
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                "
                :class="{ 'mobile-search-bar': isMobile() }"
                placeholder="Search"
                v-model="search_param"
                v-on:input="search_change()"
            ></b-form-input>
            </b-input-group>
        </b-col>
      </b-row>-->

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'SELECTED'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Song Genres
          </p>
        </b-col>
        <b-col cols="9">
          <b-row>
              <b-col>
                <!-- <SettingsButton :text="genre.tag" style="margin-bottom:10px;"></SettingsButton> -->
                <ChoiceButton v-if="selected_genre" :text="selected_genre.tag" :selected="'true'" style="margin-bottom:10px; background-color: #4A4A4A;" :selected_item="selected_genre" class="px-4"></ChoiceButton>
                <b-button v-if="selected_genre"  vatiant="link" class="text-light bg-none border-none" 
                  style="position:relative; top: -8px; right: 40px;" @click="removeGenre()">X</b-button>

                <ChoiceButton v-if="selected_sub_genre" :text="selected_sub_genre.tag" style="margin-bottom:10px; background-color: #4A4A4A;"  :selected_item="selected_genre" class="px-4"></ChoiceButton>
                <b-button  v-if="selected_sub_genre" vatiant="link" class="text-light bg-none border-none" 
                  style="position:relative; top: -8px; right: 40px;" @click="removeSubGenre()">X</b-button>

                <ChoiceButton v-if="selected_sub_sub_genre" :text="selected_sub_sub_genre.tag" style="margin-bottom:10px; background-color: #4A4A4A;"  :selected_item="selected_genre" class="px-4"></ChoiceButton>
                <b-button v-if="selected_sub_sub_genre" vatiant="link" class="text-light bg-none border-none" 
                  style="position:relative; top: -8px; right: 40px;" @click="removeSubSubGenre()">X</b-button>

              </b-col>  
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'GENRES'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Choose
          </p>
        </b-col>
        <b-col cols="9">
          <b-row style="height:300px" class="wrapper">
              <b-col style="height:300px; overflow-y: scroll;" >
                <ChoiceButton v-for="genre in genres" :key="genre.id" :text="genre.tag" :id="genre.id" :name="genre.tag" :data="genre" @selected="handle_selected" :selected_item="selected_genre"></ChoiceButton>
              </b-col>  
          </b-row>

        </b-col>
        
      </b-row>

      <b-row class="mt-3" v-if="sub_genres.length > 0">
        <SectionHeading v-bind:name="'SUB-GENRES'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Choose
          </p>
        </b-col>
        <b-col cols="9">
          <b-row>
              <b-col >
                <ChoiceButton v-for="genre in sub_genres" :key="genre.id" :text="genre.tag" :id="genre.id" :name="genre.tag" :data="genre" @selected="handle_selected" :selected_item="selected_sub_genre"></ChoiceButton>
              </b-col>  
          </b-row>

        </b-col>

      </b-row>

      <b-row class="mt-3" v-if="sub_sub_genres.length > 0">
        <SectionHeading v-bind:name="'SUB-SUB-GENRES'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Choose
          </p>
        </b-col>
        <b-col cols="9">
          <b-row>
              <b-col >
                <ChoiceButton v-for="genre in sub_sub_genres" :key="genre.id" :text="genre.tag" :id="genre.id" :name="genre.tag" :data="genre" @selected="handle_selected" :selected_item="selected_sub_sub_genre"></ChoiceButton>
              </b-col>  
          </b-row>

        </b-col>

      </b-row>
      <b-row class="mt-5 mb-4">
        <b-col cols="12" class="text-center mb-4">
          <b-button class="done-btn mr-2" @click="clear">
            Cancel
          </b-button>
          <b-button class="done-btn ml-2" style="width:250px;" @click="save">
            Save and Return to Song Profile
          </b-button>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title.vue"
import SectionHeading from "../../../components/settings/SectionHeading.vue"
import ChoiceButton from "../../../components/settings/choice-button-auto.vue"

export default {
  name: "EditSongProfileGenres",
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    ChoiceButton,
  },
  data() {
    return {
      loaded: false,
      genres: null,
      all_genres: null,
      sub_genres: [],
      sub_sub_genres: [],
      selected_genre: null,
      selected_sub_genre: null,
      selected_sub_sub_genre: null,
    };
  },
  computed: {

  },
  methods: {
    ...mapActions("Song", {
      getGenres: "get_genres",
      addGenre: "add_genre",
    }),
    removeGenre() {
      this.selected_genre = null
      this.selected_sub_genre = null
      this.selected_sub_sub_genre = null
      this.sub_genres = []
      this.sub_sub_genres = []
    },
    removeSubGenre() {
      this.selected_sub_genre = null
      this.selected_sub_sub_genre = null
      this.sub_genres = []
      this.sub_sub_genres = []
    },
    removeSubSubGenre() {
      this.selected_sub_sub_genre = null
      this.sub_sub_genres = []
    },
    clear() {
      this.selected_genre = null
      this.selected_sub_genre = null
      this.selected_sub_sub_genre = null

      this.genres = this.all_genres
      this.sub_genres = []
      this.sub_sub_genres = []
    },
    handle_selected(id, selected, data) {
      
      if (!this.selected_genre) {
        this.selected_genre = data
        if (data.children) {
          this.sub_genres = data.children
        }
      }
      else if (this.selected_genre && !this.selected_sub_genre) {
        this.selected_sub_genre = data
        if (data.children) {
          this.sub_sub_genres = data.children
        }
      }
      else if (this.selected_genre && this.selected_sub_genre && !this.selected_sub_sub_genre) {
        this.selected_sub_sub_genre = data
      }

    },
    save() {

      var data = {}
      if (this.selected_genre) {
        data['genre'] = this.selected_genre.id
      } else {
        data['genre'] = null
      }
      if (this.selected_sub_genre) {
        data['sub_genre'] = this.selected_sub_genre.id
      } else {
        data['sub_genre'] = null
      }
      if (this.selected_sub_sub_genre) {
        data['sub_sub_genre'] = this.selected_sub_sub_genre.id
      } else {
        data['sub_sub_genre'] = null
      }

      this.addGenre([this.$route.params.id, data])
        .then((res) => {
          console.log(res)
          this.$router.replace({name: 'EditSongProfile', params: {id: this.$route.params.id}});
        })
        .catch((error) => {
        console.log(error);
        this.$router.replace("/error");
        //console.log(error);
      });

    }
  },
  mounted() {

    this.getGenres(this.$route.params.id)
      .then((res) => {
        
        this.genres = res.data.genres
        this.all_genres = res.data.genres
        this.selected_genre = res.data.selected_genre
        this.selected_sub_genre = res.data.selected_sub_genre
        this.selected_sub_sub_genre = res.data.selected_sub_sub_genre

        if (res.data.selected_sub_genres) {
          this.sub_genres = res.data.selected_sub_genres
        }
        if (res.data.selected_sub_sub_genres) {
          this.sub_sub_genres = res.data.selected_sub_sub_genres
        }
        this.loaded = true
      })
      .catch((error) => {
        console.log(error);
        this.$router.replace("/error");
      });
  },
  beforeMount() {
    
  },
};
</script>

<style>

.select-input {
  background: #0E0E0F url("../../../assets/select-box-arrow.svg") no-repeat right
    0.75rem center/20px 15px !important;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
  text-align: left !important;
  text-align-last: left !important;
}

.text-input {
  background-color: #0E0E0F;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #0E0E0F;
  color: #9b9b9b;
}

.submit-btn {
  border: solid white 1px;
  background-color: transparent;
  width: 185px;
  height: 37px;
}

.wrapper {
  /* min-width: 100%; */
  width: 100%;
  height: 200px;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}

.wrapper .item {
  min-width: 150px;
  height: 200px;
  /* line-height: 20px; */
  text-align: center;
}

.done-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 129px;
    height: 37px;
}

.done-btn:hover {
  border: solid white 1px;
  background-color: transparent;
}


.wrapper {
  min-width: 100%;
  border-radius: 0;
  display: flex;
  overflow-x: auto;
}
</style>
