<template>
  <div class="d-flex flex-column justify-content-center text-center">
    <div class="card border-none bg-none mb-0 pb-0">
      <router-link
        v-if="isAuthenticated"
        class="text-light w-100 h-100"
        :to="{ name: 'ArtistUsername', params: { id: asset.name } }"
      >
        <img
          v-if="asset.image"
          class="card-img other-image-mobile"
          :src="
            getImagePath(asset.image, { func: 'crop', width: 150, height: 150 })
          "
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
          v-if="asset.image"
          class="card-img other-image-mobile"
          :src="
            getImagePath(asset.image, { func: 'crop', width: 150, height: 150 })
          "
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
      class="align-top mx-auto mt-3 mb-2 up-arrow"
      alt="Logo"
    />
    <p class="text-light pb-0 mb-0" style="position: relative; top: -8px">
      <router-link
        v-if="isAuthenticated"
        class="text-light pb-0 mb-0 mt-0 pt-0 asset-user"
        :to="{ name: 'ArtistUsername', params: { id: asset.name } }"
        v-html="elipsis(asset.name)"
      ></router-link>
      <a
        v-else
        class="text-light pb-0 mb-0 mt-0 pt-0 asset-user"
        @click="$bvModal.show('login-modal')"
        style="cursor: pointer"
        v-html="elipsis(asset.name)"
      ></a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ArtistAsset",
  props: ["asset"],
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style scoped>
.asset-name {
  font-size: 18px;
  line-height: 24px;
}

.asset-user {
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
}

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

  .other-image-mobile {
    width: 150px;
    height: 150px;
    max-width: unset;
  }

  .asset-user {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
}

@media (min-width: 1200px) {
  .up-arrow {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 414px) {
  .up-arrow {
    width: 12px;
    height: 12px;
  }

  .asset-name,
  .asset-user {
    font-size: 14px;
    line-height: 16px;
  }
}
@media (max-width: 375px) {
  .up-arrow {
    width: 12px;
    height: 12px;
  }

  .asset-name,
  .asset-user {
    font-size: 14px;
    line-height: 16px;
  }
}

@media (max-width: 320px) {
  .up-arrow {
    width: 12px;
    height: 12px;
  }

  .asset-name,
  .asset-user {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
