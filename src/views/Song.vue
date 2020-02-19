<template>
  <div v-if="loaded">
    <b-container v-if="song" fluid>
      <b-row
        id="banner"
        v-if="song.banner_image"
        :style="{ backgroundImage: `url(${getImagePath(song.banner_image)})` }"
        class="image-backdrop"
      >
        <b-col
          cols="12"
          class="pt-4"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <b-button
            v-if="!isMobile()"
            variant="link"
            class="mobile-header-buttons"
            @click="$router.go(-1)"
          >
            <a
              ><b-icon-chevron-left
                class="more-btn btn-left"
              ></b-icon-chevron-left
            ></a>
          </b-button>
          <a v-else
            ><img
              class="c-back-icon"
              src="../assets/back-icon-mobile.svg"
              @click="$router.go(-1)"
              alt="placeholder"
          /></a>
        </b-col>

        <b-col
          class="text-center text-light pb-5 mx-auto user-info"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 class="mx-auto font-weight-light user-name">{{ song.name }}</h1>
          <h4 class="mx-auto font-weight-light user-type">
            <router-link
              class="text-light"
              :to="{ name: 'ArtistUsername', params: { id: song.username } }"
              >{{ song.username }}</router-link
            >
          </h4>
          <b-row class="follow-group">
            <b-col cols="4" class="text-center user-option">
              <a
                ><img
                  class="follow-btn mr-3 float-right song-download-mobile"
                  src="../assets/song-download.svg"
                  alt="placeholder"
              /></a>
            </b-col>

            <b-col cols="4" class="text-center user-option">
              <a v-if="this.liked" @click="unlikeSong"
                ><img
                  class="follow-btn mt-1 float-right song-rheart-mobile"
                  src="../assets/red-heart.svg"
                  width="45"
                  alt="placeholder"
              /></a>
              <a v-else @click="likeSong"
                ><img
                  class="follow-btn mt-1 float-right song-rheart-mobile"
                  src="../assets/song-heart.svg"
                  width="45"
                  alt="placeholder"
              /></a>
            </b-col>
            <b-col cols="4" class="text-center user-option">
              <a
                ><img
                  class="float-right mr-3 comment-icon "
                  src="../assets/follow.svg"
                  width="40"
                  alt="comment"
              /></a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row id="banner" v-else class="image-backdrop" :class="random_colour">
        <b-col
          class="text-center text-light pt-4a pb-4a mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 v-if="song.name" class="mx-auto font-weight-light">
            {{ song.name }}
          </h1>
          <h4 class="mx-auto font-weight-light">
            <router-link
              class="text-light"
              :to="{ name: 'ArtistUsername', params: { id: song.username } }"
              >{{ song.username }}</router-link
            >
          </h4>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="artist-container" fluid>
      <b-row id="profile_player">
        <b-col
          cols="5"
          sm="4"
          md="4"
          lg="3"
          class="text-center positioning profile-mobile "
        >
          <div class="photo-border">
            <playersong
              v-if="isOwn(request_user_id, song.user_id) === true"
              v-bind:image="song.song_image"
              v-bind:artist_image="song.user_image"
              v-bind:file="song.file"
              v-bind:id="song.id"
              v-bind:title="song.name"
              v-bind:username="song.username"
            ></playersong>
            <playerlockedsong
              v-else-if="song.chipin_plus && song.locked"
              v-bind:image="song.song_image"
              v-bind:artist_image="song.user_image"
              v-bind:file="song.file"
              v-bind:id="song.user_id"
              v-bind:title="song.name"
              v-bind:username="song.username"
            ></playerlockedsong>
            <playersong
              v-else
              v-bind:image="song.song_image"
              v-bind:artist_image="song.user_image"
              v-bind:file="song.file"
              v-bind:id="song.id"
              v-bind:title="song.name"
              v-bind:username="song.username"
            ></playersong>
          </div>
        </b-col>

        <b-col
          cols="7"
          sm="8"
          md="8"
          lg="7"
          class="positioning-mobile artist-profile"
        >
          <b-badge
            v-if="song.retrak"
            pill
            variant="danger-outline"
            class="
              mt-2
              text-uppercase text-danger
              border border-solid
              mr-1
              border-danger-2
            "
            >Re-Trak</b-badge
          >
          <b-badge
            v-if="!song.collaboration"
            pill
            variant="success-outline"
            class="
              ml-1
              mt-2 mt-md-0
              text-uppercase text-success
              border border-solid border-danger-2
            "
            >Collaborating</b-badge
          >

          <b-row class="stats-section mobile-stats-section">
            <b-col cols="12">
              <b-row class="c-song-information">
                <b-col
                  class="text-light font-weight-light text-center pr-0 c-song-recorder"
                >
                  <img
                    src="../assets/song-recorder.svg"
                    width="60px"
                    class="song-recorder-icon"
                  />
                </b-col>
                <b-col
                  class="
                    text-light
                    font-weight-light
                    text-center
                    mobile-stat
                    pr-0
                  "
                >
                  <p class="stats-number">{{ song.qty_plays }}</p>
                  <p class="font-weight-lighter song-stat">Plays</p>
                </b-col>
                <b-col
                  class="
                    text-light
                    font-weight-light
                    text-center
                    mobile-stat
                    pr-0
                  "
                >
                  <p class="stats-number">{{ song.stats.likes }}</p>
                  <p class="font-weight-lighter song-stat">Likes</p>
                </b-col>
                <b-col
                  class="
                    text-light
                    font-weight-light
                    text-center
                    mobile-stat
                    pr-0
                  "
                >
                  <p class="stats-number">{{ song.re_tracks }}</p>
                  <p class="font-weight-lighter song-stat">Re-Tracks</p>
                </b-col>
                <b-col
                  class="
                    text-light
                    font-weight-light
                    text-center
                    mobile-stat
                    pr-0
                    listener-mobile
                  "
                >
                  <p class="stats-number">100</p>
                  <p class="font-weight-lighter song-stat">Listeners</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row cols="12" class="section-margin positioning">
        <b-col v-if="song.description" cols="12">
          <p class="user-bio">{{ song.description }}</p>
        </b-col>
        <b-col v-if="!song.description" cols="12" sm="12" md="6">
          <p class="user-bio">No Description</p>
        </b-col>
      </b-row>

      <div v-for="(section, i) in ordered_sections" :key="i">
        <lyrics
          v-if="section.type === 'lyrics'"
          v-bind:section="section"
          class="c-section c-section-lyrics"
        ></lyrics>

        <b-row
          v-if="song.chipin_enabled && section.type === 'chipin'"
          cols="12"
          class="mt-3 positioning"
        >
          <b-col v-if="song.chipin_enabled" cols="12" class="chipin-support">
            <img
              v-if="song.chipin_plus"
              src="../assets/chipin-plus-badge.svg"
              height="80"
              alt="chipin"
              class="mr-3 support-img"
            />
            <img
              v-else
              src="../assets/chipin-badge.svg"
              height="80"
              alt="chipin"
              class="mr-3 support-img"
            />
            <div class="support-artist">
              <p>Support this Artist Now!</p>
              <span class="tap-desktop"
                >Tap here to subscribe and unlock all this Artist’s
                content</span
              >
              <span class="tap-mobile">Tap here to subscribe</span>
            </div>
          </b-col>
        </b-row>

        <genre
          v-if="section.type === 'genres'"
          v-bind:section="section"
        ></genre>

        <comments
          v-if="section.type === 'comments'"
          v-bind:section="section"
          class="c-section"
        ></comments>

        <songinformation
          v-if="section.type === 'song_information'"
          v-bind:section="section"
          class="c-section"
        ></songinformation>

        <backcover
          v-if="section.type === 'back_cover'"
          v-bind:section="section"
          class="c-section"
        ></backcover>

        <collaborators
          v-if="
            section.type === 'collaborators' && section.collaborators.length > 0
          "
          v-bind:section="section"
          class="c-section"
        ></collaborators>

        <songs
          v-if="section.type === 'songs_by_artist'"
          v-bind:section="section"
          class="c-section"
        ></songs>
      </div>

      <chipin
        v-if="song.chipin_enabled && !song.chipin_plus"
        v-bind:user_id="song.user_id"
        v-bind:username="song.username"
      ></chipin>
      <chipinplus
        v-if="song.chipin_enabled && song.chipin_plus"
        v-bind:user_id="song.user_id"
        v-bind:username="song.username"
      ></chipinplus>

      <chipinplustellmemore
        v-if="song.chipin_enabled && song.chipin_plus"
      ></chipinplustellmemore>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

