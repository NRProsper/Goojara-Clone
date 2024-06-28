<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import MovieService from "@/services/MovieService.js";
import {getPoster, tabs} from '@/utils.js'
import {useLoadingStore} from "@/stores/loading.js";

import MovieCard from "@/components/MovieCard.vue";
import Recent from "@/views/home/Recent.vue";
import Popular from "@/views/home/Popular.vue";

const route = useRoute()
const loadingStore = useLoadingStore();

const movies = ref([])
const genres = ref([])

const activeTab = ref(0);


const changeTab = (index) => {
  activeTab.value = index;
}


//Currently using log to show errors.
// TODO: to be modified later
onMounted(() => {
  MovieService.getTrending('movie')
      .then((response) => {
        movies.value = response.data.results;
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      })
})



</script>

<template>
  <div>
    <div class="new_movies">
      <div class="container maintain">
        <div class="flex">
          <MovieCard
              v-for="(movie, index) in movies.slice(0,7)"
              :key="movie.id"
              :image="getPoster(movie.poster_path)"
              :title="movie.title"
              :class="{ 'last-card': index === 6 }"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="main hold">
          <div class="con-box">
            <div class="cat-sess">
              <div class="tab"
                   v-for="(tab, index) in tabs"
                   :key="index"
                   :class="{'active':activeTab === index}"
                   @click="changeTab(index)"
              >
                {{tab.label}}
              </div>
            </div>
            <div id="list" style="display: block;">
              <hr />
              <div v-if="activeTab === 0">
                <Recent />
              </div>
              <div v-if="activeTab === 1">
                <Popular />
              </div>
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

.active {
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


.cat-sess .tab {
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