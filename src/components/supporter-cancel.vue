<template>
  <div>
    <!-- MODAL -->

    <b-modal
      ref="supporter-cancel"
      size="lg"
      content-class="bg-dark text-light text-center border-dark"
      centered
      hide-footer
      hide-header
    >
      <b-row>
        <b-col md="6" offset-md="3" class="mb-3">
          <img
            src="../assets/trackd-icon-colours.svg"
            class="m-4 mb-4 d-block mx-auto"
            height="45"
            alt="Logo"
          />

          <h2 class="font-weight-lighter">Sorry ;-(</h2>

          <h4 class="font-weight-lighter mt-3 line-height">
            You cancelled the payment.
          </h4>

          <b-button
            variant="outline-light"
            class="py-1 px-5 mt-3 font-weight-light"
            @click="hideModal"
            >Close</b-button
          >
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
      this.$refs["supporter-cancel"].hide();
    },
  },
  mounted() {
    this.$refs["supporter-cancel"].show();
  },
};
</script>

<style>
.line-height {
  line-height: 1.45em;
}
</style>
