<template>
  <div class="home-container">
    <b-container fluid style="position: relative">
      <img
        src="../assets/app-store-dark.svg"
        width="100"
        height="33.43"
        class="app-store"
      />
    </b-container>
    <b-container style="height: 100%; position: relative">
      <b-row>
        <b-col cols="12" class="home-top">
          <h5 class="text-light">THE SOCIAL MUSIC PLATFORM</h5>
        </b-col>
      </b-row>
      <b-row class="home-content">
        <b-col cols="12">
          <b-row>
            <b-col
              cols="10"
              offset="1"
              sm="10"
              offset-sm="1"
              md="8"
              offset-md="2"
              class="home-body"
            >
              <h1 class="text-light">Get your Freak On!</h1>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col
              cols="10"
              offset="1"
              sm="10"
              offset-sm="1"
              md="6"
              offset-md="3"
              class="home-body"
            >
              <h3 class="text-light">
                There’s a better way to Upload,<br />Monetize and share your
                precious art<br />other than streaming.
              </h3>
              <p class="text-light mt-3">
              <router-link class="d-block text-light" :to="{name: 'ChipIn'}">Find out more</router-link>
              <p class="text-light mb-0 pb-0">or</p>
              <b-btn
                v-if="isAuthenticated()"
                :to="{ name: 'Upload' }"
                class="upload-btn text-light mt-1"
                >Upload Now</b-btn
              >
              <b-btn
                v-else
                v-b-modal.signup-modal
                class="upload-btn text-light mt-3"
                >Upload Now</b-btn
              >
              <p class="home-footer text-light mt-3">
                Made for Artists, by Artists.
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ForArtists",
  components: {},
  data() {
    return {
      sections: [],
      showByIndex: null,
      showByBlockIndex: null,
      rowNeighbours: [],
      // The expanded section
      expanded: null,
    };
  },
  methods: {
    ...mapActions("Library", ["home", "home_filter"]),
    ...mapGetters(["isAuthenticated"]),
    ...mapMutations("Library", ["setSections"]),
    clickedSection(section) {
      if (!this.isMobile()) {
        this.showByBlockIndex = section.id;
        this.expanded = section.id;
        // Clear rowNeighbours array
        this.rowNeighbours.length = 0;
        // Determine the index of the section and the row it's in (4 sections per row)
        let clickedIndex = this.sections.indexOf(section);
        let rowNumber = Math.floor(clickedIndex / 4);
        // Determine which other sections are in the row
        let rowLower = rowNumber * 4;
        let rowUpper = rowLower + 3;
        // Find the row neighbours of the selected section
        for (var i = rowLower; i <= rowUpper; i++) {
          // Don't add the selected section as a neighbour
          if (i !== this.sections.indexOf(section)) {
            this.rowNeighbours.push(this.sections[i]);
          }
        }
      }
    },
    closeSection() {
      this.showByBlockIndex = null;
      this.expanded = null;
      this.rowNeighbours.length = 0;
    },
  },
  mounted() {
    this.home()
      .then((res) => {
        this.sections = res.data.sections;
        this.setSections(res.data.sections);
        //console.log(res)
      })
      .catch((error) => {
        error;
        this.$router.replace("/error");
        //console.log(error);
      });
  },
  computed: {
    ...mapGetters("Library", {
      getSections: "getSections",
    }),
  },
  watch: {
    getSections() {
      //console.log("Home.getSections() Watcher called")
      this.sections = this.getSections;
    },
  },
};
</script>
<style scoped>
.home-container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/images/trackd_background.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.app-store {
  position: absolute;
  top: 20px;
  right: 50px;
}

.home-top {
  justify-content: center;
  margin-top: 40px;
}

.home-top > h5 {
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
}

.home-content {
  position: absolute;
  bottom: 10%;
  width: 100%;
}

.home-body {
  justify-content: center;
  text-align: center;
}

.home-body > h1 {
  font-weight: 200;
  font-size: 80px;
  line-height: 90px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > h3 {
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > p {
  font-weight: 900;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > span {
  font-weight: 900;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  display: block;
}

.upload-btn {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  width: 144px;
  height: 37px;
}

.home-footer {
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  text-decoration-line: none !important;
}

@media (max-width: 575.98px) {
  .app-store {
    display: none;
  }
  .home-top {
    margin-top: 25px;
  }
  .home-body > h1 {
    font-size: 60px;
    line-height: 70px;
  }
  .home-body > h3 {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
