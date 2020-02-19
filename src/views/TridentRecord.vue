<template>
  <div>
    <b-container class="mt-5 py-5">
      <h1 class="text-light font-weight-light text-center mt-5 pb-4">
        Trident Records
      </h1>

      <p class="text-light font-weight-light text-center">
        Trident Records is an independent record label. Artists Start Here.
        Discover the artists we are working with in the playlist below.
      </p>
      <p class="text-light font-weight-light text-center">
        We are looking for new artists to work with. To submit to the label you
        need to send a complete Trackd profile with images, bio and a minimum of
        three songs via email to
        <a
          class="text-light font-weight-normal"
          href="mailto:music@tridentrecords.london"
          >music@tridentrecords.london</a
        >
        We will respond to every artist submission.
      </p>
    </b-container>
    <b-container fluid v-if="sections">
      <div v-for="section in sections" :key="section.id">
        <b-row
          class="image-backdrop hero-banner d-block"
          :style="{ backgroundImage: `url(${getImagePath(section.image)})` }"
          v-if="section.type === 'song' || section.type === 'artist'"
          @mouseover="showByIndex = section.id"
          @mouseout="showByIndex = null"
        >
          <div
            class="d-flex w-100 h-100"
            v-bind:class="{ overlay: showByIndex === section.id }"
          >
            <b-col class="text-center text-light">
              <!--v-show="showByIndex === section.id" >-->

              <b-button
                v-if="section.chipin_enabled && section.type === 'artist'"
                class="p-0 mt-3 float-right"
                variant="link"
                v-b-modal="'chipin-modal-' + section.id"
              >
                <img
                  src="../assets/chipin-badge.svg"
                  class="mx-auto"
                  height="50"
                  alt="ChipIn Logo"
                />
              </b-button>

              <div class="d-block mx-auto pt-6">
                <p class="text-uppercase small font-weight-bold">
                  {{ section.type }}
                </p>
                <p></p>
                <h1 class="font-weight-lighter">{{ section.heading }}</h1>
                <p class="font-weight-lighter">{{ section.text }}</p>

                <b-button
                  v-if="section.type === 'song'"
                  :to="{ name: 'Song', params: { id: section.id } }"
                  size="lg"
                  variant="secondary"
                  class="text-light py-3 px-5 font-weight-light"
                  squared
                  >View Song</b-button
                >
                <playerbutton
                  v-if="section.type === 'song'"
                  v-bind:id="section.id"
                  v-bind:file="section.file"
                  v-bind:title="section.heading"
                  v-bind:username="section.username"
                ></playerbutton>

                <b-button
                  v-if="section.type === 'artist'"
                  :to="{
                    name: 'ArtistUsername',
                    params: { id: section.username },
                  }"
                  size="lg"
                  variant="warning"
                  class="text-light py-3 px-5 font-weight-light"
                  squared
                  >View Artist</b-button
                >
                <chipin
                  v-if="section.chipin_enabled && section.type === 'artist'"
                  v-bind:user_id="section.id"
                  v-bind:username="section.username"
                ></chipin>
              </div>
            </b-col>
          </div>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import chipin from "../components/chipin.vue";
import playerbutton from "../components/player-button.vue";

export default {
  name: "TridentRecord",
  components: {
    chipin,
    playerbutton,
  },
  data() {
    return {
      sections: [],
      showByIndex: null,
    };
  },
  methods: {
    ...mapActions("Library", ["tridentrecord"]),
  },
  mounted() {
    this.tridentrecord()
      .then((res) => {
        this.sections = res.data.sections;
        //console.log(this.sections)
      })
      .catch((error) => {
        error;
        this.$router.replace("/error");
        //console.log(error);
      });
  },
};
</script>

<style scoped>
body {
  margin-top: 220px;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.45);
}

.overlay:hover {
  opacity: 1;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.vh-30 {
  height: 30vh !important;
}

.pb-6,
.py-6 {
  padding-bottom: 6rem !important;
}

.pt-6,
.py-6 {
  padding-top: 6rem !important;
}

.pb-7,
.py-7 {
  padding-bottom: 7rem !important;
}

.pt-7,
.py-7 {
  padding-top: 7rem !important;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

.hero-banner {
  height: 400px;
}
</style>