//import player from '../components/player.vue'
//import playerlocked from '../components/player-locked.vue'
import playersong from "../components/player-song.vue";
import playerlockedsong from "../components/player-locked-song.vue";
import chipin from "../components/chipin.vue";
import chipinplus from "../components/chipinplus.vue";
import chipinplustellmemore from "../components/chipinplus-tellmemore.vue";

// Sections

import backcover from "../components/profile/song/back_cover.vue";
import collaborators from "../components/profile/song/collaborators.vue";
import comments from "../components/profile/song/comments.vue";
import genre from "../components/profile/song/genre.vue";
import lyrics from "../components/profile/song/lyrics.vue";
import songinformation from "../components/profile/song/song_information.vue";
import songs from "../components/profile/song/songs.vue";

export default {
  name: "Song",
  data() {
    return {
      loaded: false,
      song: null,
      artist: null,
      liked: null,
    };
  },
  components: {
    //player,
    //playerlocked,
    playersong,
    playerlockedsong,
    chipin,
    chipinplus,
    chipinplustellmemore,
    backcover,
    collaborators,
    comments,
    genre,
    lyrics,
    songinformation,
    songs,
  },
  methods: {
    ...mapActions("Song", {
      song_action: "song",
      like_song: "like_song",
      unlike_song: "unlike_song",
    }),
    test() {
      console.log("Test");
    },

    likeSong() {
      this.liked = true;
      this.like_song(this.song.id);
    },
    unlikeSong() {
      this.liked = false;
      this.unlike_song(this.song.id);
    },
  },

  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
    ordered_sections() {
      if (this.loaded) {
        return this.song.sections;
      } else {
        return [];
      }
    },
  },
  mounted() {
    this.song_action(this.$route.params.id)
      .then((res) => {
        this.song = res.data;
        this.loaded = true;

        console.log(res.data);
        this.liked = res.data.liked;
      })
      .catch((error) => {
        error;
        this.$router.replace("/error");
        //console.log(error);
      });
  },
};
</script>

