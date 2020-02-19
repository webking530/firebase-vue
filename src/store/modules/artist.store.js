import axios from "axios";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  artist({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/users/" + data + "/")
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
  artistweb({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/usersweb/" + data + "/")
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
