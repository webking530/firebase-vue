<template>
  <div>
    <b-container v-if="response" fluid>
      <!-- Image banner? -->
      <b-row
        v-if="response.banner.image.length > 0"
        :style="{
          backgroundImage: `url(${getImagePath(response.banner.image[0])})`,
        }"
        class="image-backdrop"
      >
        <!-- Desktop -->
        <template v-if="!isMobile()">
          <b-col
            cols="10"
            class="text-center text-light c-container-banner-title mx-auto"
          >
            <h1
              v-if="response.banner.title"
              class="mx-auto font-weight-light c-banner-title"
            >
              {{ response.banner.title }}
            </h1>
          </b-col>
        </template>

        <!-- Mobile -->
        <template v-else>
          <b-col cols="2" class="col-2 pr-0 pl-0">
            <b-button
              variant="link"
              class="pl-0 pb-0 pr-0"
              @click="$router.go(-1)"
              style="height: 20px"
            >
              <img
                src="../../assets/back-icon-mobile.svg"
                class="align-top"
                height="30"
                alt="Logo"
              />
            </b-button>
          </b-col>

          <b-col cols="8" class="text-center text-light mobile-banner-padding">
            <b-row align-h="center">
              <h2
                v-if="response.banner.title"
                class="mx-auto font-weight-light mobile-header-title"
              >
                {{ response.banner.title }}
              </h2>
            </b-row>
          </b-col>

          <b-col cols="2">
            <b-row class="pt-7 mt-2 ml-2">
              <b-col cols="12" class="pl-0 pr-0" align-self="end">
                <!-- Menu and fliter buttons -->
                <b-button
                  variant="link"
                  class="pl-0 pb-0 pr-0"
                  style="height: 20px"
                >
                  <img
                    src="../../assets/filter-icon.svg"
                    class="align-top"
                    height="22"
                    alt="Logo"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </template>
      </b-row>

      <!--
            
            <b-row v-else-if="!isMobile() && isAuthenticated()" class="image-backdrop trackd-red-bg fixed-top" v-bind:class="nav_class" >
                
                <b-col cols="12" class="text-center text-light mt-2 pt-5 pb-0 mx-auto" >
                    <img src="../../assets/trackd-icon-white-lg.png" alt="Logo" height="60" :class="{'logo-normal': navbar.open, 'logo-reduce': navbar.collapse}">
                    <h1 v-if="!response.banner.title || this.$route.name === 'LibraryArea'" class="mx-auto mt-3 font-weight-lighter" :class="{'show-welcome': navbar.open, 'hide-welcome': navbar.collapse }">Welcome, {{ this.username() }}</h1>
                    <h1 v-else class="mx-auto mt-3 font-weight-lighter" :class="{'show-welcome': navbar.open, 'hide-welcome': navbar.collapse }">{{response.banner.title}}</h1>
                </b-col>

                <b-row>
                    <b-button variant="link" class="inline-block" :to="{'name': 'Home'}" :class="{'buttons-normal': navbar.open, 'buttons-reduce': navbar.collapse}">
                        <img src="../../assets/menu-icon.png" class="align-top" height="25" alt="Logo" style="margin-left: 2.5em;margin-bottom: 0.8em;">
                    </b-button>
                </b-row>

            </b-row>

            
            <b-row v-else-if="isMobile() && isAuthenticated() && this.$route.name === 'LibraryArea'" class="image-backdrop trackd-red-bg mb-5" style="height:150px;">
                <div class="w-100 overlay">
                <b-col cols="12" class="text-center text-light mt-2 pt-5 pb-0 mx-auto" >
                    <h3 v-if="response.banner.title" class="mx-auto font-weight-lighter">Welcome, {{ this.username() }}</h3>
                </b-col>

                <b-row>
                <b-button variant="link" class="inline-block" :to="{'name': 'Home'}" >
                    <img src="../../assets/menu-icon.png" class="align-top" height="25" alt="Logo" style="margin-left: 2.5em;margin-bottom: 0.8em;">
                </b-button>
                </b-row>
                </div>
            </b-row>

            -->

      <!-- No Banner Image - Random Colour Banner -->
      <b-row v-else class="image-backdrop" :class="random_colour">
        <!-- Desktop -->
        <template v-if="!isMobile()">
          <b-col
            cols="12"
            class="text-center text-light c-container-banner-title mx-auto"
          >
            <b-row v-if="response.banner.title == 'Discover Library'">
              <b-col cols="12"
                ><img
                  src="../../assets/trackd-icon-white.svg"
                  blank-color="#ccc"
                  class="c-banner-logo"
                  alt="placeholder"
              /></b-col>
            </b-row>
            <b-row>
              <b-col cols="12"
                ><h1
                  v-bind:class="{
                    'c-banner-title--with-logo':
                      response.banner.title == 'Discover Library',
                  }"
                  v-if="response.banner.title"
                  class="mx-auto font-weight-light c-banner-title"
                >
                  {{ response.banner.title }}
                </h1></b-col
              ></b-row
            >
          </b-col>
        </template>

        <!-- Mobile -->
        <template v-else>
          <b-col cols="2" class="col-2 pr-0 pl-0">
            <b-button
              variant="link"
              class="pl-0 pb-0 pr-0"
              @click="$router.go(-1)"
              style="height: 20px"
            >
              <img
                src="../../assets/back-icon-mobile.svg"
                class="align-top"
                height="30"
                alt="Logo"
              />
            </b-button>
          </b-col>

          <b-col cols="8" class="text-center text-light mobile-banner-padding">
            <b-row align-h="center">
              <h2
                v-if="response.banner.title"
                class="mx-auto font-weight-light mobile-header-title"
              >
                {{ response.banner.title }}
              </h2>
            </b-row>
          </b-col>

          <b-col cols="2">
            <b-row class="pt-7 mt-2 ml-2">
              <b-col cols="12" class="pl-0 pr-0" align-self="end">
                <!-- Menu and fliter buttons -->
                <b-button
                  variant="link"
                  class="pl-0 pb-0 pr-0"
                  style="height: 20px"
                >
                  <img
                    src="../../assets/filter-icon.svg"
                    class="align-top"
                    height="22"
                    alt="Logo"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Banner",
  props: ["response", "navbar"],
  methods: {
    ...mapGetters(["username", "isAuthenticated"]),
  },
  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
    nav_class() {
      if (this.$parent.navbar.collapse) {
        return "nav-collapse";
      } else {
        return "nav-open";
      }
    },
  },
};
</script>

