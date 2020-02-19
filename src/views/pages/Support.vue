<template>
  <div>
    <b-container>
      <div class="d-flex flex-column justify-content-center">
        <b-col class="text-center text-light">
          <br /><br /><br /><br /><br /><br />
          <h1 class="font-weight-light d-block mx-auto mb-5">Support</h1>

          <p class="font-weight-lighter">
            The Trackd supporter account gives our artists full access to
            creator tools, complete artist analytics, customized VirtualVinyl™
            for social sharing, cloud space for storage of tracks, ChipIn&reg;
            allowing fans to pay the artist directly, Trackd A&R support, and
            other benefits.
          </p>

          <p class="font-weight-lighter">
            Trackd is all about community and giving back. A percentage of all
            subscriptions goes directly back to artists through the
            <b>Songs Start Here</b>, a global fund helping artists with making
            music and funding projects.
          </p>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Support",
  data() {
    return {
      sections: [],
    };
  },
  methods: {},
  mounted() {},
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
</style>
