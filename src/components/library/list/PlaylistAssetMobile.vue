<template>
  <div>
    <b-row class="ml-1">
      <!-- Artist Image -->
      <b-col cols="3" class="text-center pl-0 pr-0">
        <!-- Playlist player icon -->
        <div style="margin-bottom: 80px">
          <div
            class="quarter left-top"
            style="background: url(https://picsum.photos/50)"
          ></div>
          <div
            class="quarter right-top"
            style="background: url(https://picsum.photos/51)"
          ></div>
          <div
            class="quarter left-bottom"
            style="background: url(https://picsum.photos/52)"
          ></div>
          <div
            class="quarter right-bottom"
            style="background: url(https://picsum.photos/53)"
          ></div>
        </div>
      </b-col>

      <b-col cols="9" class="pr-0">
        <b-row class="">
          <!-- Artist Info -->
          <b-col cols="8">
            <p class="mt-0 pb-0 mb-0 font-weight-light">
              <router-link
                class="trackd-dark-grey font-weight-normal"
                :to="{ name: 'Playlist', params: { id: playlist.id } }"
                >{{ playlist.name }}</router-link
              >
            </p>
            <p class="mb-0 mt-2 mb-2" style="font-size: 1em">
              <span class="trackd-light-grey"
                >Created by {{ playlist.username }}</span
              >
            </p>
            <!-- <p class="text-dark mt-0 pb-0 mb-2 font-weight-light" style="font-size:0.8em;">  
                            <img src="../../../assets/location-icon.svg" class="align-top mr-1" height="20  " alt="Logo"> {{artist.location}}
                        </p> -->
            <p class="mb-0 mt-0 mb-2" style="font-size: 0.9em">
              <span class="trackd-dark-grey"
                >{{ playlist.song_count }} songs |
                {{ playlist.total_songs_time_formatted}}</span
              >
            </p>
          </b-col>

          <!-- Buttons -->
          <b-col cols="4" class="float-right pl-0">
            <!-- Buttons -->
            <b-button
              v-if="this.liked"
              variant="link"
              @click="unlikePlaylist()"
              class="pb-0 pr-0 pt-0 pl-0"
              style="height: 20px"
            >
              <img
                src="../../../assets/heart-filled.svg"
                class="align-top ml-0 mr-1 pb-0"
                height="20"
                alt="Liked"
              />
            </b-button>

            <b-button
              v-if="!this.liked"
              variant="link"
              @click="likePlaylist()"
              class="pb-0 pr-0 pt-0 pl-0"
              style="height: 20px"
            >
              <img
                src="../../../assets/heart.svg"
                class="align-top ml-0 mr-1 pb-0"
                height="20"
                alt="Liked"
              />
            </b-button>

            <b-button
              variant="link"
              class="pb-0 pr-0 pt-0 mt-2"
              style="height: 20px"
            >
              <img
                src="../../../assets/ellipses-mobile.svg"
                class="align-top ml-0 mr-1 pb-0"
                height="7"
                alt="Menu"
              />
            </b-button>
          </b-col>
        </b-row>

        <!-- Tags -->
        <!-- <b-row class=""> -->
        <!-- Tags -->
        <!-- <span v-for="tag in artist.tags" :key="tag.id" class="text-dark mt-0 pb-0 mb-2 font-weight-light">
                        <img src="../../../assets/hash-tag.svg" class="" style="margin-left:10px;" height="15 " alt="Logo">
                        {{ tag }}
                        </span> -->
        <!-- </b-row> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PlaylistListAssetMobile",
  props: ["playlist"],
  data: function () {
    return {
      liked: null,
    };
  },
  mounted() {
    console.log(this.playlist);
    this.liked = this.playlist.liked;
  },
  methods: {
    ...mapActions("Playlist", ["like_playlist", "unlike_playlist"]),

    likePlaylist() {
      this.liked = true;
      this.like_playlist(this.playlist.id);
    },

    unlikePlaylist() {
      this.liked = false;
      this.unlike_playlist(this.playlist.id);
    },
  },
};
</script>

<style>
.artist-name {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
}

.follow-button {
  width: 62px;
  height: 19px;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
}

/* div.wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 75px;
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
  background-color: red;
}
div.quarter.left-top {
  left: 0;
  top: 0;
  border-top-left-radius: 40px;
}
div.quarter.right-top {
  left: 50%;
  top: 0;
  border-top-right-radius: 40px;
}
div.quarter.left-bottom {
  left: 0;
  top: 50%;
  border-bottom-left-radius: 40px;
}
div.quarter.right-bottom {
  left: 50%;
  top: 50%;
  border-bottom-right-radius: 40px;
}
div.wrapper:hover div.quarter {
  opacity: 0.5;
}
div.quarter:hover {
  opacity: 1 !important;
  transform: scale(1.5);
} */
</style>
