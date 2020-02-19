import Vue from "vue";

// Global mixin to convert a url into a file path
Vue.mixin({
  methods: {
    getImagePath(url, params = {}) {
      if (url) {
        let bucket_path = process.env.VUE_APP_IMAGE_PATH;
        let base = "https://ayswazyocq.cloudimg.io/v7/" + bucket_path + "/";
        let path = url
          .replace("https://storage.googleapis.com/tracks-v2-import/", "")
          .split("?")[0]
          .replace("https://storage.googleapis.com/prod-trackd/", "")
          .split("?")[0];

        let image_url = base + path + "?";
        // Append query params
        for (const [key, value] of Object.entries(params)) {
          image_url += `${key}=${value}&`;
        }

        return image_url;
      }
    },
  },
});
