<template>
  <div v-if="loaded">
    <b-container v-if="artist" fluid class="artist-page">
      <b-row
        id="banner"
        v-if="artist.userprofile.cover_photo"
        :style="{
          backgroundImage: `url(${getImagePath(
            artist.userprofile.cover_photo
          )})`,
        }"
        class="image-backdrop"
      >
        <b-col
          cols="12"
          class="pt-4 pb-3"
          style="background-color: rgba(0, 0, 0, 0.3);"
        >
          <b-button
            v-if="!isMobile()"
            variant="link"
            @click="$router.go(-1)"
            class="btn-back"
          >
            <a
              ><b-icon-chevron-left
                class="more-btn btn-left"
              ></b-icon-chevron-left
            ></a>
          </b-button>

          <a v-else
            ><img
              class=""
              src="../assets/back-icon-mobile.svg"
              @click="$router.go(-1)"
              alt="placeholder"
          /></a>

          <!-- <a
            ><img
              class="more-btn btn-dots"
              src="../assets/menu-icon.svg"
              alt="placeholder"
          /></a> -->
        </b-col>

        <b-col class="text-center text-light pb-6 mx-auto c-artist-header">
          <h1
            v-if="artist.userprofile.name"
            class="mx-auto font-weight-light font-weight-lighter c-artist-header__name"
          >
            {{ artist.userprofile.name }}
          </h1>
          <h1
            v-else
            class="mx-auto font-weight-light font-weight-lighter c-artist-header__name"
          >
            {{ artist.username }}
          </h1>
          <h4
            class="mx-auto font-weight-light user-type font-weight-lighter c-artist-header__strap-line"
          >
            {{ artist.userprofile.strap_line }}
          </h4>

          <div class="follow-group">
            <b-button
              variant="outline-light"
              v-if="artist.liked"
              class="float-right btn-md btn-square bw-2 px-3 ml-1"
              @click="unfollowArtist"
              >Unfollow</b-button
            >
            <b-button
              variant="outline-light"
              v-else
              class="btn-outline-light float-right btn-md btn-square bw-2 px-3 ml-1 c-btn-follow"
              @click="followArtist"
              >Follow</b-button
            >

            <a
              ><img
                class=" float-right  c-comment-icon"
                src="../assets/follow.svg"
                width="40"
                alt="comment"
            /></a>
          </div>
        </b-col>
      </b-row>

      <b-row id="banner" v-else class="image-backdrop" :class="random_colour">
        <b-col
          class="text-center text-light pt-4a pb-4a mx-auto"
          style="background-color: rgba(0, 0, 0, 0.3);"
        >
          <h1 v-if="artist.userprofile.name" class="mx-auto font-weight-light">
            {{ artist.userprofile.name }}
          </h1>
          <h1 v-else class="mx-auto font-weight-light">
            {{ artist.username }}
          </h1>
          <h4 class="mx-auto font-weight-light">
            {{ artist.userprofile.strap_line }}
          </h4>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="artist-container" fluid>
      <b-row id="profile_player">
        <b-col
          cols="5"
          sm="4"
          md="4"
          lg="4"
          xl="3"
          class="text-center positioning  mt-4"
        >
          <b-img
            :src="getImagePath(artist.userprofile.photo)"
            blank-color="red"
            class="photo-border mx-auto text-center c-artist-photo"
            width="250"
            height="250"
            alt="placeholder"
          ></b-img>
        </b-col>

        <b-col cols="7" sm="8" md="6" lg="5" xl="5" class="artist-profile">
          <b-badge
            v-if="artist.userprofile.supporter"
            pill
            variant="danger-outline"
            class="mt-0 text-uppercase text-danger border border-solid border-danger mr-1 border-danger-2 c-profile-badges font-weight-normal c-supporter-badge"
            >Supporter</b-badge
          >
          <b-badge
            v-if="artist.userprofile.allow_collaboration"
            pill
            variant="success-outline"
            class="mt-0 mt-md-0  text-uppercase text-success border border-solid border-success c-profile-badges c-collab-badge border-success-2 font-weight-normal"
            >Collaborating</b-badge
          >

          <b-row class="stats-section">
            <b-col
              cols="3"
              md="2"
              class="text-light font-weight-light text-center pl-0 c-artist-stat"
            >
              <p class="stats-number">{{ artist.stats.song_count }}</p>
              <p class="font-weight-lighter text-smaller">Songs</p>
            </b-col>
            <b-col
              cols="3"
              md="2"
              class="text-light font-weight-light text-center c-artist-stat"
            >
              <p class="stats-number">{{ artist.stats.followers }}</p>
              <p class="font-weight-lighter text-smaller">Followers</p>
            </b-col>
            <b-col
              cols="3"
              md="2"
              class="text-light font-weight-light text-center c-artist-stat"
            >
              <p class="stats-number">{{ artist.stats.following }}</p>
              <p class="font-weight-lighter text-smaller">Following</p>
            </b-col>
            <b-col
              cols="3"
              md="2"
              class="text-light font-weight-light text-center c-artist-stat"
            >
              <p class="stats-number">{{ artist.stats.listeners }}</p>
              <p class="font-weight-lighter text-smaller">Listeners</p>
            </b-col>
          </b-row>
        </b-col>

        <b-col xl="1"></b-col>

        <b-col lg="3" xl="3" class="displayed-on-desktop social-profiles">
          <a target="_blank" :href="artist.userprofile.site">
            <img
              v-if="artist.userprofile.site"
              src="../assets/www-active.svg"
              alt="chipin"
              class="float-right social-icons"
            />
            <img
              v-else
              src="../assets/www.svg"
              alt="website"
              class="float-right social-icons"
            />
          </a>
          <a target="_blank" :href="artist.userprofile.instagram">
            <img
              v-if="artist.userprofile.instagram"
              src="../assets/instagram-active.svg"
              alt="chipin"
              class="float-right social-icons"
            />
            <img
              v-else
              src="../assets/instagram.svg"
              alt="instagram"
              class="float-right social-icons"
            />
          </a>
          <a target="_blank" :href="artist.userprofile.twitter">
            <img
              v-if="artist.userprofile.twitter"
              src="../assets/twitter-active.svg"
              alt="chipin"
              class="float-right social-icons"
            />
            <img
              v-else
              src="../assets/twitter.svg"
              alt="twitter"
              class="float-right social-icons"
            />
          </a>
          <a target="_blank" :href="artist.userprofile.facebook">
            <img
              v-if="artist.userprofile.facebook"
              src="../assets/facebook-active.svg"
              alt="chipin"
              class="float-right social-icons"
            />
            <img
              v-else
              src="../assets/facebook.svg"
              alt="facebook"
              class="float-right social-icons"
            />
          </a>
          <a target="_blank" :href="artist.userprofile.youtube">
            <img
              v-if="artist.userprofile.youtube"
              src="../assets/youtube-active.svg"
              alt="chipin"
              class="float-right social-icons"
            />
            <img
              v-else
              src="../assets/youtube.svg"
              alt="youtube"
              class="float-right social-icons"
            />
          </a>
        </b-col>
      </b-row>

      <b-row
        cols="12"
        sm="12"
        md="12"
        class="positioning l-social-and-data displayed-on-mobile"
      >
        <b-col>
          <b-row class="l-last-access-and-social">
            <div class="font-weight-lighter float-left ">
              <span class="lead text-grey c-last-artist-login">
                <img
                  src="../assets/overview-icon.svg"
                  class="mr-2 c-last-artist-login-logo"
                  height="30"
                  alt="Logo"
                />
                {{ artist.last_login_pretty }}
              </span>
            </div>

            <div class="displayed-on-mobile social-profiles">
              <a target="_blank" :href="artist.userprofile.site">
                <a target="_blank" :href="artist.userprofile.youtube">
                  <img
                    v-if="artist.userprofile.youtube"
                    src="../assets/youtube-active.svg"
                    alt="chipin"
                    class="float-right displayed-on-mobile social-icons youtube"
                  />
                  <img
                    v-else
                    src="../assets/youtube.svg"
                    alt="youtube"
                    class="float-right displayed-on-mobile social-icons youtube"
                  />
                </a>
                <a target="_blank" :href="artist.userprofile.twitter">
                  <img
                    v-if="artist.userprofile.twitter"
                    src="../assets/twitter-active.svg"
                    alt="chipin"
                    class="float-right displayed-on-mobile social-icons twitter"
                  />
                  <img
                    v-else
                    src="../assets/twitter.svg"
                    alt="twitter"
                    class="float-right displayed-on-mobile social-icons twitter"
                  />
                </a>
                <a target="_blank" :href="artist.userprofile.instagram">
                  <img
                    v-if="artist.userprofile.instagram"
                    src="../assets/instagram-active.svg"
                    alt="chipin"
                    class="float-right displayed-on-mobile social-icons"
                  />
                  <img
                    v-else
                    src="../assets/instagram.svg"
                    alt="instagram"
                    class="float-right displayed-on-mobile social-icons"
                  />
                </a>
                <a target="_blank" :href="artist.userprofile.facebook">
                  <img
                    v-if="artist.userprofile.facebook"
                    src="../assets/facebook-active.svg"
                    alt="chipin"
                    class="float-right displayed-on-mobile social-icons"
                  />
                  <img
                    v-else
                    src="../assets/facebook.svg"
                    alt="facebook"
                    class="float-right displayed-on-mobile social-icons"
                  />
                </a>
                <img
                  v-if="artist.userprofile.site"
                  src="../assets/www-active.svg"
                  alt="chipin"
                  class="float-right displayed-on-mobile social-icons"
                />
                <img
                  v-else
                  src="../assets/www.svg"
                  alt="website"
                  class="float-right displayed-on-mobile social-icons"
                />
              </a>
            </div>
          </b-row>

          <div
            class="font-weight-lighter l-location-container"
            v-if="artist.userprofile.location"
          >
            <span
              v-if="artist.userprofile.location"
              class="lead text-grey c-artist-location"
            >
              <img
                src="../assets/location-icon.svg"
                class="mr-2 c-artist-location-logo"
                height="30"
                alt="Logo"
              />
              {{ artist.userprofile.location }}
            </span>
          </div>
        </b-col>
      </b-row>

      <b-row
        cols="12"
        sm="6"
        md="4"
        class="positioning l-social-and-data displayed-on-desktop"
      >
        <b-col cols="5" sm="5" class="text-light">
          <div class="font-weight-lighter ">
            <span class="lead text-grey c-last-artist-login">
              <img
                src="../assets/overview-icon.svg"
                class="c-last-artist-login-logo"
                height="30"
                alt="Logo"
              />
              {{ artist.last_login_pretty }}
            </span>
          </div>
        </b-col>
        <b-col cols="5">
          <div class="font-weight-lighter" v-if="artist.userprofile.location">
            <span
              v-if="artist.userprofile.location"
              class="lead text-grey c-artist-location"
            >
              <img
                src="../assets/location-icon.svg"
                class="c-artist-location-logo"
                height="30"
                alt="Logo"
              />
              {{ artist.userprofile.location }}
            </span>
          </div>
        </b-col>
      </b-row>

      <b-row v-if="artist.userprofile.bio" cols="12" class="mt-4 positioning">
        <b-col cols="12" sm="12" md="6">
          <p class="font-weight-lighter text-light c-artist-bio">
            {{ artist.userprofile.bio }}
          </p>
        </b-col>
        <b-col cols="12" sm="12" md="6">
          <!--<p class="text-light user-bio mb-0">{{artist.userprofile.bio}}</p>-->
        </b-col>
      </b-row>

      <div class="border-gradient l-divisor-desc-support"></div>

      <b-row
        v-if="artist.userprofile.chipin_enabled"
        cols="12"
        class="positioning"
      >
        <b-col>
          <div class="border-gradient support-gradient"></div>
        </b-col>
        <b-col
          v-if="artist.userprofile.chipin_enabled"
          cols="12"
          class="chipin-support"
        >
          <b-button
            v-if="artist.chipin_plus"
            v-b-modal="'chipin-plus-modal-' + artist.id"
            variant="link"
            class="support-btn pl-0"
          >
            <img
              src="../assets/chipin-plus-badge.png"
              alt="chipin"
              class="mr-3 support-img"
            />
          </b-button>
          <b-button
            v-else
            v-b-modal="'chipin-modal-' + artist.id"
            variant="link"
            class="support-btn"
          >
            <img
              src="../assets/chipin-badge.svg"
              height="58"
              alt="chipin"
              class="mr-3 support-img"
            />
          </b-button>
          <div class="support-artist mt-3">
            <p
              class="chipin-support-title pb-0 mt-0 pt-0 text-light font-weight-lighter"
            >
              Support this Artist Now!
            </p>
            <span
              class="tap-desktop text-light font-weight-lighter pb-0 mb-0 mt-0 pt-0 chipin-text"
              >Tap here to subscribe and unlock all this Artist’s content</span
            >
            <span
              class="tap-mobile text-light font-weight-lighter pb-0 mb-0 mt-0 pt-0 chipin-text"
              >Tap here to subscribe</span
            >
          </div>
        </b-col>
      </b-row>

      <b-row
        v-if="artist.most_listened.length > 0"
        style=""
        class="pb-4 positioning c-most-listened"
      >
        <b-col cols="12">
          <h3
            class="text-light font-weight-lighter section-title l-most-popular-songs"
          >
            Most Popular Songs
            <b-button
              variant="link"
              class="float-right text-light show-all-btn font-weight-lighter "
              >Show All</b-button
            >
          </h3>
          <div class="border-gradient"></div>
        </b-col>
        <b-col>
          <b-row id="most-popular-songs" class="overflow-auto ">
            <div
              class="card-carousel-cards c-most-popular-songs"
              :style="{
                transform: 'translateX' + '(' + currentOffset + 'px' + ')',
              }"
            >
              <b-col
                v-for="song in artist.most_listened"
                :key="song.id"
                class="text-center pr-0 c-most-popular-songs__song"
                style="display: inline-grid;"
              >
                <img
                  v-if="song.chipin_plus"
                  src="../assets/chipin+-locked-light.svg"
                  class="song-locked"
                  height="30"
                  alt="Logo"
                />
                <player
                  v-if="isOwn(request_user_id, artist.id)"
                  v-bind:image="song.song_image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.id"
                  v-bind:title="song.song_name"
                  v-bind:username="artist.username"
                ></player>
                <playerlocked
                  v-else-if="song.chipin_plus && song.locked"
                  v-bind:image="song.song_image"
                  v-bind:file="song.song_url"
                  v-bind:id="artist.userprofile.user_id"
                  v-bind:title="song.song_name"
                  v-bind:username="artist.username"
                ></playerlocked>
                <player
                  v-else
                  v-bind:image="song.song_image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.id"
                  v-bind:title="song.song_name"
                  v-bind:username="artist.username"
                ></player>
                <b-button
                  v-if="song.retrak"
                  pill
                  size="sm"
                  variant="warning"
                  class="text-uppercase text-light text-small py-0"
                  style="position: relative; top: -24px;"
                  >Re-Track</b-button
                >

                <img
                  src="../assets/trackd-icon-dark.svg"
                  class="align-top top-arrow mt-2 mb-1 c-arrow-up-disk"
                  alt="Logo"
                />

                <p
                  class="text-light pb-0 mb-0 font-weight-light small l-popular-artist-song-description"
                >
                  <router-link
                    class="text-light popular-artist-song"
                    :to="{
                      name: 'SongProfile',
                      params: { username: artist.username, id: song.id },
                    }"
                    v-html="elipsis(song.song_name, 18)"
                  ></router-link>
                  <br />
                  <span class="popular-artist-name">{{ artist.username }}</span>
                </p>
              </b-col>

              <div class="pl-4 col">
                <b-btn id="song-more-btn" class="song-more-btn">
                  <div>
                    <img src="../assets/library_show_all_icon.png" />
                    <p class="mt-1 font-weight-light">More</p>
                  </div>
                </b-btn>
              </div>
            </div>
          </b-row>
        </b-col>
      </b-row>

      <b-row
        v-if="artist.featured_tracks.length > 0"
        class="pb-3 positioning l-featured-songs"
      >
        <b-col>
          <h3 class="text-light font-weight-lighter section-title">
            Featured Songs
            <b-button
              variant="link"
              class="float-right text-light show-all-btn font-weight-lighter"
              >Show All</b-button
            >
          </h3>
          <div class="border-gradient"></div>

          <b-row>
            <b-col
              cols="12"
              md="12"
              lg="12"
              xl="6"
              v-for="song in artist.featured_tracks"
              :key="song.id"
              class="text-center text-light text-left song-card c-featured-song"
            >
              <b-col md="3" sm="4" lg="2" xl="4" class="pr-0">
                <player
                  v-if="isOwn(request_user_id, artist.id)"
                  v-bind:image="song.image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.id"
                  v-bind:title="song.name"
                  v-bind:username="song.username"
                  v-bind:queue="artist.featured_tracks"
                ></player>
                <playerlocked
                  v-else-if="song.chipin_plus && song.locked"
                  v-bind:image="song.image"
                  v-bind:file="song.song_url"
                  v-bind:id="artist.userprofile.user_id"
                  v-bind:title="song.name"
                  v-bind:username="song.username"
                  v-bind:queue="artist.featured_tracks"
                ></playerlocked>
                <player
                  v-else
                  v-bind:image="song.image"
                  v-bind:file="song.song_url"
                  v-bind:id="song.id"
                  v-bind:title="song.name"
                  v-bind:username="song.username"
                  v-bind:queue="artist.featured_tracks"
                ></player>
              </b-col>

              <b-col cols="9" md="9" sm="8" lg="10" xl="8">
                <div class="feature-div" style="margin-bottom: -10px">
                  <div class="feature-left float-left text-left">
                    <p
                      class="text-light pb-0 mb-0 font-weight-light song-header"
                    >
                      <img
                        v-if="song.chipin_plus"
                        src="../assets/chipin+-locked-light.png"
                        class="align-top"
                        height="30"
                        alt="Logo"
                      />
                      <router-link
                        class="text-light song-name"
                        :to="{
                          name: 'SongProfile',
                          params: { username: artist.username, id: song.id },
                        }"
                        v-html="elipsis(song.name, 16)"
                      ></router-link>
                    </p>
                  </div>
                  <div class="float-right c-song-indicators">
                    <img
                      v-if="song.liked"
                      src="../assets/heart-filled.svg"
                      @click="unlikeSong(song)"
                      width="32"
                      height="30"
                      class="text-danger more-icons heart"
                    />
                    <img
                      v-if="!song.liked"
                      src="../assets/heart.svg"
                      @click="likeSong(song)"
                      width="30"
                      height="30"
                      class="text-light more-icons heart"
                    />
                    <font-awesome-icon
                      size="2x"
                      icon="ellipsis-h"
                      class="text-light more-icons three-dots"
                    />
                  </div>
                </div>
                <div class="feature-div">
                  <div class="feature-left float-left text-left">
                    <p class="mb-2 mt-2">
                      <b-button
                        v-if="song.rt_badge"
                        pill
                        size="sm"
                        variant="warning"
                        class="text-uppercase text-light song-btns mr-1 rtcl-btns"
                        >RT</b-button
                      >
                      <b-button
                        v-if="song.cl_badge"
                        pill
                        size="sm"
                        variant="warning"
                        class="text-uppercase text-light song-btns ml-1 rtcl-btns"
                        >CL</b-button
                      >

                      <span class="artist-name ml-2">{{ song.username }}</span>
                    </p>
                  </div>
                  <div class="float-right mt-2 mb-2">
                    <b-button
                      v-if="song.explicit"
                      size="sm"
                      variant="outline-light"
                      class="text-uppercase text-light rounded-5 song-btns py-0 btn-18"
                      >18</b-button
                    >
                    <p class="pb-0 mb-0 likes-count float-right">
                      {{ song.likes }}
                    </p>
                  </div>
                </div>
                <div class="feature-div">
                  <div class="feature-left float-left text-left">
                    <p class="song-des font-weight-lighter text-left">
                      {{ song.description }}
                    </p>
                  </div>
                  <div class="float-right">
                    <img
                      v-if="song.reward"
                      src="../assets/song-recorder.svg"
                      blank-color="#ccc"
                      height="75"
                      width="60"
                      class="img-fluid song-recorder"
                      alt="placeholder"
                    />
                  </div>
                </div>
              </b-col>
            </b-col>
            <b-col cols="12" class="text-center mt-0">
              <b-btn class="view-song-btn">View all songs</b-btn>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="section-spacing positioning">
        <b-col>
          <h3 class="text-light font-weight-lighter section-title">
            Genre
          </h3>
          <div class="border-gradient"></div>

          <div class="overflow-auto">
            <ul
              v-if="artist.genres.length > 0"
              class="list-inline wrap l-desktop-genres"
            >
              <b-button
                v-for="(tag, index) in artist.genres"
                :key="index"
                size="lg"
                variant="outline-light"
                class="m-2 genre-box font-weight-light"
              >
                {{ tag.tag }}
              </b-button>
            </ul>
            <div
              v-if="artist.genres.length > 0"
              class="l-mobile-genres row overflow-auto"
            >
              <div
                v-for="(tag, index) in artist.genres"
                :key="index"
                class="text-light"
              >
                <img
                  src="../assets/hash-tag.svg"
                  class=""
                  style="margin-left:10px;"
                  height="15 "
                  alt="Logo"
                />
                {{ tag.tag }}
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-4 positioning l-comments-section">
        <b-col class="text-light">
          <h3 class="text-light font-weight-lighter section-title">
            Comments
          </h3>
          <div class="border-gradient"></div>

          <div v-if="artist.comments.length > 0">
            <p
              class="comment-des font-weight-lighter"
              v-for="{ comment, i } in artist.comments"
              :key="i"
            >
              "{{ comment }}"
            </p>
          </div>
          <p v-else class="comment-des">No comments yet</p>
        </b-col>
      </b-row>

      <b-row v-if="artist.userprofile.chipin_enabled" class=" positioning">
        <b-col class="text-light l-hall-of-fame">
          <h3 class="text-light font-weight-lighter section-title">
            ChipIn<span class="c-chipin-copyright__title">&reg;</span> Wall of
            Fame
          </h3>
          <div class="border-gradient"></div>

          <div class="font-weight-normal c-chipin-description pb-3">
            Show your appreciation to this Artist.
            <chipin-link>ChipIn&reg; Now!</chipin-link>
          </div>
          <h3 class="recent-text font-weight-light">Recent Contributors</h3>

          <br />
          <b-row
            v-for="(chipin, i) in artist.chipin_transactions"
            :key="i"
            class="l-wall-of-fame"
          >
            <b-col cols="4" sm="3" md="3" class="contrib-left">
              <p
                class="text-light font-weight-lighter"
                :style="'opacity: ' + (100 - i * 18) + '%;'"
              >
                {{ chipin.username }}
              </p>
            </b-col>
            <b-col cols="4" sm="3" md="3" class="contrib-middle">
              <p
                class="text-light font-weight-lighter"
                :style="'opacity: ' + (100 - i * 18) + '%;'"
              >
                {{ chipin.location }}
              </p>
            </b-col>
            <b-col cols="4" sm="3" md="3" class="contrib-right">
              <p
                class="text-light font-weight-lighter"
                :style="'opacity: ' + (100 - i * 18) + '%;'"
              >
                {{ chipin.amount }}
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-4 positioning pb-6">
        <b-col class="text-light">
          <h3 class="text-light font-weight-lighter section-title">
            Artist Information
          </h3>
          <div class="border-gradient"></div>

          <ul class="list-unstyled ">
            <li class="font-weight-lighter c-artist-information">
              <span class="mb-0 pb-0">Copyright: {{ artist.copyright }}</span>
            </li>
            <li
              v-if="artist.publisher"
              class="font-weight-lighter c-artist-information"
            >
              <span class="mb-0 pb-0">Publisher: {{ artist.publisher }}</span>
            </li>
            <li
              v-if="artist.rights_society"
              class="font-weight-lighter c-artist-information"
            >
              <span class="mb-0 pb-0">
                Rights Society: {{ artist.rights_society }}
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>

      <chipin
        v-if="artist.userprofile.chipin_enabled && !artist.chipin_plus"
        v-bind:user_id="artist.id"
        v-bind:username="artist.username"
      ></chipin>
      <chipinplus
        v-if="artist.userprofile.chipin_enabled && artist.chipin_plus"
        v-bind:user_id="artist.id"
        v-bind:username="artist.username"
      ></chipinplus>
      <chipinplustellmemore
        v-if="artist.userprofile.chipin_enabled && artist.chipin_plus"
      ></chipinplustellmemore>

      <chipinsuccess
        v-if="$route.query.success && !$route.query.chipinplus"
      ></chipinsuccess>
      <chipincancel
        v-if="$route.query.cancel && !$route.query.chipinplus"
      ></chipincancel>

      <chipinplussuccess
        v-if="$route.query.success && $route.query.chipinplus"
        v-bind:photo="artist.userprofile.photo"
      ></chipinplussuccess>
      <chipinpluscancel
        v-if="$route.query.cancel && $route.query.chipinplus"
        v-bind:photo="artist.userprofile.photo"
      ></chipinpluscancel>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import player from "../components/player.vue";
