<template>
    
    <b-button class="settings-button"
        :to="to"
    >
        {{ text }}
    </b-button>
  
</template>

<script>
export default {
    name: "SettingsButton",
    props: ['text', 'to']

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
}


</style>