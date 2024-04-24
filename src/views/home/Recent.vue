<script setup>
import MovieList from "@/components/MovieList.vue";
import {getTrendMovieData, getGenres} from "@/movies.js";
import {getRecentMovieData} from "@/movies.js";
import {computed, onMounted, ref} from "vue";

const movies = ref([])
const genres = ref([])
const recentMedia = ref({
  movies : [],
  series : []
})


onMounted(async () => {
  movies.value = await getTrendMovieData("movie")
  genres.value = await getGenres()
  recentMedia.value = await getRecentMovieData()
})

const mixedMedia = computed(() => {
  return [...recentMedia.value.movies, ...recentMedia.value.series]
})

</script>

<template>
  <ul class="feed">
    <MovieList v-for="(movie, index) in mixedMedia" :key="index" :title="movie.title || movie.name" :type="movie.type" />
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