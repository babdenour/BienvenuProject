/* eslint-disable max-len */
<script>
import NavItems from "../components/NavItems.vue";

export default {
  name: "about",
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
    <div class="about">
      <h1>ABOUT US</h1>
      <div class="text">
        <p>BIENVENUE IS A MULTIDISCIPLINARY CREATIVE DIRECTION CONSULTANCY PRACTICE.</p>
        <br />
        <p>
          BIENVENUE WAS BORN IN PARIS - BUT OUR CULTURAL HERITAGE FOLLOWS US ACROSS THE
          GLOBE.
        </p>
        <br />
        <p>
          ALWAYS LOOKING FOR INNOVATIVE CONCEPTS, BIENVENUE PAYS VERY SPECIAL ATTENTION TO
          DETAIL, DELIVERING PROJECTS ACROSS MULTIPLE TOUCHPOINTS.
        </p>
        <br />
        <p>WE ARE STRIKING AT THE PERFECT BALANCE BETWEEN THE ARTS AND CULTURE.</p>
        <br />
        <p>
          WE ARE FIRMLY CONVINCED THAT GIVING OUR WORK A HUMAN DIMENSION IS THE KEY TO
          BRINGING OUR IDEAS TO SUCCESS.
        </p>
        <br /><br />
        <p>* UPON REQUEST, A MORE DETAILED PORTFOLIO IS AVAILABLE.</p>
      </div>
      <nav-items />
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
.about {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: left;
  & p {
    margin: 0;
    text-align: left;
  }
}
</style>
