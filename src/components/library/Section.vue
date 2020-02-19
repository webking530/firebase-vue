<template>
  <div>
    <b-row class="" v-if="section.assets.length > 0">
      <b-col cols="12">
        <h3 class="font-weight-lighter text-light w-100 mt-3 c-section-title">
          {{ section.name }}

          <b-button
            v-if="section.assets.length == 16"
            :to="link_info(section)"
            variant="link"
            class="float-right text-light font-weight-lighter c-show-all-btn"
          >
            Show All
          </b-button>
        </h3>

        <div class="border-gradient"></div>
      </b-col>

      <b-col cols="12">
        <b-row fluid class="library-section">
          <!-- :class="{ 'mobile-wrapper': isMobile() }" -->
          <div class="wrapper">
            <b-col
              cols="3"
              md="3"
              lg="2"
              v-for="asset in section.assets"
              :key="asset.id"
            >
              <ArtistAsset
                v-if="asset.type === 'artist'"
                v-bind:asset="asset"
                class="item"
              ></ArtistAsset>

              <SongAsset
                v-if="asset.type === 'song'"
                v-bind:asset="asset"
                v-bind:queue="section.assets"
              ></SongAsset>
              

              <CollaborationAsset
                v-if="asset.type === 'collaboration'"
                v-bind:asset="asset"
              ></CollaborationAsset>

              <!--<LocationAsset
                v-if="
                  asset.type === 'continent' ||
                  asset.type === 'country' ||
                  asset.type === 'county' ||
                  asset.type === 'city'
                "
                v-bind:asset="asset"
                :class="{ item }"
              ></LocationAsset>

              <GenreAsset
                v-if="asset.type === 'genre'"
                v-bind:asset="asset"
              ></GenreAsset>-->

              <PlaylistAsset
                v-if="asset.type === 'playlist'"
                v-bind:asset="asset"
                :class="{ item }"
              ></PlaylistAsset>
            </b-col>

            <b-col
              v-if="section.assets.length == 16"
              cols="4"
              md="2"
              class="text-center"
            >
              <b-button
                :to="show_all_link_info(section)"
                class="song-more-btn other-image-mobile"
                ><div>
                  <img src="../../assets/library_show_all_icon.svg" />
                </div>
              </b-button>
            </b-col>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ArtistAsset from "../../components/library/asset/ArtistAsset.vue";
import SongAsset from "../../components/library/asset/SongAsset.vue";
//import LocationAsset from "../../components/library/asset/LocationAsset.vue";
//import GenreAsset from "../../components/library/asset/GenreAsset.vue";
import CollaborationAsset from "../../components/library/asset/CollaborationAsset.vue";
import PlaylistAsset from "../../components/library/asset/PlaylistAsset.vue";

export default {
  name: "Section",
  props: ["section"],
  components: {
    ArtistAsset,
    SongAsset,
    //LocationAsset,
    //GenreAsset,
    CollaborationAsset,
    PlaylistAsset,
  },
  methods: {
    link_info(section) {
      if (section.section_type === "my-songs") {
        return {
          name: "Songs",
        };
      }

      if (section.section_type == "artists") {
        return {
          name: "LibraryArea",
          param: this.getAreaParams(section.section_url),
        };
      }

      if (
        section.section_url.includes("/newdynamic/sub-section/") &&
        section.section_url.includes("/list/")
      ) {
        return this.SubSectionListRoute(section.section_url);
      }

      if (section.section_url.includes("/sub-section/")) {
        return {
          name: "LibraryAreaSubSection",
          param: this.SubSectionRoute(section.section_url),
        };
      }

      return {
        name: "LibrarySectionList",
        params: { area: this.$route.params.area, id: section.id },
      };
    },

    show_all_link_info(section) {
      if (section.section_type == "artists") {
        return {
          name: "LibraryArea",
          param: this.getAreaParams(section.section_url),
        };
      }

      if (
        section.section_url.includes("/newdynamic/sub-section/") &&
        section.section_url.includes("/list/")
      ) {
        return this.SubSectionListRoute(section.section_url);
      }

      if (section.section_url.includes("/sub-section/")) {
        return {
          name: "LibraryAreaSubSection",
          param: this.SubSectionRoute(section.section_url),
        };
      }

      return {
        name: "LibrarySectionList",
        params: { area: this.$route.params.area, id: section.id },
      };
    },

    getAreaParams(string) {
      //
      // string.split('/').pop().split('&')[0].split('=')[1]
      // string.split('/').pop().split('&')[1].split('=')[1]
      //

      var area = string
        .split("/")
        .pop()
        .split("&")[0]
        .split("=")[1];
      var name = string
        .split("/")
        .pop()
        .split("&")[1]
        .split("=")[1];

      return {
        area: area,
        name: name,
      };
    },

    SubSectionRoute(string) {
      var id = string.replace("/newdynamic/sub-section", "").split("/")[1];
      var type = string.split("=")[1];

      return {
        area: this.$route.params.area,
        name: this.$route.params.name,
        id: id,
        type: type,
      };
    },

    SubSectionListRoute(string) {
      var id = string.replace("/newdynamic/sub-section", "").split("/")[1];
      var items = string.split("?")[1].split("&");

      var query = {};

      items.forEach(function(item) {
        console.log(item);
        query[item.split("=")[0]] = item.split("=")[1];
      });

      return {
        name: "LibraryAreaSubSectionList",
        params: {
          area: this.$route.params.area,
          name: this.$route.params.name,
          id: id,
        },
        query: query,
      };
    },
  },
};
</script>

<style scoped>
.border-gradient {
  border-top: 2px solid #fff;
  border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
  border-image-slice: 1;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 0.2em;
}

.wrapper {
  min-width: 100%;
  border-radius: 0;
  display: flex;
  overflow-x: auto;
}

.song-more-btn {
  /* width: 160px; */
  /* height: 160px; */
  border-radius: 50%;
  /* margin-left: 15px; */
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

.up-arrow {
  width: 7px;
  height: 7px;
}

.c-section-title {
  font-size: 24px;
  font-weight: 300;
  line-height: 21px;
}

.c-show-all-btn {
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
}

@media (max-width: 575.98px) {
  .song-more-btn {
    /* width: 120px; */
    /* height: 120px; */
  }
}

@media (min-width: 576px) {
  /* .wrapper .item {
    min-width: 150px;
    height: 250px;
    line-height: 50px;
    text-align: center;
  } */
}

@media (min-width: 768px) {
  .up-arrow {
    width: 15px;
    height: 15px;
  }

  .c-section-title {
    font-size: 36px;
    font-weight: 200;
    line-height: 40px;
  }

  .c-show-all-btn {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  .c-section-title {
    font-size: 36px;
    font-weight: 200;
    line-height: 21px;
    margin-bottom: 1.5rem;
  }

  .c-show-all-btn {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
  }

  .up-arrow {
    width: 20px;
    height: 20px;
  }

  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 2000px;
  }
}
/* width */
::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #333333;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 25px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
}
::-webkit-scrollbar-track {
  border-radius: 25px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
