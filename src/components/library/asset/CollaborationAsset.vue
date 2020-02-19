<template>
  <div class="text-center library-asset">
    <!-- <p>{{ asset.image }}</p> -->
    <!-- <p>{{ getImagePath(asset.image, {width: 150, height: 150}) }}</p> -->
    <player
      v-bind:image="getImagePath(asset.image)"
      v-bind:file="asset.file"
      v-bind:id="asset.id"
      v-bind:title="asset.name"
      v-bind:username="asset.username"
      v-bind:queue="queue"
    ></player>
    <!-- <player v-bind:image="asset.image" v-bind:file="asset.file" v-bind:id="asset.id" v-bind:title="asset.name"  v-bind:username="asset.username" v-bind:queue="queue" ></player> -->
    <img
      src="../../../assets/trackd-icon.svg"
      class="align-top mx-auto mt-3 mb-2 up-arrow"
      alt="Logo"
    />
    <p class="text-light pb-0 mb-0" style="position: relative; top: -8px">
      <router-link
        class="text-light asset-name"
        :to="{
          name: 'SongProfile',
          params: { username: asset.username, id: asset.artist_id },
        }"
        v-html="elipsis(asset.name, 14)"
      ></router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import player from "../../player.vue";

export default {
  name: "CollaborationAsset",
  props: ["asset", "queue"],
  components: {
    player,
  },
  computed: {
    ...mapGetters("Player", ["getLoadedSongData"]),
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
  font-weight: 300;
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
