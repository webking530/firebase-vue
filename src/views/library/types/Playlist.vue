<template>
  <div class="">
    <b-container fluid class="px-0">
      <PlaylistBanner v-bind:response="playlist"></PlaylistBanner>
    </b-container>

    <b-container class="py-2">
      <div class="d-flex justify-content-between text-white">
        <div class="d-flex" style="align-items:center">
          <div class="songs">
            <span v-if="search_results.length === 0">{{ songs.length }}
            {{ songs.length > 1 ? "Songs" : "Song" }}</span>
            <span v-else>{{ search_results.length }}
            {{ search_results.length > 1 ? "Results Found" : "Result Found" }}</span>
          </div>
        </div>
        <div class="d-flex">
          <toggler
            v-if="playlist.user_id === my_user_id"
            v-model="playlist.private"
            color="#00B884"
            class="mr-0 mr-md-4"
            ><span class="switch-button-label"> Make Private</span></toggler
          >
          <span class="song_toggle">
            <b-button
              v-if="playlist.liked"
              variant="link"
              @click="unlikePlaylist()"
              class=" pr-0"
            >
              <img
                src="../../../assets/heart-filled.svg"
                class="align-top text-white pr-0 song-heart-nav"
                height="30"
                alt="Menu"
              />
            </b-button>
            <b-button
              v-else
              variant="link"
              @click="likePlaylist()"
              class=" pr-0"
            >
              <img
                src="../../../assets/heart.svg"
                class="align-top text-white pr-0 song-heart-nav"
                height="30"
                alt="Menu"
              />
            </b-button>
          </span>
        </div>
      </div>
    </b-container>
    <div style="border-bottom: 1px solid #9B9B9B"></div>

    <b-container v-if="playlist">
      <div>
        <label class="sr-only" for="input-search">Search</label>
        <b-input-group class="mb-2 mt-4 mr-sm-2 mb-sm-0">
          <b-input-group-prepend
            class="px-2 search-input"
            style="
              margin-right:0px;
              border-top-left-radius: 0.45rem;
              border-bottom-left-radius: 0.45rem;
            "
            :class="{ 'mobile-search-bar': isMobile() }"
          >
            <b-icon-search
              v-if="!isMobile()"
              font-scale="1.2"
              class="mx-auto"
              style="height:100%; color:#8E8E93;"
            ></b-icon-search>
            <b-icon-search
              v-else
              font-scale="1.2"
              class="mx-auto m-2"
              style="color: #8E8E93;height:100%;"
            ></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            id="input-search"
            class="search-input text-light font-weight-light"
            style="color: #fff;background-color: rgba(255,255,255,0.1)"
            :class="{ 'mobile-search-bar': isMobile() }"
            placeholder="Search Playlist"
            v-model="search_param"
            v-on:input="search_change()"
          ></b-form-input>
          <b-input-group-append
            class="px-2 search-input"
            style="
              border-top-right-radius: 0.45rem;
              border-bottom-right-radius: 0.45rem;
              margin-left:0px;
              
            "
          >
            <b-icon-x-circle-fill
              font-scale="1.2"
              class="mx-auto"
              style="color: #8E8E93;height:100%;"
              @click="clearSearch"
            />
          </b-input-group-append>
        </b-input-group>
      </div>

      <div v-if="search_results.length === 0">
      <b-row  v-for="(song, index) in songs" :key="index">
        <b-col cols="12" class="text-center text-light text-left mt-3 mb-3">
          <b-row class="px-0">
            <b-col cols="2" md="1" class="pr-0 pr-md-3">
              <player
                v-if="playlist.user_id === my_user_id"
                v-bind:image="song.song_image"
                v-bind:file="song.song_url"
                v-bind:id="song.id"
                v-bind:title="song.song_name"
                v-bind:username="song.artist_name"
                v-bind:queue="songs"
                player_type="playlist"
              ></player>
                <playerlocked
                  v-else-if="song.chipin_plus && song.locked"
                  v-bind:image="song.song_image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.user_id"
                  v-bind:title="song.song_name"
                  v-bind:username="song.artist_name"
                  player_type="playlist"
                  v-bind:index="index"
                ></playerlocked>
              <player
                v-else
                v-bind:image="song.song_image"
                v-bind:file="song.song_url"
                v-bind:id="song.id"
                v-bind:title="song.song_name"
                v-bind:username="song.artist_name"
                v-bind:queue="songs"
                player_type="playlist"
              ></player>
            </b-col>

            <b-col>
              <router-link
                class="text-light song_title float-left mt-3"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.artist_name, id: song.id },
                }"
                >
                
                <img
                  v-if="song.chipin_plus"
                  src="../../../assets/chipin+-locked-light.svg"
                  class="song-locked mr-3"
                  height="30"
                  alt="Logo"
                />
                {{ song.song_name }}
              </router-link>
              <router-link
                class="text-light song_author float-left ml-3 ml-md-4 mt-3"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.artist_name, id: song.id },
                }"
                >{{ song.artist_name }}
              </router-link>
            </b-col>

            <b-col class="pl-0 pl-md-3">
              <SongActions
                v-bind:playlist="playlist"
                v-bind:song="song"
                v-bind:index="index"
              ></SongActions>

              <b-button
                v-if="!song.liked"
                @click="likeSong(song.id, index)"
                variant="link"
                class="float-right mt-3 p-0"
              >
                <img
                  src="../../../assets/heart.svg"
                  class="align-top song-heart"
                  alt="Menu"
                />
              </b-button>

              <b-button
                v-if="song.liked"
                @click="unlikeSong(song.id, index)"
                variant="link"
                class="float-right mt-3 p-0"
              >
                <img
                  src="../../../assets/heart-filled.svg"
                  class="align-top song-heart"
                  alt="Menu"
                />
              </b-button>

              <span class="song_play_info float-right px-1 mr-2 mr-md-3 mt-3">
                {{ song.likes }}
              </span>

              <span class="song_play_info float-right px-1 mr-2 mr-md-3 mt-3">
                {{ song.song_timecode }}
              </span>
            </b-col>

            <chipinplus
              v-if="song.chipin_plus"
              v-bind:user_id="song.user_id"
              v-bind:username="song.artist_name"
              v-bind:index="index"
            ></chipinplus>

          </b-row>
        </b-col>
      </b-row>
      </div>
      <div v-else>

      <b-row  v-for="(song, index) in search_results" :key="index">
        <b-col cols="12" class="text-center text-light text-left mt-3 mb-3">
          <b-row class="px-0">
            <b-col cols="2" md="1" class="pr-0 pr-md-3">
              <player
                v-if="playlist.user_id === my_user_id"
                v-bind:image="song.song_image"
                v-bind:file="song.song_url"
                v-bind:id="song.id"
                v-bind:title="song.song_name"
                v-bind:username="song.artist_name"
                v-bind:queue="songs"
                player_type="playlist"
              ></player>
                <playerlocked
                  v-else-if="song.chipin_plus && song.locked"
                  v-bind:image="song.song_image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.user_id"
                  v-bind:title="song.song_name"
                  v-bind:username="song.artist_name"
                  player_type="playlist"
                  v-bind:index="index"
                ></playerlocked>
              <player
                v-else
                v-bind:image="song.song_image"
                v-bind:file="song.song_url"
                v-bind:id="song.id"
                v-bind:title="song.song_name"
                v-bind:username="song.artist_name"
                v-bind:queue="songs"
                player_type="playlist"
              ></player>
            </b-col>

            <b-col>
              <router-link
                class="text-light song_title float-left mt-3"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.artist_name, id: song.id },
                }"
                >
                
                <img
                  v-if="song.chipin_plus"
                  src="../../../assets/chipin+-locked-light.svg"
                  class="song-locked mr-3"
                  height="30"
                  alt="Logo"
                />
                {{ song.song_name }}
              </router-link>
              <router-link
                class="text-light song_author float-left ml-3 ml-md-4 mt-3"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.artist_name, id: song.id },
                }"
                >{{ song.artist_name }}
              </router-link>
            </b-col>

            <b-col class="pl-0 pl-md-3">
              <SongActions
                v-bind:playlist="playlist"
                v-bind:song="song"
                v-bind:index="index"
              ></SongActions>

              <b-button
                v-if="!song.liked"
                @click="likeSong(song.id, index)"
                variant="link"
                class="float-right mt-3 p-0"
              >
                <img
                  src="../../../assets/heart.svg"
                  class="align-top song-heart"
                  alt="Menu"
                />
              </b-button>

              <b-button
                v-if="song.liked"
                @click="unlikeSong(song.id, index)"
                variant="link"
                class="float-right mt-3 p-0"
              >
                <img
                  src="../../../assets/heart-filled.svg"
                  class="align-top song-heart"
                  alt="Menu"
                />
              </b-button>

              <span class="song_play_info float-right px-1 mr-2 mr-md-3 mt-3">
                {{ song.likes }}
              </span>

              <span class="song_play_info float-right px-1 mr-2 mr-md-3 mt-3">
                {{ song.song_timecode }}
              </span>
            </b-col>

            <chipinplus
              v-if="song.chipin_plus"
              v-bind:user_id="song.user_id"
              v-bind:username="song.artist_name"
              v-bind:index="index"
            ></chipinplus>

          </b-row>
        </b-col>
      </b-row>
      </div>
    </b-container>


      <chipinplustellmemore></chipinplustellmemore>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";                    
