<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div>
      <img src="../../public/images/afsender.png" alt="HomeView.vue" class="h-6 ml-20 mt-4">
    </div>
  <nav class="fixed top-0 right-0 flex flex-col mt-12 -mr-11 font-bold text-black text-2xl">
    <RouterLink to="/" class=" mt-12 mr-11 transform rotate-90 hanken font-light font-xxl tracking-widest">Home</RouterLink>
    <RouterLink to="/about" class="mt-20 mr-11 transform rotate-90 hanken font-light tracking-widest">About</RouterLink>
    <RouterLink to="/ticket" class=" mt-20 mr-9 transform rotate-90 hanken font-light tracking-widest">Ticket</RouterLink>

  </nav>

  <RouterView />
</template>


