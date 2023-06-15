<script>
import NavItems from "../components/NavItems.vue";

export default {
  name: "cultural",
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
    <div class="cultural">
      <h1>CULTURAL INITIATIVES</h1>

      <div class="text">
        <p>
          AT BIENVENUE, CULTURAL PROGRAMS WERE INTRODUCED TO GIVE BACK TO EMERGING
          CREATIVES IN NEED OF RESOURCES TO PURSUE AMBITIOUS PROJECTS.
        </p>
        <br />
        <p>
          WE CHERISH A HUMAN-TO-HUMAN APPROACH IN OUR WORK, AND CULTURAL PROGRAMS ALLOW US
          TO EMPHASIZE ON THAT DIMENSION. CULTURAL PROGRAMS AT BIENVENUE ARE NON-TRANSACTIONAL: WE BELIEVE THAT IT IS IMPORTANT TO OFFER A HELPING HAND TO THE
          COMMUNITIES THAT SURROUND US WITHOUT MAKING IT A MONETARY EXCHANGE OF SERVICES.
          IT’S ABOUT LIFTING EACH OTHER UP.
        </p>
        <br />
        <p>
          IN 2020, WE PRODUCED A LIMITED RUN OF THE “<strong>CENT POUR CENT</strong>” T-SHIRT. DESIGNED AND
          MADE IN PARIS. ALL PROFITS WERE DONATED TO LOCAL COMMUNITIES AND ASSOCIATIONS TO
          RAISE FUNDS AND PROVIDE THEM WITH RESSOURCES.
        </p>
        <br />
        <p>
          IN 2021, WE COLLABORATED WITH THE <strong>CHANEL NEXT PRIZE</strong> AS CREATIVE PARTNER. THIS
          NEW INTERNATIONAL PRIZE WAS INTRODUCED TO PROMOTE INNOVATION IN ARTS AND
          CULTURE. THIS INITIATIVE IS SET ON A GLOBAL SCALE AND AIMS TO PROMOTE FLUIDITY
          BETWEEN DIFFERENT ART FORMS.
        </p>
        <br />
        <p>
          IN 2023, DURING JANUARY PARIS FASHION WEEK WE CURATED “<strong>S,M,L,XL</strong>” AN ART
          EXHIBITION — CLOTHING SALE. 50% OF ALL PROFITS FROM PIECES SOLD WERE DONATED TO
          THE TIMMY ORGANIZATION.
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
.cultural {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & .img-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.text {
  display: flex;
  flex-direction: column;
  margin: 1vh 1vw;
  & p {
    margin: 0;
    text-align: left;
  }
}

.img-item {
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 20vh;
  margin-top: 2vh;

  & img {
    width: 100%;
    height: 100%;
  }

  &.tee {
    width: 40%;
    height: 40%;
  }

  &.flyer {
    width: 30%;
    height: 50%;
  }
}
</style>
