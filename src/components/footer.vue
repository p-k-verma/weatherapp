<template>
  <div v-if="allfullweather">
    <div class="card card-updation" v-for="full in allfullweather.list" :key="full.list">
      <div class="card-body" >
        <p class="card-text">{{ allfullweather.list.dt_txt }}</p>
        <h3 class="card-title">
          {{ Math.round(allfullweather.list[0].main.temp) }}<sup>o</sup>C
        </h3>
        <p class="card-text">
          {{ Math.round(allfullweather.list[0].main.temp_max) }}<sup>o</sup>C /
          {{ Math.round(allfullweather.list[0].main.temp_min) }}<sup>o</sup>C
        </p>
        <h4>
          Feels Like {{ Math.round(allfullweather.list[0].main.feels_like)
          }}<sup>o</sup>C
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allfullweather: "",
    };
  },
  methods: {
    gettingdata() {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=1273292&units=metric&appid=1402ed3df0ffdda1b7b6676e342f6616`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.allfullweather = data;
        });
    },
  },
  mounted() {
    this.gettingdata();
  },
};
</script>
