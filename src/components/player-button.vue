<template>
  <div class="d-inline">
    <!-- Desktop -->
    <template v-if="!isMobile()">
      <b-button
        v-if="playing && id === getLoadedSong"
        @click="pause"
        size="lg"
        variant="danger"
        class="text-light py-2 mt-4 px-3 ml-3 font-weight-light player-button"
        squared
      >
        <span>Pause</span>
      </b-button>

      <b-button
        v-else
        @click="play"
        size="(size !== null) ? size : lg"
        variant="danger"
        class="text-light py-2 px-3 mt-4 ml-3 font-weight-light player-button"
        squared
      >
        <img
          src="../assets/play-icon-filled.svg"
          class="mr-1"
          height="22"
          alt="Play Logo"
        />
        Play
      </b-button>
    </template>

    <!-- Mobile -->
    <template v-else>
      <b-button
        v-if="playing && id === getLoadedSong"
        @click="pause"
        size="lg"
        variant="danger"
        class="text-light px-3 ml-3 font-weight-light player-button-mobile"
        squared
      >
        <span>Pause</span>
      </b-button>

      <b-button
        v-else
        @click="play"
        size="(size !== null) ? size : lg"
        variant="danger"
        class="text-light px-3 ml-3 font-weight-light player-button-mobile"
        squared
      >
        Play
      </b-button>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: ["image", "file", "title", "username", "id", "size", "type"],
  data: function () {
    return {
      song: this.$props,
      queue: [],
    };
  },
  methods: {
    ...mapMutations("Player", [
      "playSong",
      "pauseSong",
      "setSong",
      "addSong",
      "clearQueue",
      "setCurrentPlaylist",
    ]),
    ...mapActions("Artist", { artistapi: "artist", artistwebapi: "artistweb" }),
    ...mapActions("Playlist", ["get_playlist"]),
    ...mapActions("Library", ["librarysubsectionlist"]),
    ...mapGetters(["isAuthenticated"]),
    play: function () {
      if (!this.isAuthenticated()) {
        this.$bvModal.show("login-modal");
      } else {
        if (this.loadedSong && this.id !== this.getLoadedSong) {
          console.log("here");
          this.pauseSong();
          this.setSong(this.song);
          this.playSong();
          this.loadQueue(this.queue);
        } else if (!this.loadedSong) {
          console.log("here 2");
          this.setSong(this.song);
          // this.playSong()
          this.loadQueue(this.queue);
        } else {
          console.log("here 3");
          this.playSong();
        }
      }
    },
    pause: function () {
      this.pauseSong();
    },

    loadQueue(queue) {
      // Set the queue in the player store
      this.clearQueue();

      if (this.type === "playlist") {
        this.setCurrentPlaylist(this.id);
      }
      for (const song of queue) {
        if (song.id !== this.getLoadedSong) {
          this.addSong(song);
        }
      }
    },

    getArtistSongs() {
      var vm = this;
      this.artistwebapi(this.username)
        .then((res) => {
          var songs = res.data.featured_tracks;
          vm.song = songs[0];
          songs.shift();
          vm.queue = songs;
        })
        .catch((error) => {
          error;
          // this.$router.replace('/error')
          console.log(error);
        });
    },
    getPlaylistSongs() {
      var vm = this;
      this.get_playlist(this.id)
        .then((res) => {
          var songs = res.data.songs;
          vm.song = songs[0];
          songs.shift();
          vm.queue = songs;
        })
        .catch((error) => {
          console.log(error);
        });
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
  mounted() {
    if (this.type === "artist") {
      this.getArtistSongs();
    } else if (this.type === "playlist") {
      this.getPlaylistSongs();
    }
    // Do the same for other section types
  },
};
</script>

<style>
.player-button-mobile {
  width: 106px;
  height: 40px;
  font-size: 0.9em;
  text-align: center;
  padding: 0;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .player-button {
    border: none;
    width: 150px;
    height: 40px;
    font-size: 1em;
  }
}

@media (min-width: 992px) {
  .player-button {
    width: 187px;
    height: 60px;
    font-size: 1.6em;
  }
}
</style>
