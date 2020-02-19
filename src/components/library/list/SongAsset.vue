<template>
  <div>
    <b-row>
      <b-col cols="12" class="text-center text-light text-left mb-3 song-list">
        <b-row>
          <b-col cols="4" md="4" lg="2">
            <player
              v-if="isOwn(request_user_id, song.artist_id)"
              v-bind:image="song.song_image"
              v-bind:file="song.file"
              v-bind:id="song.id"
              v-bind:title="song.name"
              v-bind:username="song.artistname"
            ></player>
            <playerlocked
              class="ml-4"
              v-else-if="song.chipin_plus && song.locked"
              v-bind:image="song.song_image"
              v-bind:file="song.file"
              v-bind:id="song.artist_id"
              v-bind:title="song.song_name"
              v-bind:username="song.artistname"
            ></playerlocked>
            <player
              v-else
              v-bind:image="song.song_image"
              v-bind:file="song.file"
              v-bind:id="song.id"
              v-bind:title="song.name"
              v-bind:username="song.artistname"
            ></player>
          </b-col>

          <b-col cols="5" lg="7" class="text-left c-song-title">
            <p class="text-light mt-0 pb-0 mb-2 font-weight-light">
              <img
                v-if="song.chipin_plus"
                src="../../../assets/chipin-plus-locked-light.svg"
                class="mr-3"
                style="margin-top: -8px;"
                alt="ChipIn+"
              />
              <router-link
                class="text-light song-title"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.username, id: song.id },
                }"
                >{{ song.name }} -
              </router-link>
              <router-link
                class="text-light font-weight-lighter artist"
                :to="{
                  name: 'SongProfile',
                  params: { username: song.username, id: song.id },
                }"
                >{{ song.username }}</router-link
              >
              <b-button
                v-if="song.retrak"
                pill
                size="sm"
                variant="warning"
                class="text-uppercase text-light py-0 ml-3 mr-1 pill-button"
                >RT</b-button
              >
              <b-button
                v-if="song.collaboration"
                pill
                size="sm"
                variant="warning"
                class="text-uppercase text-light py-0 ml-1 pill-button"
                >CL</b-button
              >
            </p>

            <p class="font-weight-lighter song-description">
              {{ song.description }}
            </p>
          </b-col>

          <b-col cols="2" lg="3" class=" text-right pl-0 pr-0">
            <!-- <font-awesome-icon v-if="song.liked" class="mr-3 text-danger" size="1x" :icon="['fas', 'heart']"  />
                <font-awesome-icon v-if="!song.liked" class="mr-3 text-light" size="1x" :icon="['far', 'heart']"  /> -->

            <b-row class="c-song-actions text-right ml-1">
              <b-button v-if="this.liked" variant="link">
                <img
                  src="../../../assets/heart-filled.svg"
                  @click="unlikeSong()"
                  class="align-top"
                  height="25"
                  alt="Menu"
                />
              </b-button>

              <p
                class="float-right pb-0 mb-0 font-weight-light c-song-listens"
                style="font-size: 24px;"
              >
                {{ song.listens }}
              </p>

              <b-button v-if="!this.liked" variant="link">
                <img
                  src="../../../assets/heart.svg"
                  @click="likeSong()"
                  class="align-top c-heart-btn"
                  height="25"
                  alt="Menu"
                />
              </b-button>

              <font-awesome-icon
                size="2x"
                icon="ellipsis-h"
                class="text-light ml-4 pt-1"
              />
            </b-row>

            <b-button
              v-if="song.explicit"
              size="sm"
              variant="outline-light"
              class="text-uppercase text-light py-0 ml-1"
              style="margin-top:-22px;"
              >18</b-button
            >
            <b-img
              v-if="song.reward"
              :src="getImagePath(song.reward, { width: 46, height: 56 })"
              blank-color="#ccc"
              class="img-fluid photo-border ml-4 mt-2"
              alt="placeholder"
            ></b-img>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import playerlocked from "../../../components/player-locked.vue";

export default {
  name: "SongListAsset",
  props: ["song"],
  components: {
    playerlocked,
  },
  data: function() {
    return {
      liked: null,
    };
  },
  mounted() {
    this.liked = this.song.liked;
    console.log(this.song);
  },
  methods: {
    ...mapActions("Song", ["like_song", "unlike_song"]),

    likeSong() {
      this.liked = true;
      this.like_song(this.song.id);
    },

    unlikeSong() {
      this.liked = false;
      this.unlike_song(this.song.id);
    },
  },
};
</script>

<style>
.song-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-weight: 300;
}

.artist {
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
  font-size: 24px;
  font-weight: 300;
}

.song-description {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 300;
}

.pill-button {
  width: 37px;
  height: 21px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-top: -5px;
}

.song-locked {
  position: absolute;
  right: 6px;
  top: 6px;
  z-index: 100;
}

.c-song-title {
  margin-left: 0px;
}

@media (max-width: 768px) {
  .song-title {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    font-weight: 300;
  }

  .artist {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
    font-size: 20px;
    font-weight: 300;
  }

  .song-description {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-weight: 300;
  }

  .pill-button {
    width: 37px;
    height: 21px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin-top: -5px;
  }

  .song-locked {
    position: absolute;
    right: 6px;
    top: 6px;
    z-index: 100;
  }
}

@media (min-width: 1200px) {
  .song-title {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 30px;
    font-size: 24px;
    font-weight: 400;
    text-decoration: unset !important;
  }

  .artist {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
    line-height: 30px;
    font-size: 24px;
    font-weight: 300;
  }

  .song-description {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 18px;
    font-weight: 300;
  }

  .pill-button {
    width: 37px;
    height: 21px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    margin-top: -5px;
  }

  .song-locked {
    position: absolute;
    right: 6px;
    top: 6px;
    z-index: 100;
  }

  .c-song-title {
    padding-left: 20px;
  }

  .c-song-listens {
    margin-right: 1.7rem;
    padding-top: 0.1rem;

    font-size: 24px;
    font-weight: 400;
  }

  .c-song-actions {
    display: flex;
    justify-content: center;
  }

  .c-heart-btn {
    display: flex;
    width: 32px;
    height: 30px;
  }
}
</style>
