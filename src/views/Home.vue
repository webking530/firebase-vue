<template>
  <div
    :class="{
      'player-margin': isAuthenticated && !isMobile() && !this.initialPlay,
      'player-margin-mobile': isMobile(),
    }"
  >
    <b-container fluid v-if="sections">
      <b-row
        class="row-eq-height"
        :class="{
          'mobile-section': isMobile(),
          'overlay-padding': this.homeOverlayDisplayed,
          'overlay-normal': !this.homeOverlayDisplayed,
        }"
      >
        <template>
          <div
            class="col-12 col-lg-3 p-0 section wide-section"
            v-for="section in filter_applied ? filtered_sections : sections"
            :key="section.id"
            @mouseover="showByIndex = section.id"
            @mouseout="showByIndex = null"
            @click="clickedSection(section)"
            v-bind:class="{
              'col-lg-12': showByBlockIndex === section.id,
              'd-none': rowNeighbours.includes(section),
              'mobile-section': isMobile(),
            }"
          >
            <div
              class="image-backdrop hero-banner overlay"
              :style="{
                backgroundImage: `url(${getImagePath(section.image)})`,
              }"
              :class="{ 'hero-banner-mobile': isMobile() }"
            >
              <div
                class="w-100 h-100 text-center"
                v-bind:class="{
                  overlay: showByIndex === section.id,
                  'mobile-overlay': isMobile(),
                  'mobile-overlay-clicked':
                    isMobile() && showByIndex === section.id,
                  'square-normal-overlay':
                    showByIndex !== section.id && !isMobile(),
                }"
              >
                <!-- DESKTOP -->
                <b-row v-if="!isMobile()" class="mx-3">
                  <b-col cols="1" class="text-center text-light">
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="
                        section.chipin_enabled &&
                        !section.chipin_plus &&
                        section.type === 'artist'
                      "
                      class="p-0 mt-3 float-left"
                      variant="link"
                      v-b-modal="'chipin-modal-' + section.id"
                    >
                      <img
                        src="../assets/chipin-badge.svg"
                        class="mx-auto"
                        height="35"
                        alt="ChipIn Logo"
                      />
                    </b-button>
                    <b-button
                      v-show="
                        showByIndex === section.id ||
                        showByBlockIndex === section.id
                      "
                      v-if="
                        section.chipin_enabled &&
                        section.chipin_plus &&
                        section.type === 'artist'
                      "
                      class="p-0 mt-3 float-left"
                      variant="link"
                      v-b-modal="'chipin-plus-modal-' + section.id"
                    >
                      <img
                        src="../assets/chipin-plus-badge.svg"
                        class="mx-auto"
                        height="35"
                        alt="ChipIn+ Logo"
                      />
                    </b-button>
                  </b-col>
                  <b-col cols="10" class="text-center text-light mt-5">
                    <!-- Show pause overlay if this section is playing -->
                    <!-- <div v-if="getLoadedSongData.username === section.username && playing" class="pt-5 mt-4">
                                        <b-button variant="link" @click.stop="pauseSong">
                                            <img class="" src="../assets/pause.svg" width="30px" alt="placeholder" />
                                        </b-button>
                                    </div> -->

                    <div
                      class="mt-3"
                      :class="{
                        'section-expanded': expanded === section.id,
                        'section-normal': expanded !== section.id,
                      }"
                    >
                      <chipin
                        v-show="showByBlockIndex === section.id"
                        v-if="
                          section.chipin_enabled &&
                          !section.chipin_plus &&
                          section.type === 'artist'
                        "
                        v-bind:user_id="section.id"
                        v-bind:username="section.username"
                      ></chipin>
                      <chipinplus
                        v-show="showByBlockIndex === section.id"
                        v-if="
                          section.chipin_enabled &&
                          section.chipin_plus &&
                          section.type === 'artist'
                        "
                        v-bind:user_id="section.id"
                        v-bind:username="section.username"
                      ></chipinplus>
                      <template v-if="!largeScreen">
                        <h1
                          class="font-weight-lighter heading-text"
                          :class="{'heading-text-expanded': expanded === section.id}"
                          v-html="elipsis(section.heading, 24)"
                        >
                          {{ section.heading }}
                        </h1>
                        <p
                          v-if="section.type === 'librarysection'"
                          class="text-capitalize small pb-0 mb-0 type-text"
                        >
                          Discover
                        </p>
                        <p
                          v-else
                          class="text-capitalize small pb-0 mb-0 type-text"
                        >
                          {{ section.type }}
                        </p>
                      </template>
                      <template v-else>
                        <p
                          v-if="section.type === 'librarysection'"
                          class="
                            text-uppercase
                            small
                            font-weight-bold
                            pb-0
                            mb-0
                            type-text
                          "
                        >
                          Discover
                        </p>
                        <p
                          v-else
                          class="
                            text-uppercase
                            small
                            font-weight-bold
                            pb-0
                            mb-0
                            type-text
                          "
                        >
                          {{ section.type }}
                        </p>
                        <h1
                          class="font-weight-lighter heading-text"
                          :class="{'heading-text-expanded': expanded === section.id}"
                          v-html="elipsis(section.heading, 24)"
                        >
                          {{ section.heading }}
                        </h1>
                        <p
                          class="font-weight-lighter mb-0 section-text"
                          v-if="expanded === section.id"
                        >
                          {{ section.text }}
                        </p>
                      </template>

                      <div class="button-margin">
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'artist'"
                          @click="
                            viewSection({
                              name: 'ArtistUsername',
                              params: { id: section.username },
                            })
                          "
                          size="lg"
                          class="
                            text-light
                            py-2
                            px-3
                            mt-lg-4
                            font-weight-light
                            view-button
                            button-blue
                          "
                          squared
                          >View Artist</b-button
                        >
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'song'"
                          :to="{ name: 'Song', params: { id: section.id } }"
                          size="lg"
                          variant="secondary"
                          class="
                            text-light
                            py-2
                            px-3
                            mt-4
                            font-weight-light
                            view-button
                            button-grey
                          "
                          squared
                          >View Song</b-button
                        >
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'playlist'"
                          :to="{ name: 'Playlist', params: { id: section.id } }"
                          size="lg"
                          variant="warning"
                          class="
                            text-light
                            py-2
                            px-3
                            mt-4
                            font-weight-light
                            view-button
                            button-orange
                          "
                          squared
                          >View Playlist</b-button
                        >
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'genre'"
                          :to="{
                            name: 'LibrarySubSectionList',
                            params: { id: section.id },
                            query: { type: section.type },
                          }"
                          size="lg"
                          variant="info"
                          class="
                            text-light
                            py-2
                            px-4
                            mt-4
                            font-weight-light
                            view-button
                            button-blue
                          "
                          squared
                          >View</b-button
                        >
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'librarysection'"
                          :to="{
                            name: 'LibrarySectionList',
                            params: { area: section.side, id: section.id },
                          }"
                          size="lg"
                          variant="info"
                          class="
                            text-light
                            py-2
                            px-4
                            mt-4
                            font-weight-light
                            view-button
                            button-blue
                          "
                          squared
                          >View</b-button
                        >
                        <b-button
                          v-show="showByBlockIndex === section.id"
                          v-if="section.type === 'location'"
                          :to="{
                            name: 'LibrarySubSection',
                            params: { id: section.id },
                            query: { type: section.location_type },
                          }"
                          size="lg"
                          variant="info"
                          class="
                            text-light
                            py-2
                            px-4
                            mt-4
                            font-weight-light
                            view-button
                            button-blue
                          "
                          squared
                          >View</b-button
                        >
                        <span>
                          <playerbutton
                            v-if="
                              section.type === 'song' && expanded === section.id
                            "
                            v-bind:id="section.id"
                            v-bind:file="section.file"
                            v-bind:title="section.heading"
                            v-bind:username="section.username"
                            v-on:click.stop.native="closeSection()"
                          ></playerbutton>
                          <playerbutton
                            v-else-if="expanded === section.id"
                            v-bind:id="section.id"
                            v-bind:username="section.username"
                            v-bind:type="section.type"
                            v-on:click.stop.native="closeSection()"
                          ></playerbutton>
                        </span>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="1">
                    <b-button
                      class="p-0 mt-3 float-right"
                      v-on:click.stop="closeSection()"
                      variant="link"
                      v-if="expanded === section.id"
                    >
                      <img
                        src="../assets/section-close.svg"
                        class="mx-auto"
                        height="23"
                        alt="Close"
                      />
                    </b-button>
                  </b-col>
                </b-row>

                <!-- Mobile -->
                <div
                  v-if="isMobile()"
                  class="d-block mx-auto text-center pt-5"
                  v-show="
                    showByIndex === section.id ||
                    showByBlockIndex === section.id
                  "
                  style="position: relative"
                >
                  <h1
                    class="text-light font-weight-lighter"
                    style="font-size: 1.5em"
                  >
                    {{ section.heading }}
                  </h1>
                  <p
                    class="text-light font-weight-lighter"
                    style="font-size: 1em"
                  >
                    {{ section.text }}
                  </p>

                  <div>
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'song'"
                      :to="{ name: 'Song', params: { id: section.id } }"
                      size="sm"
                      class="
                        text-light
                        px-3
                        font-weight-light
                        view-button-mobile
                        button-grey
                      "
                      squared
                      >View Song</b-button
                    >

                    <!-- Artist -->
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'artist'"
                      :to="{
                        name: 'ArtistUsername',
                        params: { id: section.username },
                      }"
                      size="sm"
                      class="
                        text-light
                        font-weight-light
                        view-button-mobile
                        button-blue
                      "
                      squared
                      >View Artist</b-button
                    >
                    <!-- <chipin v-show="showByIndex === section.id" v-if="section.chipin_enabled && !section.chipin_plus && section.type === 'artist'" v-bind:user_id="section.id" v-bind:username="section.username"></chipin>
                                    <chipinplus v-show="showByIndex === section.id"  v-if="section.chipin_enabled && section.chipin_plus && section.type === 'artist'" v-bind:user_id="section.id" v-bind:username="section.username"></chipinplus> -->

                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'playlist'"
                      :to="{ name: 'Playlist', params: { id: section.id } }"
                      size="sm"
                      variant="warning"
                      class="text-light font-weight-light view-button-mobile"
                      squared
                      >View Playlist</b-button
                    >
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'genre'"
                      :to="{
                        name: 'LibrarySubSectionList',
                        params: { id: section.id },
                        query: { type: section.type },
                      }"
                      size="sm"
                      variant="info"
                      class="
                        text-light
                        px-4
                        font-weight-light
                        view-button-mobile
                      "
                      squared
                      >View</b-button
                    >
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'librarysection'"
                      :to="{
                        name: 'LibrarySectionList',
                        params: { area: section.side, id: section.id },
                      }"
                      size="sm"
                      variant="info"
                      class="
                        text-light
                        px-4
                        font-weight-light
                        view-button-mobile
                      "
                      squared
                      >View</b-button
                    >
                    <b-button
                      v-show="showByIndex === section.id"
                      v-if="section.type === 'location'"
                      :to="{
                        name: 'LibrarySubSection',
                        params: { id: section.id },
                        query: { type: section.location_type },
                      }"
                      size="sm"
                      variant="info"
                      class="
                        text-light
                        px-4
                        font-weight-light
                        view-button-mobile
                      "
                      squared
                      >View</b-button
                    >
                    <template>
                      <playerbutton
                        v-if="
                          section.type === 'song' && expanded === section.id
                        "
                        v-bind:id="section.id"
                        v-bind:file="section.file"
                        v-bind:title="section.heading"
                        v-bind:username="section.username"
                        v-on:click.stop.native="closeSection()"
                      ></playerbutton>
                      <playerbutton
                        v-if="
                          section.type !== 'song' && expanded === section.id
                        "
                        v-bind:id="section.id"
                        v-bind:username="section.username"
                        v-bind:type="section.type"
                        v-on:click.stop.native="closeSection()"
                      ></playerbutton>
                      <!-- <playerbutton  v-if="section.type === 'song' && showByIndex === section.id" v-bind:id="section.id" v-bind:file="section.file" v-bind:title="section.heading" v-bind:username="section.username" v-on:click.stop.native="closeSection()"></playerbutton> -->
                      <!-- <playerbutton  v-if="expanded === section.id" v-bind:id="section.id" v-bind:username="section.username" v-bind:type="section.type" ></playerbutton> -->
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </b-row>
    </b-container>

    <HomeOverlay
      id="home-overlay"
      ref="home-overlay"
    ></HomeOverlay>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import chipin from "../components/chipin.vue";
