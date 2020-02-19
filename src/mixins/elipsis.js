import Vue from "vue";

// Check for mobile browser
Vue.mixin({
  methods: {
    elipsis(string, length = 18) {
      // let length = 18
      return string.length > length
        ? string.substr(0, length - 1) + "&hellip;"
        : string;
    },
  },
});