import playerlocked from "../components/player-locked.vue";
import chipin from "../components/chipin.vue";
import chipinsuccess from "../components/chipin-success.vue";
import chipincancel from "../components/chipin-cancel.vue";
import chipinplus from "../components/chipinplus.vue";
import chipinplustellmemore from "../components/chipinplus-tellmemore.vue";
import chipinplussuccess from "../components/chipinplus-success.vue";
import chipinpluscancel from "../components/chipinplus-cancel.vue";

export default {
  name: "Artist",
  data() {
    return {
      loaded: false,
      artist: null,
      liked: null,
    };
  },
  components: {
    player,
    playerlocked,
    chipin,
    chipinsuccess,
    chipincancel,
    chipinplus,
    chipinplustellmemore,
    chipinplussuccess,
    chipinpluscancel,
  },
  methods: {
    ...mapActions("Artist", {
      artistapi: "artist",
      artistwebapi: "artistweb",
    }),
    ...mapActions("User", ["like_user", "unlike_user"]),
    ...mapActions("Song", ["like_song", "unlike_song"]),

    followArtist() {
      this.artist.liked = true;
      this.like_user(this.artist.id);
    },
    unfollowArtist() {
      this.artist.liked = false;
      this.unlike_user(this.artist.id);
    },
    likeSong(song) {
      song.liked = true;
      this.like_song(song.id);
    },
    unlikeSong(song) {
      song.liked = false;
      this.unlike_song(song.id);
    },
    handleScroll(event) {
      console.log(event);
    },
  },

  computed: {
    ...mapGetters("Generic", { random_colour: "getColour" }),
  },
  mounted() {
    var id = this.$route.params.id;

    if (this.$route.name === "Artist") {
      this.artistapi(id)
        .then((res) => {
          this.artist = res.data;
          this.loaded = true;

          console.log("Here");
          console.log(res.data);
          this.liked = res.data.liked;
        })
        .catch((error) => {
          error;
          this.$router.replace("/error");
          //console.log(error);
        });
    } else {
      this.artistwebapi(id)
        .then((res) => {
          this.artist = res.data;
          this.loaded = true;

          console.log("Here 2");
          console.log(res.data);
          this.liked = res.data.liked;
        })
        .catch((error) => {
          error;
          this.$router.replace("/error");
          //console.log(error);
        });
    }
  },
  updated() {
    document
      .getElementById("most-popular-songs")
      .addEventListener("scroll", () => {
        document.getElementById("song-more-btn").style.display = "inline-flex";
      });
  },
};
</script>

