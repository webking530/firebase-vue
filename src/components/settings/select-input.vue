<template>
  <b-form-select
    :options="this.options"
    v-bind:value="this.value"
    v-on:change="$emit('change', $event, type, false)"
    v-on:input="$emit('input', $event)"
    class="select-input"
  ></b-form-select>
</template>

<script>
export default {
  name: "SettingsSelectInput",
  props: ["value", "options", "type"],
};
</script>

<style>



.select-input {
  background: #0E0E0F url("../../assets/select-box-arrow.svg") no-repeat right
    0.75rem center/20px 15px !important;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
  text-align: left !important;
  text-align-last: left !important;
}


</style>
