<template>
  <div>
    <SettingsBanner></SettingsBanner>

    <b-container v-if="true" class="mb-5">
      <SettingsTitle v-bind:title="'Artist Profile - Edit Skills'"></SettingsTitle>

      <b-row class="row mb-5">
        <!-- Search -->
        <b-col >
            <label class="sr-only" for="input-search">Search</label>
            <b-input-group class="mb-2 mt-4 mr-sm-2 mb-sm-0">
            <b-input-group-prepend
                class="p-2 search-input"
                style="
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                "
                :class="{ 'mobile-search-bar': isMobile() }"
            >
                <img src="../../../assets/search-icon.svg" />
            </b-input-group-prepend>
            <b-form-input
                id="input-search"
                class="search-input text-light font-weight-light"
                style="
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                "
                :class="{ 'mobile-search-bar': isMobile() }"
                placeholder="Search"
                v-model="search_param"
                v-on:input="search_change()"
            ></b-form-input>
            </b-input-group>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'SELECTED'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Skills
          </p>
        </b-col>
        <b-col cols="9">
          <b-row>
                <div class="wrapper">
                    <b-col cols="1" v-for="skill in selected" :key="skill.id" class="text-center item">
                        <b-avatar 
                            :src="getImagePath(skill.image_active, {func: 'fit', width: 120, height: 120})" 
                            size="4.2em" 
                            class="skill-avatar"
                            style="padding:4px;" 
                        >        
                        </b-avatar>
                        <img 
                          src="../../../assets/icon-delete.svg" 
                          width="20" 
                          class="delete-icon" 
                          style="position:absolute;"
                          @click="delete_skill(skill)"
                        />
                        <p class="text-light skill-text mt-1">{{ skill.value }}</p>
                    </b-col>
                </div>
            </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <SectionHeading v-bind:name="'SKILLS'"></SectionHeading>

        <b-col cols="3">
          <p class="text-light font-weight-light">
            Choose
          </p>
        </b-col>
        <b-col cols="9">
            <b-row>
                <div class="wrapper">
                    <b-col v-for="skill in skills" :key="skill.id" class="text-center item">
                        <b-avatar 
                            :src="getImagePath(skill.image_active, {func: 'fit', width: 120, height: 120})" 
                            size="4.2em" 
                            class="skill-avatar"
                            style="padding:4px;"
                            
                            @click.native="handle_selected(skill)"
                        >        
                        </b-avatar>
                        <p class="text-light skill-text mt-1">{{ skill.value }}</p>
                    </b-col>
                </div>
            </b-row>
    
        </b-col>
        
      </b-row>

      <b-row class="mt-5 mb-4">
        <b-col cols="12" class="text-center mb-4">
          <b-button class="done-btn mr-2" @click="$router.go(-1)">
            Cancel
          </b-button>
          <b-button class="done-btn ml-2" style="width:250px;" @click="submit_btn">
            Save and Return to Song Profile
          </b-button>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import SettingsBanner from "../../../components/settings/Banner";
import SettingsTitle from "../../../components/settings/Title.vue"
import SectionHeading from "../../../components/settings/SectionHeading.vue"

export default {
  name: "EditProfileSkills",
  components: {
    SettingsBanner,
    SettingsTitle,
    SectionHeading,
    
  },
  data() {
    return {
      loaded: false,
      skills: null,
      selected: []
    };
  },
  computed: {

  },
  methods: {
    ...mapActions("Account", {
      getInstrumentTags: "getInstrumentTags",
      setInstrumentTags: "setInstrumentTags",
    }),

    handle_selected(skill) {
      // Add to selected array
      this.selected.push(skill)
      // Remove from selection array
      this.skills = this.skills.filter(val => val !== skill)
    },

    submit_btn() {
        var tag_ids = []
        for (const skill of this.selected) {
            tag_ids.push(skill.id)
        }
        const data = {'tags': tag_ids}
        
        this.setInstrumentTags(data)
            .then((res) => {
                console.log(res)
                this.$router.go(-1)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    delete_skill(skill) {
        this.skills.unshift(skill)
        this.selected = this.selected.filter(val => val !== skill)
    }

  },
  mounted() {
      console.log("test")
      this.getInstrumentTags()
        .then((res) => {
            console.log(res)
            this.skills = res.tags.filter(skill => !skill.selected)

            this.selected = res.tags.filter(skill => skill.selected)

        })
        .catch((error) => {
            console.log(error)
        });
  },
  beforeMount() {
    
  },
};
</script>

<style>

.select-input {
  background: #0E0E0F url("../../../assets/select-box-arrow.svg") no-repeat right
    0.75rem center/20px 15px !important;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
  text-align: left !important;
  text-align-last: left !important;
}

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

.submit-btn {
  border: solid white 1px;
  background-color: transparent;
  width: 185px;
  height: 37px;
}

.wrapper {
  min-width: 100%;
  height: 9em;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden ;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.wrapper .item {
  min-width: 100px;
  height: 9em;
  padding-right:0px;
  padding-left:0px;
  line-height: 20px;
  text-align: center;
}

.wrapper::-webkit-scrollbar {
    display: none;
}


.skill-avatar {
    background-color: #9B9B9B;
}

.done-btn {
    border: solid white 1px;
    background-color: transparent;
    width: 129px;
    height: 37px;
}

.done-btn:hover {
  border: solid white 1px;
  background-color: transparent;
}

.skill-text {
    font-size: 14px;
    font-weight: 200;
}

.delete-icon {
  top:  0em;
  right: 1em;
  cursor: pointer;
}



</style>
