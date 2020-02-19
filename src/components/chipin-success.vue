<template>
  <div>
    <!-- MODAL -->

    <b-modal
      ref="chipin-success"
      size="lg"
      content-class="bg-dark text-light text-center"
      centered
      hide-footer
    >
      <template #modal-header="{ close }">
        <b-container fluid>
          <b-row class="text-center">
            <!-- Required for equal spacing -->
            <b-col></b-col>

            <b-col cols="8">
              <img
                src="../assets/trackd-icon-colours.svg"
                class="mb-4 mx-auto text-center mt-2"
                height="35"
                alt="Logo"
              />
            </b-col>

            <b-col class="float-right">
              <b-button
                size="sm"
                variant="link"
                class="float-right"
                @click="close()"
              >
                <img
                  src="../assets/section-close.svg"
                  class="mx-auto text-right float-right mt-2"
                  height="23"
                  alt="Close"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>

      <b-row>
        <b-col md="6" offset-md="3" class="mb-3">
          <img
            src="../assets/trackd-icon-colours.svg"
            class="m-4 mb-4 d-block mx-auto"
            height="30"
            alt="Logo"
          />

          <img
            src="../assets/chipin-badge.svg"
            class="m-4 mb-4 d-block mx-auto"
            height="45"
            alt="Logo"
          />

          <h4 class="font-weight-lighter py-3 h2">Thank You!</h4>

          <h4 class="font-weight-lighter mt-3 line-height">
            We’ll let this Artist know you
            <br class="d-none d-md-inline" />appreciate their hard work!
          </h4>

          <p class="font-weight-lighter mt-3">
            You will also receive an email confirmation.
          </p>

          <b-button
            variant="outline-light"
            class="py-1 px-5 mt-3 font-weight-light"
            @click="hideModal"
            >Close</b-button
          >
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="10" offset="1">
          <b-row class="text-left">
            <b-col cols="12" sm="2" md="3">
              <img
                src="../assets/songs-start-here.svg"
                class="mt-4 d-block mx-auto"
                height="40"
                alt="Logo"
              />
            </b-col>
            <b-col cols="12" sm="8" md="col">
              <p class="text-muted font-weight-light text-left mt-4 small">
                Songs Start Here is a charitable organisation focused on
                supporting artists, musicians, and songwriters to help fulfil
                their full potential. Donations are optional and do not provide
                app functionality. *Regular ChipIn Supporter payments renew each
                month until cancelled. Only Bank processing fees apply. Trackd
                or Songs Start Here do not take a dime. Full terms are available
                <a
                  target="_blank"
                  class="text-muted font-weight-normal"
                  href=" https://www.songsstarthere.org/privacy-policy-terms"
                >
                  here.</a
                >
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    hideModal() {
      this.$refs["chipin-success"].hide();
    },
  },
  mounted() {
    this.$refs["chipin-success"].show();
  },
};
</script>

<style>
.line-height {
  line-height: 1.45em;
}
</style>
