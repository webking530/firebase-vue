<template>
  <div>
    <b-container class="mt-5">
      <b-row class="mt-5">
        <b-col cols="6" offset="3" class="text-center">
          <br /><br />

          <div class="col h-100 my-auto pt-5 ">

          <h4 v-if="!error" class="font-weight-light text-center pt-5 my-auto">Loading...</h4>
          <div v-else>
            <h4 class="font-weight-light text-danger text-center pt-5 my-auto">Sorry something went wrong!</h4>
          </div>

          <b-button
            :to="{ name: 'Home' }"
            class="font-weight-lighter px-5 py-2 mt-5"
            variant="outline-light"
            >Return Home</b-button
          >

        </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthRedirect",
  data() {
    return {
      error: false,
    };
  },
  methods: {
    ...mapActions("Auth", ["reauth"]),
    loadData () {
      let token = this.$route.query.jwt;
      let redirect_to = this.$route.query.redirect;

      if (token) {

        localStorage.setItem('accessToken', token)

        
        this.reauth().then(response => {
          response

          if (redirect_to) {

            if (redirect_to === 'mysubscriptions') {
              this.$router.push({name: 'SubscriptionsMade'})
            }

          }

          this.$router.push({name: 'SubscriptionsMade'})

          }

        );

        /*
        this.reauth()*/

        if (redirect_to) {

          if (redirect_to === 'mysubscriptions') {
            this.$router.replace({name: 'SubscriptionsMade'})
          }

        }

        this.$router.push({name: 'SubscriptionsMade'})
      } else {
        this.error = true;
      }
    }
  },
  beforeMount(){
      this.loadData()
   }
};
</script>

<style scoped></style>
