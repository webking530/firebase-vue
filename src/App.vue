<template>
  <div
    id="app"
    class="bg-dark"
    v-bind:class="{
      'nav-enabled': dark_nav,
      'player-margin': !isMobile(),
      'mobile-header-margin': mobile_header_margin,
      'banner-margin': banner_margin,
    }"
  >
    <div
      v-if="
        this.$route.name !== 'ArtistUsername' &&
        this.$route.name !== 'SongProfile'
      "
    >
      <Header v-if="!isMobile()"></Header>
      <MobileHeader v-else v-bind:username="username"></MobileHeader>
    </div>

    <router-view :key="$route.fullPath"></router-view>

    <mainplayer></mainplayer>

    <!-- <MobileMainPlayer v-else></MobileMainPlayer> -->

    <b-sidebar
      v-if="this.$route.name === 'HomeTrackd'"
      id="menu-sidebar"
      bg-variant="dark"
      shadow
      width="25em"
      backdrop
      text-variant="light"
      sidebar-class="sidebar-colour px-3 pb-3"
    >
      <template #header="{ hide }">
        <b-button
          size="sm"
          variant="link"
          class="text-right float-right"
          @click="hide"
        >
          <img
            src="./assets/section-close.svg"
            class="mx-auto text-right float-right mt-2"
            height="23"
            alt="Close"
          />
        </b-button>
      </template>

      <div class="px-3 py-2 text-light" style="margin-left: 15px">
        <!-- Authenticated -->
        <div v-if="isAuthenticated">
          <b-media>
            <template #aside>
              <b-img
                v-if="!user_image"
                blank
                rounded="circle"
                blank-color="#ccc"
                width="60"
                height="60"
                alt="placeholder"
              ></b-img>
              <b-img
                v-else
                :src="getImagePath(user_image, { width: 60, height: 60 })"
                rounded="circle"
                blank-color="#ccc"
                width="60"
                height="60"
                alt="placeholder"
              ></b-img>
            </template>
            <h5
              class="mt-1 mb-1 pb-0 text-light font-weight-light"
              style="font-size: 1.5em"
            >
              {{ username }}
              <b-button
                :to="{ name: 'ArtistUsername', params: { id: username } }"
                variant="link"
                size="sm"
                class="text-light font-weight-lighter"
                >(My Profile)</b-button
              >
            </h5>
            <p
              class="text-muted text-light font-weight-lighter"
              style="font-size: 0.875em"
            >
              {{ location }}
            </p>
          </b-media>
        </div>

        <!-- Not Authenticated -->
        <div class="mb-4" v-else>
          <img
            src="./assets/trackd-logo.svg"
            height="30"
            class="mb-4"
            alt="Trackd logo"
          />
        </div>

        <label class="sr-only" for="input-search">Search</label>
        <b-input-group class="mb-2 mt-4 mr-sm-2 mb-sm-0">
          <b-input-group-prepend
            class="px-2 search-input"
            style="
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            "
            :class="{ 'mobile-search-bar': isMobile() }"
          >
            <b-icon-search
              v-if="!isMobile()"
              font-scale="1"
              class="mx-auto m-2"
            ></b-icon-search>
            <b-icon-search
              v-else
              font-scale="1"
              class="mx-auto m-2"
              style="color: rgb(193, 192, 200)"
            ></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            id="input-search"
            class="search-input text-light font-weight-light"
            style="
              border-top-right-radius: 0px;
              border-bottom-right-radius: 0px;
              color: #4a4a4a;
              border-color: #4a4a4a;
            "
            :class="{ 'mobile-search-bar': isMobile() }"
            placeholder="Search"
            v-model="search_param"
            v-on:input="search_change()"
          ></b-form-input>
          <b-input-group-append
            class="px-2 search-input"
            style="
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              margin-left:0px;
              background: #4a4a4a;
              border: 1px #4a4a4a solid;
              border-left: none;
              
            "
          >
            <b-icon-x-circle-fill v-if="search_results"
              font-scale="1"
              class="mx-auto"
              style="color: #8E8E93;height:100%;"
              @click="clearSearch"
            />
          </b-input-group-append>#4a4a4a
        </b-input-group>

        <div v-if="search_results">
          <div v-if="search_results.users">
            <h4 class="text-light font-weight-normal pt-3 pb-0 mb-0">
              Artists
            </h4>
            <hr class="bg-light mb-0" />
            <b-list-group
              variant="dark"
              v-for="(result, index) in search_results.users"
              :key="index"
            >
              <b-list-group-item
                class="text-light font-weight-light bg-dark pl-0 ml-0 mb-0 pb-0"
                :to="{
                  name: 'ArtistUsername',
                  params: { id: result.username },
                }"
                >{{ result.username }}</b-list-group-item
              >
            </b-list-group>
          </div>

          <div v-if="search_results.results">
            <h4 class="text-light font-weight-normal pt-3 pb-0 mb-0">Songs</h4>
            <hr class="bg-light mb-0" />
            <b-list-group
              v-for="(result, index) in search_results.results"
              :key="index"
            >
              <b-list-group-item
                class="text-light font-weight-light bg-dark pl-0 ml-0 mb-0 pb-0"
                :to="{ name: 'Song', params: { id: result.id } }"
                >{{ result.value }}</b-list-group-item
              >
            </b-list-group>
          </div>
        </div>

        <div v-if="!isAuthenticated">
          <b-button
            v-if="!isMobile()"
            block
            v-b-modal.login-modal
            content-class="bg-dark"
            variant="link"
            class="
              text-left text-light
              pt-0
              mt-3
              pl-0
              font-weight-lighter
              menu-text
            "
            size="lg"
            >Login</b-button
          >
        </div>

        <div v-else>
          <b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-0 menu-text"
            to="/"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >View Feed</b-button
          >
          <b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-0 menu-text"
            :to="{ name: 'Upload' }"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >Upload</b-button
          >
          <b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-0 menu-text"
            :to="{ name: 'AccountSettings' }"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >Settings</b-button
          >
          <b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-4 menu-text"
            @click="logout_"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >Logout</b-button
          >
          <!--<b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-0 menu-text"
            to="/"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >Account Analytics</b-button
          >-->
          <!--<b-button
            block
            class="text-left font-weight-lighter pl-0 pt-0 mt-0 menu-text"
            to="/"
            variant="link"
            size="lg"
            :class="{
              'trackd-dark-grey': isMobile(),
              'text-light': !isMobile(),
            }"
            >Messages</b-button
          >-->
        </div>
      </div>

      <template #footer="{}">
        <b-button
          v-if="isAuthenticated"
          block
          @click="logout_"
          class="
            mt-5 mt-md-5
            text-left text-light
            pt-0
            mt-0
            pl-0
            font-weight-lighter
            px-3
          "
          style="margin-left: 15px"
          size="lg"
          variant="link"
          :class="{ 'trackd-dark-grey': isMobile() }"
          >Logout</b-button
        >
        <b-button
          :to="{ name: '' }"
          block
          class="
            text-left
            px-3
            pt-0
            mb-2
            font-weight-lighter
            trackd-red
            menu-text
          "
          style="margin-left: 15px"
          size="lg"
          variant="link"
          >Switch to Discover</b-button
        >
        <b-button
          v-if="!isMobile()"
          :to="{ name: 'OurStory' }"
          block
          class="
            text-left text-light
            px-3
            pt-0
            mt-0
            pl-0
            font-weight-lighter
            menu-login
          "
          style="margin-left: 15px"
          size="lg"
          variant="link"
          >About Us</b-button
        >

        <div
          v-if="isMobile()"
          class="mt-3 px-3"
          style="font-size: 0.9em; margin-left: 15px"
        >
          <small class="text-muted font-weight-lighter">
            <router-link
              class="text-muted mr-4 menu-support"
              :to="{ name: 'Legal' }"
              >Support</router-link
            >|<router-link
              class="ml-4 text-muted menu-support"
              :to="{ name: 'Legal' }"
              >Share Trackd</router-link
            >
          </small>
        </div>

        <div
          block
          class="d-flex text-light align-items-center px-3 py-3"
          style="margin-left: 15px"
          :class="{ 'bg-dark': !isMobile() }"
        >
          <b-media class="sidebar-footer-links">
            <template #aside>
              <img
                src="./assets/trackd-icon-white.svg"
                blank-color="#ccc"
                height="20"
                class="footer-logo"
                alt="placeholder"
              />
            </template>

            <small class="text-muted font-weight-lighter sidebar-footer-links">
              © {{ new Date().getFullYear() }}. Trackd is a Registered Trademark
              <br />
              <router-link class="text-muted" :to="{ name: 'Legal' }"
                >Terms</router-link
              >
              |
              <router-link class="text-muted" :to="{ name: 'Legal' }"
                >Legal</router-link
              >
              <!--|  <router-link class="text-muted"  :to="{'name': 'Legal'}">Credits</router-link>-->
              | Version: 3.0
            </small>
          </b-media>
        </div>
      </template>
    </b-sidebar>

    <b-sidebar
      v-else
      id="menu-sidebar"
      bg-variant="dark"
      shadow
      :width="isMobile() ? '20em' : '400px'"
      backdrop
      text-variant="light"
      sidebar-class="sidebar-colour px-3 pb-3"
    >
      <template #header="{ hide }">
        <b-button
          size="sm"
          variant="link"
          class="text-right float-right"
          @click="hide"
        >
          <img
            src="./assets/section-close.svg"
            class="mx-auto text-right float-right mt-2"
            height="23"
            alt="Close"
          />
        </b-button>
      </template>

      <div class="px-3 py-2 text-light" style="margin-left: 15px">
        <!-- Authenticated -->
        <div v-if="isAuthenticated">
          <b-media>
            <template #aside>
              <b-img
                v-if="!user_image"
                blank
                rounded="circle"
                blank-color="#ccc"
                width="60"
                height="60"
                alt="placeholder"
              ></b-img>
              <b-img
                v-else
                :src="getImagePath(user_image, { width: 60, height: 60 })"
                rounded="circle"
                blank-color="#ccc"
                width="60"
                height="60"
                alt="placeholder"
              ></b-img>
            </template>
            <h5
              class="mt-1 mb-1 pb-0 text-light font-weight-light"
              style="font-size: 1.5em"
            >
              {{ username }}
              <b-button
                :to="{ name: 'ArtistUsername', params: { id: username } }"
                variant="link"
                size="sm"
                class="text-light font-weight-lighter"
                >(My Profile)</b-button
              >
            </h5>
            <p
              class="text-muted text-light font-weight-lighter"
              style="font-size: 0.875em"
            >
              {{ location }}
            </p>
          </b-media>
        </div>

        <!-- Not Authenticated -->
        <div class="mb-4" v-else>
          <img
            src="./assets/trackd-logo.svg"
            height="30"
            class="mb-4"
            alt="Trackd logo"
          />
        </div>

        <label class="sr-only" for="input-search">Search</label>
        <b-input-group class="mb-2 mt-4 mr-sm-2 mb-sm-0">
          <b-input-group-prepend
            class="px-2 search-input"
            style="
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            "
            :class="{ 'mobile-search-bar': isMobile() }"
          >
            <b-icon-search
              v-if="!isMobile()"
              font-scale="1"
              class="mx-auto m-2"
            ></b-icon-search>
            <b-icon-search
              v-else
              font-scale="1"
              class="mx-auto m-2"
              style="color: rgb(193, 192, 200)"
            ></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            id="input-search"
            class="search-input text-light font-weight-light"
            style="
              border-radius: 0px;
              color: #4a4a4a;
            "
            :class="{ 'mobile-search-bar': isMobile() }"
            placeholder="Search"
            v-model="search_param"
            v-on:input="search_change()"
          ></b-form-input>
          <b-input-group-append
            class="px-2 search-input"
            style="
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              margin-left:0px;
              background: #4a4a4a;
              border: 1px rgb(206, 212, 218) solid;
              border-left: none;
              border-color: #4a4a4a;
              
            "
          >
            <b-icon-x-circle-fill v-if="search_results"
              font-scale="1"
              class="mx-auto"
              style="color: #8E8E93;height:100%;"
              @click="clearSearch"
            />
          </b-input-group-append>
        </b-input-group>

        <div v-if="search_results">
          <div v-if="search_results.users">
            <h4 class="text-light font-weight-normal pt-3 pb-0 mb-0">
              Artists
            </h4>
            <hr class="bg-light mb-0" />
            <b-list-group
              variant="dark"
              v-for="(result, index) in search_results.users"
              :key="index"
            >
              <b-list-group-item
                class="text-light font-weight-light bg-dark pl-0 ml-0 mb-0 pb-0"
                :to="{
                  name: 'ArtistUsername',
                  params: { id: result.username },
                }"
                >{{ result.username }}</b-list-group-item
              >
            </b-list-group>
          </div>

          <div v-if="search_results.results">
            <h4 class="text-light font-weight-normal pt-3 pb-0 mb-0">Songs</h4>
            <hr class="bg-light mb-0" />
            <b-list-group
              v-for="(result, index) in search_results.results"
              :key="index"
            >
              <b-list-group-item
                class="text-light font-weight-light bg-dark pl-0 ml-0 mb-0 pb-0"
                :to="{ name: 'Song', params: { id: result.id } }"
                >{{ result.value }}</b-list-group-item
              >
            </b-list-group>
          </div>
        </div>

        <div v-if="!isAuthenticated">
          <b-button
            v-if="$route.name == 'Home'"
            :to="{
              name: 'LibraryArea',
              params: { area: 'discover', name: 'Home' },
            }"
            block
            class="mt-3 text-left mt-3 pl-0 text-light font-weight-lighter"
            size="lg"
            variant="link"
            >Switch Home View</b-button
          >
          <b-button
            v-if="$route.name == 'LibraryArea'"
            :to="{ name: 'Home' }"
            block
            class="mt-3 text-left mt-3 pl-0 text-light font-weight-lighter"
            size="lg"
            variant="link"
            >Switch Home View</b-button
          >

          <b-button
            block
            v-b-modal.login-modal
            content-class="bg-dark"
            variant="link"
            class="
              text-left text-light
              pt-0
              mt-0
              pl-0
              text-light
              font-weight-lighter
            "
            size="lg"
            >Login</b-button
          >
        </div>

        <div v-else>
          <b-button
            v-if="$route.name == 'Home'"
            :to="{
              name: 'LibraryArea',
              params: { area: 'discover', name: 'Library' },
            }"
            block
            class="mt-3 text-left mt-3 pl-0 text-light font-weight-lighter"
            size="lg"
            variant="link"
            >Switch Home View</b-button
          >

          <b-button
            v-if="$route.name == 'LibraryArea'"
            :to="{ name: 'Home' }"
            block
            class="mt-3 text-left mt-3 pl-0 text-light font-weight-lighter"
            size="lg"
            variant="link"
            >Switch Home View</b-button
          >

          <b-button
            block
            :to="{
              name: 'LibraryArea',
              params: { area: 'discover', name: 'Library' },
            }"
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            v-bind:class="{
              'mt-3': switchHomeView,
            }"
            size="lg"
            variant="link"
            >My Collection</b-button
          >
          <b-button
            block
            :to="{
              name: 'LibraryArea',
              params: { area: 'create', name: 'Library' },
            }"
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            size="lg"
            variant="link"
            >My Collection (Create)</b-button
          >

          <b-button
            block
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            :to="{name: 'Upload'}"
            variant="link"
            size="lg"
            >Upload</b-button
          >

          <b-button
            block
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            to="/"
            variant="link"
            size="lg"
            >View Feed</b-button
          >

          <!--<b-button
            block
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            to="/"
            variant="link"
            size="lg"
            >Messages</b-button
          >-->

          <b-button
            block
            class="text-left text-light font-weight-lighter pl-0 pt-0 mt-0"
            :to="{ name: 'AccountSettings' }"
            variant="link"
            size="lg"
            >Settings</b-button
          >

          <b-button
            block
            @click="logout_"
            class="
              mt-md-5
              text-left text-light
              pt-0
              mt-0
              pl-0
              font-weight-lighter
            "
            size="lg"
            variant="link"
            >Logout</b-button
          >
        </div>
      </div>

      <template #footer="{}" style="margin-bottom: -30px">
        <!--<b-button
          v-if="isAuthenticated"
          :to="{
            name: 'LibraryArea',
            params: { area: 'create', name: 'Library' },
          }"
          block
          class="text-left pt-0 mt-4 mb-4 font-weight-lighter trackd-red"
          style="margin-left: 15px;"
          size="lg"
          variant="link"
          >Trackd For Artists</b-button
        >-->
        <b-button
          :to="{ name: 'ForArtists' }"
          block
          class="text-left pt-0 mt-4 mb-4 font-weight-lighter trackd-red"
          style="margin-left: 15px"
          size="lg"
          variant="link"
          >Trackd For Artists</b-button
        >

        <a
          v-if="!isMobile()"
          target="_blank"
          href="https://apps.apple.com/gb/app/trackd-songs-start-here/id1496465739"
          style="margin-left: 15px"
        >
          <img
            src="./assets/app-store-dark.svg"
            alt="Image 1"
            width="100px"
            class="ml-3"
          />
        </a>

        <!-- <div class="row py-3">

          <b-col>
            <b-button href="https://www.facebook.com/trackdmusic/" target="_blank" variant="link" class="ml-3 mr-3 p-0">
              <b-icon-facebook font-scale="1.5"  class="text-muted"></b-icon-facebook>
            </b-button>
            <b-button href="https://www.instagram.com/trackdmusic/" target="_blank" variant="link" class="mr-3 p-0">
              <b-icon-instagram font-scale="1.5" class="text-muted"></b-icon-instagram>
            </b-button>
            <b-button href="https://twitter.com/trackdmusic" target="_blank" variant="link" class="mr-3 p-0">
              <b-icon-twitter font-scale="1.5" class="text-muted"></b-icon-twitter>
            </b-button>
            <b-button href="https://www.youtube.com/channel/UC3HKItlT6WQWfJfCjwlaVuQ" target="_blank" variant="link" class="mr-3 p-0">
              <b-icon-youtube font-scale="1.5" class="text-muted"></b-icon-youtube>
            </b-button>
          </b-col>

         </div> -->
        <div class="mt-3" style="font-size: 0.9em">
          <small class="text-muted font-weight-lighter">
            <router-link class="text-muted ml-4" :to="{ name: 'Legal' }"
              >Support</router-link
            >
            |
            <router-link class="text-muted" :to="{ name: 'Legal' }"
              >Tutorial</router-link
            >
            |
            <router-link class="text-muted" :to="{ name: 'Legal' }"
              >Share Trackd</router-link
            >
            <br />
            <router-link class="text-muted ml-4" :to="{ name: 'Legal' }"
              >Request a Feature</router-link
            >
            |
            <router-link class="text-muted" :to="{ name: 'OurStory' }"
              >About Us</router-link
            >
          </small>
        </div>

        <div
          block
          class="d-flex text-light align-items-center px-3 py-3"
          :class="{ 'bg-dark': !isMobile() }"
        >
          <b-media class="sidebar-footer-links">
            <template #aside>
              <img
                src="./assets/trackd-icon-white.svg"
                blank-color="#ccc"
                height="20"
                class="footer-logo"
                alt="placeholder"
              />
            </template>

            <small class="text-muted font-weight-lighter sidebar-footer-links">
              © {{ new Date().getFullYear() }}. Trackd is a Registered Trademark
              <br />
              <router-link class="text-muted" :to="{ name: 'Legal' }"
                >Terms</router-link
              >
              |
              <router-link class="text-muted" :to="{ name: 'Legal' }"
                >Legal</router-link
              >
              <!--|  <router-link class="text-muted"  :to="{'name': 'Legal'}">Credits</router-link>-->
              | Version: 3.0
            </small>
          </b-media>
        </div>
      </template>
    </b-sidebar>

    <LoginModal></LoginModal>
    <ForgotPasswordModal></ForgotPasswordModal>
    <LoginEmailModal></LoginEmailModal>
    <SignUpModal></SignUpModal>
    <FilterModal></FilterModal>
    <OnboardingEmailModal></OnboardingEmailModal>
    <OnboardingAccountModal></OnboardingAccountModal>
    <OnboardingGenresModal></OnboardingGenresModal>
    <OnboardingSkillsModal></OnboardingSkillsModal>
    <OnboardingLocationModal></OnboardingLocationModal>
    <OnboardingGenderModal></OnboardingGenderModal>
    <OnboardingSSOUsername></OnboardingSSOUsername>

    <cookie-law class="bg-dark" theme="blood-orange">
      <div slot="message" class="font-weight-light">
        This website uses cookies to ensure you get the best experience. <router-link to="/legal">Click here</router-link>
      </div>
    </cookie-law>

    <div
      v-if="loading"
      class="modal modal-spinner fade bd-example-modal-lg show"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content text-center">
          <img
            alt="Trackd Music"
            src="./assets/trackd-loading.gif"
            height="60"
            style="z-index: 4000; opacity: 1"
            class="d-block mx-auto loading-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/en_US/sdk.js"
