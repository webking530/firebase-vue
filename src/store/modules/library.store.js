import axios from "axios";
const querystring = require("querystring");

// State object
const state = {
  sections: [],
  filter_applied: false,
  filtered_sections: [],
};

// Getter functions
const getters = {
  getSections(state) {
    return state.sections;
  },

  getFilteredSections(state) {
    return state.filtered_sections;
  },

  filter_applied(state) {
    return state.filter_applied;
  },
};

// Actions
const actions = {
  home({ commit }) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/discover/home/")
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

  home_filter({ commit }, filter) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/discover/home/?filter=" + filter)
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

  area({ commit }, [area, name]) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/newdynamic/?area=" + area + "&name=" + name)
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

  alternatehome({ commit }) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/newdynamic/?area=discover&name=Home")
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

  mycollection({ commit }) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/newdynamic/?area=discover&name=Library")
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

  tridentrecord({ commit }) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/tridentrecord/")
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
  search({ commit }, search_criteria) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/discover/search/?search=" + search_criteria)
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

  libraryarea({ commit }, [area, section]) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/dynamic/?area=" + area + "&name=" + section)
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

  librarysection({ commit }, section) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/dynamic/section/" + section + "/")
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

  librarysection_next({ commit }, section) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get(section)
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

  librarysubsection({ commit }, [section, type]) {
    commit;

    var url = "/newdynamic/sub-section/" + section + "/";

    if (type) {
      url += "?type=" + type;
    }

    return new Promise((resolve, reject) => {
      axios
        .get(url)
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
  librarysubsection_next({ commit }, section) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get(section)
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

  librarysubsectionlist({ commit }, [section, query]) {
    commit;

    console.log(query);
    var url = "/newdynamic/sub-section/" + section + "/list/";

    if (query) {
      url += "?" + querystring.stringify(query);
    }

    return new Promise((resolve, reject) => {
      axios
        .get(url)
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
  librarysubsectionlist_next({ commit }, section) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get(section)
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

  location({ commit }, [id, type]) {
    commit;
    return new Promise((resolve, reject) => {
      axios
        .get("/newdynamic/sub-section/" + id + "?type=" + type)
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
  setSections(state, data) {
    //console.log("libraryStore.setSections() called")
    state.sections = data;
  },

  setFilteredSections(state, data) {
    state.filtered_sections = data;
  },

  setFilterApplied(state, data) {
    state.filter_applied = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
