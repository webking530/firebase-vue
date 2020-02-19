<template>
  <div>
    <b-container fluid>
      <div class="d-flex flex-column justify-content-center">
        <chipinsuccess></chipinsuccess>
      </div>
    </b-container>
  </div>
</template>

<script>
import chipinsuccess from "../../components/chipin-success.vue";

export default {
  name: "ChipInSuccess",
  components: {
    chipinsuccess,
  },
};
</script>

<style scoped>
.image-backdrop {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
