// State object
const state = {
  files: []
};

// Getter functions
const getters = {
  getFiles(state) {
    return state.files;
  },
};

// Actions
const actions = {

};

// Mutations
const mutations = {
  addFile(state, data) {
    // state.files.push(data)
    state.files = [...state.files, data]
  },
  removeFile(state, data) {
    state.files.splice(data, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
