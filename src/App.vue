<script>
// export default {
//   name: "App",
// };
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat-Regular.ttf");
}
html {
  background-color: black;
  color: white;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
