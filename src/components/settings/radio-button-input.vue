<template>
  <div class="example ex1">
    <label v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        name="group1"
        v-bind:value="value"
        :checked="option.value === value"
        v-on:change="$emit('change', option.value)"
        v-on:input="$emit('input', option.value)"
      />
      <span></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "SettingsRadioInput",
  props: ["value", "options", "type"],
};
</script>

<style>
.example label.custom-control-input:checked + span:before {
  background-color: red;
}

.example {
  margin: 20px;
}

.example input {
  display: none;
}

.example label {
  margin-right: 20px;
  display: inline-block;
  cursor: pointer;
}

/* Radio Button Background (Grey Circle) */
.ex1 span {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  transition: all 0.25s linear;
  background-color: #4a4a4a;
}
/* Radio Button Selected (White Circle) */
.ex1 span:before {
  content: "";
  position: absolute;
  left: 5px;
  top: 50%;
  -webkit-transform: translatey(-50%);
  transform: translatey(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.25s linear;
  margin-left: 5px;
  padding: 10px;
}

/* Radio Button Selected (White Circle) */
.ex1 input:checked + span:before {
  background-color: #fff;
  margin-left: 5px;
  padding: 10px;
}
</style>