></script>

<script>
import { mapGetters, mapActions } from "vuex";

import Header from "./components/Header.vue";
import MobileHeader from "./components/MobileHeader.vue";
import FacebookButton from "./components/auth/facebook.vue";
import GoogleButton from "./components/auth/google.vue";
import AppleButton from "./components/auth/apple.vue";
import LoginModal from "./components/modal/Login.vue";
import ForgotPasswordModal from "./components/modal/ForgotPassword.vue";
import LoginEmailModal from "./components/modal/LoginEmail.vue";
import SignUpModal from "./components/modal/SignUp.vue";
import OnboardingEmailModal from "./components/modal/OnboardingEmail.vue";
import OnboardingAccountModal from "./components/modal/OnboardingAccount.vue";
import OnboardingGenresModal from "./components/modal/OnboardingGenres.vue";
import OnboardingSkillsModal from "./components/modal/OnboardingSkills.vue";
import OnboardingLocationModal from "./components/modal/OnboardingLocation.vue";
import OnboardingGenderModal from "./components/modal/OnboardingGender.vue";
import OnboardingSSOUsername from "./components/modal/OnboardingSSOUsername.vue";
import FilterModal from "./components/modal/Filter.vue";
import Mainplayer from "./components/mainplayer.vue";
// import MobileMainPlayer from "./components/MobileMainPlayer.vue";
import CookieLaw from 'vue-cookie-law'

