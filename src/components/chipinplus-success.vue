<template>
  <div>
    <!-- MODAL -->

    <b-modal
      ref="chipinplus-success"
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
            src="../assets/chipin-plus-badge.svg"
            class="m-4 mb-4 d-block mx-auto"
            height="45"
            alt="Logo"
          />

          <div class="col-12 col-md-6 offset-md-3 mt-5">
            <div class="row">
              <div class="pl-0 col-12 text-center">
                <b-img
                  v-if="photo"
                  rounded="circle"
                  :src="getImagePath(photo, { width: 120, height: 120 })"
                  blank-color="#ccc"
                  alt="placeholder"
                  height="120"
                  width="120"
                  class="light-grey-border img-fluid"
                ></b-img>
                <b-img
                  v-else
                  rounded="circle"
                  blank
                  blank-color="#ccc"
                  alt="placeholder"
                  height="120"
                  width="120"
                  class="light-grey-border img-fluid"
                ></b-img>
                <p
                  class="
                    font-weight-normal
                    mb-1
                    mt-2
                    mb-0
                    pb-0
                    dark-text
                    h3
                    mt-3
                  "
                >
                  We’re Good!
                </p>
              </div>
            </div>
          </div>

          <p class="font-weight-light mb-1 text-center">
            Payment Successful. <br />
            Thanks for your support.
          </p>

          <p class="text-center mt-5 pt-5">
            <b-button
              class="mb-4 px-5 py-2 rounded-btn"
              size="md"
              variant="info"
              @click="hideModal"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;Enjoy!&nbsp;&nbsp;&nbsp;&nbsp;
            </b-button>
            <br />
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
  props: ["photo"],
  data: function () {
    return {};
  },
  methods: {
    hideModal() {
      this.$refs["chipinplus-success"].hide();
    },
  },
  mounted() {
    this.$refs["chipinplus-success"].show();
  },
};
</script>

<style>
.line-height {
  line-height: 1.45em;
}
</style>
