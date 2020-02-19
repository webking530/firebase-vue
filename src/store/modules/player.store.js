import silentAxios from "../../api/silent";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// State object
const state = {
  
  // Song
  song: {
    id: null,
    title: null,
    username: null,
    file: null,
    image: null,
  },

  // Queue
  previous: [],
  songs: [],
  queue_unshuffled: null,
  shuffle: false,
  repeat: false,

  player_hide: false,
  playing: false,
  paused: false,
  player: null,
  initialPlay: true,
  current_playlist: null,
  /* 30 second countdown to play increment
   * When time reaches 0, play count is incremeneted and play_time set to -1 */
  play_time: null,
  // Countdown function
  player_timer: null,

};

// Getter functions
const getters = {
  getPlayingSong(state) {
    return state.song;
  },
  playerHidden(state) {
    return state.player_hide;
  },
  isPlaying(state) {
    return state.playing;
  },
  isPaused(state) {
    return state.paused;
  },
  loadedSong(state) {
    if (state.song.id) {
      return true;
    } else {
      return false;
    }
  },
  isSongLoaded(state) {
    if (state.song.id) {
      return true;
    } else {
      return false;
    }
  },
  getLoadedSong(state) {
    if (state.song.id) {
      return state.song.id;
    } else {
      return false;
    }
  },
  getLoadedSongData(state) {
    if (state.song.id) {
      return state.song;
    } else {
      return false;
    }
  },
  playedTime() {},
  duration() {},
  getSongQueue(state) {
    return state.songs;
  },
  getPreviousQueue(state) {
    return state.previous;
  },
  isInitialPlay(state) {
    return state.initialPlay;
  },
  getCurrentPlaylist(state) {
    return state.current_playlist;
  },
  getPlayTime(state) {
    return state.play_time;
  },
  getPlayerTimer(state) {
    return state.player_timer;
  },
  isShuffled(state) {
    return state.shuffle;
  },
  getRepeat(state) {
    return state.repeat;
  }
};

// Actions
const actions = {
  track_play({ commit }, song_id) {
    // fullplay - tracks / increments play count by 1

    var post_data = {
      song: song_id,
      type: "fullplay",
      timestamp: 30,
    };

    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/playbackhistory/", post_data)
        .then(
          (res) => {
            resolve(res);
            console.log("Play count incremented")
          },
          (error) => {
            if (error.response) {
              reject(error.response);
            } else if (error.request) {
              reject(error.request);
            } else {
              reject(error);
            }
          }
        )
        .catch((error) => {
          reject(error);
        });
    });
  },

  startTimer(context) {
    var interval = setInterval(() => {
      if (getters.getPlayTime(state) > 0) {
        context.commit("decrementTimer");
      } else {
        context.commit("setPlayTime", -1);
      }
    }, 1000);
    context.commit("setPlayerTimer", interval);
  },
  stopTimer(context) {
    context.commit("clearPlayerTimer");
  },
};

// Mutations
const mutations = {
  setSong(state, data) {
    if (data) {
      if (data.name) {
        state.song.title = data.name;
      }
      if (data.song_name) {
        state.song.title = data.song_name;
      }
      if (data.title) {
        state.song.title = data.title;
      }

      if (data.username) {
        state.song.username = data.username;
      }
      if (data.artist_name) {
        state.song.username = data.artist_name;
      }

      state.song.id = data.id;

      if (data.file) {
        state.song.file = data.file;
      }
      if (data.song_url) {
        state.song.file = data.song_url;
      }
      state.song.image = data.image;

      // state.songs.push(data)
      //state.player = player
      // state.playing = true
      state.player_hide = false;
      state.play_time = 30;
    } else {
      // reset the player
      state.playing = false;
      state.paused = false;
      state.song = {
        id: null,
        title: null,
        username: null,
        file: null,
        image: null,
      };
      state.current_playlist = null;
    }
  },
  hidePlayer(state) {
    state.player_hide = true;
  },
  addSong(state, data) {
    state.songs.push(data);
  },
  playSong(state) {
    state.playing = true;
    state.paused = false;
  },
  resetPlayer(state) {
    state.playing = false;
    state.paused = false;
    state.song = {
      id: null,
      title: null,
      username: null,
      file: null,
      image: null,
    };
    state.current_playlist = null;
  },
  pauseSong(state) {
    state.playing = false;
    state.paused = true;
  },
  clearQueue(state) {
    state.songs.splice(0);
  },
  nextSong(state) {
    if (state.songs.length <= 0) {
      state.playing = false;
      state.paused = false;
      state.song = {
        id: null,
        title: null,
        username: null,
        file: null,
        image: null,
      };
      state.songs.splice(0);
      state.previous.splice(0);
    } else {
      // Add currently playing song to previous queue
      let previous = Object.assign({}, state.song);
      state.previous.unshift(previous);

      // Pop from the front of the player queue and set next song
      let next = state.songs.shift();
      console.log(next);

      if (next.name) {
        state.song.title = next.name;
      }
      if (next.song_name) {
        state.song.title = next.song_name;
      }
      if (next.title) {
        state.song.title = next.title;
      }

      state.song.username = next.username;
      state.song.id = next.id;

      if (next.file) {
        state.song.file = next.file;
      }
      if (next.song_url) {
        state.song.file = next.song_url;
      }

      state.song.image = next.image;
    }
  },
  previousSong(state) {
    if (state.previous.length <= 0) {
      // Restart current song?
      state.playing = false;
      state.paused = false;
      state.song = {
        id: null,
        title: null,
        username: null,
        file: null,
        image: null,
      };
      state.songs.splice(0);
      state.previous.splice(0);
    } else {
      // Add current song to front of song queue
      let next = Object.assign({}, state.song);
      state.songs.unshift(next);

      // // Pop from front of previous queue
      let previous = state.previous.shift();

      if (previous.name) {
        state.song.title = previous.name;
      }
      if (previous.song_name) {
        state.song.title = previous.song_name;
      }
      if (previous.title) {
        state.song.title = previous.title;
      }

      state.song.username = previous.username;
      state.song.id = previous.id;

      if (previous.file) {
        state.song.file = previous.file;
      }
      if (previous.song_url) {
        state.song.file = previous.song_url;
      }
      state.song.image = previous.image;
    }
  },
  setInitialPlay(state, data) {
    state.initialPlay = data;
  },
  setCurrentPlaylist(state, data) {
    state.current_playlist = data;
  },
  setPlayTime(state, data) {
    state.play_time = data;
  },
  setPlayerTimer(state, data) {
    state.player_timer = data;
  },
  decrementTimer(state) {
    state.play_time--;
  },
  clearPlayerTimer(state) {
    clearInterval(state.player_timer);
  },
  toggleShuffle(state) {

    if (!state.shuffle) {
      state.queue_unshuffled = state.songs.slice(0)
      state.songs = ShuffleQueue(state.songs)
      state.shuffle = true
    }
    else {
      state.songs = state.queue_unshuffled
      state.queue_unshuffled = null
      state.shuffle = false
    }

  },
  toggleRepeat(state) {
    state.repeat = !state.repeat;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

const ShuffleQueue = (array) => {

  /* Fisher-Yates in place shuffle - O(n) */
  var n = array.length
  var index
  var temp
  // While remaining elements to shuffle
  while (n) {
    // Pick a random unshuffled element
    index = Math.floor(Math.random() * n--)

    // Swap with current element
    temp = array[n]
    array[n] = array[index]
    array[index] = temp
  }
  return array
}
