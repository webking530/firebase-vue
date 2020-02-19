<template>
  <div class=" justify-content-center song-disk">
    <div v-if="artist_image" class="c-artist-photo">
      <img
        v-if="artist_image"
        class="card-img rounded-circle"
        @click="play"
        :src="getImagePath(artist_image, { width: 50, height: 50 })"
        alt="song image"
      />
    </div>

    <div class="card rounded-circle border-none bg-none">
      <b-avatar
        v-if="image"
        class="card-img rounded-circle other-image-mobile"
        @click="play"
        :src="getImagePath(image, { func: 'crop', width: 150, height: 150 })"
        v-bind:class="{
          playing: playing && id === getLoadedSong,
          played: paused && id === getLoadedSong,
        }"
        alt="song image"
      ></b-avatar>
      <b-img
        v-else
        blank
        rounded="circle"
        blank-color="#00AFDC"
        class="h-100 w-100  other-image-mobile"
        @click="play"
        :src="image"
        v-bind:class="{
          playing: playing && id === getLoadedSong,
          played: paused && id === getLoadedSong,
        }"
        alt="placeholder"
      ></b-img>
      <div
        class="card-img-overlay d-flex justify-content-center align-items-center"
      >
        <img
          v-if="!playing && !loadedSong"
          @click="play"
          src="../assets/play-icon-filled.svg"
          rounded="circle"
          class="mx-auto play-icon"
          width="40"
          style="z-index: 10;"
          alt="play icon"
        />
        <img
          v-if="!playing && loadedSong && id !== getLoadedSong"
          @click="play"
          src="../assets/play-icon-filled.svg"
          rounded="circle"
          class="mx-auto play-icon"
          width="40"
          style="z-index: 10;"
          alt="play icon"
        />
        <img
          v-if="!playing && loadedSong && id === getLoadedSong"
          @click="play"
          src="../assets/play-icon-filled.svg"
          rounded="circle"
          class="mx-auto play-icon"
          width="40"
          style="z-index: 10;"
          alt="play icon"
        />
        <img
          v-if="playing && loadedSong && id !== getLoadedSong"
          @click="play"
          src="../assets/play-icon-filled.svg"
          rounded="circle"
          class="mx-auto play-icon"
          width="40"
          style="z-index: 10;"
          alt="play icon"
        />
        <img
          v-if="playing && loadedSong && id === getLoadedSong"
          @click="pause"
          src="../assets/playing-icon.svg"
          rounded="circle"
          class="mx-auto play-icon"
          width="30"
          alt="play icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["image", "artist_image", "file", "title", "username", "id"],
  methods: {
    ...mapMutations("Player", ["playSong", "pauseSong", "setSong"]),
    play: function() {
      this.$parent.$bvModal.show("chipin-plus-modal-" + this.id);
    },
    pause: function() {
      this.$parent.$bvModal.show("chipin-plus-modal-" + this.id);
    },
  },
  computed: {
    ...mapGetters("Player", {
      paused: "isPaused",
      playing: "isPlaying",
      loadedSong: "loadedSong",
      getLoadedSong: "getLoadedSong",
    }),
  },
  mounted() {},
};
</script>

<style scoped>
/* .playing {
  border: 7px solid #e76e66 !important;
  -webkit-animation: rotation 3s infinite linear;
}

.played {
  -webkit-animation: rotation_back 1s linear;
} */

.border-none {
  border: none !important;
}

.bg-none {
  background: transparent;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}

@-webkit-keyframes rotation_back {
  from {
    -webkit-transform: rotate(359deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}

/*  Extra small devices (portrait phones, less than 576px) */
@media (max-width: 577px) {
  /* .positioning, .positioning-mobile {
            position: relative; top: -100px !important;
        } */

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

  .play-icon {
    width: 24px !important;
  }

  .card-carousel-cards .play-icon {
    width: 18px !important;
  }

  .other-image-mobile {
    width: 140px !important;
    height: 140px !important;
    margin: auto;
  }
}

@media (min-width: 768px) {
  .other-image-mobile {
    width: 200px;
    height: 200px;
    margin: auto;
  }

  #most-listened .other-image-mobile {
    width: 100px;
    height: 100px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 90px;
    height: 90px;
    margin: auto;
  }

  .card-carousel-cards .play-icon {
    width: 25px;
  }

  .play-icon {
    width: 35px;
  }

  .c-artist-photo img {
    width: 60px;
    height: 60px;
  }

  .c-artist-photo {
    width: 66px;
    height: 66px;
    position: absolute;
    z-index: 100;
    border: solid white 3px;
    border-radius: 50%;
  }
}

@media (min-width: 991.98px) {
  #most-listened .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 80px;
    height: 80px;
    margin: auto;
  }

  .play-icon {
    height: 50px;
    width: 41px;
  }

  .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  .top-arrow {
    height: 20px;
  }

  .popular-artist-song {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
}

@media (min-width: 991.98px) {
  .other-image-mobile {
    width: 200px;
    height: 200px;
    margin: auto;
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .other-image-mobile {
    width: 220px;
    height: 220px;
    margin: auto;
  }

  #profile_player .other-image-mobile {
    width: 250px;
    height: 250px;
    margin: auto;
  }

  #most-listened .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  .play-icon {
    width: 40px;
    height: 60px;
  }

  .c-artist-photo img {
    width: 80px;
    height: 80px;
  }

  .c-artist-photo {
    width: 86px;
    height: 86px;
  }
}
</style>
