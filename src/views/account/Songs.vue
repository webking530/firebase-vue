<template>
  <div>
    <b-container fluid>
      <b-row id="banner" class="image-backdrop" :class="random_colour">
        <b-col
          class="text-center text-light pt-8 pb-8 mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 class="mx-auto font-weight-light">My Songs</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-if="songs.length > 0">
      <b-row id="my-songs" class="my-3">
        <b-col
          cols="12"
          v-for="song in songs"
          :key="song.id"
          class="text-center text-light text-left mb-3"
        >
          <b-row>
            <b-col cols="4" md="3" class="2">
              <player
                v-bind:image="song.song_image"
                v-bind:file="song.file"
                v-bind:id="song.id"
                v-bind:title="song.name"
                v-bind:username="song.artistname"
              ></player>
            </b-col>

            <b-col class="text-left">
              <p class="text-light mt-4 pb-0 mb-2 font-weight-light">
                <router-link
                  class="text-light"
                  :to="{
                    name: 'SongProfile',
                    params: { username: song.username, id: song.id },
                  }"
                  >{{ song.name }}</router-link
                >
              </p>
              <p class="mb-2">
                <b-button
                  v-if="song.retrak"
                  pill
                  size="sm"
                  variant="warning"
                  class="text-uppercase text-light text-small py-0 mr-1"
                  >RT</b-button
                >
                <b-button
                  v-if="song.collaboration"
                  pill
                  size="sm"
                  variant="warning"
                  class="text-uppercase text-light text-small py-0 ml-1 mr-1"
                  >CL</b-button
                >
                <b-button
                  v-if="song.explicit"
                  size="sm"
                  variant="outline-light"
                  class="text-uppercase text-light text-small py-0 ml-1 mr-2"
                  >18</b-button
                >
                <span class="text-muted font-size-normal font-weight-light">{{
                  song.username
                }}</span>
              </p>
              <p class="font-weight-lighter small">
                {{ song.description }}
              </p>
            </b-col>

            <b-col class="text-right">
              <!--
                            <font-awesome-icon v-if="song.liked" class="mr-3 text-danger" size="2x" :icon="['fas', 'heart']"  />
                            <font-awesome-icon v-if="!song.liked" class="mr-3 text-light" size="2x" :icon="['far', 'heart']"  />
                            <font-awesome-icon size="2x" icon="ellipsis-h" class="text-light" />
                            <br>
                            -->

              <b-dropdown
                shaddow
                right
                menu-class="bg-dark border-light-1"
                size="lg"
                variant="link"
                toggle-class="text-decoration-none pr-0 mr-0"
                no-caret
              >
                <template #button-content>
                  <b-icon-three-dots
                    font-scale="2"
                    variant="light"
                  ></b-icon-three-dots>
                </template>
                <b-dropdown-item
                  :to="{ name: 'EditSongProfile', params: { id: song.id } }"
                  variant="light"
                  >Edit</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item
                  @click="deleteConfirmation(song.id, song.name)"
                  variant="danger"
                  >Delete</b-dropdown-item
                >
              </b-dropdown>

              <p v-if="song.likes" class="mt-3 pb-0 mb-0 font-weight-light">
                {{ song.likes }} Like/s
              </p>

              <b-img
                v-if="song.reward"
                :src="getImagePath(song.reward, { width: 46, height: 56 })"
                blank-color="#ccc"
                class="img-fluid photo-border"
                alt="placeholder"
              ></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </b-container>

    <b-container v-if="songs.length === 0 && loaded">
      <p class="text-light font-weight-light text-center py-5">
        No songs yet.
        <router-link class="text-light text-underline" :to="{ name: 'Upload' }"
          >Upload now.</router-link
        >
      </p>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import player from "../../components/player-song.vue";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Songs",
  components: {
    player,
    InfiniteLoading,
  },
  data() {
    return {
      loaded: false,
      songs: [],
      showByIndex: null,
      next_page: null,
    };
  },
  methods: {
    ...mapActions("Account", {
      songs_action: "songs",
      songs_pagination: "songs_pagination",
      delete_song: "delete_song",
    }),
    infiniteHandler($state) {
      this.songs_pagination(this.next_page).then((res) => {
        this.songs.push(...res.results);
        this.next_page = res.next;
        $state.loaded();
      });
    },
    deleteConfirmation(id, song_name) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm(
          "Are you sure that you want to delete - " + song_name + ".",
          {
            title: "Confirm deletion of song",
            size: "md",
            contentClass: "bg-dark text-light font-weight-light",
            titleClass: "font-weight-light",
            buttonSize: "md",
            okVariant: "danger",
            okTitle: "Delete",
            cancelTitle: "Keep",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          if (value) {
            this.delete_song(id)
              .then((res) => {
                res;
                this.songs_action()
                  .then((res) => {
                    console.log(res.results);
                    this.songs = res.results;
                    this.next_page = res.next;
                    //console.log(this.sections)
                  })
                  .catch((error) => {
                    console.log(error);
                    this.$router.replace("/error");
                    //console.log(error);
                  });
              })
              .catch((error) => {
                error;
              });
          }
        })
        .catch((err) => {
          // An error occurred
          err;
        });
    },
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
  mounted() {
    this.songs_action()
      .then((res) => {
        console.log(res.results);
        this.songs = res.results;
        this.next_page = res.next;
        this.loaded = true;
        //console.log(this.sections)
      })
      .catch((error) => {
        console.log(error);
        this.$router.replace("/error");
        //console.log(error);
      });
  },
};
</script>

<style>
.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

.text-underline {
  text-decoration: underline;
}

#banner {
  margin-top: 100px;
}

.border-light-1 {
  border: 1px solid #fff !important;
}

.dropdown-item {
  color: #fff;
}

.dropdown-menu .show {
  border: 1px solid #fff !important;
}

.dropdown-menu a.text-light:hover,
.dropdown-menu a.text-light:focus {
  background-color: #01afdc !important;
  color: black !important;
}

.dropdown-menu a.text-danger:hover,
.dropdown-menu a.text-danger:focus {
  background-color: #e76d66 !important;
  color: black !important;
}
</style>
