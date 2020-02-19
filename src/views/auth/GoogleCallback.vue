<template>
  <div class="text-center mt-5">
    <div class="row mt-5 text-center text-light">
      <div class="col-12 mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleAuthCallback",
  data() {
    return {};
  },
  computed: {
    this_route_p() {
      console.log(this.$route.params);
      return this.$route.params;
    },
    this_route_q() {
      console.log(this.$route.query);
      console.log(this.$route.path);
      return this.$route.query;
    },
    this_route_h() {
      return this.$route.hash;
    },
  },
};
</script>

<style scoped></style>
