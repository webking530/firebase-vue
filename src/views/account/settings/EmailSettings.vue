<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="loaded" class="mb-5">
      <SettingsTitle v-bind:title="'Email Settings'"></SettingsTitle>

      <b-row>
        <SectionHeading v-bind:name="'Email Settings'"></SectionHeading>

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
  name: "EmailSettings",
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
  },
  computed: {
  },
  methods: {
    ...mapActions("Account", {
      get: "getEditUserProfile",
      update: "EditUserProfile",
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
