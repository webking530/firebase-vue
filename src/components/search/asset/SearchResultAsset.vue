<template>
  <b-container fluid class="result my-2 py-2">
    <b-link :to="get_link" style="text-decoration: none">
      <b-row align-v="center">
        <!-- Image -->
        <b-col cols="2">
          <b-img
            :src="
              getImagePath(asset.image, { func: 'crop', width: 50, height: 50 })
            "
            class="mr-3"
          ></b-img>
        </b-col>

        <!-- Information -->
        <b-col cols="10" class="text-left pl-0 pr-0 mt-3 pl-3">
          <p v-if="asset.type === 'users'">
            <span
              class="text text-white"
              v-html="elipsis(asset.username, 18)"
            ></span
            ><span class="text text-grey"> | Artist </span>
            <!--<span
              class="text text-grey"
              v-html="elipsis(asset.location, 22)"
            ></span>-->
          </p>
          <p v-if="asset.type === 'songs'">
            <span class="text text-white" v-html="elipsis(asset.value, 25)">{{
              asset.value
            }}</span
            ><span class="text text-grey"> | Song</span>
          </p>
        </b-col>
      </b-row>
    </b-link>
  </b-container>
</template>

<script>
export default {
  props: ["asset"],

  computed: {
    get_link() {
      if (this.asset.type === "users") {
        return {
          name: "ArtistUsername",
          params: { id: this.asset.username },
        };
      }
      if (this.asset.type === "songs") {
        return { name: "Song", params: { id: this.asset.id } };
      }
      return {};
    },
  },
};
</script>

<style>
.result {
  background-color: #000000;
}

.text {
  font-size: 1.125em;
  font-weight: 400;
  line-height: 14px;
}

.text-white {
  color: #ffffff;
}

.text-grey {
  color: #555555;
}
</style>
