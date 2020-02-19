import axios from "axios";

// State object
const state = {
};

// Getter functions
const getters = {
};

// Actions
const actions = {

  getnotifications({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/messages/settings/")
        .then(
          (res) => {
            commit;
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

  updatenotifications({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/messages/settings/", data)
        .then(
          (res) => {
            commit;
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

  getdonations({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/mytransactions/")
        .then(
          (res) => {
            commit;
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

  getsubscriptions({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/mysubscriptions/")
        .then(
          (res) => {
            commit;
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

  pagination({ commit }, link) {
    return new Promise((resolve, reject) => {
      axios
        .get(link)
        .then(
          (res) => {
            commit;
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
