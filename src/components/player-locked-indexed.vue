<template>
  <div class="d-flex flex-column justify-content-center">
    <div class="card rounded-circle border-none bg-none">
      <!-- <img v-if="image" class="card-img rounded-circle other-image-mobile"  @click="play" :src="getImagePath(image, {width: 150, height: 150})" v-bind:class="{ playing: playing && id === getLoadedSong, played: paused && id === getLoadedSong }" alt="song image"> -->
      <div
        v-if="player_type == 'playlistasset' && image.length > 1"
        class="play_wrapper other-image-mobile"
        v-bind:class="{
          playing: playing && id === getLoadedSong,
          paused: paused && id === getLoadedSong,
        }"
      >
        <div
          class="quarter left-top split_image"
          :style="'background: url(' + image[0 % image.length] + ')'"
        />
        <div
          class="quarter right-top split_image"
          :style="'background: url(' + image[1 % image.length] + ')'"
        />
        <div
          class="quarter left-bottom split_image"
          :style="'background: url(' + image[2 % image.length] + ')'"
        />
        <div
          class="quarter right-bottom split_image"
          :style="'background: url(' + image[3 % image.length] + ')'"
        />
        <!-- <div class="quarter right-bottom" style="background: url(https://picsum.photos/53)"></div> -->
      </div>
      <div v-else>
        <template v-if="isAuthenticated">
          <b-avatar
            v-if="player_image"
            class="card-img rounded-circle other-image-mobile"
            @click="play"
            :src="player_image"
            :style="player_image_style"
            v-bind:class="{
              playing:
                playing && id === getLoadedSong && player_type != 'playlist',
              paused:
                paused && id === getLoadedSong && player_type != 'playlist',
              playlist_playing:
                playing && id === getLoadedSong && player_type == 'playlist',
              playlist_paused:
                paused && id === getLoadedSong && player_type == 'playlist',
            }"
            alt="song image"
          ></b-avatar>
          <b-img
            v-else
            blank
            rounded="circle"
            blank-color="#00AFDC"
            class="other-image-mobile"
            :style="player_image_style"
            @click="play"
            :src="player_image"
            v-bind:class="{
              playing: playing && id === getLoadedSong,
              paused: paused && id === getLoadedSong,
            }"
            alt="placeholder"
          ></b-img>
        </template>
        <template v-else>
          <b-avatar
            v-if="player_image"
            class="card-img rounded-circle other-image-mobile"
            @click.native="$bvModal.show('login-modal')"
            :src="player_image"
            alt="song image"
          ></b-avatar>
          <b-img
            v-else
            blank
            rounded="circle"
            blank-color="#00AFDC"
            class="other-image-mobile"
            @click.native="$bvModal.show('login-modal')"
            :src="player_image"
            v-bind:class="{
              playing: playing && id === getLoadedSong,
              paused: paused && id === getLoadedSong,
            }"
            alt="placeholder"
          ></b-img>
        </template>
      </div>

      <div
        class="card-img-overlay d-flex justify-content-center align-items-center"
      >
        <img
          v-if="!isAuthenticated"
          @click="$bvModal.show('login-modal')"
          src="../assets/play-icon-filled.svg"
          rounded="circle"
          class="mx-auto"
          width="25"
          style="z-index: 10;"
          alt="play icon"
        />
        <template v-else>
          <img
            v-if="!playing && !loadedSong"
            @click="play"
            src="../assets/play-icon-filled.svg"
            rounded="circle"
            class="mx-auto"
            :style="this.player_type == 'playlist' ? 'width:7px' : 'width:25px'"
            style="z-index: 10"
            alt="play icon"
          />
          <img
            v-if="!playing && loadedSong && id !== getLoadedSong"
            @click="play"
            src="../assets/play-icon-filled.svg"
            rounded="circle"
            class="mx-auto"
            :style="this.player_type == 'playlist' ? 'width:7px' : 'width:25px'"
            style="z-index: 10"
            alt="play icon"
          />
          <img
            v-if="!playing && loadedSong && id === getLoadedSong"
            @click="play"
            src="../assets/play-icon-filled.svg"
            rounded="circle"
            class="mx-auto"
            :style="this.player_type == 'playlist' ? 'width:7px' : 'width:25px'"
            style="z-index: 10"
            alt="play icon"
            :class="{ 'small-play-button': useSmallPlayButton !== null }"
          />
          <img
            v-if="playing && loadedSong && id !== getLoadedSong"
            @click="play"
            src="../assets/play-icon-filled.svg"
            rounded="circle"
            class="mx-auto"
            :style="this.player_type == 'playlist' ? 'width:7px' : 'width:25px'"
            style="z-index: 10"
            alt="play icon"
          />
          <img
            v-if="playing && loadedSong && id === getLoadedSong"
            @click="pause"
            src="../assets/playing-icon.svg"
            rounded="circle"
            class="mx-auto"
            width="12.5"
            alt="play icon"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: [
    "image",
    "file",
    "title",
    "username",
    "id",
    "useSmallPlayButton",
    "queue",
    "player_type",
    "index",
  ],
  data: function() {
    return {
      play_button_effect: "",
      player_image_style: "",
      player_image: null,
    };
  },
  methods: {
    ...mapMutations("Player", [
      "playSong",
      "pauseSong",
      "setSong",
      "addSong",
      "clearQueue",
    ]),
    play: function() {
      this.$parent.$bvModal.show("chipin-plus-modal-" + this.id + '-' + this.index);
    },
    pause: function() {
      this.$parent.$bvModal.show("chipin-plus-modal-" + this.id + '-' + this.index);
    },
    loadQueue() {
      // Set the queue in the player store

      this.clearQueue();
      for (const song of this.queue) {
        if (song.id !== this.getLoadedSong) {
          this.addSong(song);
        }
      }
    },
  },
  computed: {
    ...mapGetters("Player", {
      paused: "isPaused",
      playing: "isPlaying",
      loadedSong: "loadedSong",
      getLoadedSong: "getLoadedSong",
      getLoadedSongData: "getLoadedSongData",
      getSongQueue: "getSongQueue",
    }),
    ...mapGetters(["isAuthenticated"]),
  },
  watch: {
    getSongQueue() {
      console.log("player.getSongQueue() - Song Queue Updated");
    },
  },
  mounted() {
    if (this.image) {
      this.player_image = this.getImagePath(this.image, {
        func: "crop",
        width: 150,
        height: 150,
      });
    }
    console.log(this.player_type);
    if (this.player_type === "playlistasset") {
      this.player_image_style =
        "width: 120px !important; height: 120px !important;";
    } else if (this.player_type === "playlist") {
      this.player_image_style =
        "width: 50px !important; height: 50px !important;";
    }
  },
};
</script>

