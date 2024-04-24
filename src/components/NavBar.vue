<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <nav class="top-bar">
    <div class="goojara">
      <RouterLink to="/">
        GOOJARA.to
      </RouterLink>
    </div>
    <div class="search">
      <input type="text" name="search" id="search" placeholder="Search...">
    </div>
  </nav>
</template>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  background: #2d6ab1;
  padding: 8px 10px;
}

.top-bar .goojara a {
  font-size: 24px;
  color: #fff;
  font-weight: 500;
}

.top-bar .search {
  width: 350px;
  margin-left: 25px;
  max-width: 50%;
}

.top-bar .search input {
  padding: 1px 5px;
  background-color: rgba(255,255,255,0.4);
  border: 0;
  border-radius: 2px;
  width: 100%;
  line-height: 1.6;
}
</style>