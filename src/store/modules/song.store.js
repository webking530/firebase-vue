import axios from "axios";
import silentAxios from "../../api/silent";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  song({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/songs/" + data + "/")
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

  like_song({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/songs/like/", { song: id })
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

  unlike_song({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .delete("/songs/" + id + "/unlike/")
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

  get_comments({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/songs/" + id + "/comments/")
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

  add_comment({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/songs/comment/", data)
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

  edit_comment({ commit }, [id, data]) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .put("/songs/" + id + "/comment/", data)
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

  delete_comment({ commit }, [id, data]) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .delete("/songs/" + id + "/comment/", data)
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

  get_genres({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/songs/" + id + "/genres/")
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

  add_genre({ commit }, [id, data]) {
    console.log(data)
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/songs/" + id + "/profile/", data)
        .then(
          (res) => {
            resolve(res);
            console.log(res)
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