<style scoped>
.image-backdrop > div {
  background-color: rgba(0, 0, 0, 0.3);
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner_title {
  font-size: 60px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
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
  font-size: 3.75em;
  transition: all 1s ease-in-out;
}

.text-small {
  font-size: 1em;
}

.header-welcome {
  font-size: 2.3em;
}

.margin-auth {
  margin-top: 240px;
}

.margin-unauth {
  margin-top: 100px;
}

.logo-normal {
  transform: translateY(0%);
  transition: all 1s ease-in-out;
}

.logo-reduce {
  transform: translateY(-20%);
  transition: all 1s ease-in-out;
}

.buttons-normal {
  transform: translateY(30%);
  transition: all 1s ease-in-out;
}

.buttons-reduce {
  transform: translateY(-80%);
  transition: all 1.1s ease-in-out;
}

.nav-open {
  background-color: #e76d66 !important;
  height: 312px;
  transition: all 1s ease-in-out;
}

.nav-collapse {
  background-color: #e76d66 !important;
  height: 150px;
  transition: all 1s ease-in-out;
}

.mobile-banner-padding {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.c-column-actions {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 312px;
}

.c-library-filter,
.c-library-menu,
.c-back-btn {
  width: 45px;
  height: 45px;
}

.c-library-filter-link {
  margin-bottom: 15px;
}

.c-banner-title {
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
}

.c-library-filter,
.c-library-menu,
.c-back-btn {
  display: none;
}

.c-column-actions,
.image-backdrop {
  height: 160px;
}

.c-container-banner-title {
  padding: 2.5rem 0;
}

.c-banner-title:not(.c-banner-title--with-logo) {
  padding-top: 1.5rem;
}

.c-banner-title--with-logo {
  padding-top: 1rem;
}

@media (min-width: 576px) {
  .c-banner-title {
    font-weight: 300;
    font-size: 40px;
    line-height: 36px;
  }

  .c-library-filter,
  .c-library-menu,
  .c-back-btn {
    display: block;
    width: 38px;
    height: 38px;
  }

  .c-column-actions,
  .image-backdrop {
    height: 250px;
  }

  .c-banner-logo {
    width: 65px;
    height: 52px;
    margin-top: 1rem;
  }

  .c-banner-title:not(.c-banner-title--with-logo) {
    padding: 3.8rem 0;
  }

  .c-banner-title--with-logo {
    padding: 1rem 0;
  }
}

@media (min-width: 768px) {
  .c-banner-title {
    font-size: 48px;
    font-weight: 300;
    line-height: 36px;
  }

  .c-banner-title:not(.c-banner-title--with-logo) {
    padding-top: 4rem;
  }

  .c-banner-title--with-logo {
    padding-top: 2rem;
  }

  .c-column-actions,
  .image-backdrop {
    height: 312px;
  }

  .c-container-banner-title {
    padding: 4rem 0;
  }

  .c-banner-logo {
    width: 90px;
    height: 68px;
  }

  .c-library-filter,
  .c-library-menu,
  .c-back-btn {
    width: 45px;
    height: 45px;
  }
}

@media (min-width: 992px) {
  .c-banner-title {
    font-size: 60px;
    font-weight: 300;
    line-height: 36px;
  }
}

@media (min-width: 1200px) {
  .c-library-filter-link {
    margin-bottom: 10px;
    left: 15px;
  }

  .c-column-actions {
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .c-banner-title {
    font-size: 60px;
    font-weight: 300;
    line-height: 36px;
  }
}
</style>
