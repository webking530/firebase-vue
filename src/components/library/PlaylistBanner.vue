<template>
  <div>
    <b-container v-if="response" fluid>
      <!-- Image banner? -->
      <b-row
        v-if="response.banner_images.length > 0"
        :style="{
          backgroundImage: `url(${getImagePath(response.banner_images[0])})`,
        }"
        class="image-backdrop"
      >
        <!-- Desktop -->
        
          <b-col
            cols="2"
            md="1"
            class="text-left text-light pl-md-4 pt-4 pb-8 mx-auto"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <b-button variant="link" class="align-top p-0" @click="$router.go(-1)">
              <img
                src="../../assets/library-back.svg"
                class="align-top banner-nav-buttons"
                alt="Logo"
              />
            </b-button>
          </b-col>

          <b-col
            cols="8"
            md="10"
            class="text-center text-light pt-8 pb-8 mx-auto"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <h1
              v-if="response.name"
              class="mx-auto font-weight-light c-banner-title"
            >
              {{ response.name }}
            </h1>
            <h3
              v-if="response.created_by"
              class="mx-auto font-weight-light c-banner-sub-title mt-2 mt-md-4">{{response.created_by}}</h3>
          </b-col>

          <b-col
            cols="2"
            md="1"
            class="text-right text-light pr-md-4 pt-4 pb-8 mx-auto"
            style="background-color: rgba(0, 0, 0, 0.3)"
          >
            <Options v-bind:playlist="response"></Options>
            
            <!--<b-button
              variant="link"
              class="align-bottom  mr-0 p-0 mr-md-4 c-library-filter-link"
              :to="{ name: 'Home' }"
            >
              <img
                src="../../assets/library-filter.svg"
                class="align-top c-library-filter"
                height="30"
                alt="Logo"
              />
            </b-button>-->

          </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Options from "../ancillary/playlist/actions.vue";

export default {
  name: "PlaylistBanner",
  props: ["response", "navbar"],
  components: {
    Options
  },
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

.c-banner-title {
  font-weight: 300;
  font-size: 60px;
  line-height: 36px;
}

.c-banner-sub-title {
  font-weight: 300;
  font-size: 28px;
  line-height: 36px;
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

@media (min-width: 1200px) {
  .c-library-filter,
  .c-library-menu,
  .c-back-btn {
    width: 45px;
    height: 45px;
  }

  .c-library-filter-link {
    position: absolute;
    bottom: 0;
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

@media (max-width: 414px) {
  .pb-8,
  .py-8 {
    padding-bottom: 4rem !important;
  }

  .pt-8,
  .py-8 {
    padding-top: 4rem !important;
  }
  .c-banner-title {
    font-size: 2.8em;
    margin-top: 40px;
  }
  .c-banner-sub-title {
    font-size: 1.2em;
  }
}
@media (max-width: 375px) {
  .pb-8,
  .py-8 {
    padding-bottom: 4rem !important;
  }

  .pt-8,
  .py-8 {
    padding-top: 4rem !important;
  }

  .c-banner-title {
    font-size: 2.3em;
  }
  .c-banner-sub-title {
    font-size: 1em;
  }
}

@media (max-width: 320px) {
  .pb-8,
  .py-8 {
    padding-bottom: 3rem !important;
  }

  .pt-8,
  .py-8 {
    padding-top: 3rem !important;
  }

  .c-banner-title {
    font-size: 1.8em;
  }
  .c-banner-sub-title {
    font-size: 1em;
  }

}
</style>
