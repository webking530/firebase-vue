import axios from "axios";
//import store from "../store";

const silentAxios = axios.create()

silentAxios.defaults.baseURL = process.env.VUE_APP_ROOT_API_URL;

const token = process.env.VUE_APP_CLIENT_API_KEY; 
const accessToken = localStorage.getItem("accessToken");
const storeAccessToken = false //store.state.accessToken;

silentAxios.defaults.headers.common["Content-Type"] = "application/json";

if (token || accessToken || storeAccessToken) {
  
  silentAxios.interceptors.request.use(
    (config) => {
      const _token = process.env.VUE_APP_CLIENT_API_KEY; 
      const _accessToken = localStorage.getItem("accessToken");
      const _storeAccessToken = false //store.state.accessToken;

      if (_storeAccessToken) {
        config.headers.Authorization = "JWT " + _storeAccessToken;
        
      } else if (_accessToken) {
        config.headers.Authorization = "JWT " + _accessToken;
        
      } else {
        config.headers.Authorization = "Api-Key " + _token;
        
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

}

export default silentAxios
