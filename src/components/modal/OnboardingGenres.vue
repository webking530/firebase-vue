<template>
  <b-modal
    id="genres-onboarding-modal"
    size="lg"
    centered
    hide-footer
    title-sr-only
    no-close-on-backdrop
    no-close-on-esc
    content-class="bg-dark text-light text-center"
    header-close-variant="light"
    title="Onboarding Genres"
  >
    <template #modal-header="">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col></b-col>

          <b-col cols="8">
            <img
              src="../../assets/trackd-icon-colours.svg"
              class="mb-4 mx-auto text-center mt-2"
              height="35"
              alt="Logo"
            />
          </b-col>

          <b-col class="float-right">
            <!--
            <b-button
              size="sm"
              variant="link"
              class="float-right"
              @click="close()"
            >
              <img
                src="../../assets/section-close.svg"
                class="mx-auto text-right float-right mt-2"
                height="23"
                alt="Close"
              />
            </b-button>
            -->
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-row>
      <b-col cols="10" offset="1" sm="8" offset-sm="2" md="8" offset-md="2">
        <b-row class="mb-5">
          <b-col class="p-1">
            <b-badge pill variant="info" class="w-100 text-info text-small"
              >&nbsp;a</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge pill variant="info" class="w-100 text-info text-small"
              >&nbsp;b</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge
              pill
              variant="warning"
              class="w-100 text-warning text-small"
              >&nbsp;c</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;d</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;e</b-badge
            >
          </b-col>
          <b-col class="p-1">
            <b-badge
              pill
              variant="secondary"
              class="w-100 text-secondary text-small"
              >&nbsp;f</b-badge
            >
          </b-col>
        </b-row>

        <h2 class="text-left text-light text-des">
          Tell me some <b class="font-weight-bold">music genres</b> you’re into?
        </h2>

        <h4 class="mt-4 text-light text-fdes text-left">
          Type naturally in a sentence.<br>I’m listening! <b>Try me!</b>
        </h4>

        <b-card class="my-5 pb-2 shadow-sm bg-dark text-right" no-body>
          <b-card-body>
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group
                id="input-group-username"
                label=""
                label-for="username"
                class=""
              >
                <b-form-input
                  size="lg"
                  class="bg-dark text-light input-box"
                  id="username"
                  v-model="$v.form.text.$model"
                  :state="validateState('text')"
                  placeholder="Type here"
                  type="text"
                ></b-form-input>
                <b-form-invalid-feedback
                  v-if="!api_error"
                  id="username-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
                <b-form-invalid-feedback
                  v-if="api_error"
                  id="username-feedback"
                  >{{ api_error_msg }}</b-form-invalid-feedback
                >
              </b-form-group>

              <b-button
                v-for="(tag, index) in tags"
                :key="index"
                size="lg"
                variant="outline-light"
                @click="RemoveTag(index)"
                class="m-2 px-3 tag-box text-sub"
              >
                {{ tag.tag }}
                <span class="ml-2">X</span>
              </b-button>

              <p class="mt-5 mb-3 text-left text-sub text-light">
                E.g. I like Rock, Hip-Hop and Jazz
              </p>
              <b-button
                size="lg"
                type="submit"
                variant="info"
                class="px-4 float-right next-btn"
                >Next</b-button
              >
              <b-button
                size="lg"
                variant="outline-light"
                class="mx-3 px-4 float-right next-btn"
                v-b-modal.skills-onboarding-modal
                @click="$bvModal.hide('genres-onboarding-modal')"
                >Skip</b-button
              >
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "OnboardingGenres",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        text: null,
      },
      tags: [],
      api_error: false,
      api_error_msg: null,
      submission_success: false,
      remove_warning: false,
      tagged_text: null,
    };
  },
  validations: {
    form: {
      text: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters("Onboarding", ["getCampaignCode"]),
  },
  methods: {
    ...mapActions("Onboarding", ["genres", "update_account"]),
    validateState(name) {
      if (this.api_error) {
        return false;
      } else {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      }
    },
    RemoveTag(index) {
      if (!this.remove_warning) {
        var remove = confirm("Mmm I'm sure i found that genre in your text?");
        if (remove === true) {
          this.remove_warning = true;
          this.tags.splice(index, 1);
          if (this.tags.length === 0) {
            this.form.text = null;
          }
        }
      } else {
        this.tags.splice(index, 1);
        if (this.tags.length === 0) {
          this.form.text = null;
        }
      }
    },
    onSubmit() {
      this.api_error = false;
      this.api_error_msg = null;
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      let campaign_code = this.getCampaignCode;

      if (this.tags.length === 0 || this.tagged_text != this.form.text) {
        let formData = this.form;

        formData["device_id"] = "kjnjnxjkankjsnj";

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.genres(formData)
          .then((res) => {
            console.log(res.data);

            this.$store.state.country = res.data.current_country;
            this.tags = [...res.data.genres];
            this.tagged_text = this.form.text
            // store email
            // go to next screen
          })
          .catch((error) => {
            console.log(error.data);

            if (error.data.message) {
              if (error.data.message === 'Skip user') {
                this.$bvModal.hide("genres-onboarding-modal");
                this.$bvModal.show("skills-onboarding-modal");
              }
            } else {

            this.api_error = true;
            this.api_error_msg = error.data.errors[0];

            }
          });
      } else {
        let formData = {};
        var genres = [];
        var tag;
        for (tag of this.tags) {
          genres.push(tag.id);
        }
        formData["genres"] = genres;

        if (campaign_code) {
          formData["campaign_code"] = campaign_code;
        }

        this.update_account(formData)
          .then((res) => {
            console.log(res.data);
            // store email
            // go to next screen
            this.$store.state.genres = genres;
            this.api_error = false;

            res;
            this.$bvModal.hide("genres-onboarding-modal");
            this.$bvModal.show("skills-onboarding-modal");
            // this.$router.push({name: 'OnboardingUserType'})
          })
          .catch((error) => {
            console.log(error);
            this.api_error = true;
            this.api_error_msg = error.data.errors[0];
          });
      }
    },
  },
  mounted() {
    //this.$refs['forgot-password'].show()
    this.$bvModal.hide("genres-onboarding-modal");
  },
};
</script>

<style>
.card-body {
  padding: 0 !important;
}
.header-spacing {
  margin-top: 120px !important;
}

.text-small {
  font-size: 0.5em !important;
}

.badge-pill {
  padding: 0.001em;
}

.next-btn {
  border-radius: 10px !important;
}

.badge {
  padding: 0 !important;
}
</style>
