<template>
  <b-modal
    id="home-overlay-modal"
    ref="home_overlay_modal"
    modal-class="modal-fullscreen"
    centered
    hide-footer
    title-sr-only
    content-class="text-light text-center"
    header-close-variant="light"
    title="HomeOverlay"
  >
    <template #modal-header="{}">
      <b-container fluid>
        <b-row class="text-center">
          <!-- Required for equal spacing -->
          <b-col cols="4" class="d-none d-sm-block">
            <b-button
              v-b-modal.login-modal
              content-class="bg-dark text-light"
              variant="link"
              class="text-light font-weight-light px-5 mt-3 mx-auto float-right"
              >Login</b-button
            >
          </b-col>

          <b-col cols="4" class="d-none d-sm-block">
            <img
              src="../../assets/trackd-logo.svg"
              class="mb-4 mx-auto text-center mt-2"
              height="35"
              alt="Logo"
            />
          </b-col>

          <b-col cols="12" class="d-block d-sm-none">
            <img
              src="../../assets/trackd-icon-white.svg"
              class="mb-4 mx-auto text-center mt-2"
              height="34"
              alt="Logo"
            />
          </b-col>

          <b-col cols="3" class="float-left">
            <b-button
              v-b-modal.signup-modal
              content-class="bg-dark text-light"
              variant="outline-light"
              class="
                d-none d-md-inline-block
                font-weight-light
                mt-3
                mx-auto
                float-left
                create-account-button
              "
              >Create Account</b-button
            >
          </b-col>

          <!-- <b-col cols="1" class="float-right">
              <b-button size="sm" variant="link" class="float-right close-button"  @click="close()">
                <img src="../../assets/section-close.svg" class="mx-auto text-right float-right mt-2" height="23" alt="Close">
              </b-button>
            </b-col> -->
        </b-row>
      </b-container>
    </template>

    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <p class="header-text mt-2">THE SOCIAL MUSIC PLATFORM</p>
      </b-col>
      <b-col cols="2" class="float-right">
        <b-button
          size="sm"
          variant="link"
          class="float-right"
          @click="closeModal"
        >
          <img
            src="../../assets/section-close.svg"
            class="mx-auto text-right float-right mt-2"
            height="23"
            alt="Close"
          />
        </b-button>
      </b-col>
      <b-col cols="12">
        <p class="large-text mt-4">
          Listen and Connect directly with the world’s finest Artists.
        </p>
      </b-col>

      <b-col cols="12">
        <b-button
          variant="link"
          @click="closeModal"
          class="pb-0"
          style="color: white"
        >
          Browse
        </b-button>
      </b-col>

      <b-col cols="12">
        <b-button variant="link" @click="closeModal" class="pt-0">
          <img
            src="../../assets/arrow-down.svg"
            class="mx-auto text-center mt-0"
            height="6.5"
            alt="Browse"
          />
        </b-button>
      </b-col>

      <!-- Search Bar -->
      <b-col cols="12" class="text-center">
        <b-input-group
          class="mb-2  mt-3 search-bar-container mx-auto"
        >
          <b-form-input
            id="input-search"
            class="font-weight-light search-bar search-bar-banner"
            :class="{ 'mobile-search-bar': isMobile() }"
            placeholder="Search Artist, Song or Playlist"
            v-model="search_param"
            v-on:input="search_change()"
          ></b-form-input>
          <b-input-group-append
            class="px-2 search-input"
            style="
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              margin-left:0px;
              background: #fff;
              border: 1px rgb(206, 212, 218) solid;
              border-left: none;
              
            "
          >
            <b-icon-x-circle-fill v-if="search_results.length !== 0"
              font-scale="1"
              class="mx-auto"
              style="color: #8E8E93;height:100%;"
              @click="clearSearch"
            />
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <!--<b-col cols="12" class="text-center">
        <b-button
          content-class="bg-dark text-light"
          variant="outline-light"
          class="
            font-weight-light
            mt-3
            search-bar-banner-btn
            px-4
          "
          @click="search_change()"
          >Search</b-button
        >
      </b-col>-->

      <b-col v-if="search_results.length === 0" cols="12" class="mt-3">
        <span v-if="isAuthenticated()"
          >Artists -
          <b-link :to="{ name: 'Upload' }" style="color: #f2b471"
            >Upload Now</b-link
          ></span
        >
        <span v-else
          >Artists -
          <b-link href="" v-b-modal.signup-modal style="color: #f2b471"
            >Upload Now</b-link
          ></span
        >
      </b-col>

      <!-- Search Results -->
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <div v-if="search_results.length !== 0">
          <b-list-group
            v-for="(result, index) in search_results.users"
            :key="index"
          >
            <SearchResultAsset v-bind:asset="result"></SearchResultAsset>
          </b-list-group>

          <b-list-group
            v-for="(result, index) in search_results.results"
            :key="'A' + index"
          >
            <SearchResultAsset v-bind:asset="result"></SearchResultAsset>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import SearchResultAsset from "../../components/search/asset/SearchResultAsset.vue";

