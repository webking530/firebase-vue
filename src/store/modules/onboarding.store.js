import axios from "axios";
import silentAxios from "../../api/silent";

// State object
const state = {
  email: null,
  username: null,
  password: null,
  genres: [],
  skills: [],
  user_type: "creator",
  gender: null,
  date_of_birth: null,
  country: "United Kingdom",
  campaign_code: null,
};

// Getter functions
const getters = {
  getUserType(state) {
    return state.user_type;
  },
  getCountry(state) {
    return state.country;
  },
  getEmail(state) {
    return state.email;
  },
  isCreator(state) {
    if (!state.user_type) {
      return false;
    }

    if (state.user_type === "creator") {
      return true;
    } else {
      return false;
    }
  },
  getCampaignCode() {
    return state.campaign_code;
  },
};

// Actions
const actions = {
  validate_email({ commit }, data) {
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/onboarding/email-verification/", data)
        .then(
          (res) => {
            commit("set_email", data);
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
  validate_username({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      silentAxios
        .post("/onboarding/validate-username/", data)
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
  validate_password({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/onboarding/validate-password/", data)
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
  set_username({ commit, rootState }, data) {
    commit;
    //console.log('rootState: ', rootState)
    return new Promise((resolve, reject) => {
      silentAxios
        .patch("/users/" + rootState.userid + "/", data)
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
  create_account({ commit }, data) {
    data["signup_source"] = "web";

    return new Promise((resolve, reject) => {
      axios
        .post("/onboardingnew/create-account/", data)
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
  update_account({ commit }, data) {
    data["device_id"] = "website";
    data["signup_source"] = "web";
    return new Promise((resolve, reject) => {
      axios
        .patch("/onboardingnew/details/", data)
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
  genres({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/onboarding/ml/", data)
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
  skills({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/onboarding/ml/skill/", data)
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
  location({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/onboarding/ml/location/", data)
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
  get_location({ commit }) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/onboarding/get-location/")
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

  date_of_birth({ commit }, data) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .post("/onboarding/ml/date-of-birth/", data)
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
const mutations = {
  set_user_type(state, user_type) {
    state.user_type = user_type;
  },
  set_email(state, data) {
    state.email = data.email;
  },
  set_campaign_code(state, data) {
    state.campaign_code = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
