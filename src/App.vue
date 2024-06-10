<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="fixed flex flex-col items-center mr-40 top-2 gap-10 w-[96vw] justify-start elite font-bold text-blue-600">
    <RouterLink to="/" class="transform rotate-90 elite font-bold text-2xl hover:text-black tracking-widest">Home</RouterLink>
    <RouterLink to="/about" class="transform rotate-90 elite font-bold text-2xl hover:text-black tracking-widest">About</RouterLink>
  </nav>


  <RouterView />
</template>

<style scoped>
</style>
