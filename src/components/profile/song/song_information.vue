<template>
  <b-row class="mt-4 pb-6 positioning">
    <b-col class="text-light">
      <h3 class="text-light font-weight-lighter tab-title section-heading">
        Song Information
      </h3>
      <div class="border-gradient"></div>

      <ul class="list-unstyled copyrights">
        <li class="artist-info">
          Copyright: {{ section.song_information[0].copyright }}
        </li>
        <li v-if="section.song_information[0].publisher" class="artist-info">
          Publisher: {{ section.song_information[0].publisher }}
        </li>
        <li
          v-if="section.song_information[0].rights_society"
          class="artist-info"
        >
          Rights Society: {{ section.song_information[0].rights_society }}
        </li>
        <li v-if="section.song_information[0].track_length" class="artist-info">
          Track Time: 00:{{ section.song_information[0].track_length }}
        </li>
      </ul>
      <p
        v-if="section.song_information[0].explicit"
        class="font-weight-lighter c-explicit-content"
      >
        <b-button
          size="md"
          variant="outline-light"
          class="text-uppercase text-medium py-0 ml-1 btn-18"
          >18</b-button
        >
        <span class="artist-info">Contains Explicit Lyrics</span>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongInformationSection",
  props: ["section"],
};
</script>

<style>
.copyrights {
  margin-bottom: 10px;
}

.artist-info {
  font-size: 14px;
  line-height: 25px;
  font-weight: 400;
  color: #9b9b9b;
}

.c-explicit-content {
  display: flex;
  align-items: center;
}

.btn-18 {
  height: 19px;
  width: 26.4px;
  padding-left: 5px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  margin-right: 10px;
  border-color: #9b9b9b;
  color: #9b9b9b;
}

@media (min-width: 991.99px) {
  .artist-info {
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
  }

  .btn-18 {
    height: 25px;
    width: 33px;
    font-size: 18px;
  }
}
</style>
