<template>
  <div>
    <b-row class="ml-0 mb-1">
      <!-- Player -->
      <b-col cols="3" class="text-center pl-0 pr-0">
        <player
          v-bind:image="song.song_image"
          v-bind:file="song.file"
          v-bind:id="song.id"
          v-bind:title="song.name"
          v-bind:username="song.artistname"
        ></player>
      </b-col>

      <b-col cols="9" class="pr-0 pl-4">
        <b-row class="">
          <!-- Artist Info -->
          <b-col cols="8">
            <p class="text-light mt-0 pb-0 mb-0 song-name">
              <router-link
                class="text-light"
                :to="{ name: 'Song', params: { id: song.id } }"
                v-html="elipsis(song.name)"
                >{{ song.name }}</router-link
              >
            </p>

            <p class="mb-0 mt-0 mb-2">
              <b-button
                v-if="song.retrak"
                pill
                size="sm"
                variant="warning"
                class="text-uppercase text-light song-btns mr-1 rtcl-btns"
                >RT</b-button
              >
              <b-button
                v-if="song.collaboration"
                pill
                size="sm"
                variant="warning"
                class="text-uppercase text-light song-btns ml-1 rtcl-btns"
                >CO</b-button
              >
              <span
                class="trackd-light-grey font-weight-lighter artist-name"
                v-html="elipsis(song.artistname)"
                >{{ song.artistname }}</span
              >
            </p>
          </b-col>

          <!-- Buttons -->
          <b-col cols="4" class="float-right pl-0 pr-3">
            <b-row cols class="float-right">
              <!-- Buttons -->
              <b-col cols="12">
                <b-button
                  v-if="this.liked"
                  variant="link"
                  @click="unlikeSong()"
                  class="pb-0 pr-0 pt-0 pl-0"
                  style="height: 20px"
                >
                  <img
                    src="../../../assets/heart-filled.svg"
                    class="align-top ml-0 mr-1 pb-0"
                    height="19"
                    width="21"
                    alt="Liked"
                  />
                </b-button>

                <b-button
                  v-if="!this.liked"
                  variant="link"
                  @click="likeSong()"
                  class="pb-0 pr-0 pt-0 pl-0"
                  style="height: 20px"
                >
                  <img
                    src="../../../assets/heart.svg"
                    class="align-top ml-0 mr-1 pb-0"
                    height="19"
                    width="21"
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
                    height="6"
                    alt="Menu"
                  />
                </b-button>
              </b-col>
            </b-row>

            <b-row class="float-right">
              <b-col cols="12" class="trackd-light-grey">
                {{ song.listens }}
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- Tags -->
        <b-row>
          <b-col cols="10">
            <p
              class="text-light mt-0 pb-0 mb-2 font-weight-light"
              style="font-size: 14px"
            >
              {{ song.description }}
            
            </p>
          </b-col>
          <b-col cols="2" class="pl-0">
            <div class="float-right">
              <img
                v-if="song.reward"
                src="../../../assets/song-recorder.svg"
                blank-color="#ccc"
                height="50"
                width="45"
                class="img-fluid song-recorder"
                alt="placeholder"
              />
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SongListAssetMobile",
  props: ["song"],
  data() {
    return {
      liked: null,
    };
  },
  mounted() {
    console.log(this.song), (this.liked = this.song.liked);
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
  computed: {},
};
</script>

<style>
.artist-name {
  font-size: 14px;
  font-weight: 200;
}

.song-name {
  font-size: 16px;
  font-weight: 300;
}

.follow-button {
  width: 62px;
  height: 19px;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
}

.song-btns {
  height: 18px;
  font-weight: bold;
  font-size: 9px;
  line-height: 21px;
  display: inline-flex;
  align-items: center;
  padding-left: 7px;
  padding-right: 7px;
  background-color: #f5a623;
}
</style>
