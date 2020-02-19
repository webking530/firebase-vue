<template>
  <b-row class=" pb-3 positioning">
    <b-col>
      <h3 class="text-light font-weight-lighter tab-title section-heading">
        Genre
        <b-button variant="link" class="float-right text-light show-all-btn"
          >Show All</b-button
        >
      </h3>
      <div class="border-gradient"></div>

      <ul v-if="section.genres.length > 0" class="list-inline overflow-hidden">
        <b-button size="lg" variant="outline-light" class="m-2 px-3 genre-box">
          {{ song.genre.name }}
        </b-button>
        <b-button
          v-if="song.sub_genre"
          size="lg"
          variant="outline-light"
          class="m-2 px-3 genre-box"
        >
          {{ song.sub_genre.name }}
        </b-button>
        <b-button
          v-if="song.sub_sub_genre"
          size="lg"
          variant="outline-light"
          class="m-2 px-3 genre-box"
        >
          {{ song.sub_sub_genre.name }}
        </b-button>
      </ul>

      <p v-if="section.genres.length > 0" class="font-weight-light genre-tag">
        {{ song.genre.name }}
        <span class="ml-2" v-if="song.sub_genre" style="font-size: 1.5em"
          >&#183;</span
        ><span class="ml-2" v-if="song.sub_genre">{{
          song.sub_genre.name
        }}</span
        ><span class="ml-2" v-if="song.sub_sub_genre" style="font-size: 1.5em"
          >&#183;</span
        ><span class="ml-2" v-if="song.sub_sub_genre">{{
          song.sub_sub_genre.name
        }}</span>
      </p>

      <p v-else class="comment-des">Awaiting Genres</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongGenreSection",
  props: ["section"],
};
</script>

<style>
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
</style>
