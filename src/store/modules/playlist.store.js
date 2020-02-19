import axios from "axios";
import silentAxios from "../../api/silent";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  get_playlist({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/playlists/" + id + "/")
        .then(
          (res) => {
            resolve(res);
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
  get_private_playlist({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/playlists/" + id + "/private/")
        .then(
          (res) => {
            resolve(res);
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
  update_playlist({ commit }, [id, data]) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .put("/playlists/" + id + "/", data)
        .then(
          (res) => {
            resolve(res);
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
  duplicate_playlist({ commit }, [id, data]) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/playlists/" + id + "/duplicate/", data)
        .then(
          (res) => {
            resolve(res);
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

  search_playlist({ commit }, [id, search]) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .get("/playlists/" + id + "/search/?search=" + search)
        .then(
          (res) => {
            resolve(res);
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

  remove_song_playlist({ commit }, [id, song]) {
    commit;
    id;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/playlists/trackdelete/", { 'playlist': id, 'song': song })
        .then(
          (res) => {
            resolve(res);
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

  like_playlist({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/playlists/like/", { playlist: id })
        .then(
          (res) => {
            resolve(res);
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

  unlike_playlist({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .delete("/playlists/" + id + "/unlike/")
        .then(
          (res) => {
            resolve(res);
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
};

// Mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
