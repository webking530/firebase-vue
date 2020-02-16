import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import { VBTooltipPlugin } from "bootstrap-vue";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuelidate from "vuelidate";
import axios from "axios";
import firebase from "firebase";
import router from "./router";
import store from "./store";

import player from "./components/player.vue";

import { faHeart, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import GoogleAuth from "@/config/google_oAuth.js";

import "@/mixins/imagePathMixin";
import "@/mixins/user";
import "@/mixins/checkmobile";
import "@/mixins/elipsis";

import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
 
Vue.filter('numFormat', numFormat(numeral));

Vue.filter('timeInHours', function(value) {
  let hours =  parseInt(Math.floor(value / 360)); 
  let minutes = parseInt(Math.floor((value - (hours * 360)) / 60)); 
  let seconds= parseInt((value - ((hours * 360) + (minutes * 60))) % 60); 

  let dHours = (hours > 0 ? hours + ':' : '');
  let dMins = (minutes < 10 && dHours != ''? '0' + minutes : minutes);
  let dSecs = (seconds > 9 ? seconds : '0' + seconds);

  return dHours + dMins + ":" + dSecs;
});
// SSO

const gauthOption = {
  clientId:
    "342621391680-31vhar7tuk0ef21ho1iegdp4h8cjven9.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VBTooltipPlugin);
Vue.use(GoogleAuth, gauthOption);

library.add(faHeart, faEllipsisH, faHeartOutline);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
Vue.component("player", player);

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API_URL;
const token = process.env.VUE_APP_CLIENT_API_KEY; //localStorage.getItem('accessToken');
const accessToken = localStorage.getItem("accessToken");
const storeAccessToken = store.state.accessToken;

axios.defaults.headers.common["Content-Type"] = "application/json";

if (token || accessToken || storeAccessToken) {
  //console.log(process.env.VUE_APP_ROOT_API_URL)
  axios.interceptors.request.use(
    (config) => {
      const _token = process.env.VUE_APP_CLIENT_API_KEY; //localStorage.getItem('accessToken');
      const _accessToken = localStorage.getItem("accessToken");
      const _storeAccessToken = store.state.accessToken;

      store.commit("Generic/loading", true);
      if (_storeAccessToken) {
        config.headers.Authorization = "JWT " + _storeAccessToken;
        //console.log('using store token')
      } else if (_accessToken) {
        config.headers.Authorization = "JWT " + _accessToken;
        //console.log('using localstorage token')
      } else {
        config.headers.Authorization = "Api-Key " + _token;
        //console.log('using API token')
      }
      return config;
    },
    (error) => {
      store.commit("Generic/loading", false);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      store.commit("Generic/loading", false);
      return response;
    },
    (error) => {
      store.commit("Generic/loading", false);
      return Promise.reject(error);
    }
  );
} else {
  ////console.log('No Token')
}

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    var firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      //authDomain: "trackd-v3-api.firebaseapp.com",
      //databaseURL: "https://trackd-v3-api.firebaseio.com",
      projectId: process.env.VUE_APP_FIREBASE_PROJECT,
      //storageBucket: "trackd-v3-api.appspot.com",
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  },
}).$mount("#app");
