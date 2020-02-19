<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      <SettingsTitle v-bind:title="'Notifications'"></SettingsTitle>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Notification Settings'"></SectionHeading>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Artist Follows
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.artist_page_likes"
            :type="'artist_page_likes'"
            @change="send($event, 'artist_page_likes', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Song Likes
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.song_page_likes"
            :type="'song_page_likes'"
            @change="send($event, 'song_page_likes', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Collaboration Requests
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.collaboration_requests"
            :type="'collaboration_requests'"
            @change="send($event, 'collaboration_requests', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Artist Comments
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.artist_comments"
            :type="'artist_comments'"
            @change="send($event, 'artist_comments', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Song Comments
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.song_comments"
            :type="'song_comments'"
            @change="send($event, 'song_comments', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Direct Messages
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.direct_messages"
            :type="'direct_messages'"
            @change="send($event, 'direct_messages', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Direct Message Settings'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Allow Direct Messages
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.allow_direct_messages"
            :type="'allow_direct_messages'"
            @change="send($event, 'allow_direct_messages', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Read Reicepts
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.show_read_receipts"
            :type="'show_read_receipts'"
            @change="send($event, 'show_read_receipts', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'Trackd Messages'"></SectionHeading>


         <b-col cols="3">
          <p class="text-light font-weight-light">
            Subscription Offers
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.subscription_offers"
            :type="'subscription_offers'"
            @change="send($event, 'subscription_offers', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Artist News
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.artist_news"
            :type="'artist_news'"
            @change="send($event, 'artist_news', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>


        <b-col cols="3">
          <p class="text-light font-weight-light">
            Collaboration Requests
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.collaboration_requests"
            :type="'collaboration_requests'"
            @change="send($event, 'collaboration_requests', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            App Updates
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.app_updates"
            :type="'app_updates'"
            @change="send($event, 'app_updates', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Sponsored Promotions
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.sponsored_promotions"
            :type="'sponsored_promotions'"
            @change="send($event, 'sponsored_promotions', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Support Requests
          </p>
        </b-col>
        <b-col cols="9">
          <SettingsToggleSwitch
            v-model="form.data.support_requests"
            :type="'support_requests'"
            @change="send($event, 'support_requests', false)"
          >
          </SettingsToggleSwitch>
          
        </b-col>
        <b-col cols="12"><hr class="bg-light" /></b-col>

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
  name: "Notifications",
  data() {
    return {
      loaded: false,
      form: null,
    };
  },
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    SettingsToggleSwitch,
  },
  computed: {
  },
  methods: {
    ...mapActions("Settings", {
      get: "getnotifications",
      update: "updatenotifications",
    }),
    send(event, name, file) {
      file;

      var data = {};
      data[name] = event;

      this.update(data).catch((error) => {
        console.log(error);
      });

    },
  },
  mounted() {
    this.get()
      .then((res) => {
        this.form = res;
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

</style>
