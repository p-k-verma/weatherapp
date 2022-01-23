<template>
  <div class="main_view">
    <div class="weather_part">
      <timeDisplay></timeDisplay>
    </div>
    <card-thing></card-thing>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import timeDisplay from './components/timeDisplay.vue'
import cardThing from './components/footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    timeDisplay,
    cardThing,

  }
}
</script>

<style>
@import './assets/style.css';
body {
  margin: 0px;
}
.main_view {
  background-color: #DCDCDC;
  background-image: url("./assets/nature-3082832_960_720.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 1500px;
}
/* .weather_part {
  background-image: url("./assets/ev-miIeeCgN1m8-unsplash.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vh;
  margin: auto;
} */
</style>