export default {
  name: "HomeOverlay",
  components: {
    SearchResultAsset,
  },
  data() {
    return {
      search_param: "",
      search_results: [],
    };
  },

  methods: {
    ...mapActions("Auth", ["login"]),
    ...mapActions("Library", ["search"]),
    ...mapGetters(["isAuthenticated"]),
    ...mapMutations("Auth", ["setShowHomeOverlay"]),

    closeModal() {
      this.setShowHomeOverlay(false);
      this.$bvModal.hide("home-overlay-modal");
    },

    clearSearch() {
      this.search_param = null;
      this.search_results = [];
    },
    search_change() {
      if (this.search_param.length > 3) {
        this.search(this.search_param)
          .then((res) => {
            this.search_results = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (!this.search_param) {
        this.search_param = null;
        this.search_results = [];
      }
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

.search-bar-banner {
  border-radius: 10px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right: #fff;
}

.search-bar-banner-btn {
  border-radius: 10px !important;
}

.modal-fullscreen {
  padding: 0 !important;
}
.modal-fullscreen .modal-dialog {
  width: 100%;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.75);
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}

.modal-backdrop {
  display: none;
}

.header-text {
  font-weight: 900;
  font-size: 0.875em;
  line-height: 30px;
  text-align: center;
}

.large-text {
  font-weight: 200;
  font-size: 2.5em;
  line-height: 50px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

.search-bar {
  /* border-top-right-radius: 0.45rem; */
  /* border-bottom-right-radius: 0.45rem; */
  margin-right: 26.5px;
  margin-left: 26.5px;
  width: 290px;
  height: 35px;
}

.search-button {
  /* margin-left: -75px;
  margin-top: 5px; */
  width: 129px;
  height: 37px;
}

.close-button {
  margin-top: 100px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .large-text {
    font-weight: 200;
    font-size: 2.5em;
    text-align: center;
    line-height: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .search-bar {
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    margin-right: 100px;
    margin-left: 50px;
  }

  .search-button {
    margin-left: -75px;
    margin-top: 5px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (orientation: portrait) {
  .large-text {
    font-weight: 200;
    font-size: 4.375em;
    text-align: center;
    line-height: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .search-bar {
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    margin-right: 0px;
    margin-left: 0px;
    width: 350px;
    height: 40px;
  }

  .create-account-button {
    width: 140px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    padding: 0;
    border-radius: 10px;
  }

  .search-bar-container {
    width: 350px;
    height: 40px;
  }

  .search-button {
    margin-left: -75px;
    margin-top: 5px;
  }
}

@media (min-height: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .large-text {
    font-weight: 200;
    font-size: 4.375em;
    text-align: center;
    line-height: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .search-bar {
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    margin-right: 0px;
    margin-left: 0px;
    width: 350px;
    height: 40px;
  }

  .create-account-button {
    width: 140px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    padding: 0;
    border-radius: 10px;
  }

  .search-bar-container {
    width: 350px;
    height: 40px;
  }

  .search-button {
    margin-left: -75px;
    margin-top: 5px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .large-text {
    font-weight: 200;
    font-size: 5em;
    text-align: center;
    line-height: 80px;
    padding-left: 200px;
    padding-right: 200px;
  }

  .search-bar {
    border-top-right-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    width: 456px;
    height: 40px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .search-bar-container {
    width: 456px;
    height: 40px;
    align-self: center;
  }

  .search-button {
    float: left;
  }

  .create-account-button {
    width: 144px;
    height: 37px;
    font-size: 15px;
    border-radius: 10px;
  }
}
</style>
