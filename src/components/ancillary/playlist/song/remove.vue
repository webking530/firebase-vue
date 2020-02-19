<template>
  <b-modal
    :id="'remove-song-modal-' + song.id"
    size="lg"
    centered
    hide-footer
    title-sr-only
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    @hide="onClose"
  >
    <template #modal-header="{ close }">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

          <b-col cols="12">
            <img
              src="../../../../assets/trackd-icon-colours.svg"
              class="mb-4 float-right mt-2"
              @click="close()"
              height="35"
              alt="Logo"
            />
            <h4 class="font-weight-lighter text-left h2  mt-5">
              Remove Song
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-container fluid>
      <b-row>
        <div class="col-11 mb-3 pb-3 pl-3">
          <div v-if="responseMsg">
            <p :class="'font-weight-light ' + responseClass">
              {{ responseMsg }}
            </p>
          </div>

          <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
            <b-form-group>
              <p class="font-weight-light text-left">
                Are you sure you wish to remove
                <span class="font-weight-bold">{{ song.song_name }}</span
                >, from this playlist?
              </p>
            </b-form-group>

            <b-form-group>
              <b-button
                @click="$bvModal.hide('remove-song-modal-' + song.id)"
                variant="outline-light"
                size="sm"
                class="px-4 py-2 btn-rounded float-left text-uppercase"
                >cancel</b-button
              >
              <b-button
                @click="removeSong"
                variant="info"
                size="sm"
                class="px-4 py-2 btn-rounded float-right text-uppercase"
                >Yes, Remove</b-button
              >
            </b-form-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RemoveSong",
  props: ["playlist", "song", "index"],
  components: {},
  data() {
    return {
      showAPIError: false,
      APIErrorText: null,
      responseMsg: null,
      responseClass: null,
    };
  },
  methods: {
    ...mapActions("Playlist", ["remove_song_playlist"]),
    onClose() {
      this.success = false;
      this.error = false;
    },
    removeSong() {
      this.remove_song_playlist([this.playlist.id, this.song.song_id])
        .then((res) => {
          res;

          this.$parent.removeSong(this.index)
          this.responseMsg = res.data.status;
          this.responseClass = "text-success";

          setTimeout(() => {
            this.$bvModal.hide("remove-song-modal-" + this.song.id);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);

          if (error.data.errors) {
            this.responseMsg = error.data.errors[0];
            this.responseClass = "text-danger";
          } else if (error.data.non_field_errors) {
            this.responseMsg = error.data.non_field_errors[0];
            this.responseClass = "text-danger";
          } else {
            this.responseMsg = error.data.message;
            this.responseClass = "text-danger";
          }
        });
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
