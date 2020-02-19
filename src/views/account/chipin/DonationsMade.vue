<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      
        <SettingsTitle v-bind:title="'Donations Made'"></SettingsTitle>
        
        <b-row class="mt-3">
          <SectionHeading v-bind:name="'Transactions'" class="label-text"></SectionHeading>

          <b-col cols="12" v-for="(item, index) in subscriptions" :key="index">

            <b-row>

              <b-col cols="3" sm="3" md="2">
              
                <b-img width="125" height="125" class="img-fluid mx-auto d-block float-left" rounded="circle" :src="item.image"></b-img>

              </b-col>

              <b-col class="px-0">

                  <router-link
                    :to="{ name: 'ArtistUsername', params: { id: item.username } }"
                    class="text-light lead font-weight-light d-block mt-1 "
                  >
                    {{ item.username }}
                  </router-link>
                  
                  <p class="text-light font-weight-lighter pb-2 mb-0">{{ item.location }}</p> 

                  <p class="text-light font-weight-light mb-0 pb-2">{{ item.amount }}</p> 

                  <p class="text-light font-weight-lighter pb-0 mb-0">
                    <span class="font-weight-light">Status:</span> 
                    <span v-if="item.status === 'paid'" class="text-success">
                      Paid
                    </span>
                    <span v-if="item.status === 'cancelled'" class="text-danger">
                      Active
                    </span>
                  </p>
                  

              </b-col>

              <b-col class="pl-0">

                  <p class="text-light font-weight-lighter text-right mt-3 d-block"><span class="font-weight-light">Made on:</span> {{ item.created_at }}</p>
                  
              </b-col>
            </b-row>

            <hr class="clear-fix bg-light" />
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

export default {
  name: "DonationsMades",
  data() {
    return {
      loaded: false,
      subscriptions: [],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading
  },
  methods: {
    ...mapActions("Settings", { api_subscriptions: "getdonations" }),
  },
  beforeMount() {
    this.api_subscriptions()
      .then((res) => {
        //console.log(res.data)
        this.subscriptions = res.data.results;
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
.btn-rounded {
  border-radius: 10px;
}

.label-text {
  font-size: 18px;
}
</style>
