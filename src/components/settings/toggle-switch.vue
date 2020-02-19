<template>

    <label class="switch">

        <input 
            type="checkbox"
            v-bind:value="value"
            :checked="isChecked"
            v-on:change="change"
            
        >
        <span class="slider round"></span>
    </label>
  
</template>

<script>
export default {
    name: "SettingsToggleSwitch",
    props: ["value", "type", "truevalue", "custom_true_value"],

    methods: {
        change($event) {

          if (this.custom_true_value && $event.target.checked) {
            this.$emit('change', this.custom_true_value, this.type, false)
            this.$emit('input', this.custom_true_value, this.type, false)
          }
          else if (this.custom_true_value && !$event.target.checked) {
            this.$emit('change', false, this.type, false)
            this.$emit('input', false, this.type, false)
          }
          else {
            this.$emit('change', $event.target.checked, this.type, false)
            this.$emit('input', $event.target.checked, this.type, false)
          }
        }
    },

    computed: {
      isChecked() {
        if (this.truevalue != null) {
          return this.truevalue
        }
        else {
          return this.value
        }
      }
    }

}
</script>

<style>

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #D9746B;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 27px;
  width: 27px;
  left: 3px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #34C759;
}

input:focus + .slider {
  box-shadow: 0 0 1px #34C759;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}


.slider.round {
  border-radius: 34px;
  height: 31px;
  width: 51px
}

.slider.round:before {
  border-radius: 50%;
}


</style>