import chipinplus from "../components/chipinplus.vue";
import playerbutton from "../components/player-button.vue";
import HomeOverlay from "../components/modal/HomeOverlay.vue";
export default {
  name: "Home",
  components: {
    chipin,
    chipinplus,
    playerbutton,
    HomeOverlay,
  },
  data() {
    return {
      sections: [],
      filtered_sections: [],

      showByIndex: null,
      showByBlockIndex: null,
      rowNeighbours: [],
      // The expanded section
      expanded: null,

      largeScreen: window.matchMedia("(min-width: 992px)").matches,
    };
  },
  methods: {
    ...mapActions("Library", ["home", "home_filter"]),
    ...mapMutations("Library", ["setSections"]),
    ...mapMutations("Player", ["pauseSong"]),
    ...mapMutations("Auth", ['setShowLoginModal', 'setShowHomeOverlay']),
    clickedSection(section) {
      console.log(section);
      this.showByIndex = section.id;
      this.expanded = section.id;
      if (!this.isMobile()) {
        this.showByBlockIndex = section.id;

        if (window.matchMedia("(min-width: 992px)").matches) {
          // Clear rowNeighbours array
          this.rowNeighbours.length = 0;
          // Set the neighbours of the clicked section

          // Determine the index of the section and the row it's in (4 sections per row)
          let clickedIndex = this.sections.indexOf(section);
          let rowNumber = Math.floor(clickedIndex / 4);
          // Determine which other sections are in the row
          let rowLower = rowNumber * 4;
          let rowUpper = rowLower + 3;
          // Find the row neighbours of the selected section
          for (var i = rowLower; i <= rowUpper; i++) {
            // Don't add the selected section as a neighbour
            if (i !== this.sections.indexOf(section)) {
              this.rowNeighbours.push(this.sections[i]);
            }
          }
        }
      }
    },
    closeSection() {
      this.showByBlockIndex = null;
      this.expanded = null;
      this.rowNeighbours.length = 0;
    },

    viewSection(route) {
      if (!this.isAuthenticated) {
        this.$bvModal.show("login-modal");
      } else {
        this.$router.push(route);
      }
    },

    getRowNeighbours(section) {
      // console.log(section.type)

      let section_list;
      if (this.filter_applied) {
        section_list = this.getFilteredSections;
      } else {
        section_list = this.sections;
      }

      let neighbours = [];
      // Find the row neighbours of the selected section
      for (var i = 0; i <= section_list.length - 1; i++) {
        // Don't add the selected section as a neighbour
        if (i !== section_list.indexOf(section)) {
          neighbours.push(section_list[i]);
        }
      }
      return neighbours;
    },
  },
  mounted() {
    this.home()
      .then((res) => {
        this.sections = res.data.sections;
        this.setSections(res.data.sections);
        //console.log(res)

        // If unauthenticated, show the full screen modal overlay
        if (!this.isAuthenticated) {
          this.setShowHomeOverlay(true);
          this.$bvModal.show("home-overlay-modal");
        }
      })
      .catch((error) => {
        error;
        this.$router.replace("/error");
        //console.log(error);
      });
  },
  computed: {
    ...mapGetters("Library", {
      getSections: "getSections",
      getFilteredSections: "getFilteredSections",
      filter_applied: "filter_applied",
    }),
    ...mapGetters(["isAuthenticated"]),
    ...mapGetters('Auth', {
      loginModalDisplayed: 'login_modal_displayed',
      homeOverlayDisplayed: 'home_overlay_displayed',
    }),
    ...mapGetters("Player", {
      getLoadedSong: "getLoadedSong",
      getLoadedSongData: "getLoadedSongData",
      playing: "isPlaying",
      initialPlay: "isInitialPlay",
      getCurrentPlaylist: "getCurrentPlaylist",
    }),

    is_overlay_modal_open() {
      return document.getElementById("home-overlay-modal").hasClass("show");
    },
  },
  watch: {
    getSections() {
      this.sections = this.getSections;
    },

    getFilteredSections() {
      this.filtered_sections = this.getFilteredSections;
    },

    filter_applied() {
      return this.filter_applied;
    },
  },
};
</script>
<style scoped>
.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.65);
}
.overlay:hover {
  opacity: 1;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.mobile-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
.mobile-overlay-clicked {
  background-color: rgba(0, 0, 0, 0.65);
}
.square-normal-overlay {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(0, 0, 0, 0.6)
  );
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
  height: 299px;
}
.hero-banner-mobile {
  height: 160px;
}
.mobile-section {
  height: 160px;
}

