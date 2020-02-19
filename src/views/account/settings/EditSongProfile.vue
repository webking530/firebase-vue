<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      <SettingsTitle v-bind:title="'Song Profile'"></SettingsTitle>

      <b-row class="row mb-5">
        <b-col cols="12">
          <div v-if="error" class="text-danger mb-5">
            <b class="font-weight-normal h5"
              ><b-icon
                icon="exclamation-triangle"
                font-scale="1.2"
                class="mr-2"
              ></b-icon>
            </b>
            {{ error_field }} is required.
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'DESCRIPTION'" class="label-text"></SectionHeading>

        <b-col>
          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            id="input-group-2"
            label="Song Title"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.name"
              v-bind:placeholder_text="`Enter name`"
              v-bind:type="'name'"
              @change="send"
              class="input-width text-input-margin"
              
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" style="margin-top:1px;" />
          
          <b-row>
            <b-col cols="3">
              <p class="text-light font-weight-light label-text">
                Song Description
              </p>
              <SettingsButton :text="'Preview'"></SettingsButton>
            </b-col>

            <b-col cols="9">
              <SettingsTextAreaInput
                id="textarea"
                v-model="profile.description"
                v-bind:placeholder_text="`Enter your text here..`"
                v-bind:type="'description'"
                v-bind:rows="3"
                v-bind:max_rows="6"
                @change="send"
                class="input-width text-area-input-margin"
              ></SettingsTextAreaInput>
            </b-col>
          </b-row>
    

          <b-row class="mt-3">
            <SectionHeading v-bind:name="'MONETIZATION'" class="label-text"></SectionHeading>

            <b-col cols="3">
              <p class="text-light font-weight-light label-text">
                Lock with ChipIn+
              </p>
            </b-col>
            <b-col cols="9">
              <SettingsToggleSwitch
                v-model="profile.locked"
                :type="'locked'"
                @change="send"
              >
              </SettingsToggleSwitch>

            </b-col>
          </b-row>

          <b-row class="mt-3">

            <SectionHeading v-bind:name="'LYRICS'" class="label-text"></SectionHeading>

            <b-col cols="3">
              <p class="text-light font-weight-light label-text">
                Choose Associated Lyrics
              </p>
            </b-col>

            <b-col >
              <SettingsSelectInput
                v-model="lyrics"
                :options="lyrics_list"
                :type="'lyrics'"
                @change="send"
                class="input-width select-input-margin"
              ></SettingsSelectInput>
            </b-col>
          </b-row>

          <!-- TODO: Genres -->
        </b-col>
      </b-row>


      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Meta Data'" class="label-text"></SectionHeading>

        <b-col>
  
          <b-row>
            <b-col cols="4" md="3">

              <p class="text-light font-weight-light label-text">
                Song Hero Image
              </p>
              <SettingsButton :text="'Preview'"></SettingsButton>
            
            </b-col>

            <b-col cols="8" md="6">
                <SettingsImageInput
                  v-model="profile.banner_image"
                  :file="banner_image"
                  :type="`banner_image`"
                  @change="send_file"
                  :shape="`hero`"
                ></SettingsImageInput>
                <p class="prompt-text text-light">Image should be at least 1200 pixels wide</p>
            </b-col>

            

          </b-row>

          <hr class="bg-light" />

          <b-row>
            <b-col cols="4" md="3">

              <p class="text-light font-weight-light label-text">
                Player Images
              </p>
              <SettingsButton :text="'Preview'"></SettingsButton>
            </b-col>

            <!-- Image grid goes here -->
            <b-col cols="8" md="6" class="">

              <b-row>
                <!-- Main Image -->
                <b-col cols="3" class="mr-3 pr-0">
                  <SettingsImageInput
                      v-model="profile.player_image" 
                      :file="player_image"
                      :type="`player_image`"
                      @change="send_file"
                      :shape="`rectangle`"
                  ></SettingsImageInput>
                </b-col>

                
                <b-col cols="3" class="mt-2 pl-0 mr-0">
                  <!-- Player Back Cover Main Image -->
                  <SettingsImageInput
                    v-model="profile.back_cover_image"
                    :file="back_cover_image"
                    :type="`back_cover_image`"
                    @change="send_file"
                  ></SettingsImageInput>

                  <!-- Player Back Cover Additional Image 1 -->
                  <SettingsImageInput
                    v-model="profile.player_extra_image"
                    :file="player_extra_image"
                    :type="`player_extra_image`"
                    @change="send_file"
                  ></SettingsImageInput>
                </b-col>

                <b-col class="mt-2 pl-0">
                  <!-- Player Back Cover Additional Image 2 -->
                  <SettingsImageInput
                    v-model="profile.player_extra_image_2"
                    :file="player_extra_image_2"
                    :type="`player_extra_image_2`"
                    @change="send_file"
                  ></SettingsImageInput>

                  <!-- Player Back Cover Additional Image 3 -->
                  <SettingsImageInput
                    v-model="profile.player_extra_image_3"
                    :file="player_extra_image_3"
                    :type="`player_extra_image_3`"
                    @change="send_file"
                  ></SettingsImageInput>
                </b-col>
              </b-row>
              <p class="prompt-text text-light">Images should be at least 380 pixels wide</p>
            </b-col>
          </b-row>

        </b-col>
      </b-row>

      <!--
                <b-form-group  label-class="text-light font-weight-light" id="input-group-2" label="Edit Song Tags:" label-for="input-2">
                    <b-form-tags class="bg-dark text-light" input-id="tags-basic" v-model="profile.tags"></b-form-tags>
                </b-form-group>
                -->
      <!--
                <b-form-group  label-class="text-light font-weight-light" id="input-group-2" label="Genre:" label-for="input-2">
                    <b-form-tags class="bg-dark text-light" input-id="tags-basic" v-model="profile.genre"></b-form-tags>
                </b-form-group>
                -->

      <!-- <b-row class="mt-3">
        <SectionHeading v-bind:name="'Ranking'"></SectionHeading>

        <b-col> </b-col>
      </b-row> -->

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'GENRES'" class="label-text"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light label-text">
            Genre
          </p>
        </b-col>

        <b-col cols="9">
              <SettingsButton :text="'Select'" :to="{ name: 'EditSongProfileGenres', params: { id: $route.params.id } }"></SettingsButton>

              <SettingsButton v-if="profile.genre" :text="profile.genre.name" class="ml-3"></SettingsButton>

              <SettingsButton v-if="profile.sub_genre" :text="profile.sub_genre.name" class="ml-3"></SettingsButton>

              <SettingsButton v-if="profile.sub_sub_genre" :text="profile.sub_sub_genre.name" class="ml-3"></SettingsButton>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'SETTINGS'" class="label-text"></SectionHeading>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Make Public
            
          </p>
                  
        </b-col>
        <b-col cols="3" md="9">
            <SettingsToggleSwitch
                v-model="profile.public"
                :type="'public'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>
        
        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Show Collaborators
          </p>
        </b-col>

        <b-col cols="3" md="9">
  
            <SettingsToggleSwitch
                v-model="profile.show_collaborators"
                :type="'show_collaborators'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Explicit Content
          </p>
        </b-col>
        <b-col cols="3" md="9">

            <SettingsToggleSwitch
                v-model="profile.explicit"
                :type="'explicit'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Allow Re-Tracks
          </p>
        </b-col>
        <b-col cols="3" md="9">

            <SettingsToggleSwitch
                v-model="profile.allow_retrak"
                :type="'allow_retrak'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Allow Collaboration
          </p>
        </b-col>
        <b-col cols="3" md="9">
 
            <SettingsToggleSwitch
                v-model="profile.allow_stem"
                :type="'allow_stem'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'RIGHTS MANAGEMENT'" class="label-text"></SectionHeading>

        <b-col>
          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Change Rights Society"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsSelectInput
              v-model="rights_society"
              :options="get_rights_societies"
              :type="'rights_society'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            class="label-text" 
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Change Publisher"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsSelectInput
              v-model="publisher"
              :options="get_publishers"
              :type="'publisher'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Change Co Publisher"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsSelectInput
              v-model="sub_publisher"
              :options="get_publishers"
              :type="'sub_publisher'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text-center mb-4">
          <b-button class="done-btn" :to="{ name: 'Song', params: { id: profile.id }}">
            Done
          </b-button>
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
import SettingsTextInput from "../../../components/settings/text-input.vue";
import SettingsTextAreaInput from "../../../components/settings/text-area-input.vue";
import SettingsSelectInput from "../../../components/settings/select-input.vue";
import SettingsImageInput from "../../../components/settings/image-input.vue";
import SettingsButton from "../../../components/settings/settings-button.vue"
import SettingsToggleSwitch from "../../../components/settings/toggle-switch.vue";

