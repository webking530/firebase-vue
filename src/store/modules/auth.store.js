import axios from "axios";

const state = {
  showLoginModal: false,
  home_overlay_displayed: null,
};

// Actions
const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/users/login/", data)
        .then(
          (res) => {
            commit("storeAuthData", res.data, { root: true });
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
  login_sso({ commit }, sso_data) {
    var data = {
      grant_type: "convert_token",
      client_id:
        process.env.VUE_APP_SSO_CLIENT_ID ||
        "G2iIvcLdHLQgsjl3T0QOKV02jDWcAydT9IdhrShk",
      client_secret:
        process.env.VUE_APP_SSO_CLIENT_SECRET ||
        "VfL5Febvyb2ZvfNK4Ikplxn2A8zv9h07RIXC9FMvNuA4MOc4k846v4HRSEcBYOznZTFOgqsLxtfQKrI2rzSNWZUiqc1Dkr3Gu4u4CHl9pBTV2P0LQDHQeFE2QxiP8VNk",
      backend: sso_data.backend,
      token: sso_data.token,
      device_id: "kjskjxnjksn",
    };

    return new Promise((resolve, reject) => {
      axios
        .post("/fb-auth/convert-token/?platform=web", data)
        .then(
          (res) => {
            commit("storeAuthData", res.data, { root: true });
            resolve(res);
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
          console.log(error);
          reject(error);
        });
    });
  },
  resetpassword({ commit }, data) {
    commit;
    console.log("rp data in: ", data);
    return new Promise((resolve, reject) => {
      axios
        .post("/users/reset-password/", data)
        .then(
          (res) => {
            resolve(res);
          },
          (error) => {
            console.log("rp data out ee: ", error.response);
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
  reauth({ commit }) {
    if (localStorage.getItem("accessToken")) {
      axios
        .get("/users/authenticate/")
        .then(
          (res) => {
            commit("storeAuthData", res.data, { root: true });
          },
          (error) => {
            error;
            commit("clearAuthData", { root: true });
          }
        )
        .catch((error) => {
          error;
          commit("clearAuthData", { root: true });
        });
    } else {
      return;
    }
  },
};

const mutations = {
  setShowLoginModal(state, data) {
    state.showLoginModal = data;
  },
  setShowHomeOverlay(state, data) {
    state.home_overlay_displayed = data;
  },
};

const getters = {
  login_modal_displayed(state) {
    return state.showLoginModal;
  },
  home_overlay_displayed(state) {
    return state.home_overlay_displayed;
  },
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
