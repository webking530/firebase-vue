import axios from "axios";

// State object
const state = {};

// Getter functions
const getters = {};

// Actions
const actions = {
  account({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/details/")
        .then(
          (res) => {
            commit;
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
  payments({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/payments/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  transactions({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/transactions/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  subscriptions({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/subscriptions/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  payouts({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/payouts/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  cards({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/cards/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  add_card({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/cards/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  post_cards({ commit }, stripe_token) {
    return new Promise((resolve, reject) => {
      let data = {
        stripe_token: stripe_token,
      };

      axios
        .post("/chipin/account/cards/", data)
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  bankaccounts({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/bank-accounts/")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  add_bankaccount({ commit }, stripe_token) {
    let data = {
      stripe_token: stripe_token,
    };

    return new Promise((resolve, reject) => {
      axios
        .post("/chipin/account/bank-accounts/", data)
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
  get_bankaccount({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/chipin/account/bank-accounts/?type=form")
        .then(
          (res) => {
            //console.log(res.data)
            commit;
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
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
