<template>
  <b-form-textarea
    id="textarea"
    v-bind:value="value"
    v-on:change="$emit('change', $event, type, false)"
    v-on:input="$emit('input', $event)"
    :rows="this.rows"
    :max-rows="this.max_rows"
    class="text-area-input"
  ></b-form-textarea>
</template>

<script>
export default {
  name: "SettingsTextAreaInput",
  props: ["value", "placeholder_text", "type", "rows", "max_rows"],
};
</script>

<style>
.text-area-input {
  background-color: #0E0E0F;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #0E0E0F;
  color: #9b9b9b;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #9b9b9b;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9b9b9b;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9b9b9b;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #9b9b9b;
}
</style>