import player from "../../../components/player.vue";
import playerlocked from "../../../components/player-locked-indexed.vue";
import toggler from "../../../components/toggler.vue";
import PlaylistBanner from "../../../components/library/PlaylistBanner.vue";
import SongActions from "../../../components/ancillary/playlist/song/actions.vue";
import chipinplus from "../../../components/chipinplus-indexed.vue";
import chipinplustellmemore from "../../../components/chipinplus-tellmemore.vue";

export default {
  name: "Playlist",
  data() {
    return {
      search_param: null,
      search_results: [],
      playlist: null,
      songs: [],
      private_view: true,
      navbar: {
        open: true,
        collapse: false,
      },
    };
  },
  components: {
    player,
    playerlocked,
    toggler,
    PlaylistBanner,
    SongActions,
    chipinplus,
    chipinplustellmemore
  },

  created() {},

  methods: {
    ...mapMutations("Player", ["addSong", "clearQueue"]),
    ...mapActions("Playlist", [
      "get_playlist",
      "get_private_playlist",
      "update_playlist",
    ]),
    ...mapActions("Song", ["like_song", "unlike_song"]),
    ...mapActions("Playlist", ["like_playlist", "unlike_playlist", "search_playlist"]),
    removeSong(index) {
      this.songs.splice(index, 1)
    },
    clearSearch() {
      this.search_param = null;
      this.search_results = [];
    },
    search_change() {
      if (this.search_param.length > 3) {
        this.search_playlist([this.playlist.id, this.search_param])
          .then((res) => {
            this.search_results = res.data.results;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (!this.search_param) {
        this.search_param = null;
        this.search_results = [];
      }
    },

    likePlaylist() {
      this.playlist.liked = true;
      this.like_playlist(this.playlist.id);
    },

    unlikePlaylist() {
      this.playlist.liked = false;
      this.unlike_playlist(this.playlist.id);
    },

    makePrivate() {
      let data = {};
      data["private"] = true;
      this.update_playlist([this.playlist.id, data]);
      this.playlist.private = true;
    },

    unPrivate() {
      let data = {};
      data["private"] = false;
      this.update_playlist([this.playlist.id, data]);
      this.playlist.private = false;
    },

    likeSong(id, index) {
      this.like_song(id);

      /*result = this.songs.filter((obj) => {
        return obj.id === song;
      });*/

      this.playlist.songs[index].liked = true;
      this.playlist.songs[index].likes += 1;
    },

    unlikeSong(id, index) {
      this.unlike_song(id);

      /*result = this.songs.filter((obj) => {
        return obj.id === song;
      });*/

      this.songs[index].liked = false;
      this.songs[index].likes -= 1;
    },
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
    ...mapGetters(["my_user_id"]),
    ...mapGetters("Player", {
      loadedSong: "loadedSong",
      getLoadedSong: "getLoadedSong",
    }),
  },
  mounted() {
    var id = this.$route.params.id;

    if (parseInt(id)) {
      this.get_playlist(id)
        .then((res) => {
          this.playlist = res.data;
          this.songs = this.playlist.songs
        })
        .catch((error) => {
          console.log(error);
        });
        this.private_view = false
    } else {
      this.private_view = true
      this.get_private_playlist(id)
        .then((res) => {
          this.playlist = res.data;
          this.songs = this.playlist.songs
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style scoped>
p {
  font-size: 1.2em;
}

.song-heart {
  position: relative;
  top: -3px;
}
.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-backdrop > div {
  height: 330px;
}

/* Switch */
.switch-button-control .switch-button.enabled .button {
  background-color: #81cd5c !important;
}

.switch-button-control .switch-button .button {
  background-color: #000 !important;
}

.song_title,
.songs {
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
}

.song_author {
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0px;
  text-align: left;
}

.song_play_info {
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: right;
}

.song_info {
  min-width: 250px;
}

.song-heart {
  height: 30px;
  position: relative;
  top: -6px;
}
.song-heart-nav {
  height: 30px;
}

.default-background {
  background: url("../../../assets/images/playlist_banner.png");
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

  .song_title,
  .songs {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }

  .song_author {
    font-size: 16px;
    font-weight: 200;
    line-height: 21px;
  }

  .song_play_info {
    font-size: 16px;
    font-weight: 200;
    line-height: 21px;
  }
}

/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
  .song_title {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
  }

  .song_author {
    font-size: 18px;
    font-weight: 200;
    line-height: 21px;
  }

  .song_play_info {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
  .song_title,
  .songs {
    font-size: 24px;
    font-weight: 400;
    line-height: 21px;
  }

  .song_author {
    font-size: 24px;
    font-weight: 200;
    line-height: 21px;
  }

  .song_play_info {
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
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

  .song_info {
    margin: auto;
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

.screen {
  margin-top: 106px;
}

.search-input {
  font-size: 18px;
  font-weight: 400 !important;
  line-height: 22px;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: none !important;
}

h1 {
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
}

.lead {
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
}
/* .search_form input, .input-group-append, .input-group-prepend, .input-group-text{
    background: rgba(255,255,255,0.1) !important;
    color: #9B9B9B !important;
    border: none !important;
    font-size: 18px !important;
    line-height: 22px !important;

} */

.switch-button-label {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: right;
}

@media (max-width: 414px) {
  .song-heart {
    height: 23px;
    margin-top: 3px;
  }

  .song_title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 60px;
    display: inline;
  }

  .song_author {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 60px;
    display: inline;
  }

  .switch-button-control .switch-button-label {
    font-size: 16px;
    margin: 0px;
  }
}

@media (max-width: 375px) {
  .song-heart {
    height: 20px;
  }
  .song_title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 50px;
    display: inline;
  }

  .song_author {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 50px;
    display: inline;
  }

  .switch-button-control .switch-button-label {
    font-size: 14px;
  }
}

@media (max-width: 320px) {
  .song-heart {
    height: 20px;
  }
  .song_title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 40px;
    display: inline;
  }

  .song_author {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    width: 40px;
    display: inline;
  }
}
</style>
