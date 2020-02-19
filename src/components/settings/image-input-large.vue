<template>
  <div>
    <label
      class="file-select mt-0 mb-3"
      :class="{
        'default-round': !value && shape === 'round',
        'default-rectangle': !value && shape === 'rectangle',
        'default-hero': !value && shape === 'hero',
        'default-square': !value && !['round', 'rectangle', 'hero'].includes(shape),
        'mt-2': value && shape === 'rectangle',
        
      }"
    >
      <b-img
        v-if="get_user_image"
        :src="
          bgImage
        "
        :class="{ round: shape === 'round' }"
        fluid
        alt="Artist Banner Image"
        
      ></b-img>

      <input type="file" @change="handleFileChange" />
    </label>

    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SettingsImageInput",
  props: {
    value: String,
    player_image: File,
    type: String,
    round: Boolean,
    shape: String,
  },

  methods: {
    ...mapGetters(['get_user_image']),
    handleFileChange(e) {
      this.$emit("change", e, this.type, true);
    },
  },
  computed: {
    bgImage() {
      if (this.get_user_image()) {
          return this.getImagePath(this.get_user_image(), { func: "crop", width: 150, height: 150 });
        
      } else {
        return "../../assets/image-upload-square-dark.svg";
      }
    },
  },
};
</script>

<style>

.default-round {
  background: url("../../assets/image-upload-round.svg") no-repeat;
  transform: translateY(5%);
  height: 150px;
  width: 150px;
}

.default-square {
  background: url("../../assets/image-upload-square-dark.svg") no-repeat;
  transform: translateY(5%);
  height: 122px;
  width: 122px;
}

.default-rectangle {
  background: url("../../assets/image-upload-rectangle.svg") no-repeat;
  transform: translateY(5%);
  height: 267px;
  width: 122px;
}

.default-hero {
  background: url("../../assets/image-upload-hero.svg") no-repeat;
  transform: translateY(5%);
  height: 131px;
  width: 411px;
}


.file-select > input[type="file"] {
  display: none;
}

.round {
  border-radius: 50%;
}
</style>
