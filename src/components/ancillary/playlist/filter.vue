<template>
    <div>

        <b-dropdown text="Dropdown with header" menu-class="bg-dark trackd-dropdown-menu text-light px-2 pb-3" no-caret class="p-3">
            <b-dropdown-header id="dropdown-header-label" class="my-2 pb-4">
            
                <span class="text-light pt-2 mt-2 trackd-dropdown-menu-heading mt-4 pt-5">Filter </span>

                <img
                src="../../assets/trackd-icon-colours.svg"
                class="float-right filter-trackd-icon"
                height="25"
                alt="Logo"
                />

            </b-dropdown-header>
            <b-dropdown-item-button variant="link" button-class="py-2" class="py-1" aria-describedby="dropdown-header-label">
                Date Added
            </b-dropdown-item-button>
            <b-dropdown-item-button variant="link" button-class="py-2"  class="py-1" aria-describedby="dropdown-header-label">
                Liked
            </b-dropdown-item-button>
            <b-dropdown-item-button variant="link" button-class="py-2"  class="py-1" aria-describedby="dropdown-header-label">
                By Artist
            </b-dropdown-item-button>
        </b-dropdown>

    </div>
  
</template>

<script>
export default {
    name: "FilterDropdown"
}
</script>

<style >

ul.dropdown-menu,
.trackd-dropdown-menu {
  border: 1px solid #fff !important;
  width: 289px !important;
  min-width: 289px !important;
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

</style>