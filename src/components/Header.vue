<template>
  <div>
    <b-navbar
      v-if="display_header"
      toggleable="lg"
      fixed="top"
      type="dark"
      variant="dark"
      class="fixed-top"
      v-bind:class="nav_class"
    >
      <b-container
        fluid
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="nav-container"
      >
        <b-col cols="2" class="float-left">
          <b-button
            v-if="$route.name == 'Home' && isAuthenticated()"
            variant="link"
            class="inline-block"
            :to="{
              name: 'LibraryArea',
              params: { area: 'discover', name: 'Library' },
            }"
          >
            <img
              src="../assets/menu-dots-icon.svg"
              class="align-top float-right"
              height="30"
              alt="Logo"
            />
          </b-button>

          <b-button
            v-if="$route.name != 'Home' && isAuthenticated()"
            variant="link"
            class="inline-block"
            :to="{ name: 'Home' }"
          >
            <img
              src="../assets/menu-dots-icon.svg"
              class="align-top"
              height="30"
              alt="Logo"
            />
          </b-button>
        </b-col>

        <b-col v-if="isAuthenticated()" cols="2">
          <b-button
            v-if="$route.name == 'Home' && isAuthenticated()"
            variant="link"
            v-b-toggle.menu-sidebar
          >
            <img src="../assets/search-icon.svg" height="21" alt="Search" />
          </b-button>
        </b-col>

        <b-col v-if="!isAuthenticated()" class="text-center">
          <b-button
            v-if="hover"
            v-b-modal.login-modal
            content-class="bg-dark text-light"
            variant="link"
            class="text-light font-weight-light px-5 mx-auto"
            >Login</b-button
          >
        </b-col>

        <!-- Trackd Logo -->

        <b-col cols="4" class="text-center">
          <b-navbar-brand>
            <img
              v-if="display_trident"
              src="../assets/trident-logo.png"
              class="d-none d-sm-inline-block align-top"
              height="60"
              alt="Logo"
            />

            <b-button v-else-if="hover" variant="link" :to="{ name: 'Home' }">
              <img
                src="../assets/trackd-logo-text.svg"
                class="d-none d-sm-inline-block align-top"
                height="54"
                alt="Logo"
              />
            </b-button>

            <div v-else>
              <b-row>
                <b-col>
                  <img
                    src="../assets/trackd-icon-white.svg"
                    class="d-none d-sm-inline-block align-top"
                    height="26.5"
                    alt="Logo"
                  />
                </b-col>
              </b-row>
              <img
                src="../assets/nav-down.svg"
                class="d-none d-sm-inline-block align-top mt-3"
                height="5"
                alt="Nav Down Arrow"
              />
            </div>
          </b-navbar-brand>
        </b-col>

        <b-col cols="2" class="text-center">
          <b-button
            v-if="!isAuthenticated() && hover"
            v-b-modal.signup-modal
            content-class="bg-dark text-light"
            variant="outline-light"
            class="
              d-none d-md-inline-block
              font-weight-light
              mx-auto
              create-account-button
            "
            >Create Account</b-button
          >

          <b-button
            v-if="
              ($route.name == 'LibraryDiscover' && isAuthenticated()) ||
                ($route.name == 'Home' && isAuthenticated() && initialPlay)
            "
            v-b-modal.filter-modal
            variant="link"
          >
            <img src="../assets/filter-icon.svg" height="21" alt="Filter" />
          </b-button>
        </b-col>

        <b-col cols="2" class="text-right">
          <b-row>
            <b-col>
              <b-button
                v-if="isAuthenticated() && initialPlay"
                v-b-toggle.menu-sidebar
                variant="link"
                class="mt-0"
              >
                <img
                  src="../assets/hamburger-icon.svg"
                  class="align-top"
                  height="21"
                  alt="Menu"
                />
              </b-button>

              <b-button
                v-else-if="
                  ($route.name === 'LibraryArea' && isAuthenticated()) ||
                    ($route.name === 'Home' && isAuthenticated())
                "
                v-b-modal.filter-modal
                variant="link"
              >
                <img src="../assets/filter-icon.svg" height="21" alt="Filter" />
              </b-button>
            </b-col>

            <b-col v-if="!isAuthenticated()">
              <b-button v-b-toggle.menu-sidebar variant="link">
                <img
                  src="../assets/hamburger-icon.svg"
                  class="align-top"
                  height="21"
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
  name: "Header",
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    ...mapGetters("Player", {
      initialPlay: "isInitialPlay",
    }),

    hasHistory() {
      return window.history.length > 2;
    },
    nav_class() {
      /*if (this.$route.name === 'LibraryArea') {
        return 'trackd-red-bg'
      }*/
      return "bg-dark";
    },
    dark_nav() {
      return false;
      /*
      if (
        this.$route.name === 'Home' || this.$route.name === 'Legal' || this.$route.name === 'Upload' ||
        this.$route.name === 'EditSongProfile' || this.$route.name === 'EditProfile' || this.$route.name === 'Upload'
        ) {
          return false
      } else {
        return true
      }
      */
    },
    display_signup: function() {
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
    display_trident: function() {
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
    display_header: function() {
      var route = this.$route.name;

      // Settings
      if (
        this.$route.name === "AccountSettings" ||
        this.$route.name === "SetupChipIn" ||
        this.$route.name === "EditProfile" ||
        this.$route.name === "EditSongProfile" ||
        this.$route.name === "SignInSettings" ||
        this.$route.name === "EditAccountSettings" ||
        this.$route.name === "ChipInAccountType" ||
        this.$route.name === "ChipInPlusSettings" ||
        this.$route.name === "ChipInPlusSongSettings" ||
        this.$route.name === "ChangePassword" ||
        this.$route.name === "ChipInTransactions" ||
        this.$route.name === "ChipInSubscriptions" ||
        this.$route.name === "ChipInPayouts" ||
        this.$route.name === "ChipInAddCard" ||
        this.$route.name === "ChipInCards" ||
        this.$route.name === "ChipInAddBankAccount" ||
        this.$route.name === "ChipInBankAccounts" ||
        this.$route.name === "SongSettings" ||
        this.$route.name === "DonationsMade" ||
        this.$route.name === "SubscriptionsMade" ||
        this.$route.name === "Upload" ||
        this.$route.name === "Credits" ||
        this.$route.name === "Notifications" ||
        this.$route.name === "EmailSettings" ||
        this.$route.name === "PrivacySettings" ||
        this.$route.name === "ChipInAccount" ||
        this.$route.name === "EditSongProfileGenres" ||
        this.$route.name === "LibrarySectionList" ||
        this.$route.name === "EditUserProfileSkills" ||
        this.$route.name === "Playlist" ||
        this.$route.name === "Song"
      ) {
        return false;
      }

      // Hide if route is MyCollection unless visiting when unauthenticated
      var hideForMyCollection =
        route === "MyCollection" &&
        !(route === "MyCollection" && !this.isAuthenticated());
      var hideForLibrary =
        route === "LibrarySection" || route === "LibraryArea";

      if (route === "Landing") {
        return false;
      }
      if (hideForMyCollection || hideForLibrary) {
        return false;
      } else {
        return true;
      }
    },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  /* background-color: red; */
  height: 90px;
  transition: all 0.5s ease-in-out;
}

.nav-container:hover {
  /* background-color: blue; */
  opacity: 5;
  height: 120px;
  transition: all 0.5s ease-in-out;
}

.fade-in {
  transition: all 1s ease-in-out;
}

.create-account-button {
  width: 144px;
  height: 37px;
  font-size: 14px;
  border-radius: 10px;
}
</style>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

$blue: rgb(62, 142, 222) !default;
</style>
