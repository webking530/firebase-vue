<template>
  <div>
      <div class=" text-center py-4 head-container1"/>
      <img src="../assets/images/chipin_back.png" class="img-fluid header-img"/>
      <div class="head-content text-center text-white">
        <img src="../assets/chipin-log.svg" class="d-none d-sm-inline">
        <h1 class="main-title">
          Lock and Load, Baby
        </h1>
        <h3 class="mt-4">
          Streaming platforms are notorious for super low Artist payments.
        </h3>
        <h3 class="mt-4">
          You need to generate millions of monthly streams, just to earn a minimum wage.
        </h3>
        <h4 class="my-4">
          That’s just not fair.
        </h4>
        <b-button v-if="!dropped_down" class="d-sm-block d-md-none" @click="dropped_down = true">
          <img src="../assets/drop-drop-arrow.svg" >
        </b-button>
        <div class="py-4 summary d-none d-md-block" v-bind:class="{ 'summary-mobile-show': dropped_down}">
          <div class="revenue-table p-2 px-4 ">
            <div class="text-left" style="font-size:18px;font-weight:500;line-height:25px">
              Comparison of Music Streaming Revenues
            </div>
            <div class="mt-3">
              <b-row
                  v-for="(item, index) in revenues_head"
                  :key="index"
              >
                  <b-col
                    md=3
                    sm=6
                    cols=6
                    class="revenue_table_bald"
                  >
                    {{item.name}}
                  </b-col>
                  <b-col
                    md=3
                    sm=6
                    cols=6
                    class="revenue_table_bald"
                  >
                    {{item.payout}}
                  </b-col>
                  <b-col
                    md=3
                    class="d-none d-md-block revenue_table_bald"
                  >
                    {{item.streamcount_one}}
                  </b-col>
                  <b-col
                    md=3
                    class="d-none d-md-block revenue_table_bald"
                  >
                    {{item.streamcount_min}}
                  </b-col>

              </b-row>
              <b-row
                  v-for="(item, index) in revenues"
                  :key="index+2"
              >
                  <b-col
                    md=3
                    sm=6
                    cols=6
                  >
                    {{item.name}}
                  </b-col>
                  <b-col
                    md=3
                    sm=6
                    cols=6
                  >
                    ${{item.payout}}
                  </b-col>
                  <b-col
                    md=3
                    class="d-none d-md-block"
                  >
                    {{item.streamcount_one | numFormat}}
                  </b-col>
                  <b-col
                    md=3
                    class="d-none d-md-block revenue_table_bald"
                  >
                    {{item.streamcount_min | numFormat}}
                  </b-col>

              </b-row>
            </div>
          </div>
          <p class="text-left mt-2 revenue_description text-menu-light">
            †$1256.70 based on 52 full time weeks of $7.25/hr (https://www.dol.gov/agencies/whd/minimum-wage <br> https://www.nme.com/news/music/new-figures-show-how-many-streams-artists-need-to-earn-minimum-wage-2649715<br> https://timesinternational.net/how-much-can-you-earn-on-soundcloud/
          </p>
        </div>
        <div class="my-4 summary d-none d-md-block" v-bind:class="{ 'summary-mobile-show': dropped_down}" style="max-width:100%;">
          <h1 class="pb-1">
            Supporters is all you need.
          </h1>
          <h2 class="mt-4 pt-4">
            Take Back Control of your Music <span class="text-underline">and</span> your Money.
          </h2>
          <p class="mt-4 pt-2">
            Trackd brings together creators and fans, allowing them to <span >support</span> your music with monthly payments.
          </p>
          <p class="mt-4 pt-2">
              <span >Here’s the math.</span><br>
              <span class="d-sm-block d-md-none">250 supporters<br></span>
              <span class="d-none d-md-inline-block">250 supporters</span> @ $2.99/month = $635 <span class="text-underline">every month</span><br>
              <span class="d-sm-block d-md-none">5000 supporters<br></span>
              <span class="d-none d-md-inline-block">5000 supporters</span> @ $4.99/month =  $21,208 <span class="text-underline">every month</span><br>
          </p>
          <p class="mt-4 pt-2">
            You can now focus on your music and provide value to fans.
          </p>
          <p class="mt-4 pt-2">
            <span>Trackd requires no exclusivity.</span> You own all your work. 
          </p>
          <p class="mb-4 pt-4">
            <span>Trackd is putting you, the Artist, back in control.</span>
          </p>

          <b-btn class="apply-btn mb-5 mt-4 py-2 px-5" variant="info">APPLY NOW</b-btn>
        </div>
      </div>
  </div>
</template>
<script>
   import { mapActions, mapGetters, mapMutations } from 'vuex'
   export default {
      name: "Chipin",
      components: {
         
      },
      data () {
         return {
            sections: [],
            revenues_head: [
               {
                  name: 'Streaming',
                  payout: 'Avg.payout',
                  streamcount_one: '# of Streams',
                  streamcount_min: '# of Streams to'
               },
               {
                  name: 'Service',
                  payout: 'per Stream',
                  streamcount_one: 'To earn $1',
                  streamcount_min: 'earn US min. wage'
               },
            ],
            revenues: [
               {
                  name: 'Tidal',
                  payout: 0.0125,
                  streamcount_one: 80,
                  streamcount_min: 100536
               },
               {
                  name: 'Spotify',
                  payout: 0.00437,
                  streamcount_one: 229,
                  streamcount_min: 287574
               },
               {
                  name: 'Amazon',
                  payout: 0.00402,
                  streamcount_one: 249,
                  streamcount_min: 312612
               },
               {
                  name: 'Youtube',
                  payout: 0.00069,
                  streamcount_one: 1449,
                  streamcount_min: 1821304
               },
               {
                  name: 'SoundCloud',
                  payout: 0.004,
                  streamcount_one: 229,
                  streamcount_min: 287574
               }
            ],
            showByIndex: null,
            showByBlockIndex: null,
            rowNeighbours: [],
            // The expanded section
            expanded: null,
            dropped_down: false
         }
      },
      methods: {
         ...mapActions('Library', ['home', 'home_filter']),
         ...mapGetters(['isAuthenticated']),
         ...mapMutations('Library', ['setSections']),
         clickedSection(section) {
            if (!this.isMobile()) {
               this.showByBlockIndex = section.id
               this.expanded = section.id
               // Clear rowNeighbours array
               this.rowNeighbours.length = 0
               // Determine the index of the section and the row it's in (4 sections per row)
               let clickedIndex = this.sections.indexOf(section)
               let rowNumber = Math.floor(clickedIndex / 4)
               // Determine which other sections are in the row
               let rowLower = rowNumber * 4
               let rowUpper = rowLower + 3
               // Find the row neighbours of the selected section
               for (var i = rowLower; i <= rowUpper; i++) {
                  // Don't add the selected section as a neighbour
                  if (i !== this.sections.indexOf(section)) {
                     this.rowNeighbours.push(this.sections[i]);
                  }
               }
            }
         },
         closeSection() {
            this.showByBlockIndex = null
            this.expanded = null
            this.rowNeighbours.length = 0
         },

      },
      mounted() {
         this.home().then(res => {
            this.sections = res.data.sections
            this.setSections(res.data.sections)
            //console.log(res)
         }).catch(error => {
            error
            this.$router.replace('/error')
            //console.log(error);
         })

      },
      computed: {
         ...mapGetters('Library', {
            getSections: 'getSections',
         }),
      },
      watch: {
         getSections() {
            //console.log("Home.getSections() Watcher called")
            this.sections = this.getSections

         }
      }
   }
</script>
<style scoped>
.head-container {
  background: url("../assets/images/chipin_back.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 450px; 

  /* Center and scale the image nicely */
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  /* position: relative; */
}

.text-menu-light {
  color: #9B9B9B;
}

.text-underline {
  text-decoration: underline;
}

@media (min-width: 481px) {
  .head-content {
      /* position: absolute; */
      /* top: 230px; */
      /* width: 100%; */
      margin-top:-220px;
  }

  .head-content h1 {
      font-size: 80px;
      font-weight: 200;
      line-height: 90px;
  }

  .head-content h3 {
      font-size: 28px;
      font-weight: 300;
      line-height: 30px;
  }

  .head-content h4 {
      font-size: 28px;
      font-weight: 500;
      line-height: 30px;
  }

  .header-img {
    height: 478px;
  }
}

@media (max-width: 480px) {
  .head-content {
      /* position: absolute;
      bottom: -45px;
      width: 100%; */
      
  }
  .head-content h1 {
      font-size: 60px;
      font-weight: 200;
      line-height: 70px;
  }

  .head-content h3 {
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
  }

  .head-content h4 {
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
  }

  .header-img {
    height: 220px;
  }
}

.revenue_table_bald {
  font-weight: 700;
}

.revenue-table {
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid white;
}

.summary-mobile-show {
  display: block !important;
}

.summary {
  max-width:800px;
  margin:auto;
}
.summary .revenue_description {
  font-size:12px;
  line-height:14px
}

.summary > h1{
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color:#F2B471;
}

.summary > h2{
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color:#F2B471;
}

.summary > p {
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
}

.summary > p > span {
  font-weight: 500;
}



.app-store {
  position: absolute;
  top: 20px;
  right: 50px;
}

.apply-btn {
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
}
</style>
