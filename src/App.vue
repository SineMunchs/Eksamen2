<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div>
      <img src="../../public/images/afsender.png" alt="HomeView.vue" class="h-4 ml-8 mt-3">
    </div>
  <nav class="fixed top-0 right-0 flex flex-col -mr-6 font-bold text-black">
    <RouterLink to="/" class="mt-20 mr-4 transform rotate-90 hanken font-light tracking-widest">Home</RouterLink>
    <RouterLink to="/about" class=" mt-20 mr-4 transform rotate-90 hanken font-light tracking-widest">About</RouterLink>
    <RouterLink to="/ticket" class=" mt-20 mr-4 transform rotate-90 hanken font-light tracking-widest">Ticket</RouterLink>

  </nav>

  <RouterView />
</template>


