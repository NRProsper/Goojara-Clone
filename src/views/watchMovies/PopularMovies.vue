<script setup>
import {getMoviePoster, getPopularMovieData, sortedMovies, sortMovies} from "@/movies.js";
import MovieCard from "@/components/MovieCard.vue";
import {computed, onMounted, ref} from "vue";
import MovieService from "@/services/MovieService.js";

const popularMovies = ref([])
const sorted = ref([])



onMounted(() => {
  MovieService.getPopular('movie')
      .then((response) => {
        popularMovies.value = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
})



function getYear(releaseDate) {
  const date = new Date(releaseDate)
  return date.getFullYear()
}

</script>

<template>
  <div class="flex">
    <MovieCard
        v-for="(movie, index) in popularMovies"
        :key="index"
        :image="getMoviePoster(movie.poster_path)"
        :title="movie.title"
        :year="getYear(movie.release_date)"
        type="HD"
    />
  </div>
</template>

<style scoped>
.flex div {
  width: 33.33%;
  padding: 1px;
}


@media only screen and (min-width: 768px) {
  .flex div {
    width: 14.285%;
    padding: 10px;
    max-width: 200px;
    display: inline-block;
    vertical-align: top;
  }
}

</style>