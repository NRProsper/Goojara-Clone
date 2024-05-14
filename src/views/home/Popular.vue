<script setup>
import {getPopularMovieData, getPopularData, sortedMovies} from "@/movies.js";
import {computed, onMounted, ref, watchEffect} from "vue";
import MovieList from "@/components/MovieList.vue";
import MovieService from "@/services/MovieService.js";

const movies = ref([])
const series = ref([])
const popularMovies = ref([]);

onMounted(() => {
  MovieService.getPopular('movie')
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
  MovieService.getPopular('tv')
      .then((response) => {
        series.value = response.data.results.map((result) => {
          return {
            ...result,
            type: 'tv'
          }
        });
      })
      .catch((error) => {
        console.log(error);
      })
})

watchEffect(() => {
  popularMovies.value = [...movies.value, ...series.value];
})

// const sortedMedia = computed(() => {
//   return sortedMovies(popularMovies.value)
// })

</script>

<template>
  <ul class="feed">
    <MovieList v-for="(movie, index) in popularMovies" :key="index" :title="movie.title || movie.name" :type="movie.type" />
  </ul>
</template>

<style scoped>

</style>