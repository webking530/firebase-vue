<template>
  <b-row class="pb-4 positioning">
    <b-col>
      <h3 class="text-light font-weight-lighter tab-title section-heading">
        {{ section.name }}
      </h3>
      <div class="border-gradient"></div>

      <div class="c-covers-desktop overflow-auto">
        <b-row class="row-covers">
          <img
            v-if="section.back_cover_image"
            class="c-secondary-backcover"
            :src="section.back_cover_image"
          />
          <img
            v-if="section.player_extra_image"
            class="c-secondary-backcover"
            :src="section.player_extra_image"
          />
          <img
            v-if="section.player_extra_image_2"
            class="c-secondary-backcover "
            :src="section.player_extra_image_2"
          />

          <img
            v-if="section.player_extra_image_3"
            class="c-secondary-backcover"
            :src="section.player_extra_image_3"
          />
          <img
            v-if="section.player_extra_image_4"
            class="c-secondary-backcover "
            :src="section.player_extra_image_4"
          />
        </b-row>
      </div>

      <b-row class="c-covers-mobile">
        <b-col cols="6">
          <img
            v-if="section.back_cover_image"
            width="100%"
            height="100%"
            :src="section.back_cover_image"
          />
        </b-col>
        <b-col cols="6">
          <b-row cols="12" class="c-secondary-images">
            <b-col cols="6" class="pl-0 covers-column">
              <img
                v-if="section.player_extra_image"
                class="c-secondary-backcover"
                :src="section.player_extra_image"
              />
              <img
                v-if="section.player_extra_image_2"
                class="c-secondary-backcover under-image"
                :src="section.player_extra_image_2"
              />
            </b-col>
            <b-col cols="6" class="pl-0 covers-column">
              <img
                v-if="section.player_extra_image_3"
                class="c-secondary-backcover"
                :src="section.player_extra_image_3"
              />
              <img
                v-if="section.player_extra_image_4"
                class="c-secondary-backcover under-image"
                :src="section.player_extra_image_4"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SongBackCoverSection",
  props: ["section"],
};
</script>

<style>
.c-secondary-backcover {
  height: 100%;
  width: 100%;
}

.c-covers-desktop {
  display: flex;
}

.row-covers {
  display: inline-flex;
  flex-wrap: nowrap;
}

@media (min-width: 576px) {
  .covers-column {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    display: flex;
  }

  .c-covers-mobile {
    display: none;
  }

  .c-secondary-backcover {
    width: 160px;
    height: 160px;
    margin-right: 20px;
  }

  .c-secondary-backcover.under-image {
    margin-top: 10px;
  }

  .overflow-auto::-webkit-scrollbar {
    display: none;
  }
}

@media (min-width: 991.99px) {
  .c-secondary-backcover {
    width: 220px;
    height: 220px;
    margin-right: 30px;
  }
}

@media (max-width: 1200px) {
  .c-covers-desktop {
    margin-top: 40px;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .c-secondary-backcover {
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }
}

@media (max-width: 576px) {
  .covers-column {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    display: flex;
  }

  .c-covers-mobile {
    display: flex;
  }

  .c-covers-desktop {
    display: none;
  }

  .c-secondary-backcover.under-image {
    margin-top: 10px;
  }

  .c-secondary-images {
    height: 100%;
  }
}
</style>
