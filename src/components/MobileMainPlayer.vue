<template>
  <b-row
    v-show="(isAuthenticated && !playerHidden) || loadedSong"
    class="fixed-bottom"
  >
    <b-col cols="12">
      <b-progress
        id="progress"
        class="w-100 rounded-0 border-top"
        variant="danger"
        :class="{
          bar: loadedSong,
          'bar-hide': !loadedSong,
          'bar-expand': barTapped,
        }"
        @click.native.self="clickSeek"
        @touchstart.native="tapSeek"
        @mousedown.native="detectMouseDown"
        @mouseup.native="detectMouseUp"
        @mouseenter.native="barHover = true"
        @mouseleave.native="
          barHover = false;
          dragging = false;
        "
      >
        <b-progress-bar
          id="progress-fill"
          @click.native="barClick"
          :value="dragging ? trackProgressDrag : trackProgress"
          max:bind="player.duration()"
          style="transition: none"
        >
          <span class="text-left ml-3 player-label">
            <strong
              :class="{
                'player-label-hide': !barHover,
                'player-label': barHover,
              }"
              >{{ trackProgressMinutesSeconds }}</strong
            >
          </span>
        </b-progress-bar>
      </b-progress>
    </b-col>

    <b-container fluid class="d-flex flex-column bg-dark">
      <b-row class="player-container text-center">
        <b-col cols="3" class="pl-3 align-self-center">
          <b-button
            v-if="!playing"
            @click="play"
            variant="link"
            class="pt-3 mb-2"
          >
            <img
              src="../assets/play-icon.svg"
              blank-color="#ccc"
              height="23"
              class="mt-0"
              alt="placeholder"
            />
          </b-button>
          <b-button
            v-if="playing"
            @click="pause"
            variant="link"
            class="pt-2 mb-2"
          >
            <img
              src="../assets/pause-icon.svg"
              blank-color="#ccc"
              height="19"
              class="mt-1"
              alt="placeholder"
            />
          </b-button>
        </b-col>
        <!-- Display song data when playing or paused  -->
        <b-col v-if="playing || paused" cols="6" class="text-center">
          <p class="text-light font-weight-light song-name mt-2 mb-0">
            {{ getLoadedSongData.title }}
          </p>
          <p class="font-weight-lighter text-light song-artist-name">
            {{ getLoadedSongData.username }}
          </p>
        </b-col>

        <!-- If the player is idle -->
        <b-col v-if="!playing && !paused" class="text-center align-self-center">
          <div>
            <!-- <img src="../assets/back.png" blank-color="#ccc" height="30" class="mt-3" alt="placeholder"/> -->
            <p class="select-track mt-3 pt-1" style="font-size: 1.2em">
              Select Track
            </p>
          </div>
        </b-col>

        <b-col cols="3">
          <!-- <template class="text-center">
                <mobileplayer v-if="loadedSong" class="small-player" v-bind:image="getLoadedSongData.image" v-bind:file="getLoadedSongData.file" v-bind:id="getLoadedSongData.id" v-bind:title="getLoadedSongData.title"  v-bind:username="getLoadedSongData.username" v-bind:useSmallPlayButton="20"></mobileplayer>
              </template> -->
        </b-col>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Howl } from "howler"; // Howler
// import mobileplayer from './MobilePlayer.vue'

