export const initFbsdk = () => {
  return new Promise((resolve) => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    window.FB.init({
      appId: process.env.VUE_APP_FACEBOOK_APP_ID,
      cookie: true, // enable cookies to allow the server to access the session
      xfbml: true, // parse social plugins on this page
      version: "v3.2", // use graph api version 2.8
    });

    resolve;
  });
};
