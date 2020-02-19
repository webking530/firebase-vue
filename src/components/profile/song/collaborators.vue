<template>
  <b-row
    id="most-listened"
    style=""
    class="section-spacing positioning collabs-section"
  >
    <b-col cols="12">
      <h3 class="text-light font-weight-lighter section-heading">
        {{ section.name }}
      </h3>
      <div class="border-gradient"></div>
    </b-col>
    <b-col>
      <b-row v-if="section.collaborators.length > 0" class="behind-track">
        <div
          v-for="(col, i) in section.collaborators"
          :key="col.user_id"
          class=" c-collab"
        >
          <img :src="col.user_photo" class="behind-img" />
          <b-button
            pill
            size="sm"
            :class="'color-' + (i + 1)"
            class="text-uppercase
              text-light c-tag-collab"
            >{{ col.role }}</b-button
          >
        </div>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongBehindTheTrackSection",
  props: ["section"],
};
</script>

<style scoped>
.popular-artist-song {
  line-height: 21px;
}

.artist-page {
  margin-top: -200px;
}
.artist-container {
  padding: 50px;
  margin-top: -20px;
}

p {
  font-size: 1.2em;
}

.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.photo-border {
  border-radius: 50%;
  /* border: 5px solid #000; */
  box-sizing: border-box;
  margin-top: -100px;
}

.border-success-2 {
  border: none !important;
  color: white !important;
  background-color: #f2b471;
  font-size: 14px;
  line-height: 21px;
  padding: 1% 8% 1% 8% !important;
  font-weight: 500;
}

.border-danger-2 {
  border: none !important;
  color: white !important;
  background-color: #f2b471;
  font-size: 14px;
  line-height: 21px;
  padding: 1% 7% 1% 8% !important;
  font-weight: 500;
}

.stats-number {
  font-weight: 200;
  font-size: 48px;
  line-height: 21px;
}

.text-small {
  font-size: 0.6em;
}

