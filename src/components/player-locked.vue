<template>
  <div class="d-flex flex-column justify-content-center song-disk">
    <div class="card rounded-circle border-none bg-none">
      <img
        v-if="getImagePath(image, { width: 160, height: 160 })"
        class="card-img rounded-circle other-image-mobile"
        @click="play"
        :src="image"
        v-bind:class="{
          playing: playing && id === getLoadedSong,
          played: paused && id === getLoadedSong,
        }"
        alt="song image"
      />
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
  props: ["image", "file", "title", "username", "id"],
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
@media (max-width: 575.98px) {
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
}

@media (max-width: 991.98px) {
  .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #most-listened .other-image-mobile {
    width: 120px;
    height: 120px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 80px;
    height: 80px;
    margin: auto;
  }

  .play-icon {
    width: 25px;
  }
}

@media (max-width: 576px) {
  .other-image-mobile {
    width: 80px;
    height: 80px;
    margin: unset;
  }

  .song-disk {
    margin: auto;
    margin-top: unset;
  }
}

@media (min-width: 768px) {
  .other-image-mobile {
    width: 170px;
    height: 170px;
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

  .play-icon {
    width: 18px;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .other-image-mobile {
    width: 150px;
    height: 150px;
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

  .library-section .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }
  .song-list .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  .play-icon {
    height: 36.57px;
    width: 25px;
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .other-image-mobile {
    width: 150px;
    height: 150px;
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
    width: 160px;
    height: 160px;
    margin: auto;
  }

  .play-icon {
    width: 36px;
  }
}
</style>
