<template>
  <div>
    <b-col cols="12" class="text-center text-light text-left mb-3">
      <b-row>
        <b-col cols="4" md="2" class="2">
          <b-img
            :src="
              getImagePath(artist.image, {
                func: 'crop',
                width: 150,
                height: 150,
              })
            "
            rounded="circle"
            blank-color="red"
            class="img-fluid photo-border mx-auto text-center"
            width="250"
            height="250"
            style="height: 150px; width: 150px"
            alt="placeholder"
          ></b-img>
          <b-badge
            v-if="artist.supporter"
            pill
            variant="danger-outline"
            class="
              px-3 px-md-4
              py-1
              text-uppercase text-danger
              font-weight-bold
              border border-solid border-danger
              mr-1
              text-small
              border-danger-2
            "
            >Supporter</b-badge
          >
        </b-col>

        <b-col cols="7" class="text-left pl-0">
          <p class="text-light mt-0 pb-0 mb-2 artist-name">
            <router-link
              v-if="isAuthenticated"
              class="text-light font-weight-normal"
              
              :to="{ name: 'Artist', params: { id: artist.id } }"
              >{{ artist.name }}</router-link
            >
            <a
              v-else
              class="text-light"
              style="cursor: pointer"
              @click="$bvModal.show('login-modal')"
              >{{ artist.name }}</a
            >
          </p>
          <p class="text-light mt-0 pb-0 mb-2 strap-line">
            {{ artist.strap_line }}
          </p>
          <p class="text-light mt-0 pb-0 mb-2 font-weight-light">
            <img
              src="../../../assets/location-icon.svg"
              class="align-top mr-2"
              height="20"
              alt="Logo"
            />
            {{ artist.location }}
          </p>
        </b-col>

        <b-col cols="2">
          <p
            class="float-right mt-2 pt-3 pb-0 mb-0 mr-3 font-weight-light"
            style="font-size: 24px;"
          >
            {{ artist.likes }}
          </p>
        </b-col>

        <b-col cols="1" class="text-right mt-4 pl-0 pr-0">
          <!-- Buttons -->

          <b-row class="text-right ml-1">

            <!-- <b-button variant="link" class="pb-0 pr-0 ">
              <img
                src="../../../assets/heart.svg"
                class="align-top ml-4 mr-1 pb-0"
                height="25"
                alt="Logo"
              />
            </b-button> -->

            <b-button v-if="this.liked" variant="link">
              <img
                src="../../../assets/heart-filled.svg"
                
                class="align-top"
                height="25"
                alt="Menu"
              />
            </b-button>

            <b-button v-if="!this.liked" variant="link">
              <img
                src="../../../assets/heart.svg"
                
                class="align-top"
                height="25"
                alt="Menu"
              />
            </b-button>

            <font-awesome-icon
              size="2x"
              icon="ellipsis-h"
              class="text-light ml-4 pt-1"
            />

          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ArtistListAsset",
  props: ["artist"],
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style>

.artist-name {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-weight: 300;
}

.strap-line{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  font-weight: 200;
}

</style>
