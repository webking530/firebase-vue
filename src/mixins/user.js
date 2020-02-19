import Vue from "vue";

// Global mixin to convert a url into a file path
Vue.mixin({
  computed: {
    request_user_id() {
      return this.$store.state.userid;
    },
  },
  methods: {
    isOwn(user_id, owner_id) {
      console.log("user_id: ", user_id);
      console.log("owner_id: ", owner_id);

      if (!user_id) {
        return false;
      }

      if (user_id === owner_id) {
        return true;
      } else {
        return false;
      }
    },
  },
});