export default {
  name: "EditSongProfile",
  data() {
    return {
      error: false,
      error_field: "",
      loaded: false,
      profile: null,
      lyrics: null,
      publishers: [],
      rights_societies: [],
      lyrics_list: [],
      publisher: null,
      sub_publisher: null,
      rights_society: null,
      cover: null,
      banner_image: null,
      player_image: null,
      back_cover_image: null,
      player_extra_image: null,
      player_extra_image_2: null,
      player_extra_image_3: null,
      player_extra_image_4: null,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsTextInput,
    SettingsTextAreaInput,
    SettingsSelectInput,
    SettingsImageInput,
    SettingsButton,
    SettingsToggleSwitch,
  },
  computed: {
    get_publishers() {
      if (!this.loaded) {
        return [];
      } else {
        let publsihers = [{ value: null, text: "Please select" }];
        this.publishers.forEach(function (publsiher) {
          publsihers.push({ value: publsiher.id, text: publsiher.name });
        });
        return publsihers;
      }
    },
    get_rights_societies() {
      if (!this.loaded) {
        return [];
      } else {
        let rights_societies = [{ value: null, text: "Please select" }];
        this.rights_societies.forEach(function (rights_society) {
          rights_societies.push({
            value: rights_society.id,
            text: rights_society.name,
          });
        });
        return rights_societies;
      }
    },
  },
  methods: {
    ...mapActions("Account", {
      get: "getEditSongProfile",
      update: "EditSongProfile",
      update_file: "EditSongProfileFile",
    }),
    mapList(list) {
      let formatted_list = [{ value: null, text: "Please select" }];
      list.forEach(function (item) {
        formatted_list.push({ value: item.id, text: item.name });
      });

      return formatted_list;
    },
    mapLyrics(list) {
      let formatted_list = [{ value: null, text: "Please select" }];
      list.forEach(function (item) {
        formatted_list.push({ value: item.id, text: item.title });
      });

      return formatted_list;
    },
    mapEmpty(list) {
      let formatted_list = [{ value: null, text: "Please select" }];
      list.forEach(function (item) {
        formatted_list.push({ value: item.id, text: item.name });
      });

      return formatted_list;
    },
    send_file(event, name, file) {
      this.error_field = "";
      this.error = false;

      file;

      var file_ = event.target.files[0];

      var filedata = new FormData();
      filedata.append(name, file_, file_.name);

      this.update_file([this.$route.params.id, filedata])
        .then((res) => {
          //console.log(res)
          // if file update data
          this.profile[name] = res[name];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    send(event, name, file) {
      
      this.error_field = "";
      this.error = false;

      // If file input
      if (event && event.target && file) {
        var file_ = event.target.files[0];

        var filedata = new FormData();
        filedata.append(name, file_, file_.name);

        this.update_file([this.$route.params.id, filedata])
          .then((res) => {
            //console.log(res)
            // if file update data
            this.profile[name] = res[name];
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        var data = {};
        data[name] = event;

        //console.log('sp patch in: ', this.$route.params.id, ' : ', data)
        this.update([this.$route.params.id, data])
          .then((res) => {
            res;
            //console.log(res)
            //console.log('updated: ', res)
          })
          .catch((error) => {
            this.error_field = name;
            this.error = true;
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.get(this.$route.params.id)
      .then((res) => {
        this.profile = res;
        this.publishers = res.list_publishers;
        this.rights_societies = res.list_rights_society;
        this.lyrics_list = this.mapLyrics(res.lyrics_list);

        if (this.profile.rights_publisher) {
          this.publisher = res.rights_publisher.id;
        }
        if (this.profile.rights_co_publisher) {
          this.sub_publisher = res.rights_co_publisher.id;
        }
        if (this.profile.rights_society) {
          this.rights_society = res.rights_society.id;
        }
        if (this.profile.lyrics) {
          this.lyrics = res.lyrics.id;
        }

        this.loaded = true;
      })
      .catch((error) => {
        console.log(error);
        this.$router.replace("/error");
        //console.log(error);
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
.input-height-auto {
  height: auto !important;
}

.switch-spacing {
  position: relative;
  top: -3px;
}


.input-width {
  width: 211px;
}

.text-input-margin {
  margin-left: -2em;
}

.text-area-input-margin {
  margin-left: 2em;
}

.select-input-margin {
  margin-left: 2em;
}

.prompt-text {
  font-size: 12px;
  font-weight: 300;
}

.label-text {
  font-size: 18px;
}

select {
  text-align-last: right;
}
option {
  direction: rtl;
}

.done-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 90px;
    height: 35px;
  }

@media (min-width: 992px) {
  .input-width {
    width: 411px;
  }

  .text-input-margin {
    margin-left: -2.35em;
  }

  .text-area-input-margin {
    margin-left: 0.3em;
  }

  .select-input-margin {
    margin-left: 0.3em;
  }

  .done-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 129px;
    height: 37px;
  }
}

</style>
