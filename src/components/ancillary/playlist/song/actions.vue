<template>
  <div>
    <b-dropdown
      v-if="playlist.user_id === my_user_id || !playlist.private"
      dropright
      menu-class="bg-dark trackd-dropdown-menu text-light px-2 pb-3 mt-5"
      no-caret
      variant="link"
      class="align-top p-0 ml-3 pr-0 float-right p-0"
      toggle-class="p-0 song-dot-modal-btn"
      button-class="p-0"
    >
      <template #button-content class="p-0">
        <font-awesome-icon
          size="2x"
          icon="ellipsis-h"
          class="text-light p-0 pt-1 float-right mt-2"
        />
      </template>

      <b-dropdown-header id="dropdown-header-label" class="my-2 pb-4">
        <span
          class="text-light pt-2 mt-2 trackd-dropdown-menu-heading mt-4 pt-5"
          >Options
        </span>

        <img
          src="../../../../assets/trackd-icon-colours.svg"
          class="float-right filter-trackd-icon"
          height="25"
          alt="Logo"
        />
      </b-dropdown-header>

      <b-dropdown-item-button
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('share-song-modal-' + song.id)"
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../../assets/ancillary/share.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Share
      </b-dropdown-item-button>

      <b-dropdown-item-button
        v-if="playlist.user_id === my_user_id"
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('remove-song-modal-' + song.id)"
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../../assets/ancillary/share.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Remove Song
      </b-dropdown-item-button>
    </b-dropdown>

    <ShareSong v-bind:song="song"></ShareSong>
    <RemoveSong v-bind:song="song" v-bind:playlist="playlist"></RemoveSong>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ShareSong from "./share.vue";
import RemoveSong from "./remove.vue";

export default {
  name: "SongActionsDropdown",
  props: ["song", "playlist", "index"],
  components: {
    ShareSong,
    RemoveSong,
  },
  computed: {
    ...mapGetters(["my_user_id"]),
  },
  methods: {
    removeSong(index) {
      this.$parent.removeSong(index)
    }
  }
};
</script>

<style>
.song-dot-modal-btn {
  position: relative;
  top: 0px;
}

ul.dropdown-menu,
.trackd-dropdown-menu {
  border: 1px solid #fff !important;
  width: 289px !important;
  min-width: 289px !important;
  border-radius: 20px !important;
}

.dropdown-header {
  padding: none !important;
}

.filter-trackd-icon {
  position: relative;
  top: -5px;
}

.move-up-icon {
  position: relative;
  top: -2px;
}

button.dropdown-item {
  font-weight: 300;
  color: #fff;
  font-weight: 300;
}

.dropdown-item.filter-link {
  color: #fff;
  font-weight: 300;
}

.dropdown-item.active,
.dropdown-item:active,
.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  font-weight: 300;
  border-radius: 5px;
  background-color: #222222;
}

.trackd-dropdown-menu-heading {
  font-weight: 300;
  font-size: 24px;
  line-height: 21px;
  position: relative;
  bottom: -25px;
}
</style>
