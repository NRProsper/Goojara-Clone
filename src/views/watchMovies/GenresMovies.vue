<script setup>
import {getGenres} from "@/movies.js";
import {onMounted, ref} from "vue";

const genres = ref([])
onMounted(async () => {
  const fetchedGenres = await getGenres()
  genres.value = replaceGenre(fetchedGenres, "Science Fiction", "Sci-Fi")
})

const replaceGenre = (genres, oldGenre, newGenre) => {
  return genres.map((genre) => (genre.name === oldGenre ? { ...genre, name: newGenre } : genre));
};

</script>

<template>
  <div class="genres">
    <RouterLink :to="{name: genre.name.toLowerCase()}" v-for="genre in genres" :key="genre.id">{{genre.name}}</RouterLink>
  </div>
</template>

<style scoped>
a {
  margin:2px;
  background: rgba(229,232,247,0.6);
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  font-size: 13px;

  width: 92px;
  text-align: center;

  padding: 6px 9px;
  color: inherit;
  display: inline-block;
  height: auto;
  box-sizing: border-box;
}
</style>