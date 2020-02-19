<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-4">
      <SettingsTitle v-bind:title="'Artist Profile'"></SettingsTitle>

      <b-row>
        <SectionHeading v-bind:name="'Profile'" class="label-text"></SectionHeading>

        <b-col>
          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            id="input-group-2"
            label="Artist Name"
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
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="Sub Title"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.strap_line"
              v-bind:placeholder_text="`Enter name`"
              v-bind:type="'strap_line'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Introduction Text"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsTextAreaInput
              id="textarea"
              v-model="profile.bio"
              v-bind:placeholder_text="`Enter something...`"
              v-bind:type="'bio'"
              v-bind:rows="3"
              v-bind:max_rows="6"
              @change="send"
              class="input-width text-area-input-margin"
            ></SettingsTextAreaInput>
          </b-form-group>

          <!--
                <b-form-group  label-class="text-light font-weight-light" id="input-group-2" label="Tags:" label-for="input-2">
                <b-form-tags class="bg-dark text-light" input-id="tags-basic" v-model="profile.tags"></b-form-tags>
                </b-form-group>

                <b-form-group  label-class="text-light font-weight-light" id="input-group-2" label="Skills:" label-for="input-2">
                <b-form-tags class="bg-dark text-light" input-id="tags-basic" v-model="profile."></b-form-tags>
                </b-form-group>
                -->
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Artist Skills'" class="label-text"></SectionHeading>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light label-text">
            Set Your Skills          
          </p>
                  
        </b-col>
        <b-col cols="3" md="9">
            <SettingsButton v-if="profile.skills.length === 0" :text="'Select'" :to="{ name: 'EditUserProfileSkills',  }"></SettingsButton>

            <b-row>
                <div class="wrapper">
                <SettingsButton :text="'Select'" :to="{ name: 'EditUserProfileSkills'}" class="mr-4"></SettingsButton>
                    <b-col cols="1" v-for="skill in profile.skills" :key="skill.id" class="text-center item mr-3" >
                        <b-avatar 
                            :src="getImagePath(skill.image, {func: 'fit', width: 120, height: 120})" 
                            size="4.2em" 
                            class="skill-avatar"
                            style="padding:4px;"
                        >        
                        </b-avatar>
                        <img 
                          src="../../../assets/icon-delete.svg" 
                          width="20" 
                          class="delete-icon" 
                          style="position:absolute;"
                          @click="delete_skill(skill)"
                        />
                        <p class="text-light skill-text text-center mt-1">{{ skill.title }}</p>
                    </b-col>
                </div>
            </b-row>

        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'Settings'"></SectionHeading>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light">
            Allow Collaboration Invites            
          </p>
                  
        </b-col>
        <b-col cols="3" md="9">
            <SettingsToggleSwitch
                v-model="profile.allow_collaboration"
                :type="'allow_collaboration'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light">
            Show Comments on Profile            
          </p>
                  
        </b-col>
        <b-col cols="3" md="9">
            <SettingsToggleSwitch
                v-model="profile.allow_comments"
                :type="'allow_comments'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

        <!-- <b-col cols="12">
          <p class="text-light font-weight-light">
            Show Skills on Profile
            <b-form-checkbox
            @change="send($event, 'show_skills', false)"
            v-model="profile.show_skills"
              class="float-right switch-spacing"
              switch
              size="lg"
            ></b-form-checkbox>
          </p>
          <hr class="bg-light" />
        </b-col> -->

        <b-col cols="9" md="3">
          <p class="text-light font-weight-light">
            Hide Profile            
          </p>
                  
        </b-col>
        <b-col cols="3" md="9">
            <SettingsToggleSwitch
                v-model="profile.hide_profile"
                :type="'hide_profile'"
                @change="send"
              >
              </SettingsToggleSwitch>
        </b-col>
        <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

      </b-row>

      

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Meta Data'" class="label-text"></SectionHeading>

        <b-col>
          
          <b-row>

            <b-col cols="4" md="3">
              <p class="text-light font-weight-light label-text">
                Artist Profile Image
              </p>
              <SettingsButton :text="'Preview'"></SettingsButton>
            </b-col>

            <b-col cols="8" md="6">
                <SettingsImageInput
                  v-model="profile.photo"
                  :file="photo"
                  :type="`photo`"
                  @change="send_file"
                  :shape="`round`"
                ></SettingsImageInput>
                <p class="prompt-text text-light">Image should be at least 1200 pixels wide</p>
            </b-col>
            <b-col cols="12"><hr class="bg-light mt-0" /></b-col>
            
          </b-row>


          <b-row>

            <b-col cols="4" md="3">
              <p class="text-light font-weight-light label-text">
                Artist Banner Image
              </p>
              <SettingsButton :text="'Preview'"></SettingsButton>
            </b-col>

            <b-col cols="8" md="6">
                <SettingsImageInput
                  v-model="profile.cover_photo"
                  :file="cover_photo"
                  :type="`cover_photo`"
                  @change="send_file"
                  :shape="`hero`"
                ></SettingsImageInput>
                <p class="prompt-text text-light">Image should be at least 1200 pixels wide</p>
            </b-col>
            <b-col cols="12"><hr class="bg-light mt-0" /></b-col>

          </b-row>

          

          <b-row>
            <b-col cols="4" md="3">

              <p class="text-light font-weight-light label-text">
                Default Player Images
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

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'External Links'"></SectionHeading>

        <b-col>

          
          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="Website URL"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
          
            <SettingsTextInput
              id="input-2"
              v-model="profile.site"
              v-bind:placeholder_text="`Enter website`"
              v-bind:type="'site'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>

          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="Facebook Username"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.facebook"
              v-bind:placeholder_text="`Enter facebook username`"
              v-bind:type="'facebook'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="Instagram Username"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >

            <SettingsTextInput
              id="input-2"
              v-model="profile.instagram"
              v-bind:placeholder_text="`Enter instagram username`"
              v-bind:type="'instagram'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
            
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="Twitter Username"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >

            <SettingsTextInput
              id="input-2"
              v-model="profile.twitter"
              v-bind:placeholder_text="`Enter twitter username`"
              v-bind:type="'twitter'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
            
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="YouTube Username"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >

            <SettingsTextInput
              id="input-2"
              v-model="profile.youtube"
              v-bind:placeholder_text="`Enter youtube username`"
              v-bind:type="'youtube'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
          
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            label-class="text-light font-weight-light py-0 m-0 mr-5"
            label="SoundCloud Username"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.soundcloud"
              v-bind:placeholder_text="`Enter soundcloud username`"
              v-bind:type="'soundcloud'"
              @change="send"
              class="input-width text-input-margin"
            ></SettingsTextInput>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-3 label-text">
        <SectionHeading v-bind:name="'Publishing'"></SectionHeading>

        <b-col>
          <b-form-group
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Default Rights Society"
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
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Default Publisher"
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
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Default Sub Publisher"
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

      <b-row class="mt-3 mb-5 label-text">
        <SectionHeading v-bind:name="'Location'"></SectionHeading>

        <b-col>
          <b-form-group
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Country"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            
            <SettingsSelectInput
              v-model="country"
              :options="get_countries"
              :type="'country'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>

          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="County"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <SettingsSelectInput
              v-model="county"
              :options="counties"
              :type="'county'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="City"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            
            <SettingsSelectInput
              v-model="city"
              :options="cities"
              :type="'city'"
              @change="send"
              class="input-width select-input-margin"
            ></SettingsSelectInput>

          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="text-center mb-4">
          <b-button class="done-btn">
            Done
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import SettingsTextInput from "../../../components/settings/text-input.vue";
import SettingsSelectInput from "../../../components/settings/select-input.vue";
import SettingsTextAreaInput from "../../../components/settings/text-area-input.vue";
import SettingsImageInput from "../../../components/settings/image-input.vue"
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";
import SettingsToggleSwitch from "../../../components/settings/toggle-switch.vue";
import SettingsButton from "../../../components/settings/settings-button.vue"

