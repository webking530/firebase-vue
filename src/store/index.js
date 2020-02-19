import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// import the auto exporter
import modules from "./modules";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    userid: null,
    username: null,
    user: null,
    location: null,
    user_image: null,
    chipin_user: false,
    supporter: false,
    signup_source: null,
    user_type: null,
    login_type: null,
    chipin_plus: false,
  },
  getters: {
    isAuthenticated(state) {
      console.log(state.accessToken);
      return state.accessToken != null;
    },
    my_user_id(state) {
      return state.userid;
    },
    username(state) {
      return state.username;
    },
    location(state) {
      return state.location;
    },
    user_image(state) {
      return state.user_image;
    },
    get_user_image(state) {
      return state.user_image;
    },
    isChipInUser(state) {
      return state.chipin_user;
    },
    isSupporter(state) {
      return state.supporter;
    },
    showBilling(state) {
      if (state.signup_source === "web" && state.supporter) {
        return true;
      } else {
        return false;
      }
    },
    isWebUser(state) {
      if (state.signup_source === "web") {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    logout({ commit }) {
      commit("clearAuthData");
    },

    portal({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post("/billing/portal/")
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
  },
  mutations: {
    storeLocation(state, location) {
      state.location = location;
    },
    storeUserType(state, user_type) {
      state.user_type = user_type;
    },
    storeProfileImage(state, image) {
      state.user_image = image;
    },
    storeAuthData(state, data) {
      state.accessToken = data.access;
      state.refreshToken = data.refresh;
      state.username = data.user.username;
      state.location = data.profile.location;
      state.user_image = data.profile.photo;
      state.supporter = data.profile.supporter;
      state.userid = data.profile.user_id;
      state.chipin_user = data.profile.chipin_enabled;
      if (data.profile.chipin_account_type === 'chipin_plus') {
        state.chipin_plus = true
      } else {
        state.chipin_plus = false
      }
      state.signup_source = data.profile.signup_source;
      state.login_type = data.profile.login_type;
      localStorage.setItem("accessToken", data.access);
    },
    clearAuthData(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.username = null;
      state.location = null;
      state.user_image = null;
      localStorage.clear();
    },
  },
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [], // set logger only for development
});
