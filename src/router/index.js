import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import WatchMoviesView from "@/views/watchMovies/WatchMoviesView.vue";
import WatchSeriesView from "@/views/WatchSeriesView.vue";
import Recent from "@/views/home/Recent.vue";
import Popular from "@/views/home/Popular.vue";
import WatchMovie from "@/pages/WatchMovie.vue";
import RecentMovies from "@/views/watchMovies/RecentMovies.vue";
import PopularMovies from "@/views/watchMovies/PopularMovies.vue";
import GenresMovies from "@/views/watchMovies/GenresMovies.vue";
import {onMounted, ref} from "vue";
import {getGenres} from "@/movies.js";

const genres = ref([])
const setup = async () => {
  const fetchedGenres = await getGenres()
  genres.value = replaceGenre(fetchedGenres, "Science Fiction", "Sci-Fi")
}

onMounted(setup)

const replaceGenre = (genres, oldGenre, newGenre) => {
  return genres.map((genre) => (genre.name === oldGenre ? { ...genre, name: newGenre } : genre));
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'watch-trends-recent',
      component: HomeView,
      children: [
        {path : 'watch-trends-recent', name: 'recent', component: Recent},
        {path : 'watch-trends-popular', name: 'popular', component: Popular},
        {path : 'watch-trends-genre', name: 'genre', component: Popular},
        {path : 'watch-trends-year', name: 'trends-year', component: Popular},
        {path : 'watch-movies-az', name: 'az', component: Popular},
        {path : 'watch-movies-dubbed', name: 'dubbed', component: Popular}
      ]
    },
    {
      path: '/watch-movies',
      name: 'watch-movies',
      component: WatchMoviesView,
      children: [
        {path: '', name: 'recent-movie', component: RecentMovies},
        {path: 'popular', name: 'popular-movie', component: PopularMovies},
        {path: 'genres',
          name: 'by-genres',
          component: GenresMovies,
          children: genres.value.map(() => ({
            path: genre.name.toLowerCase(),
            name: genre.name.toLowerCase()
          }))
        },
        {path: 'year', name: 'by-year', component: RecentMovies}
      ]
    },
    {
      path: '/watch-series',
      name: 'watch-series',
      component: WatchSeriesView
    },
    {
      path: '/watch-movie',
      name: 'watch-movie',
      component: WatchMovie
    }
  ]
})

export default router
