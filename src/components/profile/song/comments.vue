<template>
  <b-row class="section-spacing positioning">
    <b-col class="text-light">
      <h3 class="text-light font-weight-lighter tab-title section-heading">
        {{ section.name }}
        <b-button variant="link" class="float-right text-light show-all-btn"
          >Show All</b-button
        >
      </h3>
      <div class="border-gradient"></div>

      <div v-if="section.comments.length > 0">
        <p
          class="comment-des comments-component"
          v-for="(comment, i) in section.comments"
          :key="i"
        >
          "{{ comment.comment }}"
        </p>
      </div>
      <p v-else class="comment-des">No comments yet</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongCommentsSection",
  props: ["section"],
};
</script>

<style>
.comment-des.comments-component {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 1.5em;
  color: #9b9b9b;
}
</style>
