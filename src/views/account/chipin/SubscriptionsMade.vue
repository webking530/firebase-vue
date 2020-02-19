<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      
        <SettingsTitle v-bind:title="'Subscriptions Purchased'"></SettingsTitle>
        
        <b-row class="mt-3">
          <SectionHeading v-bind:name="'Subscriptions'" class="label-text"></SectionHeading>

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

                  <p class="text-light font-weight-light mb-0 pb-2">{{ item.amount }} <small class="pl-1 font-weight-lighter">per month</small></p> 

                  <p class="text-light font-weight-lighter pb-0 mb-0">
                    <span class="font-weight-light">Status:</span> 
                    <span v-if="item.status === 'paid'" class="text-success">
                      Active
                    </span>
                    <span v-if="item.status === 'cancelled'" class="text-danger">
                      Cancelled
                    </span>
                  </p>
                  

              </b-col>

              <b-col class="pl-0">

                  <b-button
                    v-if="item.status === 'paid'"
                    @click="cancelSubscription(item.id, index)"
                    size="sm"
                    variant="link"
                    class="pr-0 btn-rounded text-info  font-weight-light d-block float-right mt-1"
                  >
                    Cancel
                  </b-button>
                  <br>
                
                  <p class="text-light font-weight-lighter text-right mt-3 d-block"><span class="font-weight-light">Started:</span> {{ item.created_at }}</p>
                  
                  <p  class="text-light font-weight-lighter text-right mt-3 d-block"><span class="font-weight-light">Expires:</span> {{ item.expires_at }}</p>
                  
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
import axios from "axios";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title";
import SectionHeading from "../../../components/settings/SectionHeading";

export default {
  name: "SubscriptionsMade",
  data() {
    return {
      loaded: false,
      subscriptions: [],
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
  },
  methods: {
    ...mapActions("Settings", { api_subscriptions: "getsubscriptions" }),
    cancelSubscription(sub_id, index) {
      
      axios
        .put("/chipin/account/" + sub_id + "/mysubscriptions/cancel/")
        .then((res) => {
          res
          this.subscriptions[index].status = 'cancelled'
         
        })
        .catch((error) => {
          console.log(error)

        });
    },
  },
  beforeMount() {
    this.api_subscriptions()
      .then((res) => {
        //console.log(res.data)
        this.subscriptions = res.data.results;
        this.loaded = true;
      })
      .catch((error) => {
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
.border-1 {
  border: 1.25px solid #fff;
}

.paid {

}

.label-text {
  font-size: 18px;
}
</style>
