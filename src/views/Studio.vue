/* eslint-disable */
<script>
import NavItems from '../components/NavItems.vue';

export default {
  name: 'studio',
  components: {
    NavItems,
  },
};
</script>

<template>
  <div>
    <div id="nav">
      <router-link to="/home" v-if="!$route.path.includes('/home')">←</router-link>
    </div>
    <div class="studio">
      <h1>STUDIO</h1>
      <div class="text">
        <br />
        <p>
          INSPIRED BY YOUTH AND A WORLD THAT CONSTANTLY REINVENTS ITSLEF, WE STRIVE TO OFFER AN AUTHENTIC YET DYNAMIC VISION THAT WILL MAKE A PROJECT STAND OUT FROM THE CROWD.
        </p>
        <br />
        <p>
          BIENVENUE AIMS TO GIVE LIFE TO NEW CREATIVE VISIONS TAILORED TO EACH BRAND AND FASHION HOUSE’S IDENTITY. BENEFITTING FROM A LARGE NETWORK OF TALENTS, WE ENSURE TO TAKE EACH VISION AND PROJECT FROM ITS STARTING POINT TO ITS FINAL EXECUTION, THROUGH RESEARCH, DESIGN, ART DIRECTION AND MUCH MORE. 
        </p>
        <br />
        <p>BASED IN PARIS, LEADING PROJECTS IN EUROPE AND OVERSEAS.</p>
        <br />
        <p class="grs">CREATIVE DIRECTION</p>
        <p class="grs">IMAGE & ART DIRECTION</p>
        <p class="grs">GRAPHIC DESIGN</p>
        <p class="grs">PHOTOGRAPHY</p>
        <p class="grs">VIDEOS</p>
        <p class="grs">PRODUCTION</p>
        <p class="grs">STYLING</p>
        <p class="grs">CASTING</p>
        <p class="grs">PR STRATEGY</p>
        <p class="grs">CURATION</p>
        <p class="grs">RESEARCH</p>
        <br />
        <br />
        <p>* UPON REQUEST, A MORE DETAILED</p>
        <p>PORTFOLIO IS AVAILABLE.</p>
      </div>
      <nav-items class="nav-items" msg msg2 />
    </div>
  </div>
</template>

<style scoped lang="scss">
#nav {
  position: fixed;
  top: 1rem;
  left: 1rem;
  margin-bottom: 1rem;
  a {
    font-weight: bold;
    color: white;
  }
}
.studio {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & p {
    text-align: left;

    margin: 0;
  }
}

.grs {
  font-weight: bold;
}
</style>
