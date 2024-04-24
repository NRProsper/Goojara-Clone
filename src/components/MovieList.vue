<script setup>
import {toRefs} from "vue";

const props = defineProps({
  title: String,
  type: String,
  vid_cat: String
})

const {title, type, vid_cat} = toRefs(props)

</script>

<template>
  <li>
    <RouterLink :to="{name : 'watch-movie'}">
      <div :class="{ 'item': true, 'movie-background': type === 'movie', 'series-background': type === 'tv' }">
        <strong>{{ title }}</strong>
        <span>HDTV</span>
      </div>
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  border-bottom: 1px solid #E9E9E9;
  cursor: pointer;
  line-height: 30px;
  padding-left: 5px;
  box-sizing: border-box;
  position: relative;

  display: list-item;
  text-align: -webkit-match-parent;
}

a div {
  background-repeat: no-repeat;
  padding-left: 25px;
  background-position: left center;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 55px;
}

a {
  color: #266061;
}

a span {
  border: 1px solid #357ebd;
  background: #428bca;

  color: #fff;
  font-size: 11px;
  position: absolute;
  right: 4px;
  height: 18px;
  line-height: 18px;
  border-radius: 2px;
  top: 5px;
  width: 38px;
  text-align: center;
}

.movie-background {
  background-image: url("/image/im.png");
}.series-background {
  background-image: url("/image/it.png");
}
</style>