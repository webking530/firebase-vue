<template>
  <b-row
    v-show="isAuthenticated && !playerHidden && show_player"
    class="fixed-bottom"
    :class="{ 'player-expand': this.expand, 'player-collapse': !this.expand }"
  >
  
    
      <b-col cols="12">
        <b-progress
          id="progress"
          class="w-100 rounded-0"
          variant="danger"
          :class="{
            bar: loadedSong,
            'bar-hide': !loadedSong,
            'bar-expand': barTapped,
            'bar-hoverable': true,
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
            @mousedown.native="detectMouseDown"
            @mouseup.native="detectMouseUp"
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

      <b-container fluid class="d-flex flex-column border-top bg-dark">
        <b-row
          class="player-container text-center"
          
          @mouseenter="playerMouseEnter"
          @mouseleave="playerMouseLeave"
        >
          <b-col cols="1" md="2" class="pl-3 align-self-center" :class="{'mb-4': xsScreen}">
            <b-button v-if="!playing" @click="play" variant="link" class="p-0 float-left">
              <img
                src="../assets/play-icon.svg"
                blank-color="#ccc"
                class="play-icon"
                alt="placeholder"
              />
            </b-button>
            <b-button v-if="playing" @click="pause" variant="link" class="p-0 float-left">
              <img
                src="../assets/pause-icon.svg"
                blank-color="#ccc"
                class="play-icon"
                alt="placeholder"
              />
            </b-button>
          </b-col>

          <!-- Back / Repeat buttons -->
          <b-col cols="2" md="2" @click="back" class="align-self-center mt-0 player-control-left">
            <b-button variant="link" class="p-0">
              <img
                src="../assets/player/back.svg"
                blank-color="#ccc"
                class="back-icon"
                alt="placeholder"
              />
            </b-button>
            <!-- Repeat Active -->
            <b-button v-if="getRepeat" @click="repeat" variant="link" class="p-0">
              <img
                src="../assets/player/repeat.svg"
                blank-color="#ccc"
                class="repeat-icon"
                alt="placeholder"
              />
            </b-button>
            <!-- Repeat Inactive -->
            <b-button v-else @click="repeat" variant="link" class="p-0">
              <img
                src="../assets/player/repeat-inactive.svg"
                blank-color="#ccc"
                class="repeat-icon"
                alt="placeholder"
              />
            </b-button>
          </b-col>

          <!-- Display song data when playing or paused  -->
          <b-col v-if="playing || paused" cols="6" md="4" class="align-self-center">
            <img
              v-if="!expand"
              src="../assets/arrow-up.svg"
              blank-color="#ccc"
              height="8"
              class="mt-2 nav-arrow"
              alt="placeholder"
              @click="expand = true"
              style="cursor:pointer;"
            />
            <img
              v-if="expand"
              src="../assets/nav-down.svg"
              blank-color="#ccc"
              height="8"
              class="mt-2 nav-arrow"
              alt="placeholder"
              @click="expand = false"
              style="cursor:pointer;"
            />
    
            <div class="text-light pt-2 mb-1 song-info-xs">
              <p class="song-name mb-0" v-html="elipsis(getLoadedSongData.title, 22)"></p>
              <p class="song-artist-name">{{ getLoadedSongData.username }}</p>
            </div>

            <b-row class="text-light song-info" align-v="center" :class="{'song-info-adjust': getLoadedSongData.title.length <= 15, 'marquee-adjust': getLoadedSongData.title.length > 15}">
              <b-col cols="6" class="pl-0 pr-0">
              <!-- <p class="text-light pt-2 mb-1 song-info"> -->
                <div class="song-name" :class="{'marquee': getLoadedSongData.title.length > 15}">
                  <div class="text-right">
                    {{getLoadedSongData.title}}
                  </div>
                </div>
                
              </b-col>
              <b-col cols="6" class="text-left pr-0" :class="{'artist-name-adjust': getLoadedSongData.title.length > 15,}">
                <span class="song-artist-name px-0" v-html="elipsis(`- ${getLoadedSongData.username}`, 12)"></span>
              </b-col>
            </b-row>
 
          </b-col>

          <!-- If the player is idle -->
          <b-col v-if="!playing && !paused" cols="6" md="4" class="text-center align-self-center select-track-section">
            <div>
              <img v-if="!expand"
                src="../assets/arrow-up.svg"
                blank-color="#ccc"
                height="8"
                class="mb-2 mt-0 nav-arrow"
                alt="placeholder"
                @click="expand = true"
                style="cursor:pointer;"
              />
              <img
              v-else
              src="../assets/nav-down.svg"
              blank-color="#ccc"
              height="8"
              class="mb-2 mt-0 nav-arrow"
              alt="placeholder"
              @click="expand = false"
              style="cursor:pointer;"
            />
              <p class="select-track mt-0">Select Track</p>
            </div>
          </b-col>

          <!-- Forward / Shuffle Buttons -->
          <b-col cols="2" class="align-self-center mt-0 player-control-right">
            <!-- Shuffle Active -->
            <b-button v-if="isShuffled" @click="shuffle" variant="link" class="p-0">
              <img
                src="../assets/player/shuffle.svg"
                blank-color="#ccc"
                class="shuffle-icon"
                alt="placeholder"
              />
            </b-button>
            <!-- Shuffle Inactive -->
            <b-button v-else @click="shuffle" variant="link" class="p-0">
              <img
                src="../assets/player/shuffle-inactive.svg"
                blank-color="#ccc"
                class="shuffle-icon"
                alt="placeholder"
              />
            </b-button>


            <b-button @click="forward" variant="link" class="p-0 ">
              <img
                src="../assets/player/forward.svg"
                blank-color="#ccc"
                class="forward-icon"
                alt="placeholder"
              />
            </b-button>
          </b-col>

          <!-- Hamburger Section -->
          <b-col cols="1" md="2">
            <b-button
              v-if="isAuthenticated"
              v-b-toggle.menu-sidebar
              variant="link"
              class="float-right"
            >
              <img
                src="../assets/hamburger-icon-miniplayer.svg"
                class="align-top hamburger"
                
                alt="Menu"
              />
            </b-button>
          </b-col>
        </b-row>
      
    
        <b-row class="text-center nav-margin" align-v="end" :class="{'player-expand': this.expand, 'player-collapse': !this.expand}">
          <b-col cols="4" >
            <img
                src="../assets/music-library.svg"
                class="align-top nav-icon"
                alt="Menu"
              />
              <p class="text-light mt-2 mb-1 nav-text">My Collection</p>
          </b-col>
          <b-col cols="4">
            <img
                src="../assets/trackd-icon-white.svg"
                class="align-top nav-icon"
                alt="Menu"
              />
              <p class="text-light mt-2 mb-1 nav-text">Feed</p>
          </b-col>
          <b-col cols="4">
            <img
                src="../assets/search-icon-white.svg"
                class="align-top nav-icon"
                alt="Menu"
              />
              <p class="text-light mt-2 mb-1 nav-text">Search</p>
          </b-col>
        </b-row>
      </b-container>
  </b-row>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Howl } from "howler"; // Howler
