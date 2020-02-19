import axios from "axios";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  chipin_interest({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/chipin/interest/", data)
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
  chipin_register({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/chipin/api/register-account/?platform=web", data)
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
