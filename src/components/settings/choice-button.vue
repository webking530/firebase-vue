<template>
    
    <b-button class="settings-button" :style="background"
        @click="handleClick"
    >
        {{ text }}
    </b-button>
  
</template>

<script>
export default {
    name: "ChoiceButton",
    props: ['text', 'id', 'name'],
    data() {
        return {
            selected: false,
        }
    },
    methods: {
        handleClick() {
            this.selected = !this.selected
            if (this.selected) { console.log("Selected: " + this.name + " " + this.id) }
            else { console.log("Unselected: " + this.name) }
            this.$emit("selected", this.id, this.selected)
        }
    },
    computed: {
        background() {
            if (this.selected) {
                return "background-color: #4A4A4A";
            }
            return ""
        }
    }

}
</script>

<style>

@media (max-width: 1199px) {
 .settings-button {
        border-radius: 20px;
        width: 90px;
        height: 35px;
        border: solid white 2px;
        background-color: transparent;
        font-size: 18px;
        line-height: 20px;
    }   
}

@media (min-width: 1200px) {
    .settings-button {
        border-radius: 20px;
        width: 144px;
        height: 35px;
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