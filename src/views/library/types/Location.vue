<template>
  <div>
    <b-container v-if="section" fluid>
      <b-row
        v-if="section.banner.images.length > 0"
        :style="{
          backgroundImage: `url(${getImagePath(section.banner.images[0])})`,
        }"
        class="image-backdrop"
      >
        <b-col
          class="text-center text-light pt-8 pb-8 mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 v-if="section.banner.name" class="mx-auto font-weight-light">
            {{ section.banner.name }}
          </h1>
        </b-col>
      </b-row>

      <b-row v-else class="image-backdrop" :class="random_colour">
        <b-col
          class="text-center text-light pt-8 pb-8 mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h1 v-if="section.banner.name" class="mx-auto font-weight-light">
            {{ section.banner.name }}
          </h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row v-for="result in section.results" :key="result.id">
        <b-col
          cols="12"
          md="6"
          v-for="song in artist.featured_tracks"
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
                    params: { username: artist.username, id: song.id },
                  }"
                  >{{ song.name }}</router-link
                >
              </p>
              <p class="mb-2">
                <b-button
                  v-if="song.rt_badge"
                  pill
                  size="sm"
                  variant="warning"
                  class="text-uppercase text-light text-small py-0 mr-1"
                  >RT</b-button
                >
                <b-button
                  v-if="song.cl_badge"
                  pill
                  size="sm"
                  variant="warning"
                  class="text-uppercase text-light text-small py-0 ml-1"
                  >CL</b-button
                >
                <b-button
                  v-if="song.explicit"
                  size="sm"
                  variant="outline-light"
                  class="text-uppercase text-light text-small py-0 ml-1"
                  >18</b-button
                >
                <span
                  class="text-muted font-size-normal font-weight-light ml-2"
                  >{{ song.username }}</span
                >
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
              <p class="mt-3 pb-0 mb-0 font-weight-light">
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
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import player from "../../../components/player.vue";

export default {
  name: "Location",
  data() {
    return {
      section: null,
    };
  },
  components: {
    player,
  },
  methods: {
    ...mapActions("Library", ["location"]),
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
  mounted() {
    var id = this.$route.params.id;

    this.location([id, this.$route.params])
      .then((res) => {
        this.section = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log('here')
  },
};
</script>

<style scoped>
p {
  font-size: 1.2em;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
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
}

/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .positioning {
    position: relative;
    top: -125px !important;
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
</style>
