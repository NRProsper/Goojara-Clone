<script setup>
import {getPopularMovieData, getPopularData, sortedMovies} from "@/movies.js";
import {computed, onMounted, ref} from "vue";
import MovieList from "@/components/MovieList.vue";

const popular = ref([])
const popularMedia = ref({
  movies : [],
  series : []
})

onMounted(async () => {
  popular.value = await getPopularMovieData("movie")
  popularMedia.value = await getPopularData()
})

const mixedMedia = computed(() => {
  return [...popularMedia.value.movies, ...popularMedia.value.series]
})

const sortedMedia = computed(() => {
  return sortedMovies(mixedMedia.value)
})

</script>

<template>
  <ul class="feed">
    <MovieList v-for="(movie, index) in sortedMedia" :key="index" :title="movie.title || movie.name" :type="movie.type" />
  </ul>
</template>

<style scoped>

</style>