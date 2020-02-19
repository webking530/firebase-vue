<template>
  <b-row>
    <div class="col-12">
      <img
        src="../../assets/trackd-outline-embelem.svg"
        class="text-center mt-3 mb-5 mx-auto d-block"
        height="26"
      />
      <h1
        class="
                title
                text-light text-center
                mt-3
                mb-3
                mt-md-5
                mb-md-5
                font-weight-light
            "
      >
        {{ title }}
      </h1>
    </div>
  </b-row>
</template>

<script>
export default {
  name: "SettingsTitle",
  props: ["title"],
};
</script>

<style scoped>
.title {
  font-size: 48px;
  line-height: 36px;
}

@media (max-width: 575.98px) {
  .title {
    font-size: 36px;
    line-height: 36px;
  }
}

@media (max-width: 375px) {
  .title {
    font-size: 20px;
    line-height: 24px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 100;
  }
}
</style>
