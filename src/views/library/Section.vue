<template>
  <div id="screen" :class="{ 'bg-light': isMobile() }" v-if="loaded">
    <b-container fluid class="px-0">
      <Banner v-bind:response="response" v-bind:navbar="navbar"></Banner>
    </b-container>

    <b-container
      class="mt-5"
      :class="{ 'pr-0': isMobile(), 'pl-0': isMobile() }"
    >
      <b-row
        class="mr-1"
        v-for="result in response.results"
        :key="result.id"
        :class="{ 'mb-5': !isMobile(), 'mb-4': isMobile() }"
      >
        <b-col cols="12">
          <SectionList v-bind:result="result"></SectionList>
        </b-col>
      </b-row>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import SectionList from "../../components/library/SectionList.vue";
import Banner from "../../components/library/Banner.vue";

export default {
  name: "LibrarySection",
  data() {
    return {
      loaded: false,
      response: null,
      next_page: null,
    };
  },
  components: {
    SectionList,
    Banner,
  },
  methods: {
    ...mapActions("Library", ["librarysection", "librarysection_next"]),

    infiniteHandler($state) {
      this.librarysection_next(this.next_page).then((res) => {
        this.response.results.push(...res.data.results);
        this.next_page = res.data.next;
        $state.loaded();
      });
    },
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
  mounted() {
    this.librarysection(this.$route.params.id)
      .then((res) => {
        this.next_page = res.data.next;
        this.response = res.data;
        this.loaded = true;
      })
      .catch((error) => {
        console.log(error);
      });
  },
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

.photo-border {
  border: 7px solid #000;
}

.border-success-2 {
  border: 2px solid #28a745 !important;
}

.border-danger-2 {
  border: 2px solid #dc3545 !important;
}

.stats-number {
  font-size: 2.2em;
  line-height: 1em;
  font-weight: lighter;
}

.text-small {
  font-size: 0.6em;
}

.text-smaller {
  font-size: 0.8em;
}

.pb-6,
.py-6 {
  padding-bottom: 6rem !important;
}

.pt-6,
.py-6 {
  padding-top: 6rem !important;
}

.pb-7,
.py-7 {
  padding-bottom: 7rem !important;
}

.pt-7,
.py-7 {
  padding-top: 7rem !important;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/*  Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .positioning {
    position: relative;
    top: -125px !important;
  }
}

/* mobile */

/*  Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .positioning,
  .positioning-mobile {
    position: relative;
    top: -100px !important;
  }

  .positioning-chipin-logo {
    position: relative;
    top: -100px !important;
  }

  .stats-number {
    font-size: 1.7em;
    line-height: 1em;
    font-weight: lighter;
  }

  .text-smaller {
    font-size: 0.6em;
  }

  .profile-mobile {
    text-align: left !important;
  }
}

/*  Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
}

/*  Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}

/*  Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

.border-gradient {
  border-top: 2px solid #fff;
  border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
  border-image-slice: 1;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 0.2em;
}

.text-small {
  font-size: 1em;
}

.mobile-header-title {
  font-size: 1.6em;
}

.mobile-header-padding {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}
</style>
