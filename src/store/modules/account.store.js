import axios from "axios";
import silentAxios from "../../api/silent";

// State object
const state = {
  songs: [],
};

// Getter functions
const getters = {
  getMySongs(state) {
    return state.songs;
  },
};

// Actions
const actions = {
  songs({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/songs/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  delete_song({ commit }, song_id) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/songs/" + song_id + "/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  songs_pagination({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  getEditUserProfile({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/settings/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  EditUserProfile({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/users/settings/", data)
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  EditUserProfileFile({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/users/settings/", data, {
          headers: {
            "Content-Type": "multipart/form-data;",
          },
        })
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  getEditSongProfile({ commit }, song_id) {
    return new Promise((resolve, reject) => {
      silentAxios
        .get("/songs/" + song_id + " /profile/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  EditSongProfile(commit, [song_id, data]) {
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/songs/" + song_id + "/profile/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  EditSongProfileFile(commit, [song_id, data]) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/songs/" + song_id + "/profile/", data, {
          headers: {
            "Content-Type": "multipart/form-data;",
          },
        })
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  getLocationChoices({ commit }, data) {
    return new Promise((resolve, reject) => {
      let params = "";
      for (const [key, value] of Object.entries(data)) {
        if (!params) {
          params += "?";
        }
        params += key + "=" + value;
      }

      silentAxios
        .get("/countries/" + params)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  getEditAccountSettings({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/account-settings/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  EditAccountSettings({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/users/account-settings/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  accountsettings({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/account/")
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  updateaccountsettings({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/users/account/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  mysongssettings_pagination({ commit }, url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(
          (res) => {
            commit;
            resolve(res.data);
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
  mysongssettings_search({ commit }, search_criteria) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/users/songs/?search=" + search_criteria)
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
  mysongssettings({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/songs/")
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  chipinplus_search({ commit }, search_criteria) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/users/account-chipin-settings/?search=" + search_criteria)
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
  accountchipinsettings({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/account-chipin-settings/")
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  signinsettings({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/sign-in-settings/")
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  changepassword({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .put("/users/change-password/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
  getInstrumentTags({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users/instrument-tags/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
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
  setInstrumentTags({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/users/instrument-tags/", data)
        .then(
          (res) => {
            commit;
            // TODO : Set details in main store for user
            //commit('setMySongs', res.data)
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
const mutations = {
  setMySongs(state, data) {
    state.songs = data;
  },
  // TODO : Set details in main store for user
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
