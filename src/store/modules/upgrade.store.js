import axios from "axios";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  tiers({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/billing/subscriptions/")
        .then(
          (res) => {
            console.log(res.data);
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

  subscribe({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/billing/subscriptions/", data)
        .then(
          (res) => {
            console.log(res.data);
            commit;
            //commit('setMySongs', res.data)
            resolve(res.data);
          },
          (error) => {
            console.log(error);

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
