<template>
  <div v-if="this.$route.name !== 'LibraryArea' && display_header">
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="dark"
      class="fixed-top"
      v-bind:class="nav_class"
    >
      <b-container
        fluid
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="nav-container"
      >
        <b-col class="text-center">
          <b-navbar-brand>
            <img
              v-if="this.$route.name !== 'LibraryArea'"
              src="../assets/trackd-icon-white.svg"
              :class="{
                'logo-normal': !isAuthenticated() && navbar.open,
                'logo-reduce-unath': !isAuthenticated() && navbar.collapse,
              }"
              alt="Logo"
              height="25"
            />
            <h5
              v-show="isAuthenticated()"
              class="font-weight-lighter mt-3"
              :class="{
                'show-welcome': navbar.open,
                'hide-welcome': navbar.collapse && this.$route.name === 'Home',
              }"
            >
              Welcome, {{ username }}
            </h5>
          </b-navbar-brand>

          <!-- Header buttons for Library page -->
          <b-row v-if="$route.name == 'LibraryArea'">
            <!-- Left Menu icon for Library Page -->
            <b-col
              v-if="$route.name == 'LibraryArea'"
              cols="5"
              class="text-left ml-0 pl-0 pb-0"
            >
              <b-button
                v-if="$route.name == 'LibraryArea'"
                variant="link"
                class="inline-block"
                :to="{ name: 'Home' }"
              >
                <img
                  src="../assets/menu-icon.svg"
                  class="float-left"
                  height="20"
                  alt="Logo"
                />
              </b-button>
            </b-col>
          </b-row>

          <!-- Header buttons for Home page -->
          <b-row
            v-if="$route.name == 'Home'"
            :class="{
              'buttons-normal-unauth': !isAuthenticated() && navbar.open,
              'buttons-normal': navbar.open,
              'buttons-reduce-unauth': !isAuthenticated() && navbar.collapse,
              'buttons-reduce': navbar.collapse && this.$route.name === 'Home',
            }"
          >
            <!-- Hamburger menu for Home page -->
            <b-col v-if="$route.name == 'Home'" cols="5" class="text-left pl-0">
              <b-button
                v-if="$route.name == 'Home'"
                variant="link"
                class="inline-block"
                :to="{
                  name: 'LibraryArea',
                  params: { area: 'discover', name: 'Library' },
                }"
              >
                <img
                  src="../assets/menu-icon.svg"
                  class="align-top float-right"
                  height="20"
                  alt="Logo"
                />
              </b-button>
            </b-col>

            <!-- Required for correct spacing -->
            <b-col cols="2" class="text-center"></b-col>

            <!-- Home page navbar buttons -->
            <b-col cols="5" class="text-right pr-0">
              <b-button
                v-if="$route.name == 'Home' && isAuthenticated()"
                v-b-modal.filter-modal
                variant="link"
              >
                <img src="../assets/filter-icon.svg" height="20" alt="Filter" />
              </b-button>

              <b-button
                v-if="$route.name == 'Home'"
                v-b-toggle.menu-sidebar
                variant="link"
              >
                <img
                  src="../assets/hamburger-icon.svg"
                  class="align-top"
                  height="20"
                  alt="Menu"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MobileHeader",
  data() {
    return {
      hover: false,
      navbar: {
        open: true,
        collapse: false,
      },
      scrollState: 0,
    };
  },
  props: ["username"],
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  computed: {
    hasHistory() {
      return window.history.length > 2;
    },
    nav_class() {
      console.log("Route: " + this.$route.name);

      if (this.$route.name === "LibraryArea") {
        return "nav-library";
      } else if (this.$route.name === "Home" && this.navbar.collapse) {
        return "nav-collapse";
      } else {
        return "nav-open";
      }
    },
    dark_nav() {
      return false;
    },
    display_signup: function () {
      if (this.$route.name) {
        if (this.$route.name.includes("Onboarding")) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    display_trident: function () {
      if (this.$route.name) {
        if (this.$route.name === "TridentRecord") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    display_header: function () {
      var route = this.$route.name;

      if (route === "Home" || route === "LibraryArea") {
        return true;
      } else {
        return false;
      }
    },
  },
  isLibraryRoute: function () {
    return this.$route.name === "LibraryArea";
  },
  methods: {
    ...mapGetters(["isAuthenticated"]),

    redirectToAltHome() {
      console.log("Redirect to alt home");
      if (this.$route.name === "Home") {
        this.$router.replace({
          name: "LibraryArea",
          params: { area: "discover", name: "Library" },
        });
      } else {
        this.$router.replace({ name: "Home" });
      }
    },
    onScroll() {
      // Get the current scroll position
      const currentScroll = window.scrollY;
      var vm = this;

      if (currentScroll > this.scrollState) {
        vm.navbar.collapse = true;
        vm.navbar.open = false;
      } else {
        if (currentScroll <= 100) {
          vm.navbar.collapse = false;
          vm.navbar.open = true;
        }
      }
      this.scrollState = window.scrollY;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  /* background-color: red; */
  height: 120px;
  transition: all 1s ease-in-out;
}

.nav-container:hover {
  /* background-color: blue; */
  opacity: 5;
  height: 120px;
  transition: all 1s ease-in-out;
}

.fade-in {
  transition: all 1s ease-in-out;
}

.hide-welcome {
  font-size: 0em;
  transition: all 1s ease-in-out;
}

.show-welcome {
  transition: all 1s ease-in-out;
}

.nav-open {
  background-color: #000000 !important;
  height: 130px;
  transition: all 1s ease-in-out;
}

.nav-collapse {
  background-color: #000000 !important;
  height: 65px;
  transition: all 1s ease-in-out;
}

.buttons-normal {
  transform: translateY(-30%);
  transition: all 1s ease-in-out;
}

.buttons-reduce {
  transform: translateY(-150%);
  transition: all 1s ease-in-out;
}

.buttons-normal-unauth {
  transform: translateY(40%);
  transition: all 1s ease-in-out;
}

.buttons-reduce-unauth {
  transform: translateY(-120%);
  transition: all 1s ease-in-out;
}

.logo-normal {
  transform: translateY(0%);
  transition: all 1s ease-in-out;
}

.logo-reduce-unath {
  transform: translateY(-50%);
  transition: all 1s ease-in-out;
}

.nav-library {
  height: 130px;
  background-color: plum;
  transition: all 1s ease-in-out;
}
</style>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

$blue: rgb(62, 142, 222) !default;
$bluebg: "trackd-blue-bg";

$bg-img: getImagePath();

.test-class {
  background-color: $blue;
}
</style>