<style>
.playing {
  border: 7px solid #e76e66 !important;
  -webkit-animation: rotation 3s infinite linear;
  -webkit-animation-play-state: running;
}

.paused {
  border: 7px solid #e76e66 !important;
  -webkit-animation: rotation 3s infinite linear;
  -webkit-animation-play-state: paused;
}

.playlist_playing {
  border: 3px solid #e76e66 !important;
  -webkit-animation: rotation 3s infinite linear;
  -webkit-animation-play-state: running;
}

.playlist_paused {
  border: 3px solid #e76e66 !important;
  -webkit-animation: rotation 3s infinite linear;
  -webkit-animation-play-state: paused;
}

.played {
  -webkit-animation: rotation_back 1s linear;
}

.border-none {
  border: none !important;
}

.bg-none {
  background: transparent;
}

.test {
  width: 20px;
}

.song-disk {
  float: left;
}

div.play_wrapper {
  position: relative;
  /* width: 100px;  */
  /* height: 100px;  */
  border-radius: 50px;
}
div.quarter {
  position: absolute;
  width: 50%;
  height: 50%;
  transition: transform 0.5s, opacity 0.5s;
}
div.play {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 38px;
  top: 38px;
  z-index: 999;
}
div.quarter.left-top {
  left: 0;
  top: 0;
  border-top-left-radius: 50px;
}
div.quarter.right-top {
  left: 50%;
  top: 0;
  border-top-right-radius: 50px;
}
div.quarter.left-bottom {
  left: 0;
  top: 50%;
  border-bottom-left-radius: 50px;
}
div.quarter.right-bottom {
  left: 50%;
  top: 50%;
  border-bottom-right-radius: 50px;
}

