<template>
  <b-modal
    id="rename-playlist-modal"
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
              src="../../../assets/trackd-icon-colours.svg"
              class="mb-4 float-right mt-2"
              @click="close()"
              height="35"
              alt="Logo"
            />
            <h4 class="font-weight-lighter text-left h2  mt-5">
              Rename Playlist
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-container fluid>
      <b-row>
        <div
          class="col-11 mb-3 pb-3 pl-3
      "
        >
          <div v-if="responseMsg">
            <p :class="'font-weight-light ' + responseClass">
              {{ responseMsg }}
            </p>
          </div>

          <b-form @submit.stop.prevent="Submit" class="mb-3 pb-3">
            <b-form-group>
              <b-form-input
                id="name"
                class="text-input"
                size="lg"
                v-model="$v.form.name.$model"
                placeholder="Name"
                :state="validateState('name')"
              ></b-form-input>
              <b-form-invalid-feedback class="text-left" id="name-feedback"
                >This is a required field.</b-form-invalid-feedback
              >
            </b-form-group>

            <b-form-group>
              <b-button
                type="submit"
                variant="info"
                class="px-4 py-2 mt-3 btn-rounded float-right text-uppercase"
                >Rename</b-button
              >
            </b-form-group>

            <b-form-group
              class="mt-5 text-center d-md-none"
              style="position: absolute; bottom: 47px;"
            >
              <b-button
                @click="$bvModal.hide('rename-playlist-modal')"
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
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "RenamePlaylist",
  props: ["playlist"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: this.playlist.name,
      },
      showAPIError: false,
      APIErrorText: null,
      responseMsg: null,
      responseClass: null,
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("Playlist", ["update_playlist"]),
    onClose() {
      this.showAPIError = false;
      this.APIErrorText = null;
      this.responseMsg = null;
      this.responseClass = null;
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    Submit() {
      this.showAPIError = false;
      this.responseMsg = null;

      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.update_playlist([this.playlist.id, this.form])
        .then((res) => {
          res;

          this.$v.form.$reset();
          this.responseMsg = res.data.status;
          this.responseClass = "text-success";

          this.playlist.name = this.form.name;

          this.form.name = "";

          setTimeout(() => {
            this.$bvModal.hide("rename-playlist-modal");
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
  mounted() {},
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
