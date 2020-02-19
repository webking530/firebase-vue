<template>
  <div class="text-center library-asset">
    <player
      v-bind:image="asset.images"
      v-bind:file="asset.file"
      v-bind:id="asset.id"
      v-bind:title="asset.name"
      v-bind:username="asset.username"
      v-bind:queue="queue"
      player_type="playlistasset"
    ></player>
    <img
      src="../../../assets/trackd-icon.svg"
      class="align-top mt-3 mb-2 up-arrow"
      height="15"
      alt="Logo"
    />

    <!-- style="position: relative; top: -28px" -->
    <p class="text-light pb-0 mb-0 " :class="{ 'mt-4': isMobile() }">
      <router-link
        class="text-light asset-name"
        :class="{ 'text-dark': isMobile() }"
        :to="{
          name: 'Playlist',
          params: { id: asset.id },
        }"
        >{{ asset.name }}</router-link
      >
    </p>

    <!-- position: relative; top: -39px -->
    <p
      class="text-muted pb-0 mb-2 font-weight-light text-smaller"
      style=""
      :class="{ 'mt-1': isMobile() }"
    >
      <router-link
        class="text-muted asset-user"
        :to="{ name: 'Artist', params: { id: asset.artist_id } }"
        >{{ asset.username }}</router-link
      >
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import player from "../../player.vue";

export default {
  name: "PlaylistAsset",
  props: ["asset", "queue"],
  components: {
    player,
  },
  computed: {
    ...mapGetters("Player", ["getLoadedSongData"]),
  },

  mounted() {
    console.log(this.asset);
  },
};
</script>

<style scoped>
.asset-name,
.asset-user {
  font-size: 18px;
  line-height: 24px;
}

.asset-user {
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
