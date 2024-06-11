<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <nav class="fixed top-0 right-0 flex flex-col -mr-4 font-bold text-black">
    <RouterLink to="/" class="mt-20 mr-4 transform rotate-90 hanken font-light tracking-widest">Home</RouterLink>
    <RouterLink to="/about" class=" mt-20 mr-4 transform rotate-90 hanken font-light tracking-widest">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style >

</style>
