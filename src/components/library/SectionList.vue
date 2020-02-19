<template>
  <div>
    <b-col cols="12">
      <ArtistAsset
        v-if="result.type === 'artist' && !isMobile()"
        v-bind:artist="result"
      ></ArtistAsset>
      <ArtistAssetMobile
        v-if="result.type === 'artist' && isMobile()"
        v-bind:artist="result"
      ></ArtistAssetMobile>

      <SongAsset
        v-if="result.type === 'song' && !isMobile()"
        v-bind:song="result"
      ></SongAsset>
      <SongAssetMobile
        v-if="result.type === 'song' && isMobile()"
        v-bind:song="result"
      ></SongAssetMobile>

      <PlaylistAsset
        v-if="result.type === 'playlist' && !isMobile()"
        v-bind:playlist="result"
      ></PlaylistAsset>
      <PlaylistAssetMobile
        v-if="result.type === 'playlist' && isMobile()"
        v-bind:playlist="result"
      ></PlaylistAssetMobile>
    </b-col>
  </div>
</template>

<script>
import ArtistAsset from "../../components/library/list/ArtistAsset.vue";
import ArtistAssetMobile from "../../components/library/list/ArtistAssetMobile.vue";
import SongAsset from "../../components/library/list/SongAsset.vue";
import SongAssetMobile from "../../components/library/list/SongAssetMobile.vue";
import PlaylistAsset from "../../components/library/list/PlaylistAsset.vue";
import PlaylistAssetMobile from "../../components/library/list/PlaylistAssetMobile";

export default {
  name: "SectionList",
  props: ["result"],
  components: {
    ArtistAsset,
    ArtistAssetMobile,
    SongAsset,
    SongAssetMobile,
    PlaylistAsset,
    PlaylistAssetMobile,
  },
  methods: {
    getAreaParams(string) {
      //
      // string.split('/').pop().split('&')[0].split('=')[1]
      // string.split('/').pop().split('&')[1].split('=')[1]
      //

      var area = string.split("/").pop().split("&")[0].split("=")[1];
      var name = string.split("/").pop().split("&")[1].split("=")[1];

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

      items.forEach(function (item) {
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
  height: 250px;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  display: flex;
  overflow-x: auto;
}

.wrapper .item {
  min-width: 150px;
  height: 250px;
  line-height: 50px;
  text-align: center;
}

.song-more-btn {
  width: 160px;
  height: 160px;
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

@media (max-width: 575.98px) {
  .song-more-btn {
    width: 120px;
    height: 120px;
  }
}
</style>
