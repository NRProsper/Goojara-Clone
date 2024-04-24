<script setup>
import {RouterLink} from "vue-router";
import {ref, toRefs} from "vue";

const props = defineProps({
  title: String,
  image: String,
  type: String,
  year: Number
});

const {title, image} = toRefs(props);

</script>

<template>
<div class="mc">
  <RouterLink :to="{name : 'watch-movie'}">
    <img :src="image" :alt="title">
    <span class="title">{{title}}</span>
    <span v-if="type" class="type">{{type}}</span>
    <span v-if="year" class="year">{{year}}</span>
  </RouterLink>
</div>
</template>

<style scoped>
div {
  //width: 33.33%;
  //padding: 1px;

  width: 14.285%;
  padding: 10px;
  max-width: 200px;
  display: inline-block;
  vertical-align: top;
}

div a {
  display: block;
  position: relative;
  padding-bottom: 138.89%;
  overflow: hidden;
  border-radius: 3px;
}

div a:hover {
  opacity: 0.7;
}

div img {
  vertical-align: top;
  position: absolute;
  top: 0;
  color: transparent;
}

div .year {
  right: 0;
  left: auto;
  background: rgba(0,0,0,.7);
  color: silver;

  font-size: 11px;
  position: absolute;
  top: 0;
  height: 20px;
  line-height: 20px;
  width: 38px;
  text-align: center;
}

div .type {
  background: #428bca;
  color: #fff;
  font-size: 11px;
  position: absolute;
  left: 0;
  top: 0;
  height: 20px;
  line-height: 20px;
  width: 38px;
  text-align: center;
}

div .title {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  display: block;
  background: rgba(0,0,0,.7);
  padding: 0 4px;
  color: silver;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
}



</style>