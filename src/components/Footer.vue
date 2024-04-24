<script setup>

</script>

<template>
  <footer>
    <div class="left">
      <RouterLink to="/">Goojara</RouterLink>
    </div>
    <div class="right">
      <p>ONLINE</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid #ccc;
  padding: 5px 15px;
  display: flex;
  margin-top: 25px;
  background: rgba(229,232,247,0.6);
}

div {
  width: 50%;
}

a {
  text-decoration: none;
  color: #63b2df;
  outline: 0;
}

.left {
  padding: 8px 0;
}
P {
  font-size: 13px;
  color: #777;
}
.right {
  text-transform: uppercase;
  text-align: right;
}
</style>