.split_image {
  background-position: center !important;
  background-repeat: no-repeat;
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

@media (max-width: 991.98px) {
  .c-artist-photo {
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 10;
    border: solid white 3px;
    border-radius: 50%;
  }

  .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  div.play_wrapper {
    border-radius: 45px;
  }

  div.quarter.left-top {
    border-top-left-radius: 45px;
  }
  div.quarter.right-top {
    border-top-right-radius: 45px;
  }
  div.quarter.left-bottom {
    border-bottom-left-radius: 45px;
  }
  div.quarter.right-bottom {
    border-bottom-right-radius: 45px;
  }

  #most-listened .other-image-mobile {
    width: 100px;
    height: 100px;
    margin: auto;
  }

  #profile_player .other-image-mobile > span > img {
    width: 166px;
    height: 166px;
    margin: auto;
  }

  #most-listened .play_wrapper {
    border-radius: 50px;
  }

  #most-listened div.quarter.left-top {
    border-top-left-radius: 50px;
  }
  #most-listened div.quarter.right-top {
    border-top-right-radius: 50px;
  }
  #most-listened div.quarter.left-bottom {
    border-bottom-left-radius: 50px;
  }
  #most-listened div.quarter.right-bottom {
    border-bottom-right-radius: 50px;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 80px;
    height: 80px;
    margin: auto;
  }

  #my-songs .play_wrapper,
  #featured-songs .play_wrapper {
    border-radius: 40px;
  }

  #my-song div.quarter.left-top,
  #featured-song div.quarter.left-top {
    border-top-left-radius: 40px;
  }
  #my-song div.quarter.right-top,
  #featured-song div.quarter.left-top {
    border-top-right-radius: 40px;
  }
  #my-song div.quarter.left-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-left-radius: 40px;
  }
  #my-song div.quarter.right-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-right-radius: 40px;
  }

  .play-icon {
    width: 24px;
  }
}