// import player from './player.vue';

export default {
  // components: { player },
  data: function () {
    return {
      seek: 0,
      player: null,
      dragging: false,
      barHover: false,
      dragSeek: null,
      barTapped: false,
      taps: 0,
      filledSectionEntered: false,
      expand: true,
      collapseTimer: null,
      player_timer: null,
      updateSeek: null,
      xsScreen: window.matchMedia("(max-width: 375px)").matches,
    };
  },
  methods: {
    ...mapMutations("Player", [
      "playSong",
      "pauseSong",
      "setSong",
      "resetPlayer",
      "hidePlayer",
      "nextSong",
      "previousSong",
      "setInitialPlay",
      "setPlayTime",
      "toggleShuffle",
      "toggleRepeat",
    ]),
    play: function () {
      console.log("In mainplayer.play()");
      if (this.player) {
        if (!this.player.playing()) {
          this.player.play();
          this.playSong();
          this.$store.dispatch("Player/startTimer");
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
        var newSeek;
        if (e.target.id === "progress") {
          newSeek = Math.floor(
            (e.offsetX / e.target.offsetWidth) * this.player.duration()
          );
        }
        if (e.target.id === "progress-fill") {
          newSeek = Math.floor(
            (e.offsetX / e.target.parentElement.offsetWidth) *
              this.player.duration()
          );
        }

        this.dragSeek = newSeek;
      }
    },
    detectMouseDown(e) {
      e.preventDefault();
      if (e.target.id === "progress") {
        this.dragSeek = Math.floor(
          (e.offsetX / e.target.offsetWidth) * this.player.duration()
        );
      }

      e.target.addEventListener("mousemove", this.dragToSeek, false);
      e.target.parentElement.addEventListener(
        "mousemove",
        this.dragToSeek,
        false
      );
      this.dragging = true;
    },
    detectMouseUp(e) {
      if (this.dragging) {
        e.target.removeEventListener("mousemove", this.dragToSeek, false);
        e.target.parentElement.removeEventListener(
          "mousemove",
          this.dragToSeek,
          false
        );
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
    forward() {
      if (this.player) {
        if (this.player.playing()) {
          this.pause();
          this.nextSong();
        } else {
          console.log(this.player.playing());
          this.nextSong();
        }
      }
    },
    back() {
      if (this.player) {
        if (this.player.playing()) {
          this.pause();
          this.previousSong();
        } else {
          this.previousSong();
        }
      }
    },
    playerMouseEnter() {
      // this.expand = true;
      // clearTimeout(this.collapseTimer);
    },
    playerMouseLeave() {
      // var vm = this;

      // this.collapseTimer = setTimeout(function () {
      //   vm.expand = false;
      // }, 5000);
    },
    shuffle() {
      console.log("Shuffle Button Clicked")
      this.toggleShuffle()
    },
    repeat() {
      console.log("Repeat button clicked")
      this.toggleRepeat()
    }
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
      getSongQueue: "getSongQueue",
      getPreviousQueue: "getPreviousQueue",
      initialPlay: "isInitialPlay",
      playTime: "getPlayTime",
      playerTimer: "getPlayerTimer",
      isShuffled: "isShuffled",
      getRepeat: "getRepeat"
    }),

    show_player() {
    
      if (
        this.$route.name === "ForArtists" ||
        this.$route.name === "Upload" ||
        (!this.playing && !this.$route.name.includes("Library") )
      ) {
        return false;
      }

      return true;
    },

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
      if (!this.player) return 0;
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

        if (playing) {
          if (this.initialPlay) {
            var vm = this;

            this.expand = true;
            this.collapseTimer = setTimeout(function () {
              vm.expand = false;
            }, 5000);
            this.setInitialPlay(false);
          }
 
          this.seek = this.player.seek();
          this.updateSeek = setInterval(() => {
            if (this.player) {
                this.seek = this.player.seek();
            }
            else {
                clearInterval(this.updateSeek);
            }
          }, 250);
        } else {
          clearInterval(this.updateSeek);
        }
      }
    },
    playSong() {
      if (this.player) {
        this.player.play();
        this.playSong();
        this.$store.dispatch("Player/stopTimer");
      } else {
        this.getLoadedSong();
      }
    },
    paused() {
      if (this.player) {
        if (this.paused) {
          this.player.pause();
          this.pauseSong();
          this.$store.dispatch("Player/stopTimer");
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
            console.log("END")
            v.seek = 0;
            v.resetPlayer();
            v.pauseSong();
            v.player = null;
            v.$store.dispatch("Player/stopTimer");
          },
        });
        this.player.play();
        this.playSong();
        this.$store.dispatch("Player/startTimer");
      } else {
        console.log("not loaded song");
      }
    },
    playTime() {
      // When play timer reaches 0, increment play count
      if (this.playTime === 0) {
        this.$store.dispatch("Player/stopTimer");
        this.$store.dispatch("Player/track_play", this.getLoadedSong);
      }
    },
  },
};
</script>

