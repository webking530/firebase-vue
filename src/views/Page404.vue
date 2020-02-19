<template>
  <div>
    <b-container class="mt-5">
      <b-row class="mt-5">
        <b-col cols="6" offset="3" class="text-center">
          <br /><br />

          <h1 class="text-light font-weight-lighter mt-5 mb-4">
            Sorry Page Not Found!
          </h1>

          <h4 class="font-weight-lighter text-light">
            We could'nt find the page you were looking for
          </h4>

          <b-button
            :to="{ name: 'Home' }"
            class="font-weight-lighter px-5 py-1 mt-3"
            variant="outline-light"
            >Return Home</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Page404",
  computed: {},
};
</script>

<style scoped></style>
