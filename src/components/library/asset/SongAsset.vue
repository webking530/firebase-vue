<template>
  <div class="text-center library-asset">
    <player
      v-bind:image="asset.image"
      v-bind:file="asset.file"
      v-bind:id="asset.id"
      v-bind:title="asset.name"
      v-bind:username="asset.username"
      v-bind:queue="queue"
    ></player>
    <b-button
      v-if="asset.retrak"
      pill
      size="lg"
      variant="warning"
      class="text-uppercase text-light py-0 retrak"
      >Re-Track</b-button
    >
    <div :class="{ 'retrak-margin': asset.retrak }">
      <img
        src="../../../assets/trackd-icon.svg"
        class="align-top mt-3 mb-2 up-arrow"
        alt="Logo"
      />
    </div>

    <p
      class="text-light pb-0 mb-0 font-weight-light"
      style="position: relative; top: -8px"
    >
      <router-link
        v-if="isAuthenticated"
        class="text-light asset-name"
        v-html="elipsis(asset.name, 14)"
        :to="{
          name: 'SongProfile',
          params: { username: asset.username, id: asset.artist_id },
        }"
      ></router-link>
      <a
        v-else
        class="text-light asset-name"
        v-html="elipsis(asset.name, 14)"
        @click="$bvModal.show('login-modal')"
        style="cursor: pointer"
      ></a>
    </p>
    <p class="text-light pb-0 mb-0 font-weight-light">
      <router-link
        v-if="isAuthenticated"
        class="text-muted asset-user"
        :to="{ name: 'Artist', params: { id: asset.artist_id } }"
        v-html="elipsis(asset.username, 14)"
      ></router-link>
      <a
        v-else
        class="text-muted asset-user"
        @click="$bvModal.show('login-modal')"
        style="cursor: pointer"
        v-html="elipsis(asset.username, 14)"
      ></a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import player from "../../player.vue";

export default {
  name: "SongAsset",
  props: ["asset", "queue"],
  components: {
    player,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapGetters("Player", ["getLoadedSongData"]),
    truncate_name(name, length) {
      if (name.length > length) {
        name = name.substring(0, length - 3 + "...");
      }
      return name;
    },
  },
};
</script>

<style scoped>
.asset-name {
  font-size: 13px;
  line-height: 24px;
  font-weight: 400;
}

.asset-user {
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  top: -18px;
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
}

.retrak-margin {
  margin-top: -24px;
}

.retrak {
  position: relative;
  background-color: #f5a623;
  font-size: 6px;
  line-height: 10px;
  font-weight: 500;
  top: -20px;
  width: 65px;
  height: 12px;
}

.song {
  font-size: 12px;
}

.up-arrow {
  width: 7px;
  height: 7px;
}

@media (min-width: 768px) {
  .retrak {
    position: relative;
    background-color: #f5a623;
    font-size: 8px;
    line-height: 14px;
    font-weight: 500;
    top: -20px;
    width: 72px;
    height: 14px;
  }

  .up-arrow {
    width: 15px;
    height: 15px;
  }

  .asset-name,
  .asset-user {
    font-size: 18px;
    line-height: 24px;
    top: -10px;
  }
}

@media (min-width: 1200px) {
  .retrak {
    position: relative;
    background-color: #f5a623;
    font-size: 15px;
    font-weight: 500;
    top: -24px;
    width: 120px;
    height: 22px;
  }

  .up-arrow {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 520px) {
  .library-asset {
    width: 90px;
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
