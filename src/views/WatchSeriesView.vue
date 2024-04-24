<script setup>
import {getMoviePoster, getTrendMovieData} from "@/movies.js";
import MovieCard from "@/components/MovieCard.vue";
import {onMounted, ref} from "vue";

const movies = ref([])

onMounted(async () => {
  movies.value = await getTrendMovieData("tv")
})


</script>

<template>
  <div>
    <div class="new_movies">
      <div class="container">
        <div class="flex">
          <MovieCard v-for="(movie, index) in movies.slice(0,7)" :key="index" :image="getMoviePoster(movie.poster_path)" :title="movie.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>