.hide-section {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  display: none;
}
.button-blue {
  background-color: #00afdc;
}
.button-orange {
  background-color: #eab67b;
}
.button-grey {
  background-color: #4a4a4a;
}
.view-button {
  border: none;
  width: 187px;
  height: 60px;
  font-size: 1.6em;
}
.view-button-mobile {
  width: 106px;
  height: 40px;
  font-size: 0.9em;
  text-align: center;
  line-height: 30px;
  /* padding: 0; */
}

.wrapper {
  min-width: 100%;
  height: 299px;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  display: flex;
  /* overflow-x: auto; */
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.wrapper::-webkit-scrollbar {
  display: none;
}
.overlay-padding {
  margin-top: 30em;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.overlay-normal {
  margin-top: 0em;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.player-margin {
  padding-bottom: 30px;
}

.player-margin-mobile {
  padding-bottom: 2450px;
}

.expanded-align {
  position: absolute;
  left: 0em;
}

.wrapper {
  min-width: 100%;
  height: 299px;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  display: flex;
  /* overflow-x: auto; */
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (min-width: 768px) and (max-width: 991px) {
  .section {
    height: 200px;
  }
  .heading-text {
    font-size: 28px;
  }

  .type-text {
    font-size: 18px;
    font-weight: 300;
  }

  .section-normal {
    margin-top: 1em !important;
  }

  .section-expanded {
    margin-top: -6px !important;
  }

  .button-margin {
    /* margin-top: 1.6em; */
    transform: translateY(42%);
  }

  .view-button {
    border: none;
    width: 150px;
    height: 40px;
    font-size: 1em;
    margin-top: 1.5em;
  }
}

@media (min-width: 992px) {
  .section {
    height: 100%;
    width: 100%;
  }
  .heading-text {
    font-size: 24px;
  }

  .heading-text-expanded {
    font-size: 54px;
  }

  .type-text {
    font-size: 14px;
  }

  .section-text {
    font-size: 24px;
  }

  .section-normal {
    margin-top: 12em !important;
  }

  .section-expanded {
    margin-top: 2em !important;
  }

  .button-margin {
    margin-top: 0.5em;
  }

  .view-button {
    border: none;
    width: 187px;
    height: 60px;
    font-size: 1.6em;
  }

  .wide-section {
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }
}
</style>
