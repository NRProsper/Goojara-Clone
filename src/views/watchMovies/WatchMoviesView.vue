<script setup>
import {getTrendMovieData, getMoviePoster} from "@/movies.js";
import MovieCard from "@/components/MovieCard.vue";
import {onMounted, ref} from "vue";

const movies = ref([])

onMounted(async () => {
  movies.value = await getTrendMovieData("movie")
})




</script>

<template>
  <div>
    <div class="new_movies">
      <div class="container">
        <div class="flex">
          <MovieCard
              v-for="(movie, index) in movies.slice(0,7)"
              :class="{ 'last-card': index === 6 }"
              :key="index"
              :image="getMoviePoster(movie.poster_path)"
              :title="movie.title"
          />
        </div>
      </div>
    </div>
    <div class="nav-cont">
      <div class="nav">
        <div class="container">
          <RouterLink :to="{name: 'recent-movie'}">Recent</RouterLink>
          <RouterLink :to="{name : 'popular-movie'}">Popular</RouterLink>
          <RouterLink :to="{name: 'by-genres'}">Genres</RouterLink>
          <RouterLink :to="{name: 'by-year'}">Year</RouterLink>
          <RouterLink to="az">A-Z</RouterLink>
          <RouterLink to="language">Language</RouterLink>
        </div>
      </div>
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: white;
  background: orange !important;
}
.nav-cont {
  border-bottom: 1px solid orange;
  margin: 25px 0 10px;
}

.nav {
  width: 100%;
}

.nav a {
  margin: 0 2px;
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  font-size: 13px;
  color: #000;

  padding: 6px 9px;
  display: inline-block;
  height: auto;
}

.last-card {
  display: none;
}
@media only screen and (min-width: 768px) {
  .nav {
    display: inline-block;
    padding: 0 5px;
  }
  .nav-cont {
    display: flex;
    position: relative;
  }
  .last-card {
    display: block;
  }
}



</style>