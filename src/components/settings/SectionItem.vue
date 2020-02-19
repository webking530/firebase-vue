<template>
  <!-- Section link -->
  <b-col cols="12" class="text-light font-weight-light">
    <router-link
      :to="{ name: route_name }"
      class="text-light font-weight-light"
    >
      {{ name }}
      <img
        src="../../../assets/arrow-right.svg"
        class="float-right arrow"
        alt="Right arrow"
      />
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "SettingsSectionHeading",
  props: ["route_name", "name"],
};
</script>

<style>
.arrow {
  height: 24px;
}

@media (max-width: 375px) {
  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }

  .arrow {
    height: 18px;
  }
}
@media (max-width: 320px) {
  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }

  .arrow {
    height: 18px;
  }
}
</style>
