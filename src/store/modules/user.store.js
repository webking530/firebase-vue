import axios from "axios";
import silentAxios from "../../api/silent"

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  like_user({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/users/" + id + "/like/")
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

  unlike_user({ commit }, id) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .delete("/users/" + id + "/unlike/")
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
        .post("/users/" + id + "/comments/")
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
        .post("/users/comment/", data)
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
        .put("/users/" + id + "/comment/", data)
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
        .delete("/users/" + id + "/comment/", data)
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
