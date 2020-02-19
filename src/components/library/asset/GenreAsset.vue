<template>
  <div class="d-flex flex-column justify-content-center text-center mb-3">
    <div class="card border-none bg-none">
      <router-link
        v-if="isAuthenticated"
        class="text-light w-100 h-100"
        :to="{
          name: 'LibrarySubSection',
          params: { id: asset.id, type: asset.type },
        }"
      >
        <img
          v-if="image"
          class="card-img other-image-mobile"
          :src="image"
          alt="song image"
        />
        <b-img
          v-else
          blank
          blank-color="#00AFDC"
          class="h-100 w-100 other-image-mobile"
          alt="placeholder"
        ></b-img>
      </router-link>
      <a
        v-else
        class="text-light w-100 h-100"
        @click="$bvModal.show('login-modal')"
        style="cursor: pointer"
      >
        <img
          v-if="image"
          class="card-img other-image-mobile"
          :src="image"
          alt="song image"
        />
        <b-img
          v-else
          blank
          blank-color="#00AFDC"
          class="h-100 w-100 other-image-mobile"
          alt="placeholder"
        ></b-img>
      </a>
    </div>

    <img
      src="../../../assets/trackd-icon.svg"
      class="align-top mx-auto my-2 up-arrow"
      alt="Logo"
    />
    <p
      class="text-light pb-0 mb-0 font-weight-light"
      style="position: relative; top: -8px"
    >
      <router-link
        v-if="isAuthenticated"
        class="text-light"
        :to="{
          name: 'LibrarySubSection',
          params: { id: asset.id, type: asset.type },
        }"
        >{{ asset.name }}</router-link
      >
      <a
        v-else
        class="text-light"
        @click="$bvModal.show('login-modal')"
        style="cursor: pointer"
        >{{ asset.name }}</a
      >
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GenreAsset",
  props: ["asset"],
  data: function () {
    return {
      image: null,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  mounted() {
    if (this.asset.image) {
      this.image = this.getImagePath(this.asset.image, {
        func: "crop",
        width: 130,
        height: 130,
      });
    }
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.up-arrow {
  width: 7px;
  height: 7px;
}

@media (min-width: 768px) {

  .up-arrow {
    width: 15px;
    height: 15px;
  }
}

@media (min-width: 1200px) {

  .up-arrow {
    width: 20px;
    height: 20px;
  }
}
</style>
