<script setup>
import {getPoster, tabs} from "@/utils.js";
import MovieCard from "@/components/MovieCard.vue";
import {onMounted, ref} from "vue";
import MovieService from "@/services/MovieService.js";
import RecentMovies from "@/views/watchMovies/RecentMovies.vue";
import PopularMovies from "@/views/watchMovies/PopularMovies.vue";
import GenresMovies from "@/views/watchMovies/GenresMovies.vue";

const movies = ref([])
const activeTab = ref(0);
onMounted( () => {
  MovieService.getTrending('movie')
      .then((response) => {
        movies.value = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
})

const changeTab = (index) => {
  activeTab.value = index;
}



</script>

<template>
  <div>
    <div class="new_movies">
      <div class="container maintain">
        <div class="flex">
          <MovieCard
              v-for="(movie, index) in movies.slice(0,7)"
              :class="{ 'last-card': index === 6 }"
              :key="index"
              :image="getPoster(movie.poster_path)"
              :title="movie.title"
          />
        </div>
      </div>
    </div>
    <div class="nav-cont">
      <div class="nav">
        <div class="container">
          <div class="tab"
               v-for="(tab, index) in tabs"
               :key="index"
               :class="{'active':activeTab === index}"
               @click="changeTab(index)"
          >
            {{tab.label}}
          </div>
        </div>
      </div>
    </div>
    <div class="container hold">
      <div v-if="activeTab === 0">
        <RecentMovies />
      </div>
      <div v-if="activeTab === 1">
        <PopularMovies />
      </div>
      <div v-if="activeTab === 2">
        <GenresMovies />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
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

.nav .tab {
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