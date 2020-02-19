<template>
  <div id="screen" v-if="loaded">
    <b-container v-if="response" fluid>
      <b-row
        v-if="response.banner.image.length > 0"
        :style="{
          backgroundImage: `url(${getImagePath(response.banner.image[0])})`,
        }"
        class="image-backdrop"
      >
        <b-col
          class="text-center text-light pt-8 pb-8 mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 v-if="response.banner.title" class="mx-auto font-weight-light">
            {{ response.banner.title }}
          </h1>
        </b-col>
      </b-row>

      <b-row v-else class="image-backdrop" :class="random_colour">
        <b-col
          class="text-center text-light pt-8 pb-8 mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 v-if="response.banner.title" class="mx-auto font-weight-light">
            {{ response.banner.title }}
          </h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-4">
      <b-row class="mb-5" v-for="result in response.results" :key="result.id">
        <b-col cols="12">
          <ArtistAsset
            v-if="result.type === 'artist' && !isMobile()"
            v-bind:artist="result"
          ></ArtistAsset>
          <ArtistAssetMobile
            v-if="result.type === 'artist' && isMobile()"
            v-bind:artist="result"
          ></ArtistAssetMobile>

          <SongAsset
            v-if="result.type === 'song' && !isMobile()"
            v-bind:song="result"
          ></SongAsset>
          <SongAssetMobile
            v-if="result.type === 'song' && isMobile()"
            v-bind:song="result"
          ></SongAssetMobile>

          <PlaylistAsset
            v-if="result.type === 'playlist' && !isMobile()"
            v-bind:playlist="result"
          ></PlaylistAsset>
          <PlaylistAssetMobile
            v-if="result.type === 'playlist' && isMobile()"
            v-bind:playlist="result"
          ></PlaylistAssetMobile>
        </b-col>
      </b-row>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import InfiniteLoading from "vue-infinite-loading";

import ArtistAsset from "../../components/library/list/ArtistAsset.vue";
import ArtistAssetMobile from "../../components/library/list/ArtistAssetMobile.vue";
import SongAsset from "../../components/library/list/SongAsset.vue";
import SongAssetMobile from "../../components/library/list/SongAssetMobile.vue";
import PlaylistAsset from "../../components/library/list/PlaylistAsset.vue";
import PlaylistAssetMobile from "../../components/library/list/PlaylistAssetMobile";

export default {
  name: "LibrarySectionList",
  data() {
    return {
      loaded: false,
      response: null,
      next_page: null,
    };
  },
  components: {
    ArtistAsset,
    ArtistAssetMobile,
    SongAsset,
    SongAssetMobile,
    PlaylistAsset,
    PlaylistAssetMobile,
    InfiniteLoading,
  },
  methods: {
    ...mapActions("Library", ["librarysubsection", "librarysubsection_next"]),
    infiniteHandler($state) {
      this.librarysubsection_next(this.next_page).then((res) => {
        this.response.results.push(...res.data.results);
        this.next_page = res.data.next;
        $state.loaded();
      });
    },
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
  mounted() {
    this.librarysubsection([this.$route.params.id, this.$route.query])
      .then((res) => {
        this.next_page = res.data.next;
        this.response = res.data;
        this.loaded = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
p {
  font-size: 1.2em;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.photo-border {
  border: 7px solid #000;
}

.border-success-2 {
  border: 2px solid #28a745 !important;
}

.border-danger-2 {
  border: 2px solid #dc3545 !important;
}

.stats-number {
  font-size: 2.2em;
  line-height: 1em;
  font-weight: lighter;
}

.text-small {
  font-size: 0.6em;
}

.text-smaller {
  font-size: 0.8em;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/* mobile */

/*  Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .positioning,
  .positioning-mobile {
    position: relative;
    top: -100px !important;
  }

  .positioning-chipin-logo {
    position: relative;
    top: -100px !important;
  }

  .stats-number {
    font-size: 1.7em;
    line-height: 1em;
    font-weight: lighter;
  }

  .text-smaller {
    font-size: 0.6em;
  }

  .profile-mobile {
    text-align: left !important;
  }
}

/*  Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
}

/*  Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}

/*  Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

.border-gradient {
  border-top: 2px solid #fff;
  border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
  border-image-slice: 1;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 0.2em;
}

#screen {
  margin-top: 106px;
}

.text-small {
  font-size: 1em;
}
</style>
