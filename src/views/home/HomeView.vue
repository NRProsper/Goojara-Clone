<script setup>
import {computed, onMounted, ref} from "vue";
import {RouterLink} from "vue-router";

import {useRoute} from "vue-router";

import MovieCard from "@/components/MovieCard.vue";
import {getMoviePoster, getTrendMovieData, getGenres} from "@/movies.js";
import {getRecentMovieData} from "@/movies.js";

const route = useRoute()

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


</script>

<template>
  <div>
    <div class="new_movies">
      <div class="container">
        <div class="flex">
          <MovieCard
              v-for="(movie, index) in movies.slice(0,7)"
              :key="index"
              :image="getMoviePoster(movie.poster_path)"
              :title="movie.title"
              :class="{ 'last-card': index === 6 }"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="main">
          <div class="con-box">
            <div class="cat-sess">
              <RouterLink :to="{name : 'recent'}">Recent</RouterLink>
              <RouterLink :to="{name : 'popular'}">Popular</RouterLink>
              <RouterLink :to="{name : 'genre'}">Genre</RouterLink>
              <RouterLink :to="{name : 'trends-year'}">Year</RouterLink>
              <RouterLink :to="{name : 'az'}">A-Z</RouterLink>
              <RouterLink :to="{name : 'dubbed'}">Language</RouterLink>
            </div>
            <div id="list" style="display: block;">
              <hr />
              <RouterView />
            </div>
          </div>
          <div v-if="route.path ==='/'" class="side-main">
            <div class="side-main-in">
              <p>
                Have a movie or TV show you'd like to see on Goojara? Tell us about it at
                <a href="" style="color:blue;">https://supernova.to/sn/requests</a>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.router-link-active {
  background: #2d6ab1!important;
  color: #fff!important;
  border: 1px solid #0d6ab1!important;
}

.flex div {
  width: 33.33%;
  padding: 1px;
}

.last-card {
  display: none;
}


.con-box {
  border: 1px solid #e2e2e2;
  margin-top: 10px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  padding: 5px;
  font-size: 13px;
  position: relative;
}


.cat-sess a {
  height: 30px;
  border: 1px solid #ddd;
  margin: 4px;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;

  padding: 6px 9px;
  color: inherit;
  display: inline-block;
}


.side-main-in {
  border: 1px solid #e2e2e2;
  margin-top: 10px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  padding: 5px;
  font-size: 13px;
  position: relative;
}

hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.con-box {
  width: 100%;
}

.side-main {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .side-main {
    width: 38%;
    padding-left: 1%;
    display: inline-block;
    vertical-align: top;
  }
  .last-card {
    display: block;
  }
  .flex div {
    width: 14.285%;
    padding: 10px;
    max-width: 200px;
    display: inline-block;
    vertical-align: top;
  }
  .main {
    display: flex;
    position: relative;
  }
  .con-box {
    width: 61%;
    display: inline-block;
    padding: 10px;
  }
}

</style>