<style scoped>
.popular-artist-song {
  line-height: 21px;
}

.artist-page {
  margin-top: -200px;
}
.artist-container {
  padding: 50px;
  margin-top: -20px;
}

p {
  font-size: 1.2em;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.photo-border {
  border-radius: 50%;
  border: 3px solid white;
  box-sizing: border-box;
  margin-top: -100px;
  width: 140px;
}

.border-success-2 {
  border: none !important;
  color: white !important;
  background-color: #f2b471;
  font-size: 14px;
  line-height: 21px;
  padding: 1% 8% 1% 8% !important;
  font-weight: 500;
}

.border-danger-2 {
  border: none !important;
  color: white !important;
  background-color: #f2b471;
  font-size: 14px;
  line-height: 21px;
  padding: 1% 7% 1% 8% !important;
  font-weight: 500;
}

.stats-number {
  font-weight: 200;
  font-size: 48px;
  line-height: 21px;
}

.text-small {
  font-size: 0.6em;
}

.text-smaller {
  font-weight: 300 !important;
  font-size: 18px;
  line-height: 21px;
}

.pb-4a,
.py-4a {
  padding-bottom: 4.5rem !important;
}

.pt-4a,
.py-4a {
  padding-top: 4.5rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 5rem !important;
}

.pt-5,
.py-5 {
  padding-top: 5rem !important;
}

.pb-6,
.py-6 {
  padding-bottom: 6rem !important;
}

.pt-6,
.py-6 {
  padding-top: 6rem !important;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

.border-gradient {
  border-top: 2px solid #fff;
  border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
  border-image-slice: 1;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 0.8em;
}

.more-btn {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 30px;
  margin-top: 25px;
}

.btn-left {
  float: left;
}

.btn-dots {
  padding: 0px;
  margin-right: 30px;
  /* margin-top: 25px; */
  float: right;
}

.user-name {
  font-size: 80px;
  line-height: 36px;
  margin-bottom: 2%;
}

.user-type {
  font-size: 36px;
  line-height: 36px;
}

.unfollow-btn {
  background: transparent;
  border: 2px solid white;
  border-radius: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  height: 50px;
}

.follow-btn {
  height: 50px;
}

.comment-icon {
  width: 40px;
  margin-top: 10px;
}

.follow-group {
  position: absolute;
  bottom: 30px;
  right: 50px;
  height: 50px;
}

.stats-section {
  margin-top: 2.5em;
  /* padding-left: 0px;
        margin-left: -40px; */
}

.song-recorder-icon {
  margin-top: -20px;
}

.user-info {
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
}

.user-location {
  font-size: 24px;
  line-height: 21px;
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-overview {
  font-size: 24px;
  line-height: 21px;
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-bio {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #9b9b9b;
  margin-top: 1.5em;
  column-count: 2;
}
.section-heading {
  padding-bottom: 0.5em;
}
.support-artist {
  font-weight: 300;
  color: white;
  line-height: 45px;
}

.support-artist > p {
  font-size: 36px;
  margin-bottom: 0;
}

.support-artist > span {
  font-size: 24px;
}

.chipin-support {
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;
}

.tab-title {
  font-weight: 200 !important;
  font-size: 36px !important;
  line-height: 21px !important;
}

.genre-box {
  height: 50px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 21px;
}

.song-name {
  font-size: 24px;
  line-height: 21px;
}

.artist-name {
  font-weight: 200;
  font-size: 24px;
  line-height: 21px;
}

.song-btns {
  height: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  display: inline-flex;
  align-items: center;
}

.song-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 0;
}

.song-header {
  display: inline-flex;
  align-content: center;
}

.feature-left {
  width: 70%;
}

.likes-count {
  font-weight: normal;
  font-size: 24px;
  line-height: 21px;
}

.show-all-btn {
  font-weight: 300;
  font-size: 24px;
  line-height: 21px;
}

.text-normal {
  font-weight: normal;
  font-size: 24px;
  line-height: 21px;
}

.text-lighter {
  font-weight: 200;
  font-size: 24px;
  line-height: 21px;
}

.recent-text {
  font-weight: 300;
  font-size: 32px;
  line-height: 21px;
}

.op-80 {
  opacity: 80%;
}

.op-60 {
  opacity: 60%;
}

.op-40 {
  opacity: 40%;
}

.op-20 {
  opacity: 20%;
}

.op-0 {
  opacity: 10%;
}

.artist-info {
  font-weight: normal !important;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.152972px;
  color: #9b9b9b;
}

.comment-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 1.5em;
  color: #9b9b9b;
}

chipin-link {
  text-decoration: underline;
}

.feature-div {
  display: inline-block;
  width: 100%;
}

.genre-badge {
  display: none;
}

.song-card {
  padding-top: 10px;
  margin-bottom: 10px;
}

.song-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  cursor: pointer;
}
.popular-artist-name {
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #9b9b9b;
}
.mobile-social-icons {
  display: none;
}
.chipin_mobile {
  display: none;
}
.tap-mobile {
  display: none;
}
.rtcl-btns {
  background-color: #f5a623;
  border-radius: 20px !important;
}
.view-song-btn {
  display: none;
}
.card-carousel-cards {
  display: inline-flex;
}
.song-more-btn {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 15px;
  border: 3px solid #4a4a4a;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.song-more-btn > div > p {
  margin-bottom: 0;
  color: #9b9b9b;
}
.user-profile-mobile {
  display: none;
}
.retrack-btn {
  position: relative;
  top: -24px;
  background-color: #f5a623 !important;

  width: auto;
}
.behind-track {
  margin-left: 5px;
  justify-content: flex-start;
}
.behind-btn {
  margin-top: -5%;
  font-weight: 500;
  font-size: 12px !important;
  line-height: 18px;
  border: none;
}
.behind-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.color-1 {
  background: #00afdc;
}
.color-2 {
  background: #f2b471;
}
.color-3 {
  background: #81cd5c;
}
.color-4 {
  background: #e76a66;
}
.genre-tag {
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.33px;
  color: #9b9b9b;
  display: none;
}
.song-download-mobile {
  display: none;
}
.song-heart-mobile {
  display: none;
}

.photo-border {
  border: 3px solid white;
  padding-left: unset;
  padding-right: unset;
}

.user-option {
  display: flex;
}

.c-song-recorder {
  display: flex;
}

.c-song-information {
  margin-left: 0px;
}

.artist-profile:first-child(span) {
  margin-left: unset;
}

.mobile-stat {
  max-width: fit-content;
  padding-left: unset;
  margin-right: 10%;
}

.c-song-recorder,
.mobile-stat {
  padding-left: unset;
}

.song-recorder-icon {
  margin-right: 10px;
}

.song-stat {
  white-space: nowrap;
}

@media (min-width: 1199.99px) {
  .photo-border {
    margin-top: -150px;
  }
  .more-btn {
    margin: unset;
  }
  .image-backdrop {
    height: 320px;
  }
  .photo-border {
    height: 256px;
    width: 255px;
  }
  .user-name {
    font-size: 60px;
    line-height: 36px;
    font-weight: 300;
  }

  .user-type {
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
  }
  .comment-icon {
    margin: unset;
    margin-top: 5px;
    width: 40px;
    height: 40px;
  }

  .song-rheart-mobile {
    width: 43px;
    height: 40px;
  }

  .border-danger-2 {
    line-height: 19px;
  }

  .song-stat {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
  }
}

@media (max-width: 1199.98px) {
  .more-btn {
    margin: unset;
  }

  .c-song-recorder {
    display: none;
  }

  .image-backdrop {
    height: 320px;
  }
  .photo-border {
    height: 206px;
    width: 206px;
  }
  .artist-container {
    margin-top: 0;
  }
  .artist-profile {
    margin-top: -30px;
    padding-left: unset;
  }
  .chipin-icons {
    margin-top: -30px;
  }
  .user-name {
    font-size: 60px;
  }
  .user-type {
    font-size: 30px;
  }
  .border-success-2 {
    font-size: 12px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    height: 25px;
  }
  .stats-number {
    font-size: 48px;
    line-height: 21px;
    font-weight: 200;
  }
  .font-weight-lighter {
    font-size: 15px;
  }
  .user-overview,
  .user-location,
  .user-bio,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 18px;
  }

  .user-bio {
    line-height: 24px;
    font-weight: 300;
  }

  .support-img {
    height: 80px;
  }
  .support-artist {
    line-height: 48px;
  }
  .support-artist > p {
    font-size: 36px;
  }
  .support-artist > span {
    font-size: 24px;
  }
  .tab-title {
    font-size: 30px !important;
  }
  .song-header > img {
    height: 24px;
  }
  .song-des {
    font-size: 15px;
  }
  .song-btns {
    font-size: 12px;
  }
  .recent-text {
    font-size: 28px;
  }
  .social-icons {
    height: 35px;
  }
  .user-overview > img,
  .user-location > img {
    height: 20px;
  }
  .mobile-social-icons {
    display: none;
  }
  .song-more-btn {
    width: 180px;
    height: 180px;
  }
  .song-more-btn > div > img {
    height: 40px;
  }
  .song-more-btn > div > p {
    font-size: 18px;
    line-height: 14px;
  }
  .song-recorder-icon {
    width: 50px;
  }
  .comment-icon {
    margin: unset;
    margin-top: 5px;
    width: 40px;
    height: 40px;
  }

  .song-rheart-mobile {
    width: 43px;
    height: 40px;
  }

  .song-stat {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
  }
  .photo-border {
    margin-top: -150px;
  }
}

