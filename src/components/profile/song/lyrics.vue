<template>
  <b-row class="section-spacing positioning">
    <b-col cols="12" class="text-light">
      <h3 class="text-light font-weight-lighter tab-title section-heading">
        Lyrics
        <b-button variant="link" class="float-right text-light show-all-btn"
          >Show All</b-button
        >
      </h3>
      <div class="border-gradient"></div>
    </b-col>
    <b-col cols="12">
      <div>
        <p
          v-if="section.lyrics[0].title"
          class="comment-des"
          v-html="section.lyrics[0].lyrics_stripped"
        >
          {{ section.lyrics[0].lyrics_stripped }}
        </p>
        <p v-else class="comment-des" style="margin-bottom: 0">
          No lyrics to show
        </p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongLyricSection",
  props: ["section"],
};
</script>

<style>
.section-heading {
  font-size: 24px;
  line-height: 21px;
  font-weight: 300 !important;
  color: #9b9b9b !important;
}

.show-all-btn {
  font-size: 14px;
  line-height: 21px;
  font-weight: 300;
}

.comment-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #9b9b9b;
  width: 100%;
  column-count: 2;
}

.border-gradient {
  margin-bottom: 1rem;
}

@media (min-width: 991.99px) {
  .section-heading {
    font-size: 36px;
    font-weight: 200;
    line-height: 21px;
  }

  .show-all-btn {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
  }
}

@media (max-width: 991.98px) {
  .section-heading {
    font-size: 36px;
    font-weight: 200;
    line-height: 21px;
  }

  .show-all-btn {
    font-size: 18px;
    line-height: 21px;
  }
}

@media (max-width: 767.98px) {
  .section-heading {
    font-size: 1.5em;
    font-weight: 300;
    line-height: 21px;
  }

  .show-all-btn {
    font-size: 14px;
    line-height: 21px;
  }

  .comment-des {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
}
</style>