export default {
  name: "EditProfile",
  components: {
    SettingsTextInput,
    SettingsTextAreaInput,
    SettingsSelectInput,
    SettingsImageInput,
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsToggleSwitch,
    SettingsButton,
  },
  data() {
    return {
      loaded: false,
      profile: null,
      countries: [],
      counties: [],
      cities: [],
      publishers: [],
      rights_societies: [],
      country: null,
      county: null,
      city: null,
      publisher: null,
      sub_publisher: null,
      rights_society: null,
      photo: null,
      cover_photo: null,
      player_image: null,
      back_cover_image: null,
      player_extra_image: null,
      player_extra_image_2: null,
      player_extra_image_3: null,
      player_extra_image_4: null,
    };
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
    get_countries() {
      if (!this.loaded) {
        return [];
      } else {
        let countries = [];
        this.countries.forEach(function (country) {
          countries.push({ value: country.id, text: country.name });
        });
        return countries;
      }
    },
  },
  methods: {
    ...mapActions("Account", {
      get: "getEditUserProfile",
      update: "EditUserProfile",
      update_file: "EditUserProfileFile",
      get_location: "getLocationChoices",
      setInstrumentTags: "setInstrumentTags",
    }),
    ...mapMutations(["storeLocation", "storeProfileImage"]),
    mapList(list) {
      let formatted_list = [{ value: null, text: "Please select" }];
      list.forEach(function (item) {
        formatted_list.push({ value: item.id, text: item.name });
      });

      return formatted_list;
    },
    send_file(event, name, file) {
      file;

      var file_ = event.target.files[0];

      var filedata = new FormData();
      filedata.append(name, file_, file_.name);

      this.update_file(filedata)
        .then((res) => {
          console.log(res);
          // if file update data
          this.profile[name] = res[name];

          if (name === "photo") {
            this.storeProfileImage(res[name]);
          }

          if (name === "city" || name === "county" || name === "country") {
            this.storeLocation(res["location"]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    send(event, name, file) {
      console.log("here");
      file;

      var data = {};
      data[name] = event;

      this.update(data).catch((error) => {
        console.log(error);
      });

      if (name === "country" && event) {
        this.get_location({ country: event }).then((res) => {
          this.counties = this.mapList(res);
        });
      }
      if (name === "county" && event) {
        this.get_location({ county: event }).then((res) => {
          this.cities = this.mapList(res);
        });
      }
    },
    delete_skill(skill) {
      this.profile.skills = this.profile.skills.filter(val => val !== skill)
      
      var tag_ids = []
        for (const skill of this.profile.skills) {
            tag_ids.push(skill.tag_id)
        }
        const data = {'tags': tag_ids}
        
        this.setInstrumentTags(data)
            .then((res) => {
                res
                
            })
            .catch((error) => {
                console.log(error)
            })
    }
  },
  mounted() {
    this.get()
      .then((res) => {
        this.profile = res;
        this.countries = res.list_country;
        this.publishers = res.list_publishers;
        this.rights_societies = res.list_rights_society;

        if (this.profile.rights_publisher) {
          this.publisher = res.rights_publisher.id;
        }
        if (this.profile.rights_co_publisher) {
          this.sub_publisher = res.rights_co_publisher.id;
        }
        if (this.profile.rights_society) {
          this.rights_society = res.rights_society.id;
        }

        if (this.profile.county) {
          this.county = res.county.id;
          this.counties.push({ value: this.county, text: res.county.name });
          this.get_location({ county: this.county }).then((res) => {
            this.cities = this.mapList(res);
          });
        }
        if (this.profile.city) {
          this.city = res.city.id;
          this.cities.push({ value: this.city, text: res.city.name });
        }

        if (this.profile.country) {
          this.country = res.country.id;
          this.get_location({ country: this.country }).then((res) => {
            this.counties = this.mapList(res);
          });
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

.done-btn {
  border: solid white 1px;
  background-color: transparent;
  width: 90px;
  height: 35px;
}

.delete-icon {
  top: 0em;
  right: 1em;
  cursor: pointer;
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

  .wrapper {
    min-width: 100%;
    height: 9em;
    /* border: 1px solid #ddd; */
    border-radius: 0;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden ;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .wrapper .item {
    /* min-width: 100px; */
    height: 9em;
    padding-right:0px;
    padding-left:0px;
    line-height: 20px;
    text-align: center;
  }

  .wrapper::-webkit-scrollbar {
      display: none;
  }

.label-text {
  font-size: 18px;
}


}

select { text-align-last: right; }
option { direction: rtl; }

</style>