@media (max-width: 768px) and (min-width: 576px) {
  .support-artist {
  }
}

@media (max-width: 991.98px) {
  .photo-border {
    height: 207px;
    width: 207px;
    margin-top: -150px;
  }
  .image-backdrop {
    height: 320px;
  }
  .artist-profile {
    margin-top: -40px;
  }
  .chipin-icons {
    margin-top: -40px;
  }
  .user-name {
    font-size: 48px;
    line-height: 36px;
    font-weight: 300;
  }
  .user-type {
    font-size: 24px;
    line-height: 36px;
    font-weight: 300;
  }
  .border-success-2 {
    font-size: 12px;
    line-height: 10px;
  }

  .comment-icon {
    margin: unset;
    width: 43px;
    height: 40px;
    margin-top: 4px;
  }

  .song-rheart-mobile {
    width: 43px;
    height: 40px;
  }

  .border-danger-2 {
    line-height: 13px;
    height: 25px;
    font-size: 16px;
    font-weight: 400;
  }
  .stats-number {
    font-size: 42px;
    line-height: 21px;
    font-weight: 200;
  }
  .font-weight-lighter {
    font-size: 12px;
  }
  .user-overview,
  .user-location,
  .user-bio,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .comment-des,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
  }
  .support-img {
    height: 62px;
    width: 199px;
  }

  .support-artist {
    line-height: unset;
  }

  .support-artist > p {
    font-size: 28px;
    font-weight: 300;
  }
  .support-artist > span {
    font-size: 18px;
    line-height: 36px;
    font-weight: 300;
  }
  .tab-title {
    font-size: 24px !important;
  }
  .song-header > img {
    height: 20px;
  }
  .song-des {
    font-size: 12px;
  }
  .song-btns {
    font-size: 10px;
  }
  .recent-text {
    font-size: 24px;
  }
  .social-icons {
    height: 30px;
  }
  .user-overview > img,
  .user-location > img {
    height: 18px;
  }
  .mobile-social-icons {
    display: none;
  }
  .song-more-btn {
    width: 100px;
    height: 100px;
  }
  .song-more-btn > div > img {
    height: 20px;
  }
  .song-more-btn > div > p {
    font-size: 14px;
    line-height: 14px;
  }
  .song-recorder-icon {
    width: 47px;
    height: 60px;
  }

  .c-back-icon {
    width: 40px;
  }

  .song-stat {
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
}
@media (max-width: 852.98px) {
  .social-icons {
    height: 27px;
  }
}
@media (max-width: 802px) {
  .social-icons {
    height: 25px;
  }
}
@media (max-width: 769px) {
  .social-icons {
    height: 20px;
  }
}
@media (max-width: 767.98px) {
  .artist-profile {
    margin-top: -50px;
  }
  .chipin-icons {
    display: none;
  }
  .user-name {
    font-size: 36px;
  }
  .user-type {
    font-size: 20px;
  }
  .border-success-2 {
    font-size: 10px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 10px;
    line-height: 12px;
    height: 20px;
  }
  .stats-number {
    font-size: 30px;
    margin-bottom: 7px;
  }
  .font-weight-lighter {
    font-size: 10px;
  }

  .user-bio {
    font-size: 16px;
    line-height: 21px;
  }

  .user-overview,
  .user-location,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 14px;
  }

  .support-img {
    height: 40px;
    width: auto;
  }
  .support-artist {
    line-height: 20px;
  }
  .support-artist > p {
    font-size: 20px;
  }
  .support-artist > span {
    font-size: 12px;
  }
  .tab-title {
    font-size: 20px !important;
  }
  .song-header > img {
    height: 16px;
  }
  .song-des {
    font-size: 12px;
  }
  .song-btns {
    font-size: 8px;
  }
  .recent-text {
    font-size: 18px;
  }
  .more-icons {
    font-size: 1em;
  }
  .follow-group {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
    margin-right: -20px;
  }
  .unfollow-btn {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
    padding-top: 5px;
  }
  .follow-btn {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
  }
  .chipin-img {
    display: none;
  }
  .social-icons {
    height: 25px;
  }
  .user-overview {
    width: 100%;
  }
  .user-location {
    width: 100%;
  }
  .user-overview > img,
  .user-location > img {
    height: 15px;
  }
  .mobile-social-icons {
    display: block;
  }
  .song-more-btn {
    width: 100px;
    height: 100px;
  }
  .song-more-btn > div > img {
    height: 20px;
  }
  .song-more-btn > div > p {
    font-size: 14px;
    line-height: 14px;
  }
  .user-profile-desktop {
    display: none;
  }
  .user-profile-mobile {
    display: flex;
  }
  .song-recorder-icon {
    width: 40px;
    margin-top: -5px;
  }

  .photo-border {
    width: 166px;
    height: 166px;
    margin-top: -140px;
  }

  .artist-container {
    padding: 55px 30px;
  }

  .mobile-stats-section {
    margin-top: 1.5em;
  }

  .user-option {
    display: flex;
    align-items: center;
  }

  .comment-icon {
    margin: unset;
    width: 32px;
    margin-top: 4px;
  }

  .chipin-support {
    margin-bottom: unset;
  }
}
@media (max-width: 575.98px) {
  .image-backdrop {
    height: 200px;
  }
  .mobile-header-padding {
    padding-top: 100px;
  }
  .mobile-header-buttons {
    transform: translateY(170%);
  }
  .photo-border {
    width: 146px;
    height: 146px;
    margin-top: -90px;
  }
  .artist-profile {
    margin-top: -20px;
  }
  .artist-profile > .mt-4 {
    margin-top: 10px !important;
  }
  .artist-container {
    /* margin-top: 100px; */
    padding: 20px;
  }
  .user-info {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    /* height: 250px; */
  }
  .more-btn {
    width: 30px;
    height: 30px;
    padding: 5px;
    background: rgba(0, 0, 0, 0.2);
    margin-top: -50px;
  }
  .btn-dots {
    padding: 0px;
    margin-right: 10px;
    /* margin-top: 25px; */
    float: right;
  }
  .user-name {
    font-size: 28px;
    /* margin-top: -50px; */
  }
  .user-type {
    font-size: 16px;
    margin-top: -15px;
  }
  .follow-group {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
    width: 35%;
    right: 20px;
    margin-bottom: 20px;
  }
  .unfollow-btn {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
    padding-top: 2px;
  }
  .follow-btn {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
  }
  .comment-icon {
    width: 25px;
    margin-top: 0px;
  }
  .border-success-2 {
    font-size: 8px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 8px;
    line-height: 10px;
    height: 18px;
  }
  .stats-number {
    font-size: 25px;
    font-weight: 300;
    color: #9b9b9b;
    margin-bottom: 5px;
  }
  .mobile-stats-section {
    margin-top: 1em;
    padding-right: 10px;
  }
  .text-smaller {
    font-size: 9px;
    line-height: 11px;
    color: #9b9b9b;
  }
  .user-overview {
    width: 100%;
    font-size: 14px;
  }
  .user-overview > img,
  .user-location > img {
    height: 13px;
  }
  .user-location {
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
  }
  .user-bio {
    font-size: 16px;
    color: #9b9b9b !important;
    font-weight: 400;
    line-height: 21px;
  }
  .section-spacing {
    margin-top: 0px;
    padding-bottom: 1em;
  }
  .section-heading {
    padding-bottom: 0.2em;
  }
  .support-img {
    height: 35px;
  }
  .support-artist {
    line-height: 20px;
    color: #9b9b9b !important;
  }
  .support-artist > p {
    font-size: 19px;
  }
  .support-artist > span {
    font-size: 12px;
  }
  .tab-title {
    font-size: 24px !important;
    color: #9b9b9b !important;
    font-weight: 300 !important;
  }
  .song-header > img {
    height: 20px;
  }
  .song-name {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.174825px;
  }
  .song-btns {
    font-size: 8px;
  }
  .song-likes {
    font-size: 11px;
    color: #9b9b9b !important;
    font-weight: 300;
    border: 1px solid #9b9b9b;
    padding-left: 5px;
    padding-right: 5px;
  }
  .artist-name {
    font-size: 14px;
    font-weight: normal;
    color: #9b9b9b;
    letter-spacing: 0.152972px;
  }
  .border-gradient {
    border-top: 2px solid #fff;
    border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
    border-image-slice: 1;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    width: 100%;
    margin-bottom: 0.8em;
    margin-top: 0.8em;
  }
  .song-des {
    font-size: 14px;
    letter-spacing: 0.152972px;
  }
  .show-all-btn,
  .likes-count,
  .text-normal,
  .recent-text,
  .artist-info,
  .popular-artist-name {
    font-size: 14px;
  }
  .comment-des {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: unset;
  }
  .more-icons {
    height: 20px;
    font-size: 1em;
  }
  .genre-box {
    display: none;
  }
  .genre-badge {
    display: inline-block;
  }
  .genre-badge > .badge {
    background: rgba(216, 216, 216, 0.5);
    border-radius: 5px;
    width: 20px;
    padding: 3px !important;
    color: #9b9b9b !important;
    font-weight: 900 !important;
    font-size: 13px !important;
  }
  .text-lighter {
    font-size: 13px;
  }
  .contrib-middle {
    text-align: center;
  }
  .contrib-right {
    text-align: right;
  }
  .social-icons {
    height: 20px;
  }
  .chipin-desktop {
    display: none;
  }
  .chipin-mobile {
    display: block;
  }
  .tap-desktop {
    display: none;
  }
  .tap-mobile {
    display: block;
  }
  .view-song-btn {
    display: block;
    border-radius: 10px;
    border: 1px solid #9b9b9b;
    font-size: 14px;
    line-height: 21px;
    background: transparent;
    font-weight: 300;
    margin: auto;
  }
  .song-more-btn {
    width: 80px;
    height: 80px;
  }
  .song-more-btn > div > p {
    font-size: 12px;
    line-height: 14px;
  }
  .popular-artist-song {
    font-weight: normal;
    font-size: 12px;
    font-family: "SFUI";
    line-height: 14px;
    font-weight: 400;
    margin-top: 0px;
  }
  .popular-artist-name {
    display: none;
  }
  .popular-song {
    color: white !important;
  }
  .rtcl-btns {
    height: 16px;
  }
  .song-recorder {
    width: 31px;
    height: 39px;
    border: 1px solid #f5a623;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .top-arrow {
    height: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .behind-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .behind-btn {
    padding: 0;
    font-size: 8px !important;
  }
  .song-recorder-icon {
    width: 31px;
    height: 39px;
    margin-top: 0px;
  }
  .genre-tag {
    display: block;
  }
  .song-download-mobile {
    display: block;
    width: 25px;
  }
  .song-heart-mobile {
    display: block;
  }
  .song-rheart-mobile {
    display: block;
    width: 25px;
  }

  .user-option {
    display: flex;
    align-items: center;
  }

  .song-stat {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
  }

  .section-heading {
    margin-top: 1rem;
  }

  .support-img {
    height: 34px;
    width: 110px;
  }

  .support-artist p {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
  }

  .support-artist span {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }

  .c-song-recorder {
    padding-left: 20px;
  }

  .listener-mobile {
    display: none;
  }
}

@media (max-width: 410px) {
  .artist-profile,
  .profile-mobile {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .profile-mobile {
    padding-left: 0px;
  }
}

@media (max-width: 349px) {
  .border-danger-2 {
    padding: 2% 8px !important;
    height: 13px;
    line-height: 6px;
  }

  .stats-section > div {
    padding-right: unset;
  }

  .follow-group {
    margin-right: 0px;
  }
}

.c-section:not(.c-section-lyrics) {
  margin-top: 3rem;
}

.c-section.c-section-lyrics {
  margin-top: 1rem;
}
</style>