export default {
  // components: { mobileplayer },
  data: function () {
    return {
      seek: 0,
      player: null,
      dragging: false,
      barHover: false,
      dragSeek: null,
      barTapped: false,
      taps: 0,
    };
  },
  methods: {
    ...mapMutations("Player", [
      "playSong",
      "pauseSong",
      "setSong",
      "resetPlayer",
      "hidePlayer",
    ]),
    play: function () {
      console.log("In mainplayer.play()");
      if (this.player) {
        if (!this.player.playing()) {
          this.player.play();
          this.playSong();
        }
      }
    },
    pause: function () {
      this.player.pause();
      this.pauseSong();
    },
    hide() {
      this.hidePlayer();
    },
    clickSeek: function (e) {
      var seekTo = Math.floor(
        (e.offsetX / e.target.offsetWidth) * this.player.duration()
      );

      if (this.player) {
        if (!this.dragging) {
          this.seek = seekTo;
          this.player.seek(seekTo);
        }
      }
    },
    // Called when the cursor is moved
    // Calculate the seek point in seconds based on the click position on the player bar
    dragToSeek: function (e) {
      if (this.dragging) {
        var newSeek = Math.floor(
          (e.offsetX / e.target.offsetWidth) * this.player.duration()
        );
        this.dragSeek = newSeek;
      }
    },
    detectMouseDown(e) {
      e.preventDefault();
      this.dragSeek = Math.floor(
        (e.offsetX / e.target.offsetWidth) * this.player.duration()
      );
      e.target.addEventListener("mousemove", this.dragToSeek, false);
      this.dragging = true;
    },
    detectMouseUp(e) {
      if (this.dragging) {
        e.target.removeEventListener("mousemove", this.dragToSeek, false);
        this.dragging = false;
        this.seek = this.dragSeek;
        this.player.seek(this.dragSeek);
      }
    },
    barClick(e) {
      console.log(e.type);
      // Get click position on filled section
      var seekTo =
        (e.offsetX / e.target.parentElement.offsetWidth) *
        this.player.duration();
      this.player.seek(seekTo);
    },
    tapSeek(e) {
      e.preventDefault();
      var vm = this;

      // First tap
      if (this.taps === 0) {
        this.barTapped = true;
        this.taps++;
        // If there is no 2nd tap within 3 seconds then shrink the progress bar again
        setTimeout(function () {
          if (vm.taps === 1) {
            vm.barTapped = false;
            vm.taps = 0;
          }
        }, 3000);
      }
      // Second tap
      else if (this.taps >= 1) {
        // Seek to position
        var xTapPos = e.changedTouches[0].clientX;
        var progressBarWidth;
        var seekTo;

        if (e.target.id === "progress") {
          progressBarWidth = e.target.offsetWidth;
        } else if (e.target.id === "progress-fill") {
          progressBarWidth = e.target.parentElement.offsetWidth;
        }

        seekTo = Math.floor(
          (xTapPos / progressBarWidth) * this.player.duration()
        );

        this.player.seek(seekTo);
        this.taps = 0;
        this.barTapped = false;
      }
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapGetters("Player", {
      paused: "isPaused",
      playing: "isPlaying",
      loadedSong: "loadedSong",
      getLoadedSong: "getLoadedSong",
      getLoadedSongData: "getLoadedSongData",
      isSongLoaded: "isSongLoaded",
      playerHidden: "playerHidden",
    }),
    username() {
      return this.$store.state.player_data.username;
    },
    progress() {
      if (!this.player) return 0;
      if (this.player.duration() === 0) return 0;
      return this.seek / this.player.duration();
    },
    trackProgress() {
      return this.progress * 100;
    },
    trackProgressDrag() {
      return (this.dragSeek / this.player.duration()) * 100;
    },
    trackProgressMinutesSeconds() {
      let minutes = Math.floor(this.seek / 60);
      let seconds = Math.floor(this.seek % 60);
      // It ain't pretty but it works
      return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    },
  },
  watch: {
    playing(playing) {
      if (this.player) {
        if (!this.player.playing()) {
          this.player.play();
        }
        this.seek = this.player.seek();
        let updateSeek;
        if (playing) {
          //this.player.play()
          this.seek = this.player.seek();
          updateSeek = setInterval(() => {
            this.seek = this.player.seek();
          }, 250);
        } else {
          clearInterval(updateSeek);
        }
      }
    },
    playSong() {
      if (this.player) {
        this.player.play();
        this.playSong();
      } else {
        this.getLoadedSong();
      }
    },
    paused() {
      if (this.player) {
        if (this.paused) {
          this.player.pause();
          this.pauseSong();
        }
      }
    },
    getLoadedSong() {
      if (this.player) {
        if (this.player.playing()) {
          this.player.pause();
        }
      }

      if (this.getLoadedSong) {
        console.log("loaded. ", this.getLoadedSongData.file);

        let v = this;

        this.player = new Howl({
          src: [this.getLoadedSongData.file],
          html5: true,
          onend: function () {
            v.seek = 0;
            v.resetPlayer();
            v.pauseSong();
            v.player = null;
          },
        });
        this.player.play();
        this.playSong();
      } else {
        console.log("not loaded song");
      }
    },
  },
};
</script>

<style scoped>
.song-name {
  font-size: 0.8em;
}

.song-artist-name {
  font-size: 0.8em;
}

.player-container {
  height: 53px;
}

.select-track {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 1.875em;
}

.fade {
  /* -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out; */
  transition: all 2s ease-in;
}

.bar {
  height: 0.2rem;
  /* transition: all 1.5s ease-in-out; */
  background: rgba(255, 255, 255, 0.4); /* Green background with 30% opacity */
}

.bar:hover {
  height: 1.8rem;
  /* transition: all 1.5s ease-in-out; */
}

.bar-expand {
  height: 1.8rem;
}

.bar-hide {
  height: 0rem;
  transition: all 1.5s ease-in-out;
}

.player-label-hide {
  font-size: 1em;
  opacity: 0;
  /* transition: all 0.1s ease-in-out; */
}

.player-label {
  font-size: 1em;
  font-weight: 400;
  opacity: 1;
  /* transition: all 0.1s ease-in-out; */
}

.small-player {
  margin-top: -10px;
  margin-left: -20px;
  width: 50px;
}
</style>
