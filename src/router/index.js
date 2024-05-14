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
import PageNotFound from "@/pages/errorPages/PageNotFound.vue";

const genres = ref([])
const setup = async () => {
  const fetchedGenres = await getGenres()
  genres.value = replaceGenre(fetchedGenres, "Science Fiction", "Sci-Fi")
}



const replaceGenre = (genres, oldGenre, newGenre) => {
  return genres.map((genre) => (genre.name === oldGenre ? { ...genre, name: newGenre } : genre));
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/watch-movies',
      name: 'watch-movies',
      component: WatchMoviesView,
      children: [
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const routeExists = router.getRoutes().some(route => route.path === to.path);
  if(!routeExists) {
    next({name: 'pageNotFound'})
  }else {
    next();
  }
})

export default router
