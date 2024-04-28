<script setup>
import {RouterLink, useRoute} from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Spinner from "@/components/Spinner.vue";

const route = useRoute();

function isRouteActive(activeRoute) {
  return route.path === activeRoute
}

</script>

<template>
  <div>
    <Spinner />
    <NavBar/>
    <main>
      <div class="top_nav">
        <div v-if="route.path !== '/watch-movie'" class="container">
          <RouterLink  to="/">Browse</RouterLink>
          <RouterLink  to="/watch-movies">Movies</RouterLink>
          <RouterLink  to="/watch-series">Series</RouterLink>
        </div>
        <hr />
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>


<style scoped>
.router-link-active {
  border-bottom: 3px solid #2d6ab1;
}

.top_nav {
  //background-color: rgba(229,232,247,0.6);
}

.top_nav a {
  display: inline-block;
  line-height: 36px;
  padding: 0 12px;
  font-size: 16px;
  color: #333;
  margin-right: 5px;
}

.top_nav a:hover {
  border-bottom: 3px solid #2d6ab1;
}

.top_nav a.active {

}

.top-bar hr {
  margin: 0;
  border-bottom: 1px solid rgba(0,0,0,0.15);

  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
}




</style>

