<template>
    <div>

        <b-dropdown text="Dropdown with header" menu-class="bg-dark trackd-dropdown-menu text-light px-2 pb-3" ref="dropdown" no-caret class="p-3">
            <b-dropdown-header id="dropdown-header-label" class="my-2 pb-4">
            
                <span class="text-light pt-2 mt-2 trackd-dropdown-menu-heading mt-4 pt-5">Playlist Name </span>

                <img
                src="../../../assets/trackd-icon-colours.svg"
                class="float-right filter-trackd-icon"
                height="25"
                alt="Logo"
                />

            </b-dropdown-header>
            <b-dropdown-form>
                <b-form-group @submit.stop.prevent>
                <b-form-input
                    class="text-input"
                    size="md"
                    placeholder="Name"
                ></b-form-input>
                </b-form-group>

                <b-button variant="info" size="sm" class="btn-rounded px-3 py-2 mt-2 mb-3 float-right text-uppercase" @click="onClick">Create</b-button>
            </b-dropdown-form>
        </b-dropdown>

    </div>
  
</template>

<script>
export default {
    name: "FormDropdown",
    methods: {
      onClick() {
        // Close the menu and (by passing true) return focus to the toggle button
        this.$refs.dropdown.hide(true)
      }
    }
}
</script>

<style >

ul.dropdown-menu,
.trackd-dropdown-menu {
  border: 1px solid #fff !important;
  width: 400px !important;
  min-width: 400px !important;
  border-radius: 20px !important;
}

.dropdown-header {
    padding: none !important;
}

.filter-trackd-icon {
    position: relative;
    top: -5px;
}

button.dropdown-item {
    font-weight: 300;
    color: #fff;
    font-weight: 300;
}

.dropdown-item.filter-link {
    color: #fff;
    font-weight: 300;
}

.dropdown-item.active, .dropdown-item:active,
.dropdown-item:hover, .dropdown-item:focus {
    color: #fff;
    font-weight: 300;
    border-radius: 5px;
    background-color: #222222;
}

.trackd-dropdown-menu-heading {
    font-weight: 300;
    font-size: 24px;
    line-height: 21px;
    position: relative;
    bottom: -25px;
}

.btn-rounded {
    border-radius: 10px;
}


.text-input {
  background-color: #222222;
  color: #9b9b9b;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 300;
}

.form-control:focus {
  background-color: #222222;
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

.b-dropdown-form:focus {
    outline: none !important;
}

</style>