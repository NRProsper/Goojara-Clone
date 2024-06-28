<script setup>
import {onMounted, ref, watchEffect} from "vue";
import MovieList from "@/components/MovieList.vue";
import MovieService from "@/services/MovieService.js";

const movies = ref([])
const series = ref([])
const shuffled = ref([]);


//Currently using log to show errors.
// TODO: to be modified later
onMounted(() => {
  MovieService.getTrending('movie')
      .then((response) => {
        movies.value = response.data.results.map((result) => {
          return {
            ...result,
            type: 'movie'
          }
        });
      })
      .catch((error) => {
        console.log(error);
      })
  MovieService.getTrending('tv')
      .then((response) => {
        series.value = response.data.results.map((result) => {
          return {
            ...result,
            type: 'tv'
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })

})

//TODO: Learn watchEffect again
// It automatically tracks every reactive property accessed during its synchronous execution.
watchEffect(() => {
  shuffled.value = ([...movies.value, ...series.value]);
})


</script>

<template>
  <ul class="feed">
    <MovieList v-for="(movie, index) in shuffled" :key="index" :title="movie.title || movie.name" :type="movie.type" />
  </ul>
</template>

<style scoped>
.feed {
  padding: 0 5px;
  margin: 0;
  margin-top: 10px;
}

ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

</style>