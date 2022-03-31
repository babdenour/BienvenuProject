/* eslint-disable max-len */
<script>
import NavItems from '../components/NavItems.vue';

export default {
  name: 'about',
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
      <h1>ABOUT</h1>
      <div class="text">
        <p>BienvenueProjects PARIS CREATIVE STUDIO</p>
        <br />
        <br />
        <p>
          BIENVENUE IS AN INDEPENDENT CREATIVE STUDIO WORKING ON VISUAL
          <br />STRATEGIES, GRAPHIC DESIGN, ADVERTISING CAMPAIGNS AND BRAND
          <br />CONTENT FOR FASHION AND LUXURY BRANDS.
        </p>
        <br />
        <br />
        <p>
          BIENVENUE ALSO CAPITALIZES ON A EXTERNAL NETWORK OF TALENTS,
          <br />CONSULTANTS, CREATIVES, ADVISORS, & TECHNICAL OPERATORS.
        </p>
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
  align-items: center;
  & p {
    margin: 0;
    text-align: left;
  }
}
</style>
