<template>
  <div style="height:145px;">
    <label
      class="file-select mt-0 mb-3"
      :class="{
        'default-round': !this.value && this.shape === 'round',
        'default-rectangle': !this.value && this.shape === 'rectangle',
        'default-hero': !this.value && this.shape === 'hero',
        'default-square': !this.value && !['round', 'rectangle', 'hero'].includes(this.shape),
        'mt-2': this.value && this.shape === 'rectangle',
        
      }"
    >
      <b-img
        v-if="this.value"
        :src="
          bgImage
        "
        :class="{ round: this.shape === 'round' }"
        fluid
        alt="Artist Banner Image"
        
      ></b-img>

      <input type="file" @change="handleFileChange" />
    </label>

    <br />
  </div>
</template>

<script>
export default {
  name: "SettingsImageInput",
  props: {
    value: String,
    player_image: File,
    type: String,
    round: Boolean,
    shape: String,
  },
  computed: {
    bgImage() {
      if (this.value) {
        if (this.shape === 'rectangle') {
          console.log(this.getImagePath(this.value, { func: "crop", width: 122, height: 267 }))
          return this.getImagePath(this.value, { func: "crop", width: 122, height: 267 });  
        }
        else if (this.shape === 'hero') {
          return this.getImagePath(this.value, { func: "crop", width: 411, height: 131 });  
        }
        else {
          return this.getImagePath(this.value, { func: "crop", width: 122, height: 122 });
        }
      } else {
        return "../../assets/image-upload-square-dark.svg";
      }
    },
  },

  methods: {
    handleFileChange(e) {
      console.log(e.target.files[0].name);
      this.$emit("change", e, this.type, true);
    },
  },
};
</script>

<style scoped>

.default-round {
  background: url("../../assets/image-upload-round.svg") no-repeat;
  transform: translateY(5%);
  height: 122px;
  width: 122px;
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