/*  Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  /* .positioning, .positioning-mobile {
            position: relative; top: -100px !important;
        } */

  .other-image-mobile {
    width: 90px;
    height: 90px;
    margin: auto;
  }

  div.play_wrapper {
    border-radius: 45px;
  }
  div.quarter.left-top {
    border-top-left-radius: 45px;
  }
  div.quarter.right-top {
    border-top-right-radius: 45px;
  }
  div.quarter.left-bottom {
    border-bottom-left-radius: 45px;
  }
  div.quarter.right-bottom {
    border-bottom-right-radius: 45px;
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

  .play-icon {
    width: 13px !important;
  }

  #most-listened .other-image-mobile {
    width: 80px !important;
    height: 80px !important;
    margin: auto;
  }

  #most-listened div.play_wrapper {
    border-radius: 40px;
  }

  #most-listened div.quarter.left-top {
    border-top-left-radius: 40px;
  }
  #most-listened div.quarter.right-top {
    border-top-right-radius: 40px;
  }
  #most-listened div.quarter.left-bottom {
    border-bottom-left-radius: 40px;
  }
  #most-listened div.quarter.right-bottom {
    border-bottom-right-radius: 40px;
  }

  .card-img-overlay {
    /* width: 80px; */
  }

  .song-disk {
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  .other-image-mobile,
  .b-avatar .b-avatar-img img,
  .other-image-mobile > span > img {
    width: 170px;
    height: 170px;
    margin: auto;
  }

  div.play_wrapper {
    border-radius: 85px;
  }

  div.quarter.left-top {
    border-top-left-radius: 85px;
  }
  div.quarter.right-top {
    border-top-right-radius: 85px;
  }
  div.quarter.left-bottom {
    border-bottom-left-radius: 85px;
  }
  div.quarter.right-bottom {
    border-bottom-right-radius: 85px;
  }

  #profile_player .other-image-mobile > span > img {
    width: 200px;
    height: 200px;
    margin: auto;
  }

  #most-listened .other-image-mobile {
    width: 100px;
    height: 100px;
    margin: auto;
  }

  #most-listened .div.play_wrapper {
    border-radius: 50px;
  }

  #most-listened div.quarter.left-top {
    border-top-left-radius: 50px;
  }
  #most-listened div.quarter.right-top {
    border-top-right-radius: 50px;
  }
  #most-listened div.quarter.left-bottom {
    border-bottom-left-radius: 50px;
  }
  #most-listened div.quarter.right-bottom {
    border-bottom-right-radius: 50px;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 90px;
    height: 90px;
    margin: auto;
  }

  #my-songs div.play_wrapper,
  #featured-songs div.play_wrapper {
    border-radius: 45px;
  }

  #my-song div.quarter.left-top,
  #featured-song div.quarter.left-top {
    border-top-left-radius: 45px;
  }
  #my-song div.quarter.right-top,
  #featured-song div.quarter.left-top {
    border-top-right-radius: 45px;
  }
  #my-song div.quarter.left-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-left-radius: 45px;
  }
  #my-song div.quarter.right-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-right-radius: 45px;
  }

  .play-icon {
    width: 18px;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .other-image-mobile {
    width: 130px;
    height: 130px;
    margin: auto;
  }

  div.quarter.left-top {
    border-top-left-radius: 65px;
  }
  div.quarter.right-top {
    border-top-right-radius: 65px;
  }
  div.quarter.left-bottom {
    border-bottom-left-radius: 65px;
  }
  div.quarter.right-bottom {
    border-bottom-right-radius: 65px;
  }

  .play_wrapper {
    border-radius: 65px;
  }

  #most-listened .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #most-listened div.quarter.left-top {
    border-top-left-radius: 80px;
  }
  #most-listened div.quarter.right-top {
    border-top-right-radius: 80px;
  }
  #most-listened div.quarter.left-bottom {
    border-bottom-left-radius: 80px;
  }
  #most-listened div.quarter.right-bottom {
    border-bottom-right-radius: 80px;
  }

  #most-listened .play_wrapper {
    border-radius: 80px;
  }

  #profile_player .other-image-mobile > span > img {
    width: 200px;
    height: 200px;
    margin: auto;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  #my-songs .play_wrapper,
  #featured-songs .play_wrapper {
    border-radius: 75px;
  }

  #my-song div.quarter.left-top,
  #featured-song div.quarter.left-top {
    border-top-left-radius: 75px;
  }
  #my-song div.quarter.right-top,
  #featured-song div.quarter.left-top {
    border-top-right-radius: 75px;
  }
  #my-song div.quarter.left-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-left-radius: 75px;
  }
  #my-song div.quarter.right-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-right-radius: 75px;
  }

  .library-section .other-image-mobile {
    /* width: 150px;
    height: 150px;
    margin: auto; */
  }
  .song-list .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  .song-list .play_wrapper {
    border-radius: 75px;
  }

  .play-icon {
    width: 30px;
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .other-image-mobile {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  div.play_wrapper {
    border-radius: 75px;
  }

  div.quarter.left-top {
    border-top-left-radius: 75px;
  }
  div.quarter.right-top {
    border-top-right-radius: 75px;
  }
  div.quarter.left-bottom {
    border-bottom-left-radius: 75px;
  }
  div.quarter.right-bottom {
    border-bottom-right-radius: 75px;
  }

  #profile_player .other-image-mobile > span > img {
    width: 250px;
    height: 250px;
    margin: auto;
  }

  #profile_player .other-image-mobile {
    width: 250px;
    height: 250px;
    margin: auto;
  }

  #profile_player div.play_wrapper {
    border-radius: 125px;
  }

  #profile_player div.quarter.left-top {
    border-top-left-radius: 125px;
  }
  #profile_player div.quarter.right-top {
    border-top-right-radius: 125px;
  }
  #profile_player div.quarter.left-bottom {
    border-bottom-left-radius: 125px;
  }
  #profile_player div.quarter.right-bottom {
    border-bottom-right-radius: 125px;
  }

  #most-listened .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #most-listened div.play_wrapper {
    border-radius: 80px;
  }

  #most-listened div.quarter.left-top {
    border-top-left-radius: 80px;
  }
  #most-listened div.quarter.right-top {
    border-top-right-radius: 80px;
  }
  #most-listened div.quarter.left-bottom {
    border-bottom-left-radius: 80px;
  }
  #most-listened div.quarter.right-bottom {
    border-bottom-right-radius: 80px;
  }

  #my-songs .other-image-mobile,
  #featured-songs .other-image-mobile {
    width: 160px;
    height: 160px;
    margin: auto;
  }

  #my-songs div.play_wrapper,
  #featured-songs div.play_wrapper {
    border-radius: 80px;
  }

  #my-song div.quarter.left-top,
  #featured-song div.quarter.left-top {
    border-top-left-radius: 80px;
  }
  #my-song div.quarter.right-top,
  #featured-song div.quarter.left-top {
    border-top-right-radius: 80px;
  }
  #my-song div.quarter.left-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-left-radius: 80px;
  }
  #my-song div.quarter.right-bottom,
  #featured-song div.quarter.left-top {
    border-bottom-right-radius: 80px;
  }

  .other-image-mobile {
    display: flex;
    justify-content: flex-end;
  }

  .play-icon {
    width: 36px;
  }
}

.small-play-button {
  width: 8px;
}

</style>
