<template>
  <div>
    <b-container fluid>
      <div class="d-flex flex-column justify-content-center">
        <b-col class="text-center text-light">
          <chipincancel></chipincancel>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import chipincancel from "../../components/chipin-cancel.vue";

export default {
  name: "ChipInCancel",
  components: {
    chipincancel,
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
