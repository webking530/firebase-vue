// State object
const state = {
  background_colours: [
    "trackd-blue",
    "trackd-red",
    "trackd-yellow",
    "trackd-green",
  ],
  loading: false,
};

// Getter functions
const getters = {
  getColour(state) {
    let items = state.background_colours;
    return items[~~(items.length * Math.random())] + "-bg";
  },
  loading(state) {
    return state.loading;
  },
};

// Actions
const actions = {};

// Mutations
const mutations = {
  loading(state, loading) {
    if (loading) {
      state.loading = true;
    } else {
      state.loading = false;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
