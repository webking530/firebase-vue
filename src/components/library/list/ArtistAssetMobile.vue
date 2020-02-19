<template>
  <div>
    <b-row class="ml-1">
      <!-- Artist Image -->
      <b-col cols="3" class="text-center pl-0 pr-0">
        <b-avatar
          :src="
            getImagePath(artist.image, {
              func: 'crop',
              width: 100,
              height: 100,
            })
          "
          rounded="circle"
          blank-color="red"
          class="img-fluid photo-border mx-auto text-center"
          style="width: 80px; height: 80px"
          alt="placeholder"
        ></b-avatar>
      </b-col>

      <b-col cols="9" class="">
        <b-row class="">
          <!-- Artist Info -->
          <b-col cols="9">
            <p class="text-dark mt-0 pb-0 mb-0 font-weight-light">
              <router-link
                class="text-dark font-weight-normal"
                :to="{ name: 'Artist', params: { id: artist.id } }"
                >{{ artist.name }}</router-link
              >
            </p>
            <p class="text-dark mt-0 pb-0 mb-2 font-weight-light">
              {{ artist.strap_line }}
            </p>
            <p
              class="text-dark mt-0 pb-0 mb-2 font-weight-light"
              style="font-size: 0.8em"
            >
              <img
                src="../../../assets/location-icon.svg"
                class="align-top mr-1"
                height="20  "
                alt="Logo"
              />
              {{ artist.location }}
            </p>
          </b-col>

          <!-- Buttons -->
          <b-col cols="3" class="float-right pl-0">
            <!-- Buttons -->
            <b-button variant="link" class="pb-0 pr-0" style="height: 20px">
              <img
                src="../../../assets/ellipses-mobile.svg"
                class="align-top ml-4 mr-1 pb-0"
                height="7"
                alt="Logo"
              />
            </b-button>

            <b-button
              variant="outline-secondary"
              size="sm"
              class="follow-button mr-1 pt-0"
              >Follow</b-button
            >
          </b-col>
        </b-row>

        <!-- Tags -->
        <b-row class="">
          <!-- Tags -->
          <span
            v-for="tag in artist.tags"
            :key="tag.id"
            class="text-dark mt-0 pb-0 mb-2 font-weight-light"
          >
            <img
              src="../../../assets/hash-tag.svg"
              class=""
              style="margin-left: 10px"
              height="15 "
              alt="Logo"
            />
            {{ tag }}
          </span>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ArtistListAssetMobile",
  props: ["artist"],
  mounted() {
    console.log(this.artist);
    this.artist.tags.push("Test");
  },
};
</script>

<style>
.artist-name {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  font-weight: 400;
}

.follow-button {
  width: 62px;
  height: 19px;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
}
</style>
