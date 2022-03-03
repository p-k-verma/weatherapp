<template>
  <div v-if="allfullweather">
    <!-- <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide"> -->
        <agile>
          <div class="card card-updation slide" v-for="full in allfullweather.list" :key="full.list">
            <div class="">
              <p class="card-text">{{ full.dt_txt }}</p>
              <h3 class="card-title">
                {{ Math.round(full.main.temp) }}<sup>o</sup>C
              </h3>
              <p class="card-text">
                {{ Math.round(full.main.temp_max) }}<sup>o</sup>C /
                {{ Math.round(full.main.temp_min) }}<sup>o</sup>C
              </p>
              <h4>
                Feels Like {{ Math.round(full.main.feels_like) }}<sup>o</sup>C
              </h4>
            </div>
          </div>
          
        </agile>
      <!-- </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> -->
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { VueAgile } from 'vue-agile'

export default {
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    agile: VueAgile
  },
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
  next() {
    this.$refs.slick.next();
  },

  prev() {
    this.$refs.slick.prev();
  },

  reInit() {
    // Helpful if you have to deal with v-for to update dynamic lists
    this.$nextTick(() => {
      this.$refs.slick.reSlick();
    });
  },
  mounted() {
    this.gettingdata();
  },
};
</script>
