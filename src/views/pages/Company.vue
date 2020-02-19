<template>
  <div>
    <b-container>
      <div class="d-flex flex-column justify-content-center">
        <b-col class="text-left text-light">
          <br /><br /><br /><br /><br /><br />

          <h1
            id="company"
            class="font-weight-light text-center d-block mx-auto mb-5"
          >
            Company
          </h1>

          <p class="font-weight-lighter">
            Trident Cloud is a music technology company with a rich history in
            the music industry.
          </p>

          <p class="font-weight-lighter">
            Founded in 2015, Trident Cloud launched <b>Trackd</b>, a recording
            and collaborative platform that changed the way musicians could
            create and share music. Providing simple, yet powerful tools allowed
            for artists anywhere in the world to record ideas on the move, find
            and collaborate remotely with artists worldwide.
          </p>

          <p class="font-weight-lighter">
            In 2020 Trackd launched a music discovery side to the platform
            called Discover. Discover allows music fans a world of music at
            their fingertips.
          </p>

          <p class="font-weight-lighter">
            The evolved Trackd platform has developed on the creation tools
            built from its recording studio roots. These features in the
            <b>‘Create’</b> side of the app are focused on the artist, musician,
            and songwriter; helping to turn ideas into professional-quality
            tracks.
          </p>

          <p class="font-weight-lighter">
            Tools such as <b>ChipIn&reg;</b> allow for artists to use the fan
            economy to help further careers and make revenue from music
            streaming. Other tools include <b>SongSplits™</b>, technology that
            allows collaborating musicians to agree terms of song ownership
            before creation, <b>JumpIn™</b> that allows unparalleled fan
            interaction with their favourite music.
          </p>

          <p class="font-weight-lighter">
            Trackd’s founders, Russell and Justin Sheffield are sons of the
            legendary Trident Studios, Soho a premier destination for recording
            artists such as Queen, Elton John, and David Bowie. With an
            experienced technical team, the app combines an invaluable mix of
            music and tech, making music fair for artists and listeners.
          </p>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Company",
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
