<template>
  <div class="d-flex flex-column justify-content-center">
    <div class="card rounded-circle border-none bg-none" style="width: 60px">
      <!-- <img v-if="getImagePath(image, {width: 110, height: 110})" class="card-img rounded-circle other-image-mobile" @click="play" :src="image" v-bind:class="{ playing: playing && id === getLoadedSong, played: paused && id === getLoadedSong }" alt="song image"> -->
      <b-img
        blank
        rounded="circle"
        blank-color="#00AFDC"
        class="h-100 w-100 other-image-mobile"
        @click="play"
        :src="image"
        v-bind:class="{
          playing: playing && id === getLoadedSong,
          played: paused && id === getLoadedSong,
        }"
        alt="placeholder"
      ></b-img>
      <div
        class="
          card-img-overlay
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <img
          v-if="!playing && !loadedSong"
          @click="play"
          src="../assets/play-icon.svg"
          rounded="circle"
          class="mx-auto"
          width="40"
          style="z-index: 10"
          alt="play icon"
        />
        <img
          v-if="!playing && loadedSong && id !== getLoadedSong"
          @click="play"
          src="../assets/play-icon.svg"
          rounded="circle"
          class="mx-auto"
          width="40"
          style="z-index: 10"
          alt="play icon"
        />
        <img
          v-if="!playing && loadedSong && id === getLoadedSong"
          @click="play"
          src="../assets/play-icon.svg"
          rounded="circle"
          class="mx-auto"
          width="40"
          style="z-index: 10"
          alt="play icon"
          :class="{ 'small-play-button': useSmallPlayButton !== null }"
        />
        <img
          v-if="playing && loadedSong && id !== getLoadedSong"
          @click="play"
          src="../assets/play-icon.svg"
          rounded="circle"
          class="mx-auto"
          width="40"
          style="z-index: 10"
          alt="play icon"
        />
        <img
          v-if="playing && loadedSong && id === getLoadedSong"
          @click="pause"
          src="../assets/playing-icon.svg"
          rounded="circle"
          class="mx-auto"
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
  props: ["image", "file", "title", "username", "id", "useSmallPlayButton"],
  methods: {
    ...mapMutations("Player", ["playSong", "pauseSong", "setSong"]),
    play: function () {
      if (this.loadedSong && this.id !== this.getLoadedSong.id) {
        console.log("here");
        this.pauseSong();
        this.setSong(this.$props);
        this.playSong();
      } else if (!this.loadedSong) {
        console.log("here 2");
        this.setSong(this.$props);
        this.playSong();
      } else {
        console.log("here 3");
        this.playSong();
      }
    },
    pause: function () {
      this.pauseSong();
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

<style>
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

@media (min-width: 768px) {
  .other-image-mobile {
    width: 170 px;
    height: 170px;
    margin: auto;
  }

  .other-image-mobile {
    width: 170px;
    height: 170px;
    margin: auto;
  }

  #most-listened .other-image-mobile {
    width: 90px;
    height: 90px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 90px;
    height: 90px;
    margin: auto;
  }
}
</style>
