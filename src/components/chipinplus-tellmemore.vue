<template>
  <div>
    <!-- MODAL -->

    <b-modal
      id="chipinplus-tellmemore"
      ref="chipinplus-tellmemore"
      size="lg"
      content-class="bg-dark text-light"
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

          <div class="row mb-3">
            <div class="col-4">
              <img
                src="../assets/chipin-emblem.png"
                alt=""
                height="120"
                width="120"
                class="img-fluid circle"
              />
            </div>

            <div class="pl-0 col-8">
              <p class="font-weight-normal mb-1 mt-2 mb-0 pb-0 dark-text h5">
                What is ChipIn<sup>&reg;</sup>?
              </p>
              <p class="font-weight-light mb-1">
                ChipIn<sup>&reg;</sup>+ is a way to show your appreciation to
                the Artists you love to listen to.
              </p>
            </div>
          </div>

          <p class="text-left font-weight-normal py-2 pb-0 mb-0 text-light">
            Why do i need to subscribe?
          </p>

          <p class="text-left font-weight-light pt-0 mt-0 mb-0 text-light">
            Making a living from music is hard. Artist royalties from streaming
            alone are incredibly low and require huge global popularity just to
            make a living. Trackd is changing that. We’re giving the power back
            to Artists who can choose what to offer their fans for free or
            included with a ChipIn<sup>&reg;</sup>+ subscription.
          </p>

          <p class="text-left font-weight-light py-2 mb-0 text-light">
            Subscribe today and support this Artist to be more creative than
            ever before.
          </p>

          <p class="text-center">
            <b-button
              variant="info"
              class="
                btn-rounded
                py-1
                px-5
                mt-5
                font-weight-light
                text-center
                mx-auto
              "
              @click="hideModal"
              >Close</b-button
            >
          </p>
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
      this.$refs["chipinplus-tellmemore"].hide();
    },
  },
  mounted() {
    //this.$refs['chipinplus-tellmemore'].show()
  },
};
</script>

<style>
.line-height {
  line-height: 1.45em;
}

.rounded-btn {
  border-radius: 10px;
}
</style>
