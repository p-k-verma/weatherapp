<template>
  <div>
    <div v-if="fullweather" class="d-flex justify-content-between">
      <div>
        <div class="pngimage">
          <img
            v-if="fullweather.weather[0].description == 'clear sky'"
            src="../assets/weather/Newfolder/clearSky_mrng.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'fog'"
            src="../assets/weather/Newfolder/fog.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'shower rain'"
            src="../assets/weather/Newfolder/showerrain.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'broken clouds'"
            src="../assets/weather/Newfolder/broken_cloud.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'scattered clouds'"
            src="../assets/weather/Newfolder/scattered_cloud.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'few clouds'"
            src="../assets/weather/Newfolder/few_clouds.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'mist'"
            src="../assets/weather/Newfolder/mist.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'snow'"
            src="../assets/weather/Newfolder/snow.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'thunderstorm'"
            src="../assets/weather/Newfolder/thunderstorm.png"
            alt=""
            srcset=""
          />
          <img
            v-if="fullweather.weather[0].description == 'rain'"
            src="../assets/weather/Newfolder/rain.png"
            alt=""
            srcset=""
          />
        </div>

        <h2 class="m-0 py-0 text-capitalize">
          <small>{{ fullweather.weather[0].description }}</small>
        </h2>
        <h5 class="m-0">
          <small>{{ fullweather.name }}</small>
        </h5>
        <h1 class="temperature">
          {{ Math.round(fullweather.main.temp) }} <sup>o</sup>C
        </h1>
      </div>

      <div class="time d-flex flex-column align-items-center">
      <h1>{{ hour }}</h1>
      <h1>{{ minutes }}</h1>
      <h1>{{ seconds }}</h1>
      </div>


      <div class="other_details">
        <div class="d-flex">
          <img
            class="humidity"
            src="../assets/weather/Newfolder/humidity.png"
            alt=""
            srcset=""
          />
          <h1 class="humidity_name px-2 m-0">
            Humidity
            <div class="attribute_size">{{ fullweather.main.humidity }} %</div>
          </h1>
        </div>
        <div class="d-flex">
          <img
            class="humidity"
            src="../assets/weather/Newfolder/airPressure.png"
            alt=""
            srcset=""
          />
          <h1 class="humidity_name px-2 m-0">
            Air Pressure
            <div class="attribute_size">{{ fullweather.main.pressure }} PS</div>
          </h1>
        </div>
        <div class="d-flex">
          <img
            class="humidity"
            src="../assets/weather/Newfolder/windSpeed.png"
            alt=""
            srcset=""
          />
          <h1 class="humidity_name px-2 m-0">
            Wind Speed
            <div class="attribute_size">{{ fullweather.wind.speed }} Km/h</div>
          </h1>
        </div>
      </div>
    </div>
    <h1>{{ days[day] }}</h1>
    <div class="d-flex">
      <h1>{{ date }}&nbsp;</h1>
      <h1>{{ months[month]}}&nbsp;</h1>
      <h1>{{ year }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullweather: null,
      days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      printTime: "",
      hour: "",
      minutes: "",
      seconds: "",
      day: "",
      date: "",
      month: "",
      year: "",
    };
  },
  methods: {
    timedetails() {
      setInterval(() => {
        var hi = new Date();
        this.printTime = hi;
        this.hour = hi.getHours();
        this.minutes = hi.getMinutes();
        this.seconds = hi.getSeconds();
        this.day = hi.getDay();
        this.date = hi.getDate();
        this.month = hi.getMonth();
        this.year = hi.getFullYear();
        if (this.hour > 12) {
          this.hour = this.hour-12;
        }
        if (this.hour < 10) {
          this.hour = `0${this.hour}`;
        } 
        if (this.hour == 0) {
          this.hour = `12`;
        } 
        if (this.minutes<10) {
          this.minutes = `0${this.minutes}`
        }
        if (this.seconds<10) {
          this.seconds = `0${this.seconds}`
        }
      }, 1000);
    },
    created() {
      // replace weather with forecast to get deatail

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=1273292&units=metric&appid=1402ed3df0ffdda1b7b6676e342f6616`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.fullweather = data;
        });
    },
  },
  mounted() {
    this.timedetails();
    this.created();
  },
};
</script>

<style scoped>
.time {
  display: flex;
  color: white;
  justify-content: center;
}
.time h1 {
  font-size: 80px;
} 
* {
  color: white;
}
.pngimage {
  filter: invert();
}
</style>