.text-smaller {
  font-weight: 300 !important;
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

.pb-5,
.py-5 {
  padding-bottom: 5rem !important;
}

.pt-5,
.py-5 {
  padding-top: 5rem !important;
}

.pb-6,
.py-6 {
  padding-bottom: 6rem !important;
}

.pt-6,
.py-6 {
  padding-top: 6rem !important;
}

.pb-8,
.py-8 {
  padding-bottom: 8rem !important;
}

.pt-8,
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

.user-name {
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
  height: 50px;
}

.follow-btn {
  height: 50px;
}

.comment-icon {
  width: 40px;
  margin-top: 10px;
}

.follow-group {
  position: absolute;
  bottom: 30px;
  right: 50px;
  height: 50px;
}

.stats-section {
  margin-top: 2.5em;
  /* padding-left: 0px;
        margin-left: -40px; */
}

.song-recorder-icon {
  margin-top: -10px;
}

.user-info {
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
}

.user-location {
  font-size: 24px;
  line-height: 21px;
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-overview {
  font-size: 24px;
  line-height: 21px;
  font-weight: normal;
  color: #9b9b9b;
  display: inline-flex;
  align-items: center;
}

.user-bio {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #9b9b9b;
  margin-top: 1.5em;
}
.section-spacing {
  margin-top: 40px;
  padding-bottom: 3em;
}
.section-heading {
  padding-bottom: 0.5em;
}
.support-artist {
  font-weight: 300;
  color: white;
  line-height: 45px;
}

.support-artist > p {
  font-size: 36px;
  margin-bottom: 0;
}

.support-artist > span {
  font-size: 24px;
}

.chipin-support {
  display: inline-flex;
}

.tab-title {
  font-weight: 200 !important;
  font-size: 36px !important;
  line-height: 21px !important;
}

.genre-box {
  height: 50px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 21px;
}

.song-name {
  font-size: 24px;
  line-height: 21px;
}

.artist-name {
  font-weight: 200;
  font-size: 24px;
  line-height: 21px;
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
  display: inline-flex;
  align-content: center;
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
  font-size: 24px;
  line-height: 21px;
}

.text-normal {
  font-weight: normal;
  font-size: 24px;
  line-height: 21px;
}

.text-lighter {
  font-weight: 200;
  font-size: 24px;
  line-height: 21px;
}

.recent-text {
  font-weight: 300;
  font-size: 32px;
  line-height: 21px;
}

.op-80 {
  opacity: 80%;
}

.op-60 {
  opacity: 60%;
}

.op-40 {
  opacity: 40%;
}

.op-20 {
  opacity: 20%;
}

.op-0 {
  opacity: 10%;
}

.artist-info {
  font-weight: normal !important;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.152972px;
  color: #9b9b9b;
}

.comment-des {
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 1.5em;
  color: #9b9b9b;
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
  padding-top: 10px;
  margin-bottom: 10px;
}

.song-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  cursor: pointer;
}
.popular-artist-name {
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #9b9b9b;
}
.mobile-social-icons {
  display: none;
}
.chipin_mobile {
  display: none;
}
.tap-mobile {
  display: none;
}
.rtcl-btns {
  background-color: #f5a623;
  border-radius: 20px !important;
}
.view-song-btn {
  display: none;
}

.c-collab {
  display: flex;
  justify-content: center;
  margin-right: 1rem;
}
.card-carousel-cards {
  display: inline-flex;
}
.song-more-btn {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: 15px;
  border: 3px solid #4a4a4a;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.song-more-btn > div > p {
  margin-bottom: 0;
  color: #9b9b9b;
}
.user-profile-mobile {
  display: none;
}
.retrack-btn {
  position: relative;
  top: -24px;
  background-color: #f5a623 !important;

  width: auto;
}
.behind-track {
  margin-left: 5px;
  justify-content: flex-start;
}
.behind-btn {
  margin-top: -5%;
  font-weight: 500;
  font-size: 12px !important;
  line-height: 18px;
  border: none;
}
.behind-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.color-1 {
  background: #00afdc;
}
.color-2 {
  background: #f2b471;
}
.color-3 {
  background: #81cd5c;
}
.color-4 {
  background: #e76a66;
}
.genre-tag {
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.33px;
  color: #9b9b9b;
  display: none;
}
.song-download-mobile {
  display: none;
}
.song-heart-mobile {
  display: none;
}

.c-tag-collab {
  position: absolute;
  bottom: 0;
}

@media (min-width: 991.99px) {
  .behind-img {
    width: 160px;
    height: 160px;
  }

  .c-collab {
    margin-right: 30px;
  }

  .c-tag-collab {
    font-size: 14px;
    line-height: 0px;
    font-weight: 500;

    height: 25px;
  }
}

@media (max-width: 1199.98px) {
  .photo-border {
    height: 220px;
    width: 220px;
  }
  .artist-container {
    margin-top: 0;
  }
  .artist-profile {
    margin-top: -30px;
  }
  .chipin-icons {
    margin-top: -30px;
  }
  .user-name {
    font-size: 60px;
  }
  .user-type {
    font-size: 30px;
  }
  .border-success-2 {
    font-size: 12px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 12px;
    line-height: 10px;
  }
  .stats-number {
    font-size: 40px;
  }
  .font-weight-lighter {
    font-size: 15px;
  }
  .user-overview,
  .user-location,
  .user-bio,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 20px;
  }
  .support-img {
    height: 60px;
  }
  .support-artist {
    line-height: 30px;
  }
  .support-artist > p {
    font-size: 30px;
  }
  .support-artist > span {
    font-size: 20px;
  }
  .tab-title {
    font-size: 30px !important;
  }
  .song-header > img {
    height: 24px;
  }
  .song-des {
    font-size: 15px;
  }
  .song-btns {
    font-size: 12px;
  }
  .recent-text {
    font-size: 28px;
  }
  .social-icons {
    height: 35px;
  }
  .user-overview > img,
  .user-location > img {
    height: 20px;
  }
  .mobile-social-icons {
    display: none;
  }
  .song-more-btn {
    width: 180px;
    height: 180px;
  }
  .song-more-btn > div > img {
    height: 40px;
  }
  .song-more-btn > div > p {
    font-size: 18px;
    line-height: 14px;
  }
  .song-recorder-icon {
    width: 50px;
  }
  .section-heading {
    font-size: 36px;
    font-weight: 200;
    line-height: 21px;
  }
}
@media (max-width: 991.98px) {
  .photo-border {
    height: 200px;
    width: 200px;
  }
  .artist-profile {
    margin-top: -40px;
  }
  .chipin-icons {
    margin-top: -40px;
  }
  .user-name {
    font-size: 50px;
  }
  .user-type {
    font-size: 25px;
  }
  .border-success-2 {
    font-size: 12px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 12px;
    line-height: 10px;
  }
  .stats-number {
    font-size: 36px;
  }
  .font-weight-lighter {
    font-size: 12px;
  }
  .user-overview,
  .user-location,
  .user-bio,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .comment-des,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 16px;
  }
  .support-img {
    height: 48px;
  }
  .support-artist {
    line-height: 24px;
  }
  .support-artist > p {
    font-size: 24px;
  }
  .support-artist > span {
    font-size: 18px;
  }
  .tab-title {
    font-size: 24px !important;
  }
  .song-header > img {
    height: 20px;
  }
  .song-des {
    font-size: 12px;
  }
  .song-btns {
    font-size: 10px;
  }
  .recent-text {
    font-size: 24px;
  }
  .social-icons {
    height: 30px;
  }
  .user-overview > img,
  .user-location > img {
    height: 18px;
  }
  .mobile-social-icons {
    display: none;
  }
  .song-more-btn {
    width: 100px;
    height: 100px;
  }
  .song-more-btn > div > img {
    height: 20px;
  }
  .song-more-btn > div > p {
    font-size: 14px;
    line-height: 14px;
  }
  .song-recorder-icon {
    width: 45px;
  }
  .section-heading {
    font-size: 36px;
    font-weight: 200;
    line-height: 21px;
  }
}
@media (max-width: 852.98px) {
  .social-icons {
    height: 27px;
  }
}
@media (max-width: 802px) {
  .social-icons {
    height: 25px;
  }
}
@media (max-width: 769px) {
  .social-icons {
    height: 20px;
  }
}
@media (max-width: 767.98px) {
  .photo-border {
    height: 180px;
    width: 180px;
  }
  .artist-profile {
    margin-top: -50px;
  }
  .chipin-icons {
    display: none;
  }
  .user-name {
    font-size: 36px;
  }
  .user-type {
    font-size: 20px;
  }
  .border-success-2 {
    font-size: 10px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 10px;
    line-height: 10px;
  }
  .stats-number {
    font-size: 30px;
  }
  .font-weight-lighter {
    font-size: 10px;
  }
  .user-overview,
  .user-location,
  .user-bio,
  .show-all-btn,
  .song-name,
  .genre-box,
  .artist-name,
  .likes-count,
  .text-normal,
  .text-lighter,
  .artist-info,
  .popular-artist-name {
    font-size: 14px;
  }
  .support-img {
    height: 40px;
  }
  .support-artist {
    line-height: 20px;
  }
  .support-artist > p {
    font-size: 20px;
  }
  .support-artist > span {
    font-size: 12px;
  }
  .tab-title {
    font-size: 20px !important;
  }
  .song-header > img {
    height: 16px;
  }
  .song-des {
    font-size: 12px;
  }
  .song-btns {
    font-size: 8px;
  }
  .recent-text {
    font-size: 18px;
  }
  .more-icons {
    font-size: 1em;
  }
  .follow-group {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
  }
  .unfollow-btn {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
    padding-top: 5px;
  }
  .follow-btn {
    font-size: 18px;
    line-height: 18px;
    height: 30px;
  }
  .chipin-img {
    display: none;
  }
  .social-icons {
    height: 25px;
  }
  .user-overview {
    width: 100%;
  }
  .user-location {
    width: 100%;
  }
  .user-overview > img,
  .user-location > img {
    height: 15px;
  }
  .mobile-social-icons {
    display: block;
  }
  .song-more-btn {
    width: 100px;
    height: 100px;
  }
  .song-more-btn > div > img {
    height: 20px;
  }
  .song-more-btn > div > p {
    font-size: 14px;
    line-height: 14px;
  }
  .user-profile-desktop {
    display: none;
  }
  .user-profile-mobile {
    display: flex;
  }
  .song-recorder-icon {
    width: 40px;
  }
  .section-heading {
    font-size: 1.5em;
    font-weight: 300;
    line-height: 21px;
  }
}
@media (max-width: 575.98px) {
  .image-backdrop {
    height: 200px;
  }
  .mobile-header-padding {
    padding-top: 100px;
  }
  .mobile-header-buttons {
    transform: translateY(170%);
  }
  .photo-border {
    width: 140px;
    height: 140px;
    margin-top: -80px;
    border: 3px solid white;
  }
  .artist-profile {
    margin-top: -20px;
  }
  .artist-profile > .mt-4 {
    margin-top: 10px !important;
  }
  .follow-group {
    right: 20px;
  }
  .artist-container {
    /* margin-top: 100px; */
    padding: 20px;
  }
  .user-info {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    /* height: 250px; */
  }
  .more-btn {
    width: 30px;
    height: 30px;
    padding: 5px;
    background: rgba(0, 0, 0, 0.2);
    margin-top: -50px;
  }
  .btn-dots {
    padding: 0px;
    margin-right: 10px;
    /* margin-top: 25px; */
    float: right;
  }
  .user-name {
    font-size: 28px;
    /* margin-top: -50px; */
  }
  .user-type {
    font-size: 16px;
    margin-top: -15px;
  }
  .follow-group {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
    margin-bottom: 10px;
  }
  .unfollow-btn {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
    padding-top: 2px;
  }
  .follow-btn {
    font-size: 15px;
    line-height: 18px;
    height: 25px;
  }
  .comment-icon {
    width: 30px;
    margin-top: 0px;
  }
  .border-success-2 {
    font-size: 8px;
    line-height: 10px;
  }

  .border-danger-2 {
    font-size: 8px;
    line-height: 10px;
  }
  .stats-number {
    font-size: 25px;
    font-weight: 300;
    color: #9b9b9b;
    margin-bottom: 5px;
  }
  .mobile-stats-section {
    margin-top: 1em;
    padding-right: 10px;
  }
  .mobile-stat {
    padding-left: 10px;
  }
  .text-smaller {
    font-size: 9px;
    line-height: 11px;
    color: #9b9b9b;
  }
  .user-overview {
    width: 100%;
    font-size: 14px;
  }
  .user-overview > img,
  .user-location > img {
    height: 13px;
  }
  .user-location {
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
  }
  .user-bio {
    font-size: 16px;
    color: #9b9b9b !important;
    font-weight: 400;
    line-height: 21px;
  }
  .section-spacing {
    margin-top: 20px;
    padding-bottom: 1em;
  }
  .section-heading {
    padding-bottom: 0.2em;
  }
  .support-img {
    height: 35px;
  }
  .support-artist {
    line-height: 20px;
    color: #9b9b9b !important;
  }
  .support-artist > p {
    font-size: 19px;
  }
  .support-artist > span {
    font-size: 12px;
  }
  .tab-title {
    font-size: 24px !important;
    color: #9b9b9b !important;
    font-weight: 300 !important;
  }
  .song-header > img {
    height: 20px;
  }
  .song-name {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.174825px;
  }
  .song-btns {
    font-size: 8px;
  }
  .song-likes {
    font-size: 11px;
    color: #9b9b9b !important;
    font-weight: 300;
    border: 1px solid #9b9b9b;
    padding-left: 5px;
    padding-right: 5px;
  }
  .artist-name {
    font-size: 14px;
    font-weight: normal;
    color: #9b9b9b;
    letter-spacing: 0.152972px;
  }
  .border-gradient {
    border-top: 2px solid #fff;
    border-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.1)) 1 40%;
    border-image-slice: 1;
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
    width: 100%;
    margin-bottom: 0.8em;
    margin-top: 0.8em;
  }
  .song-des {
    font-size: 14px;
    letter-spacing: 0.152972px;
  }
  .show-all-btn,
  .likes-count,
  .text-normal,
  .recent-text,
  .artist-info,
  .popular-artist-name {
    font-size: 14px;
  }
  .comment-des {
    font-size: 16px;
    font-weight: 400;
  }
  .more-icons {
    height: 20px;
    font-size: 1em;
  }
  .genre-box {
    display: none;
  }
  .genre-badge {
    display: inline-block;
  }
  .genre-badge > .badge {
    background: rgba(216, 216, 216, 0.5);
    border-radius: 5px;
    width: 20px;
    padding: 3px !important;
    color: #9b9b9b !important;
    font-weight: 900 !important;
    font-size: 13px !important;
  }
  .text-lighter {
    font-size: 13px;
  }
  .contrib-middle {
    text-align: center;
  }
  .contrib-right {
    text-align: right;
  }
  .social-icons {
    height: 20px;
  }
  .chipin-desktop {
    display: none;
  }
  .chipin-mobile {
    display: block;
  }
  .tap-desktop {
    display: none;
  }
  .tap-mobile {
    display: block;
  }
  .view-song-btn {
    display: block;
    border-radius: 10px;
    border: 1px solid #9b9b9b;
    font-size: 14px;
    line-height: 21px;
    background: transparent;
    font-weight: 300;
    margin: auto;
  }
  .song-more-btn {
    width: 80px;
    height: 80px;
  }
  .song-more-btn > div > p {
    font-size: 12px;
    line-height: 14px;
  }
  .popular-artist-song {
    font-weight: normal;
    font-size: 12px;
    font-family: "SFUI";
    line-height: 10px;
    margin-top: 0px;
  }
  .popular-artist-name {
    display: none;
  }
  .popular-song {
    color: white !important;
  }
  .rtcl-btns {
    height: 16px;
  }
  .song-recorder {
    width: 31px;
    height: 39px;
    border: 1px solid #f5a623;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .top-arrow {
    height: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .behind-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .behind-btn {
    padding: 0;
    font-size: 8px !important;
  }
  .listener-mobile {
    display: none;
  }
  .song-recorder-icon {
    width: 30px;
    margin-top: 0px;
  }
  .genre-tag {
    display: block;
  }
  .song-download-mobile {
    display: block;
  }
  .song-heart-mobile {
    display: block;
  }
  .song-rheart-mobile {
    display: block;
  }
  .song-r-mobile {
    display: none;
  }

  .collabs-section {
    margin-bottom: 20px;
  }

  .c-tag-collab {
    font-size: 8px;
    line-height: 0px;
    font-weight: 700;

    height: 13px;
  }
}
@media (max-width: 349px) {
  .photo-border {
    width: 100px !important;
    height: 100px !important;
  }
  .border-danger-2 {
    padding: 1% !important;
  }
  .border-success-2 {
    padding: 1% !important;
  }
}
</style>