<style scoped>

.song-name {
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.17px;
  text-align: center;
}

.song-artist-name {
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0.17px;
  margin-bottom: -30px;
}

.player-container {
  height: 50px;
  /* margin-left: 5px; */
  /* margin-right: 10px; */
}

.select-track {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 25px;
  transform: translateY(50%);
}

.select-track-section {
  padding: 0;
}

.fade {
  /* -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out; */
  transition: all 2s ease-in;
}

.bar {
  height: 0.5rem;
  /* transition: all 1.5s ease-in-out; */
  background: rgba(216, 216, 216, 0.5); /* Green background with 30% opacity */
  /* background: #4A4A4A; */
}

.bar-hoverable:hover {
  height: 1.8rem;
  margin-top: -21px;
  transform: translateY(55%);
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
  margin-left: 100px;
  width: 115px;
}

.player-expand {
  
  transform: translateY(0%);
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.player-collapse {
  /* transform: translateY(65%); */
  transform: translateY(45%); /* With bottom nav menu */
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.nav-text {
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
}

.nav-icon {
  height: 20px;
}

.nav-arrow {
  display: none;
}

.play-icon {
  height: 18px;
  /* margin-bottom: 22px; */ 
  transform: translate(150%, 0%);
}

.back-icon {
  height: 14px;
}

.forward-icon {
  height: 14px;
}

.shuffle-icon {
  width: 16px;
  transform: translateX(-100%);
}

.repeat-icon {
  width: 16px;
  transform: translateX(100%);
}

.hamburger {
    height: 12px;
    transform: translate(-20%, 110%);
  }

.player-control-left {
  padding: 0;
  transform: translateX(30%);
}

.player-control-right {
  padding: 0;
  transform: translateX(-30%);
}

.song-info {
  display: none;
}

.song-info-xs {
  display: block;
  transform: translateY(-40%)
}

.marquee {
  width: 150px;
	line-height: 50px;
	/* background-color: red; */
	color: white;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  transform: translate(30%, 5%)
}
.marquee div {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 15s linear infinite;
}
.marquee div span {
    padding-left: 10px
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}



/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .nav-margin {
    margin-left: 3em;
    margin-right: 3em;
  }

  .nav-text {
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
    text-align: center;
  }

  .nav-arrow {
    display: inline;
    transform: translateY(-50%);
  }
  
  .song-name {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.17px;
    text-align: center;
  }

  .song-artist-name {
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 0.17px;
  }

  .song-info {
    display: flex;
    transform: translateY(-25%);
  }

  .song-info-adjust {
    transform: translateY(-20%)
  }


  .song-info-xs {
    display: none;
  }

  .nav-icon {
    height: 32px;
  }

  .player-container {
    height: 80px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .play-icon {
    height: 30px;
    transform: translateY(10%);
  }

  .back-icon {
    height: 18px;
  }

  .forward-icon {
    height: 18px;
  }


  .hamburger {
    height: 18px;
    transform: translate(40%, 140%);
  }

  .player-container {
    height: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .select-track {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 0px;
    transform: translateY(-30%);
  }

  .player-control-left {
    padding: 0;
    transform: translateX(0em);
  }

  .player-control-right {
    padding: 0;
    transform: translateX(0em);
  }

  .marquee {
    width: 6em;
    line-height: 50px;
    /* background-color: red; */
    color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    transform: translate(15%, 0%)
  }
}


/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .nav-margin {
    margin-left: 5em;
    margin-right: 5em;
  }

  .nav-icon {
    height: 32px;
  }

  .nav-arrow {
    display: inline;
  }

  .nav-text {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    text-align: center;
  }

  .player-container {
    height: 80px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .play-icon {
    height: 30px;
    transform: translateY(0%);
  }

  .hamburger {
    height: 21px;
    transform: translate(20%, 110%);
  }

  .player-container {
    height: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .song-info {
    display: flex;
    margin-top: 10px;
    transform: translateY(-40%)
  }

  .song-info-xs {
    display: none;
  }

  .select-track {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 0px;
  }

  .marquee {
    width: 12em;
    line-height: 50px;
    /* background-color: red; */
    color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    transform: translate(-30%, -20%);  
    margin-right: 0px;
  }

  .marquee-adjust {
    transform: translateY(-15%);
  }

  .artist-name-adjust {
    transform: translate(40%, -30%);
    padding: 0;
  }

  .player-control-left {
    transform: translateX(-4em);
  }

  .player-control-right {
    transform: translateX(4em);
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .marquee {
    width: 12em;
    line-height: 50px;
    /* background-color: red; */
    color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    transform: translate(-30%, -20%);
    margin-right: 10px;
  }

  .artist-name-adjust {
    transform: translateY(-30%);
  }

  .play-icon {
    height: 30px;
    transform: translateY(0%);
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .nav-margin {
    margin-left: 7em;
    margin-right: 7em;
  }

  .nav-icon {
    height: 32px;
  }

  .nav-arrow {
    display: inline;
    /* transform: translateY(-100%); */
  }

  .nav-text {
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    text-align: center;
  }

  .song-name {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.17px;
    text-align: center;
  }

  .song-artist-name {
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: 35px;
    letter-spacing: 0.17px;
  }

  .song-info {
    display: flex;
  }

  .song-info-adjust {
    margin-top: 15px;
    transform: translate(-4%, -50%);
  }

  .artist-name-adjust {
    transform: translateY(-30%);
  }

  .song-info-xs {
    display: none;
  }

  .player-container {
    height: 80px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .play-icon {
    height: 30px;
    transform: translateY(0%);
  }

  .repeat-icon {
    margin-left: 20px;
    width: 21px;
  }

  .repeat-inactive-icon {
    margin-left: 20px;
    width: 21px;
  }

  .shuffle-icon {
    width: 22px;
  }

  .forward-icon {
    margin-left: 20px;
  }

  .hamburger {
    height: 21px;
    transform: translate(-75%, 120%);
  }

  .player-container {
    height: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .select-track {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 0px;
  }

  .marquee-margin {
    margin-left: -55px;
    /* transform: translateY(20%); */
  }

  .marquee {
    width: 8em;
    line-height: 50px;
    /* background-color: red; */
    color: white;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    transform: translate(-15%, -20%);
  }

  .player-control-left {
    transform: translateX(-1em);
  }

  .player-control-right {
    transform: translateX(1em);
  }

}
</style>
