<template>
  <b-modal
    id="share-playlist-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Login"
    @hide="onClose"
  >
    <template #modal-header="{ close }">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

          <b-col cols="12">
            <img
              src="../../../assets/trackd-icon-colours.svg"
              class="mb-4 float-right mt-2"
              @click="close()"
              height="35"
              alt="Logo"
            />
            <h4 class="font-weight-lighter text-left h2  mt-5">
              Share Playlist
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-container fluid>
      <b-row>
        <div class="col-11 mb-3 pb-3 pl-3">
          <div v-if="success">
            <p class="font-weight-light text-success">
              Share url was copied to clipboard! ;)
            </p>
          </div>
          <div v-if="error">
            <p class="font-weight-light text-danger">
              Share url cound not be copied to clipboard! ;(
            </p>
          </div>

          <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
            <b-form-group>
              <b-form-input
                id="share-url"
                class="text-input"
                size="lg"
                :value="playlist.share_url"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-button
                @click="copyToClipboard"
                variant="info"
                size="sm"
                class="px-4 py-2 btn-rounded float-right text-uppercase"
                >Copy to clipboard</b-button
              >
            </b-form-group>

            <b-form-group class=" text-center d-md-none">
              <b-button
                @click="$bvModal.hide('share-playlist-modal')"
                variant="outline-light"
                size="sm"
                class="px-4 py-2 mt-5 btn-rounded text-uppercase"
                >Close</b-button
              >
            </b-form-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: "DuplicatePlaylist",
  props: ["playlist"],
  components: {},
  data() {
    return {
      success: false,
      error: false,
    };
  },
  methods: {
    onClose() {
      this.success = false;
      this.error = false;
    },
    copyToClipboard() {
      this.error = false;
      this.success = false;

      let testingCodeToCopy = document.querySelector("#share-url");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        document.execCommand("copy");
        this.success = true;
      } catch (err) {
        this.error = true;
      }
      window.getSelection().removeAllRanges();
    },
  },
  mounted() {
    this.success = false;
    this.error = false;
  },
};
</script>

<style>
.forget-link {
  text-decoration: none;
}
.rect-box {
  border-radius: 0 !important;
}

.text-underline {
  text-decoration: underline;
}
.text-underline:hover {
  text-decoration: none;
}

.btn-rounded {
  border-radius: 10px;
}

.text-input {
  background-color: #222222;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #222222;
  color: #9b9b9b;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #9b9b9b;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9b9b9b;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9b9b9b;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #9b9b9b;
}

.b-dropdown-form:focus {
  outline: none !important;
}
</style>
