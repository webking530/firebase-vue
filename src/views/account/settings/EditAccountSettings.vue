<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class=" mb-5">
      <SettingsTitle v-bind:title="'Account Settings'"></SettingsTitle>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Account'" class="label-text"></SectionHeading>

        <b-col cols="12">
            <p class="text-light font-weight-light label-text">
            Account type&nbsp;<span class="float-right capitalize">{{
              get_account_type
            }}</span>
            </p>

        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Account Details'" class="label-text"></SectionHeading>

        <b-col cols="12">

          <b-form-group
          class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Gender:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsSelectInput
              v-model="profile.gender"
              :options="genders"
              :type="'gender'"
              @change="send"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Phone:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.phone"
              v-bind:placeholder_text="`Enter phone`"
              v-bind:type="'phone'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Occupation:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.occupation"
              v-bind:placeholder_text="`Enter occupation`"
              v-bind:type="'occupation'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>

        </b-col>

      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'External Links'" class="label-text"></SectionHeading>

          <b-col cols="12">

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Website URL:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.site"
              v-bind:placeholder_text="`Enter website`"
              v-bind:type="'site'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Facebook:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.facebook"
              v-bind:placeholder_text="`Enter facebook username`"
              v-bind:type="'facebook'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Instagram:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.instagram"
              v-bind:placeholder_text="`Enter instagram username`"
              v-bind:type="'instagram'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Twitter:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.twitter"
              v-bind:placeholder_text="`Enter twitter username`"
              v-bind:type="'twitter'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="Youtube:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.youtube"
              v-bind:placeholder_text="`Enter youtube username`"
              v-bind:type="'youtube'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            id="input-group-2"
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            label="SoundCloud:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsTextInput
              id="input-2"
              v-model="profile.souncloud"
              v-bind:placeholder_text="`Enter souncloud username`"
              v-bind:type="'souncloud'"
              @change="send"
            ></SettingsTextInput>
          </b-form-group>
          </b-col>

      </b-row>

      <b-row class="mt-3 mb-5">
        <SectionHeading v-bind:name="'Location'" class="label-text"></SectionHeading>

        <b-col>

          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="Country:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsSelectInput
              v-model="country"
              :options="get_countries"
              :type="'country'"
              @change="send"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="County:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsSelectInput
              v-model="county"
              :options="counties"
              :type="'county'"
              @change="send"
            ></SettingsSelectInput>
          </b-form-group>
          <hr class="bg-light" />

          <b-form-group
            class="label-text"
            label-class="text-light font-weight-light py-0 m-0 "
            id="input-group-2"
            label="City:"
            label-for="input-2"
            label-cols="4"
            label-cols-sm="4"
            label-cols-lg="2"
          >
            <SettingsSelectInput
              v-model="city"
              :options="cities"
              :type="'city'"
              @change="send"
            ></SettingsSelectInput>
          </b-form-group>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import SettingsTextInput from "../../../components/settings/text-input.vue";
import SettingsSelectInput from "../../../components/settings/select-input.vue";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";

export default {
  name: "EditAccountSettings",
  data() {
    return {
      loaded: false,
      profile: null,
      countries: [],
      counties: [],
      cities: [],
      genders: [],
      country: null,
      county: null,
      city: null,
      photo: null,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsTextInput,
    SettingsSelectInput,
  },
  computed: {
    get_countries() {
      if (!this.loaded) {
        return [];
      } else {
        let countries = [];
        this.countries.forEach(function(country) {
          countries.push({ value: country.id, text: country.name });
        });
        return countries;
      }
    },
    get_account_type() {
      if (!this.loaded) {
        return "";
      } else {
        if (this.profile.account_type == "supporter") {
          return "Supporter";
        } else {
          return "Starter";
        }
      }
    },
  },
  methods: {
    ...mapActions("Account", {
      get: "getEditAccountSettings",
      update: "EditAccountSettings",
      //update_file: 'EditUserProfileFile',
      get_location: "getLocationChoices",
    }),
    ...mapMutations(["storeLocation"]),
    mapList(list) {
      let formatted_list = [{ value: null, text: "Please select" }];
      list.forEach(function(item) {
        formatted_list.push({ value: item.id, text: item.name });
      });

      return formatted_list;
    },
    send(event, name, file) {
      console.log("In the send function");
      // If file input
      if (event && event.target && file) {
        var file_ = event.target.files[0];

        var filedata = new FormData();
        filedata.append(name, file_.file, file_.name);

        this.update_file(filedata)
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

        this.update(data)
          .then((res) => {
            if (name === "city" || name === "county" || name === "country") {
              this.storeLocation(res["location"]);
            }
          })
          .catch((error) => {
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
      }
    },
  },
  mounted() {
    this.get()
      .then((res) => {
        //console.log(res)

        this.profile = res;
        this.countries = res.list_country;
        this.genders = res.list_genders;

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
.normal-text {
  font-size: 1em;
}

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

.label-text {
  font-size: 18px;
}

select { text-align-last: right; }
option { direction: rtl; }

</style>
