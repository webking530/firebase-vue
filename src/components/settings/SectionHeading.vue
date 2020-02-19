<template>
  <!-- Section Heading -->
  <b-col
    cols="12"
    class="text-uppercase text-light font-weight-light mt-4 heading"
  >
    {{ name }}
    <hr class="bg-light" />
  </b-col>
</template>

<script>
export default {
  name: "SettingsSectionHeading",
  props: ["name"],
};
</script>

<style>
@media (max-width: 375px) {
  .heading {
    font-size: 13px;
    font-weight: 400;
  }

  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }
}

@media (max-width: 320px) {
  .heading {
    font-size: 13px;
    font-weight: 400;
  }

  hr {
    background: #000 !important;
    margin: 7.5px 0;
  }
}
</style>
