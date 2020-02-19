<template id="switch-button">
  <div class="switch-button-control">
    <div class="switch-button-label pr-0 pr-md-1">
      <slot></slot>
    </div>
    <div class="switch-button" :class="{ enabled: isEnabled }" @click="toggle" :style="{'--color': color}">
      <div class="button"></div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "isEnabled",
    event: "toggle"
  },
  props: {
    isEnabled: Boolean,
    color: {
    type: String,
    required: false,
    default: "#4D4D4D"
    }
  },
  methods: {
    toggle: function() {

      if(!this.isEnabled) {
        this.$parent.makePrivate()
      } else {
        this.$parent.unPrivate()
      }
      this.$emit("toggle", !this.isEnabled);
    }
  }
}
</script>
<style lang="css" scoped>


.switch-button-control {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.switch-button-control .switch-button {
  height: 30px;
  width: calc(30px * 2);
  border: 3px solid #4a4a4a;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33);
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.switch-button-control .switch-button .button {
  height: calc( 30px - (2 * 3px) );
  width: calc( 30px - (2 * 3px) );
  border: 2px solid #000;
  border-radius: calc( 30px - (2 * 3px) );
  background: #00B884;
  transition: all 0.3s ease-in-out;
}
.switch-button-control .switch-button.enabled {
  background-color: #000;
  box-shadow: none;
}
.switch-button-control .switch-button.enabled .button {
  background: #00B884;
  transform: translateX(calc(calc( 30px - (2 * 3px) ) + (2 *3px)));
}
.switch-button-control .switch-button .button {
  background: #e76e66;
}
.switch-button-control .switch-button-label {
  margin-right: 15px;
}
</style>