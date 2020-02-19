<template>
  <div>
    <b-dropdown
      v-if="playlist.user_id === my_user_id || !playlist.private"
      dropright
      menu-class="bg-dark trackd-dropdown-menu text-light px-2 pb-3 mt-5"
      no-caret
      variant="link"
      class="align-top p-0 pr-0"
    >
      <template #button-content>
        <img
          src="../../../assets/library-menu.svg"
          class="align-top banner-nav-buttons"
          alt="Logo"
        />
      </template>

      <b-dropdown-header id="dropdown-header-label" class="my-2 pb-4">
        <span
          class="text-light pt-2 mt-2 trackd-dropdown-menu-heading mt-4 pt-5"
          >Options
        </span>

        <img
          src="../../../assets/trackd-icon-colours.svg"
          class="float-right filter-trackd-icon"
          height="25"
          alt="Logo"
        />
      </b-dropdown-header>
      <b-dropdown-item-button
        v-if="playlist.user_id === my_user_id"
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('rename-playlist-modal')"
        v-b-modal.rename-playlist-modal
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../assets/ancillary/playlist.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Rename Playlist
      </b-dropdown-item-button>
      <b-dropdown-item-button
        v-if="playlist.user_id === my_user_id"
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('duplicate-playlist-modal')"
        v-b-modal.duplicate-playlist-modal
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../assets/ancillary/playlist.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Duplicate Playlist
      </b-dropdown-item-button>
      <!--<b-dropdown-item-button variant="link" button-class="py-2"  class="py-1" @click="$bvModal.show('report-playlist-modal')" v-b-modal.report-playlist-modal aria-describedby="dropdown-header-label">
                <img
                src="../../../assets/ancillary/report.svg"
                class="pr-2 move-up-icon"
                height="20"
                alt="Logo"
                /> Report Playlist
            </b-dropdown-item-button>-->
      <b-dropdown-item-button
        v-if="!playlist.private"
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('share-playlist-modal')"
        v-b-modal.share-playlist-modal
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../assets/ancillary/share.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Share
      </b-dropdown-item-button>
      <b-dropdown-item-button
        v-if="playlist.user_id === my_user_id && playlist.private"
        variant="link"
        button-class="py-2"
        class="py-1"
        @click="$bvModal.show('share-private-playlist-modal')"
        v-b-modal.share-private-playlist-modal
        aria-describedby="dropdown-header-label"
      >
        <img
          src="../../../assets/ancillary/share.svg"
          class="pr-2 move-up-icon"
          height="20"
          alt="Logo"
        />
        Share Private Link
      </b-dropdown-item-button>
    </b-dropdown>

    <DuplicatePlaylist v-bind:id="playlist.id"></DuplicatePlaylist>
    <RenamePlaylist v-bind:playlist="playlist"></RenamePlaylist>
    <SharePlaylist v-bind:playlist="playlist"></SharePlaylist>
    <SharePrivatePlaylist v-bind:playlist="playlist"></SharePrivatePlaylist>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import DuplicatePlaylist from "./duplicate.vue";
import RenamePlaylist from "./rename.vue";
import SharePlaylist from "./share.vue";
import SharePrivatePlaylist from "./shareprivate.vue";

export default {
  name: "ActionsDropdown",
  props: ["playlist"],
  components: {
    RenamePlaylist,
    DuplicatePlaylist,
    SharePlaylist,
    SharePrivatePlaylist,
  },
  computed: {
    ...mapGetters(["my_user_id"]),
  },
};
</script>

<style>
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
