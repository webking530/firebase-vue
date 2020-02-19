<template>
  <div class="home-container pt-4">
    <b-navbar toggleable="lg" type="dark" variant="transparent" class="">
      <b-container fluid class="nav-container">
        <b-col cols="12" md="4" class="text-right"> </b-col>

        <b-col cols="12" md="4" class="text-center">
          <b-button variant="link" :to="{ name: 'Home' }">
            <img
              src="../assets/trackd-logo.svg"
              class="d-sm-inline-block align-top logo"
              alt="Logo"
            />
          </b-button>
        </b-col>

        <b-col cols="12" md="3" class="text-center">
          <b-button
            v-b-modal.login-modal
            content-class="text-light"
            variant="link"
            class="px-5 text-light font-weight-lighter mx-auto existing-artist"
            >Existing Artist</b-button
          >
        </b-col>
      </b-container>
    </b-navbar>

    <b-container style="height: 100%; position: relative">
      <b-row class="">
        <b-col
          class="mt-5 pt-5 mt-md-5 pt-md-4 text-container"
          cols="12"
          md="7"
          offset-md="5"
        >
          <b-row>
            <b-col cols="12" class="home-body">
              <h1 class="text-light mt-4">
                There’s Cool. <br />
                Then there’s Kool.
              </h1>
            </b-col>
          </b-row>
          <b-row class="mt-2 mt-md-5 pt-md-3">
            <b-col cols="12" class="home-body">
              <h3 class="text-light mt-md-4">Register your Koolness.</h3>

              <p
                class="text-light font-weight-normal first-line mt-1 mt-sm-none"
              >
                We are working hard at Trackd to get our ground-breaking new
                site ready for the world’s finest Artists.
              </p>
              <p
                class="text-light font-weight-normal mt-3 pb-0 mb-4 second-line"
              >
                Artists can register now with an invite from an existing Trackd
                Artst. Alternatively register your interest now below and well
                let you know when we can let you backstage.
              </p>

              <b-button
                v-b-modal.register-interest-modal
                class="
                  upload-btn
                  text-light
                  mt-4 mt-md-5
                  p-1
                  px-4
                  p-md-2
                  px-md-3
                "
                >Reserve your Artist Name</b-button
              >

              <p
                class="
                  text-light
                  font-weight-lighter
                  mt-5 mt-md-3
                  pt-none pt-md-2
                  made-by
                "
              >
                Made for Artists, by Artists.
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <!--<LoginModal></LoginModal>
    <ForgotPasswordModal></ForgotPasswordModal>
    <LoginEmailModal></LoginEmailModal>-->
    <RegisterInterest></RegisterInterest>
  </div>
</template>
<script>
//import { mapActions, mapGetters, mapMutations } from 'vuex'
//import LoginModal from '../components/modal/Login.vue'
//import LoginEmailModal from '../components/modal/LoginEmail.vue'
//import ForgotPasswordModal from '../components/modal/ForgotPassword.vue'
import RegisterInterest from "../components/modal/RegisterInterest.vue";

export default {
  name: "Landing",
  components: {
    //LoginModal,
    //ForgotPasswordModal,
    //LoginEmailModal,
    RegisterInterest,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.player-margin {
  margin-bottom: 0 !important;
}

.logo {
  height: 36px;
}

.home-container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/pregame.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;

  /* Center and scale the image nicely */
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}

.existing-artist {
  font-size: 15px;
}

.home-body {
  justify-content: center;
  text-align: center;
}

.home-body > h1 {
  font-weight: 200;
  font-size: 80px;
  line-height: 90px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > h3 {
  font-weight: 900;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > p {
  font-weight: 900;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 0;
}

.home-body > p.first-line {
  padding-right: 95px;
  padding-left: 95px;
}

.home-body > p.second-line {
  padding-right: 80px;
  padding-left: 80px;
}

.home-body > span {
  font-weight: 900;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  display: block;
}

.upload-btn {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
}

.home-footer {
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  text-decoration-line: none !important;
}

.made-by {
  font-weight: 300;
}

/*  Extra small devices (portrait phones, less than 576px)
        No media query for `xs` since this is the default in Bootstrap
        Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/*  Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

/*  Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
}

/*  Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
}

/*  Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

/*   Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

/*   Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/*   Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/*   Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logo {
    height: 34px;
  }

  .home-body > h1 {
    font-size: 60px;
    line-height: 70px;
  }

  .home-body > p.first-line {
    padding-right: 30px;
    padding-left: 30px;
    font-weight: 400;
  }

  .home-body > p.second-line {
    padding-right: 30px;
    padding-left: 30px;
    font-weight: 400;
  }
  .text-container {
    margin-top: 20px !important;
    padding-top: 0 !important;
  }
}

/*   Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .home-body > p.first-line {
    padding-right: 95px;
    padding-left: 95px;
  }

  .home-body > p.second-line {
    padding-right: 80px;
    padding-left: 80px;
  }
}

@media (max-width: 575.98px) {
  .logo {
    height: 34px;
  }

  .home-container {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../assets/pregame.png");
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    background-position: 29%;
    height: 100%;
  }

  .home-body > h1 {
    font-size: 40px;
    line-height: 50px;
  }
  .home-body > h3 {
    font-size: 26px;
    line-height: 40px;
    font-weight: 500;
  }

  .home-body > p {
    font-size: 12px;
    line-height: 16px;
  }

  .home-body > p.first-line {
    padding-right: 30px;
    padding-left: 30px;
    font-weight: 400;
  }

  .home-body > p.second-line {
    padding-right: 30px;
    padding-left: 30px;
    font-weight: 400;
  }

  .existing-artist {
    margin-top: 5px;
    font-size: 12px;
  }

  .upload-btn {
    position: relative;
    margin-top: 100px;
    font-size: 12px;
    padding-right: 30px;
    padding-left: 30px;
  }

  .made-by {
    font-weight: 300;
  }
}

@media (max-width: 375px) {
  .logo {
    height: 34px;
  }

  .home-container {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../assets/pregame.png");
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    background-position: left;
    background-position: 26%;
    height: 100%;
    background-repeat: no-repeat;
  }

  .home-body > h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .home-body > h3 {
    font-size: 26px;
    line-height: 40px;
  }

  .home-body > p {
    font-size: 12px;
    line-height: 16px;
    padding-right: 30px;
    padding-left: 30px;
  }

  .existing-artist {
    margin-top: 5px;
    font-size: 12px;
  }

  .upload-btn {
    position: relative;
    margin-top: 100px;
    font-size: 12px;
    padding-right: 30px;
    padding-left: 30px;
  }

  .made-by {
    font-weight: 300;
    margin-top: 30px !important;
  }
}

@media (max-width: 320px) {
  .logo {
    height: 30px;
  }

  .home-body > h1 {
    font-size: 30px;
    line-height: 40px;
  }

  .text-container {
    margin-top: 20px !important;
    padding-top: 0 !important;
  }

  .home-body > p.first-line {
    font-size: 11px;
    padding-right: 0px;
    padding-left: 0px;
    font-weight: 400;
  }

  .home-body > p.second-line {
    font-size: 11px;
    padding-right: 0px;
    padding-left: 0px;
    font-weight: 400;
  }
}
</style>