<style scoped>
.c-collab-badge {
  margin-left: 1rem;
}

.c-artist-header__strap-line {
  margin-top: 1rem;
}

.l-featured-songs {
  margin-top: 1.5rem;
}

.artist-profile {
  margin-top: 0.5rem;
  text-align: left;
}

.c-artist-photo {
  height: 250px;
  width: 250px;
}

.c-chipin-description {
  font-size: 1.5em;
}

.c-artist-information {
  font-size: 1.13em;
}

.c-featured-song {
  display: flex;
  width: 840px;
  min-width: 720px;
}

.c-most-popular-songs__song:not(:first-of-type) {
  padding-left: 40px;
}

.social-profiles {
  margin-top: 2rem;
}

.popular-artist-song {
  line-height: 21px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text-grey {
  color: #9b9b9b;
}

.artist-container {
  padding: 50px;
  padding-top: 18px;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.displayed-on-desktop {
  display: block;
}

.l-social-and-data.displayed-on-desktop {
  display: flex;
}

.photo-border {
  border-radius: 50%;
  border: 5px solid #000;
  box-sizing: border-box;
  margin-top: -150px;
  border: 3px solid white;
}

.border-success-2 {
  border: 2px solid #81cd5c !important;
  color: #81cd5c !important;
  font-size: 14px;
  line-height: 25px;
}

.border-danger-2 {
  border: 2px solid #e76e66 !important;
  color: #e76e66;
  font-size: 14px;
  line-height: 25px;
}

.btn-square {
  border-radius: 0;
}

.bw-2 {
  border-width: 2px;
}

.chipin-support-title {
  font-size: 2.25em;
}

.chipin-text {
  position: relative;
  top: -17px;
  font-size: 1.5em;
}

.stats-number {
  font-weight: 200;
  font-size: 48px;
  line-height: 21px;
}

.section-title {
  font-size: 2.2em;
}

.c-chipin-copyright__title {
  font-size: 21.5em;
}

.text-small {
  font-size: 0.6em;
}

.text-smaller {
  font-size: 18px;
  line-height: 21px;
}

.pb-4a,
.py-4a {
  padding-bottom: 4.5rem !important;
}

.pt-4a,
.py-4a {
  padding-top: 4.5rem !important;
}

.pb-6,
.py-6 {
  padding-bottom: 6rem !important;
}

.py-6 {
  padding-top: 6rem !important;
}

.py-8 {
  padding-bottom: 8rem !important;
}

.py-8 {
  padding-top: 8rem !important;
}

.border-gradient {
  border-top: 2px solid #fff;
  border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
  border-image-slice: 1;
  border-right: 0;
  border-bottom: 0;
  border-left: 0;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 0.8em;
}

.more-btn {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 30px;
  margin-top: 25px;
  opacity: 0.7;
}

.btn-left {
  float: left;
}

.btn-dots {
  padding: 0px;
  margin-right: 30px;
  /* margin-top: 25px; */
  float: right;
}

.c-artist-header__name {
  font-size: 80px;
  line-height: 36px;
  margin-bottom: 2%;
}

.user-type {
  font-size: 36px;
  line-height: 36px;
}

.unfollow-btn {
  background: transparent;
  border: 2px solid white;
  border-radius: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  height: 42px;
  width: 140px;
}

.follow-btn {
  height: 42px;
  width: 140px;
}

.c-comment-icon {
  width: 40px;
  margin-top: 0px;
}

.support-img {
  height: 80px;
}

.follow-group {
  position: absolute;
  bottom: 18px;
  right: 50px;
  height: 50px;
  width: 300px;
}

.stats-section {
  margin-top: 2.5em;
  justify-content: space-between;
}

.c-profile-badges {
  height: 30px;
  width: 140px;
}

.pill-badge {
  width: 180px;
  height: 30px;
  font-size: 14px;
}

.c-artist-header {
  padding-left: 35px;
  padding-right: 35px;
  background-color: rgba(0, 0, 0, 0.3);
}

.user-location {
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-overview {
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-bio {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
}

.social-bar {
  background-color: red;
}

.chipin-support {
  display: inline-flex;
  margin-top: 1em;
}

.genre-box {
  height: 50px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  font-size: 22px;
  line-height: 21px;
  padding: 0 40px 1px 40px;
}

.song-name {
  font-size: 24px;
  line-height: 23px;
}

.artist-name {
  font-weight: 200;
  font-size: 22px;
}

.song-btns {
  height: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  display: inline-flex;
  align-items: center;
}

.song-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 0;
}

.song-header {
  margin-right: 1rem;
  display: inline-flex;
  align-items: center;
}

.feature-left {
  width: 70%;
}

.likes-count {
  font-weight: normal;
  font-size: 24px;
  line-height: 21px;
}

.show-all-btn {
  font-weight: 300;
  font-size: 20px;
  margin-top: 0.5em;
}

.recent-text {
  font-weight: 300;
  font-size: 2.01em;
  line-height: 21px;
}

.artist-info {
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.152972px;
}

.comment-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 1.5em;
}

chipin-link {
  text-decoration: underline;
}

.feature-div {
  display: inline-block;
  width: 100%;
}

.genre-badge {
  display: none;
}

.song-card {
  padding: 10px 0;
  margin-bottom: 25px;
}

.song-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  cursor: pointer;
}
.popular-artist-name {
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: #9b9b9b;
}

.song-locked {
  position: absolute;
  right: 6px;
  top: 6px;
  z-index: 100;
}
.support-gradient {
  display: none;
}
.tap-mobile {
  display: none;
}
.rtcl-btns {
  background-color: #f2b471;
  border-radius: 20px !important;
  padding-top: 5px;
}
.view-song-btn {
  display: none;
  width: 150px;
}
.card-carousel-cards {
  display: inline-flex;
}
.overflow-auto::-webkit-scrollbar {
  display: none;
}
.song-more-btn {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-left: 15px;
  border: 3px solid #4a4a4a;
  background: transparent;
  display: none;
  align-items: center;
  justify-content: center;
}

.song-more-btn img {
  height: 50px;
}

.song-more-btn > div > p {
  margin-bottom: 0;
  color: #9b9b9b;
}
.displayed-on-mobile {
  display: none;
}
.top-arrow {
  margin: auto;
  margin-bottom: 10px;
}

.l-social-and-data {
  margin-bottom: 3rem;
  margin-top: 1.5rem;
}

.c-most-listened {
  margin-top: 3rem;
}

.c-arrow-up-disk {
  height: 21px;
}

.c-song-indicators {
  display: inline-flex;
  align-items: center;
}

.more-icons.heart {
  margin-right: 24px;
}

.btn-18 {
  margin: 0 4px;
}

.l-desktop-genres {
  display: block;
}

.l-mobile-genres {
  display: none;
}

.l-comments-section {
  padding-bottom: 3rem;
}

.l-hall-of-fame {
  padding-bottom: 3rem;
}

.c-comment-icon {
  margin-right: 1rem;
}

.c-artist-bio {
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
}

.l-popular-artist-song-description {
  position: relative;
  top: -8px;
  line-height: 10px;
}

.l-wall-of-fame {
  justify-content: space-between;
}

.image-backdrop {
  height: 320px;
}

.btn-left {
  margin-top: unset;
}

.c-supporter-badge {
  margin-left: 6%;
}

@media (max-width: 768px) {
  .c-most-listened {
    margin-top: 1rem;
  }

  .c-artist-stat {
    margin-right: unset;
    padding-right: 0px;
    padding-left: 0px;
  }

  .btn-left {
    margin-top: 10px;
    margin-left: 10px;
  }

  .follow-group {
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 50px;
    width: unset;
    margin-bottom: 5%;
    padding-top: unset;
  }

  .c-profile-badges {
    padding: 0 15px 13px 15px !important;
    height: 13px;
    width: unset;
    font-size: 8px;
    line-height: 13px;
  }

  .c-artist-photo {
    height: 144px;
    width: 144px;
  }

  .more-btn {
    background-color: rgba(0, 0, 0, 0.2);
    width: 30px;
    height: 30px;
    margin-top: unset;
    margin-right: 10px;
  }

  .btn-left {
    width: 35px;
    height: 35px;
  }

  .c-artist-header__name {
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
    margin-bottom: 2%;
  }

  .c-artist-header__strap-line {
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 2%;
    margin-top: unset;
  }

  .c-btn-follow {
    height: 24px;
    width: 84px;
    font-size: 15px;
    padding: unset;
    padding-left: 20px !important;
    line-height: unset;
  }

  .c-comment-icon {
    width: 25px;
    margin-top: 0px;
    margin-right: 0.5rem;
  }

  .artist-profile {
    padding-left: unset;
    margin-top: unset;
  }

  .artist-container {
    padding: 30px;
    padding-top: 5px;
  }

  .photo-border {
    margin-top: -100px;
  }

  .stats-number {
    font-weight: 300;
    font-size: 25px;
    line-height: 21px;
  }

  .text-smaller {
    font-weight: 400;
    font-size: 9px;
    line-height: 10px;
  }

  .stats-section {
    margin-top: 1em;
    padding-right: 15%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .stats-number {
    margin-bottom: 5px;
  }

  .social-icons {
    width: 20px;
    height: 20px;
  }

  .social-profiles {
    margin-top: 0px;
  }

  .c-last-artist-login,
  .c-artist-location {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }

  .c-last-artist-login {
    margin-left: 14px;
  }

  .c-artist-location-logo,
  .c-last-artist-login-logo {
    height: 13px;
  }

  .l-social-and-data {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }

  .support-img {
    height: 35px;
    width: 111.73px;
    margin-top: 10px;
  }

  .c-artist-bio {
    font-size: 16px;
    line-height: 21px;
  }

  .chipin-support {
    margin-top: unset;
  }

  .chipin-support-title {
    font-size: 1.3em;
    margin-bottom: 15px;
  }

  .chipin-text {
    font-size: 0.8em;
  }

  .support-btn {
    padding-top: unset;
    padding-right: unset;
  }

  .section-title {
    font-size: 1.5em;
    font-weight: 300;
    line-height: 21px;
  }

  .c-chipin-copyright__title {
    font-size: 0.7em;
    font-weight: 300;
    line-height: 21px;
  }

  .show-all-btn {
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;

    margin-top: unset;
  }

  .c-most-popular-songs__song:not(:first-of-type) {
    padding-left: 16px;
  }

  .c-arrow-up-disk {
    height: 12px;
  }

  .popular-artist-song {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }

  .popular-artist-name {
    display: none;
  }

  .song-more-btn {
    margin-left: unset;
    width: 80px;
    height: 80px;
  }

  .song-more-btn img {
    height: 30px;
  }

  .song-more-btn p {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  }

  .l-featured-songs {
    margin-top: 1rem;
  }

  .song-name {
    font-size: 16px;
    line-height: 21px;
    font-weight: 700;
  }

  .song-header > img {
    margin-right: 0.5rem;
    height: 20px;
  }

  .feature-div {
    display: flex;
    justify-content: space-between;
  }

  .more-icons {
    height: 20px;
  }

  .more-icons.heart {
    margin-right: 5px;
  }

  .likes-count {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-left: 12px;
  }

  .btn-18 {
    margin-left: unset;
    margin-right: unset;
  }

  .song-btns {
    height: 16px;
  }

  .artist-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .song-recorder {
    width: 31px;
    height: 39px;
    margin-left: 32px;
  }

  .song-des {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .l-desktop-genres {
    display: none;
  }

  .l-mobile-genres {
    display: flex;
    flex-wrap: inherit;
    margin-right: 15px;
  }

  .l-mobile-genres > div {
    white-space: nowrap;
    display: contents;
  }

  .l-mobile-genres > div > img {
    margin-top: 3px;
  }

  .comment-des {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 1em;
  }

  .l-comments-section {
    padding-bottom: 1.5rem;
  }

  .c-artist-information > span,
  .recent-text,
  .contrib-left > p,
  .contrib-middle > p,
  .contrib-right > p,
  .c-chipin-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  .l-hall-of-fame {
    padding-bottom: 1rem;
  }

  .c-featured-song {
    min-width: unset;
  }

  .artist-page {
    height: 200px;
  }
  .c-collab-badge {
    margin-left: 0.2rem;
  }

  .displayed-on-mobile {
    display: block;
  }

  .displayed-on-desktop {
    display: none;
  }

  .l-social-and-data.displayed-on-desktop {
    display: none;
  }

  .l-last-access-and-social {
    justify-content: space-between;
  }

  .displayed-on-mobile.social-icons {
    margin-right: 1.3rem;
  }

  .social-icons.twitter,
  .social-icons.youtube {
    width: 22px;
    height: 22px;
  }

  .l-location-container {
    margin-top: 15px;
  }

  .image-backdrop {
    height: 200px;
  }

  .l-divisor-desc-support {
    margin-bottom: unset;
  }

  .btn-back {
    padding-top: unset;
    padding-left: unset;
  }
}

/* EXCEPTIONAL BREAKPOINT FOR VERY LOW RESOLUTION */
@media (max-width: 404px) {
  .stats-section {
    padding-right: unset;
  }

  .c-profile-badges {
    margin-left: 10%;
  }

  .artist-container {
    padding: 20px;
    padding-top: 5px;
  }

  .popular-artist-song {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
  }

  .displayed-on-mobile.social-icons {
    margin-right: 1rem;
  }
}

@media (min-width: 576px) {
  .l-desktop-genres {
    display: flex;
  }

  .l-mobile-genres {
    display: none;
  }

  .genre-box {
    height: 35px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
    white-space: nowrap;
  }

  .song-name {
    margin-left: 17px;
  }
}

@media (min-width: 768px) {
  .displayed-on-mobile {
    display: block;
  }

  .c-artist-stat {
    text-align: center;
  }

  .stats-section {
    padding-left: 5%;
  }

  .displayed-on-desktop {
    display: none;
  }

  .c-artist-header__name {
    font-size: 48px;
    font-weight: 300;
    line-height: 36px;
  }

  .c-artist-header__strap-line {
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
  }

  .c-artist-photo {
    width: 200px;
    height: 200px;
    border: 3px solid white;
  }

  .btn-left {
    margin-top: 5px;
    margin-left: 15px;
  }

  .c-profile-badges:first-child {
    margin-left: 0.7rem;
  }

  .stats-number {
    font-size: 42px;
    font-weight: 200;
    line-height: 21px;
  }

  .text-smaller {
    font-size: 16px;
    font-weight: 300;
    line-height: 18.75px;
  }

  .c-artist-stat {
    padding-right: unset;
  }

  .social-icons {
    width: 33.08px;
    height: 33.08px;
  }

  .social-icons.twitter,
  .social-icons.youtube {
    width: 35.08px;
    height: 35.08px;
  }

  .c-last-artist-login,
  .c-artist-location {
    font-size: 24px;
    line-height: 21px;
    font-weight: 400;
  }

  .c-last-artist-login {
    margin-left: 5px;
  }

  .c-artist-location-logo,
  .c-last-artist-login-logo {
    height: 30px;
  }

  .social-profiles {
    margin-top: unset;
  }

  .l-last-access-and-social {
    justify-content: space-between;
  }

  .displayed-on-mobile.social-icons {
    margin-right: 1rem;
  }

  .l-location-container {
    margin-top: 30px;
  }

  .l-social-and-data.displayed-on-desktop {
    display: none;
  }

  .c-artist-bio {
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
  }

  .support-img {
    height: 60px;
    width: 193.17px;
  }

  .chipin-support {
    margin-top: unset;
  }

  .chipin-support-title {
    font-size: 28px;
    line-height: 36px;
    font-weight: 300;
  }

  .chipin-text {
    font-size: 18px;
    line-height: 36px;
    font-weight: 300;
  }

  .section-title {
    font-size: 36px;
    line-height: 21px;
    font-weight: 200;
    margin-bottom: 1.5rem;
  }
  .c-chipin-copyright__title {
    font-size: 24px;
    font-weight: 200;
    line-height: 21px;
  }
  .c-most-listened {
    margin-top: 2rem;
  }

  .show-all-btn {
    font-weight: 300;
    font-size: 24px;
    line-height: 21px;

    margin-top: unset;
  }

  .popular-artist-song {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  .l-popular-artist-song-description {
    margin-top: 0.1rem;
  }

  .c-featured-song {
    min-width: unset;
  }

  .song-name {
    font-size: 24px;
    line-height: 21px;
    font-weight: 400;
    margin-left: 17px;
  }

  .artist-name {
    font-size: 24px;
    line-height: 21px;
    font-weight: 300;
  }

  .btn-18 {
    margin-right: 1.9rem;
  }

  .likes-count {
    margin-right: 0.6rem;
  }

  .genre-box {
    height: 35px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
  }

  .comment-des {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 1em;
  }

  .l-desktop-genres {
    white-space: nowrap;
    display: flex;
  }

  .c-btn-follow {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .c-chipin-description {
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
  }

  .recent-text {
    font-weight: 300;
    font-size: 32px;
    line-height: 21px;
  }

  .c-artist-information > span {
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
  }

  .contrib-left > p,
  .contrib-middle > p,
  .contrib-right > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
}

@media (min-width: 992px) {
  .displayed-on-mobile {
    display: block;
  }

  .displayed-on-desktop {
    display: none;
  }

  .l-social-and-data.displayed-on-desktop {
    display: none;
  }

  .c-artist-header__name {
    font-size: 60px;
    font-weight: 300;
    line-height: 36px;
  }

  .c-artist-header__strap-line {
    font-size: 28px;
    font-weight: 300;
    line-height: 36px;
  }

  .btn-dots {
    margin-top: 12px;
  }

  .c-btn-follow {
    width: 132px;
    height: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28.13px;
    padding-top: 3px;
  }

  .c-artist-stat {
    padding-right: 0px;
    padding-left: 0px;
  }

  .c-artist-photo {
    width: 200px;
    height: 200px;
  }

  .l-last-access-and-social {
    justify-content: space-between;
  }

  .social-icons {
    width: 33.08px;
    height: 33.08px;
  }

  .social-icons.twitter,
  .social-icons.youtube {
    width: 35.08px;
    height: 35.08px;
  }

  .displayed-on-mobile.social-profiles {
    margin-top: unset;
    width: 16rem;
    justify-content: space-between;
    display: flex;
  }

  .l-location-container {
    margin-top: 20px;
  }

  .show-all-btn {
    font-size: 24px;
    font-weight: 300;
    line-height: 21px;
  }

  .popular-artist-name {
    line-height: 24px;
  }

  .song-recorder {
    width: 52px;
    height: 70px;
  }

  .song-name {
    line-height: 21px;
    margin-left: 16px;
  }

  .artist-name {
    font-weight: 100;
    font-size: 24px;
    line-height: 21px;
  }

  .btn-18 {
    margin-right: 1.9rem;
  }

  .likes-count {
    margin-right: 0.6rem;
  }

  .l-desktop-genres {
    white-space: nowrap;
    display: flex;
    margin-bottom: 4rem;
  }

  .genre-box {
    height: 35px;
  }

  .contrib-left > p,
  .contrib-middle > p,
  .contrib-right > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
  }
}

@media (min-width: 1200px) {
  .displayed-on-mobile {
    display: none;
  }

  .displayed-on-desktop {
    display: block;
  }

  .l-social-and-data.displayed-on-desktop {
    display: flex;
  }

  .c-artist-photo {
    width: 250px;
    height: 250px;
  }

  .c-artist-header__name {
    font-size: 60px;
    font-weight: 300;
    line-height: 36px;
  }

  .c-artist-header__strap-line {
    font-size: 28px;
    font-weight: 300;
    line-height: 36px;
  }

  .btn-dots {
    margin-top: 12px;
  }

  .c-btn-follow {
    width: 132px;
    height: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28.13px;
    padding-top: 3px;
  }

  .c-artist-stat {
    padding-right: 0px;
    padding-left: 0px;
  }

  .btn-left {
    margin-top: 2px;
  }

  .social-profiles {
    justify-content: space-between;
    align-items: flex-end;
    display: flex;
    margin-bottom: 1.2rem;
  }

  .c-last-artist-login,
  .c-artist-location {
    font-size: 24px;
    line-height: 21px;
    font-weight: 400;
  }

  .l-divisor-desc-support {
    margin-top: 20px;
  }

  .song-more-btn {
    width: 150px;
    height: 150px;
  }

  .c-featured-song {
    max-width: 50%;
  }

  .song-name {
    font-size: 24px;
    line-height: 21px;
    font-weight: 400;
    margin-left: 17px;
  }

  .btn-18 {
    margin-right: 1.85rem;
  }

  .likes-count {
    margin-right: 0.6rem;
  }

  .artist-name {
    font-size: 24px;
    line-height: 21px;
    font-weight: 200;
  }

  .genre-box {
    height: 35px;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
  }

  .contrib-left > p,
  .contrib-middle > p,
  .contrib-right > p {
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
  }

  .support-img {
    height: 80px;
    width: 260px;
  }

  .chipin-support-title {
    font-weight: 300;
    font-size: 36px;
    line-height: 48px;
  }

  .chipin-text {
    font-weight: 300;
    font-size: 24px;
    line-height: 48px;
  }

  .l-most-popular-songs {
    margin-top: 30px;
  }

  .song-recorder {
    height: 75px;
    width: 60px;
  }

  .social-icons {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 1366px) {
  .social-profiles {
    padding-left: 5rem;
  }

  .artist-profile {
    padding-right: 15%;
  }

  .song-more-btn {
    width: 160px;
    height: 160px;
  }
}
</style>
