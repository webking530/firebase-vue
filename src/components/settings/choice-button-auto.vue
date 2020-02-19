<template>
    
    <b-button class="settings-button px-3 mr-2 mb-3" :style="background"
        @click="handleClick"
    >
        {{ text }}
    </b-button>
  
</template>

<script>
export default {
    name: "ChoiceButton",
    props: ['text', 'id', 'name', 'data', 'selected_item'],
    data() {
        return {
            selected: false,
        }
    },
    methods: {
        handleClick() {
            this.selected = !this.selected
            this.$emit("selected", this.id, this.selected, this.data)
        }
    },
    computed: {
        background() {
            if (this.selected_item) {
                if (this.id === this.selected_item.id) {
                    return "background-color: #4A4A4A";
                }
            } 
            if (this.selected) {
                return "background-color: #4A4A4A";
            }
            return ""
        }
    }

}
</script>

<style scoped>

.settings-button {
    width: auto !important;
    min-width: 0px;
}

@media (max-width: 1199px) {
 .settings-button {
        border-radius: 20px;
        border: solid white 2px;
        background-color: transparent;
        font-size: 18px;
        line-height: 20px;
    }   
}

@media (min-width: 1200px) {
    .settings-button {
        border-radius: 20px;
        border: solid white 2px;
        background-color: transparent;
        font-size: 18px;
        line-height: 20px;
    }

    .settings-button:focus {
        background-color: transparent;
        border: solid white 2px;
    }

    .settings-button:hover {
        background-color: transparent;
        border: solid white 2px;
    }
}


</style>