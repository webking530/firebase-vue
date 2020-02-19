<template>
  <div>
    <b-container class="d-flex justify-content-between text-white">
      <div class="d-flex">
        <player player_type = 'playlistasset' :image="playlist.images" v-bind:file="playlist.file" v-bind:id="playlist.id" v-bind:title="playlist.name"  v-bind:username="playlist.username" ></player>
        <div class="pl-4">
          <div class="text-light font-weight-light">
            <router-link
              class="text-light playlist_name"
              :to="{ name: 'Playlist', params: { id: playlist.id } }"
            >
              {{ playlist.name }}<span class="created_by d-none d-md-inline"> - Created By {{playlist.username}}</span>
            </router-link>
            <!-- <router-link class="text-light font-weight-lighter artist-name" :to="{'name': 'SongProfile', 'params': {'username': song.username, 'id': song.id}}">{{ song.username }}</router-link> -->
          </div>
          <div class="text-light song-count">
            {{ playlist.song_count }}
            {{ playlist.song_count > 1 ? "songs" : "song" }} <span class="d-md-none d-sm-inline"> | {{playlist.total_songs_time_formatted}}</span>
          </div>
          <div v-if="this.featured">
            <img src="../../../assets/trackd-icon.png" style="width:16px; height:16px"/>
          </div>
        </div>
      </div>

      <div class="d-flex">
        
        <span class="pl-2 btn playlist_time d-none d-md-block">
          {{playlist.total_songs_time_formatted }}
        </span>
        <span class="pl-2 btn playlist_time d-none d-md-block">
          {{playlist.likes}}
        </span>
        <span>
          <b-button variant="link">
            <img
              src="../../../assets/heart.svg"
              class="align-top"
              height="25"
              alt="Menu"
            />
          </b-button>
        </span>
        <span>
          <font-awesome-icon
            size="2x"
            icon="ellipsis-h"
            class="text-light ml-4 pt-1"
          />
        </span>
      </div>
    </b-container>
      
  </div>
</template>

<script>
export default {
  name: "PlaylistListAsset",
  props: ["playlist", "featured"],
};
</script>

<style scoped>
/* div.play_wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 75px;
}
div.quarter {
  position: absolute;
  width: 50%;
  height: 50%;
}
div.play {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 38px;
  top: 38px;
  z-index: 999;
}
div.quarter.left-top {
  left: 0;
  top: 0;
  border-top-left-radius: 75px;
}
div.quarter.right-top {
  left: 50%;
  top: 0;
  border-top-right-radius: 75px;
}
div.quarter.left-bottom {
  left: 0;
  top: 50%;
  border-bottom-left-radius: 75px;
}
div.quarter.right-bottom {
  left: 50%;
  top: 50%;
  border-bottom-right-radius: 75px;
} */
.playlist_name {
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
}
.created_by{
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
}

.song-count{
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
}


.playlist_time {
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: right;
  color: white;
}

@media (max-width: 575.98px) {
  .playlist_name {
    font-size: 16px;
    line-height: 21px;
  }

  .song-count {
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
