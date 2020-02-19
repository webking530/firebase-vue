<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <div v-if="loaded" class="container mb-5">
      <SettingsTitle v-bind:title="'Artist Settings Overview'"></SettingsTitle>

      <div class="row mb-5">
        <div class="col-12 mb-5">
          <b-row>
            <b-col cols="3" sm="4" md="2">

                <SettingsImageInput
                  v-model="profile.photo"
                  :file="photo"
                  :type="`photo`"
                  @change="send_file"
                  :shape="`round`"
                ></SettingsImageInput>

            </b-col>

            <b-col class="pt-0 pt-sm-5 pt-md-5 pt-lg-5">
              <h4
                class="
                  username
                  text-light
                  font-weight-light
                  mb-0 mb-sm-4 mb-md-4
                "
              >
                {{ username }}
              </h4>
              <h5 class="location text-light font-weight-lighter">
                {{ location }}
              </h5>
            </b-col>
          </b-row>

          <!-- Search 

          <b-row>
            <b-col lg="10" md="9" sm="8" cols="8">
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
            <b-col lg="2" md="3" sm="3" cols="2" align-self="end" style="padding-bottom:2px;" class="text-center">
              <b-button @click="search_change()" class="search-btn">
                Search
              </b-button>
            </b-col>
          </b-row>

          -->

          <b-row class="mt-3 label-text">
            <!-- Section Heading -->
            <b-col
              cols="12"
              class="text-uppercase text-light font-weight-light mt-4 heading"
            >
              Account Settings
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <router-link
                :to="{ name: 'EditAccountSettings' }"
                class="text-light d-block font-weight-light"
              >
                Account Settings
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
              Artist Settings
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <router-link
                :to="{ name: 'EditProfile' }"
                class="text-light d-block font-weight-light"
              >
                Artist Profile
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
              <router-link :to="{name: 'SongSettings'}" class="text-light d-block font-weight-light">
                Individual Song Profile Settings
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
              ChipIn For Artists
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col
              v-if="!isChipInUser"
              cols="12"
              class="text-light font-weight-light"
            >
              <router-link
                :to="{ name: 'SetupChipIn' }"
                class="text-light font-weight-light d-block"
              >
                Register for ChipIn or ChipIn+
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col
              v-if="isChipInUser"
              cols="12"
              class="text-light font-weight-light"
            >
              <router-link
                :to="{ name: 'ChipInAccount' }"
                class="text-light font-weight-light d-block"
              >
                ChipIn Account Summary
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col
              v-if="isChipInUser"
              cols="12"
              class="text-light font-weight-light mb-2"
            >
              <router-link
                :to="{ name: 'ChipInAccountType' }"
                class="text-light font-weight-light d-block"
              >
                ChipIn Settings
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
              ChipIn Payments
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'DonationsMade'}" class="text-light d-block font-weight-light">
                ChipIn Donations Made
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
              <router-link :to="{name: 'SubscriptionsMade'}" class="text-light d-block font-weight-light">
                ChipIn+ Subscriptions Purchased
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
            </b-col>
          </b-row>
          
          <!--
          <b-row class="mt-3">
            <b-col
              cols="12"
              class="text-uppercase text-light font-weight-light mt-4 heading"
            >
              Message Settings
              <hr class="bg-light" />
            </b-col>

            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'Notifications'}" class="text-light d-block font-weight-light">
                Notifications
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>

            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'EmailSettings'}" class="text-light d-block font-weight-light">
                Email Settings
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
            </b-col>
            
          </b-row>
          -->

          <b-row class="mt-3 label-text">
            <!-- Section Heading -->
            <b-col
              cols="12"
              class="text-uppercase text-light font-weight-light mt-4 heading"
            >
              Security &amp; Usage
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <router-link
                :to="{ name: 'SignInSettings' }"
                class="text-light d-block font-weight-light"
              >
                Sign-In, Password & Security
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <!--
            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'PrivacySettings'}" class="text-light d-block font-weight-light">
                Privacy Settings
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
            </b-col>
            -->
          </b-row>

          <b-row class="mt-3 label-text">
            <!-- Section Heading -->
            <b-col
              cols="12"
              class="text-uppercase text-light font-weight-light mt-4 heading"
            >
              More Options
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <a target="_blank" to="https://trackd.freshdesk.com" class="text-light d-block font-weight-light">
                Get Support
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </a>
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'OurStory'}" class="text-light d-block font-weight-light">
                About Trackd
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
              <hr class="bg-light" />
            </b-col>

            <!-- Section link -->
            <!--
            <b-col cols="12" class="text-light font-weight-light">
              <router-link :to="{name: 'Credits'}" class="text-light d-block font-weight-light">
                Credits
                <img
                  src="../../../assets/arrow-right.svg"
                  class="float-right arrow"
                  alt="Right arrow"
                />
              </router-link>
            </b-col>
            -->
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SettingsImageInput from "../../../components/settings/image-input-large.vue"

export default {
  name: "AccountSettings",
  data() {
    return {
      loaded: false,
      account_type: null,
      user_id: null,
      search_param: null,
      photo: null,
      user_image: this.get_user_image,
      profile: {
        photo: this.get_user_image
      } 
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SettingsImageInput
  },
  methods: {
    ...mapActions("Account", ["accountsettings"]),
    ...mapActions("Account", {
      update_file: "EditUserProfileFile",
    }),
    ...mapMutations(["storeProfileImage"]),
    search_change() {
      return "";
    },
    send_file(event, name, file) {
      file;

      var file_ = event.target.files[0];

      var filedata = new FormData();
      filedata.append(name, file_, file_.name);

      this.update_file(filedata)
        .then((res) => {

          this.storeProfileImage(res['photo']);
          this.profile.photo = res['photo']

        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters(["isChipInUser", "isSupporter", 'username', 'location', 'get_user_image']),
    get_account_type() {
      if (!this.loaded) {
        return "";
      } else {
        if (this.account_type == "supporter") {
          return "Supporter";
        } else {
          return "Starter";
        }
      }
    },
  },
  mounted() {
    this.accountsettings().then((res) => {
      this.account_type = res.data.account_type;
      this.user_image = this.get_user_image
      this.loaded = true;
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

.username {
  font-size: 48px;
  line-height: 36px;
}

.location {
  font-size: 36px;
  line-height: 36px;
}

.search-input {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 10px;
  font-size: 18px;
  border: none;
}

.arrow {
  height: 24px;
}

.label-text {
  font-size: 18px;
}

@media (min-width: 576px) {
  .search-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 129px;
    height: 37px;
  }
}

@media (max-width: 575.98px) {
  .username {
    font-size: 36px;
    line-height: 36px;
  }

  .location {
    font-size: 24px;
    line-height: 36px;
  }

  .search-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 90px;
    height: 35px;
    margin-bottom: 10px;
  }
}

@media (max-width: 375px) {
  .username {
    font-size: 18px;
    line-height: 36px;
    color: #fff;
  }

  .location {
    font-size: 14px;
    line-height: 10px;
    color: #fff;
    font-weight: 200;
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

@media (max-width: 320px) {
  .username {
    font-size: 18px;
    line-height: 36px;
    color: #fff;
  }

  .location {
    font-size: 14px;
    line-height: 10px;
    color: #fff;
    font-weight: 200;
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
