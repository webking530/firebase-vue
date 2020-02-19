<template>
  <div
    id="screen"
    v-if="loaded"
    :class="{
      'margin-auth': isAuthenticated() && !isMobile(),
      'margin-auth-mobile': isAuthenticated() && isMobile(),
      'margin-unauth': !isAuthenticated(),
    }"
  >
    <Banner v-bind:response="response" v-bind:navbar="navbar"></Banner>

    <b-container class="mt-4">
      <div v-for="section in response.sections" :key="section.id">
        <Section v-bind:section="section" class="mt-3 mt-md-4"></Section>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Section from "../../components/library/Section.vue";
import Banner from "../../components/library/Banner.vue";

export default {
  name: "LibraryArea",
  components: {
    Section,
    Banner,
  },
  data() {
    return {
      loaded: false,
      response: null,
      sections: {},
      navbar: {
        open: true,
        collapse: false,
      },
      scrollState: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    ...mapActions("Library", ["area"]),
    ...mapGetters(["username", "isAuthenticated"]),

    onScroll() {
      // Get the current scroll position
      const currentScroll = window.scrollY;
      var vm = this;

      if (currentScroll > this.scrollState) {
        vm.navbar.collapse = true;
        vm.navbar.open = false;
      } else {
        if (currentScroll < 100) {
          vm.navbar.collapse = false;
          vm.navbar.open = true;
        }
      }

      this.scrollState = window.scrollY;
    },

    getAreaParams(string) {
      //
      // string.split('/').pop().split('&')[0].split('=')[1]
      // string.split('/').pop().split('&')[1].split('=')[1]
      //

      var area = string
        .split("/")
        .pop()
        .split("&")[0]
        .split("=")[1];
      var name = string
        .split("/")
        .pop()
        .split("&")[1]
        .split("=")[1];

      return {
        area: area,
        name: name,
      };
    },

    SubSectionRoute(string) {
      var id = string.replace("/newdynamic/sub-section", "").split("/")[1];
      var type = string.split("=")[1];

      return {
        area: this.$route.params.area,
        name: this.$route.params.name,
        id: id,
        type: type,
      };
    },
  },
  mounted() {
    var area = this.$route.params.area;
    var name = this.$route.params.name;

    this.area([area, name])
      .then((res) => {
        this.response = res.data;
        this.loaded = true;

        this.sections = res.data.sections;
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

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
.py-8 {
  padding-top: 8rem !important;
}

.hide-welcome {
  font-size: 0em;
  transition: all 1s ease-in-out;
}

.show-welcome {
  font-size: 2.3em;
  transition: all 1s ease-in-out;
}

.song-more-btn {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-left: 15px;
  border: 3px solid #4a4a4a;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.song-more-btn > div > p {
  margin-bottom: 0;
  color: #9b9b9b;
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

/* #screen {
      margin-top: 106px;
  } */

.text-small {
  font-size: 1em;
}

.header-welcome {
  font-size: 2.3em;
}

.vertical-scrollable > .row {
  position: absolute;
  top: 120px;
  bottom: 100px;
  left: 180px;
  width: 50%;
  overflow-y: scroll;
}

.nav-open {
  /* background-color: #E76D66 !important; */
  height: 215px;
  transition: all 1s ease-in-out;
}

.nav-collapse {
  /* background-color: #01AFDC !important; */
  height: 100px;
  transition: all 1s ease-in-out;
}

.buttons-normal {
  /* transform: translateY(-30%); */
  transition: all 1s ease-in-out;
}

.buttons-reduce {
  transform: translateY(-140%);
  transition: all 1s ease-in-out;
}

.logo-normal {
  /* transform: translateY(-30%); */
  transition: all 1s ease-in-out;
}

.logo-reduce {
  transform: translateY(-65%);
  transition: all 1s ease-in-out;
}

.wrapper {
  /*min-width: 150px;
    height: 250px;*/
  /* border: 1px solid #ddd; */
  display: flex;
  overflow-x: auto;
}

.wrapper .item {
  min-width: 150px;
  height: 250px;
  line-height: 50px;
  text-align: center;
}
</style>
