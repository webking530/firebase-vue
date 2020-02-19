<template>
  <b-container fluid>
    <b-row>
      <b-col
        cols="2"
        class="col-2"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        <b-button
          variant="link"
          class="mt-2 pl-0 ml-0 mt-md-4 ml-md-3 pb-0 pr-0"
          @click="$router.go(-1)"
        >
          <img
            src="../../assets/back-icon-light.svg"
            class="align-top back-icon-settings"
            alt="Logo"
          />
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SettingsBanner",
};
</script>

<style scoped>

.back-icon-settings {
  height: 35px;
}

@media (max-width: 575.98px) {

  .back-icon-settings {
    height: 30px;
  }
  
}

@media (max-width: 375px) {

  .back-icon-settings {
    height: 25px;
  }
  
}

@media (max-width: 320px) {

  .back-icon-settings {
    height: 25px;
  }
  
}
</style>
