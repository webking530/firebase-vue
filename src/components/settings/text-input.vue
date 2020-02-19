<template>
  <b-form-input
    id="input-2"
    v-bind:value="value"
    v-on:change="$emit('change', $event, type, false)"
    v-on:input="$emit('input', $event)"
    :placeholder="placeholder_text"
    class="text-input"
  ></b-form-input>
</template>

<script>
export default {
  name: "SettingsTextInput",
  props: ["value", "placeholder_text", "type"],
};
</script>

<style>
.text-input {
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