export default {
  name: "App",
  components: {
    Header,
    MobileHeader,
    FacebookButton,
    GoogleButton,
    AppleButton,
    LoginModal,
    ForgotPasswordModal,
    LoginEmailModal,
    SignUpModal,
    OnboardingSSOUsername,
    OnboardingEmailModal,
    OnboardingAccountModal,
    OnboardingGenresModal,
    OnboardingSkillsModal,
    OnboardingLocationModal,
    OnboardingGenderModal,
    Mainplayer,
    FilterModal,
    CookieLaw
  },
  data() {
    return {
      billing_clicked: false,
      search_param: "",
      search_results: null,
    };
  },
  methods: {
    ...mapActions("Auth", ["reauth"]),
    ...mapActions("Library", ["search"]),
    ...mapActions({ main_logout: "logout", portal: "portal" }),
    scrollTo: function (hashtag) {
      setTimeout(() => {
        location.href = hashtag;
      }, 1000);
    },
    logout_() {
      this.main_logout();
      if (this.$route.name !== "Home") {
        this.$router.replace("/");
      }
    },
    BillingLink() {
      this.billing_clicked = true;
      this.portal()
        .then((res) => {
          this.billing_clicked = false;
          window.location = res.url;
        })
        .catch((error) => {
          console.log(error);
          this.billing_clicked = false;
        });
    },
    clearSearch() {
      this.search_param = null;
      this.search_results = null;
    },
    search_change() {
      if (this.search_param.length > 3) {
        this.search(this.search_param)
          .then((res) => {
            this.search_results = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (!this.search_param) {
        this.search_param = null;
        this.search_results = null;
      }
    },
  },
  computed: {
    ...mapGetters("Generic", { loading: "loading" }),
    ...mapGetters([
      "isAuthenticated",
      "username",
      "user_image",
      "location",
      "isChipInUser",
      "isSupporter",
      "showBilling",
      "isWebUser",
    ]),
    dark_nav: function () {
      if (this.$route.name === "Home" || this.$route.name === "Legal") {
        return true;
      } else {
        return false;
      }
    },
    mobile_header_margin() {
      if (!this.isMobile()) return false;
      if (this.$route.name === "Home") {
        return true;
      } else {
        return false;
      }
    },
    switchHomeView() {
      if (this.$route.name === "Home" || this.$route.name == "LibraryArea") {
        return false;
      }

      return true;
    },
    banner_margin() {
      if (this.isMobile()) return false;
      if (this.$route.name === "LibraryArea") {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.reauth();
  },
  mounted() {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1000);
    }
  },
};
</script>

<style lang="scss">
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "assets/custom.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

// General style overrides and custom classes
html,
body {
  height: 100%;
  margin: 0;
}
</style>

<style>
@font-face {
  font-family: "SFUI";
  src: url(./assets/font/SF-UI-Text.ttf) format("truetype");
}
@font-face {
  font-family: "SFPro";
  src: url(./assets/font/SF-Pro-Text.ttf) format("truetype");
}
html {
  position: relative;
  min-height: 100%;
}
#app {
  height: 100%;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #495057;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(128, 134, 139, 0.25);
}

.custom-control-label::before {

  color: #fff;
  border-color: #e76e66;
  background-color: #e76e66;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #42b883;
  background-color: #42b883;
}
/*
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px; 
  }
  */

.text-small {
  font-size: 0.9em;
}
.search-input,
.search-input:focus {
  background-color: #4a4a4a;
  color: #fff;
  border-color: #4a4a4a;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 24px;
  height: 40px;
}

.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}

.trackd-red {
  color: #e76e66;
}

.trackd-green {
  color: #81cd5c;
}

.trackd-orange {
  color: #f2b471;
}

.trackd-blue {
  color: #00afdc;
}

.trackd-light-grey {
  color: #9b9b9b;
}

.trackd-dark-grey {
  color: #4a4a4a;
}

.bg-none {
  background: transparent !important;
}

.padding {
  margin-bottom: 4em;
}

.modal-header {
  border-bottom: none !important;
}

* {
  font-family: "Roboto";
}

.nav-enabled {
  margin-top: 108px;
}

.trackd-green-bg {
  background-color: #64d148 !important;
}
.trackd-green-text {
  color: #64d148;
}
.trackd-blue-bg {
  background-color: #01afdc !important;
}
.trackd-blue-text {
  color: #01afdc !important;
}
.trackd-yellow-bg {
  background-color: #f2b471 !important;
}
.trackd-yellow-text {
  color: #f2b471 !important;
}
.trackd-red-bg {
  background-color: #e76d66 !important;
}
.trackd-red-text {
  color: #e76d66 !important;
}

.modal-content {
  border: 1px solid #fff;
  border-radius: 20px;
}

.overlay-bg {
  background-color: #333;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0.75;
  display: table;
}

.modal > img {
  z-index: 1000;
  position: relative;
}

.bd-example-modal-lg .modal-dialog {
  display: table;
  position: relative;
  margin: 0 auto;
  top: calc(50% - 24px);
}

.modal-spinner {
  display: block;
  background: #333;
  opacity: 0.65;
}

.bd-example-modal-lg .modal-dialog .modal-content {
  background-color: transparent;
  border: none;
}

.loading-icon {
  height: 50px;
}

.carousel-indicators li.active {
  background-color: #eee;
}
.pulse {
  animation: pulse 1s infinite;
  margin: 0 auto;
  display: table;
  margin-top: 50px;
  animation-direction: alternate;
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

.footer-logo {
  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out;
}
.footer-logo:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

.b-sidebar > .b-sidebar-header {
  display: unset;
}

@media (max-width: 575.98px) {
  .loading-icon {
    height: 35px;
  }

  .nav-enabled {
    margin-top: 69px;
  }

  .modal-lg {
    margin: 0;
    max-width: 100%;
    height: 100%;
    border: none;
  }

  .modal-content {
    height: 100%;
    border: none;
    border-radius: 0;
  }

  .modal-header {
    padding-bottom: 0;
  }

  .modal-body {
    background: black;
    padding-top: 0;
  }
}

.sidebar-colour {
  border-right: 7px solid #e76e66;
  border-image: linear-gradient(
    to bottom,
    #f2b471 33.33%,
    #01afdc 33.33%,
    #01afdc 66.67%,
    #e76e66 66.67%
  );
  border-image-slice: 1;
  border-top: 0;
  border-bottom: 0;
  border-left: 0;

  /*border-image: linear-gradient(to bottom, #F2B471 33.33%, #01AFDC 33.33%,#01AFDC 66.67%, #E76E66 66.67%);*/
}

.player-margin {
  margin-bottom: 120px;
}

.mobile-header-margin {
  margin-top: 130px;
}

.mobile-player-margin {
  margin-bottom: 200px;
}

.mobile-search-bar {
  background-color: rgb(229, 229, 229);
  border: none;
}

.sidebar-footer-links {
  font-size: 0.8em;
  line-height: 95%;
}

.modal-lg {
  max-width: 600px !important;
}

.input-box {
  box-shadow: none !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
}

.next-btn {
  border-radius: 10px !important;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
}
.tag-box {
  border-radius: 10px;
}

.text-title {
  font-size: 34px;
  font-weight: 500;
  line-height: 36px;
}

.text-des {
  font-size: 34px;
  font-weight: 200;
  line-height: 36px;
}

.text-des > b {
  font-weight: 500 !important;
}

.text-fdes {
  font-size: 18px;
  font-weight: 300 !important;
  line-height: 24px;
}

.text-fdes-sec {
  font-size: 18px;
  font-weight: 200 !important;
  line-height: 24px;
}

.text-fdes > b {
  font-weight: 500 !important;
}

.text-fdes-sec > b {
  font-weight: 500 !important;
}

.text-sub {
  font-size: 15px;
  font-weight: 300 !important;
  line-height: 22px;
}

.text-short {
  font-size: 12px;
  font-weight: 300 !important;
  line-height: 16px;
}

.menu-text {
  font-weight: 300 !important;
  font-size: 18px;
  line-height: 40px;
}

.text-muted {
  font-weight: 300 !important;
  font-size: 12px;
  line-height: 16px;
  /* display: flex;
    align-items: flex-end; */
  color: #9b9b9b !important;
}

.menu-support {
  font-size: 14px !important;
  line-height: 24px !important;
}

.danger-upgrade {
  color: #e76e66 !important;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #333333;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3;
}
</style>
