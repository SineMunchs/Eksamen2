<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const videoContainer = document.querySelector('.video-container');
  const videoElement = videoContainer.querySelector('video');

  videoContainer.addEventListener('mouseenter', () => {
    videoElement.play();
  });

  videoContainer.addEventListener('mouseleave', () => {
    videoElement.pause();
    videoElement.currentTime = 0; // Reset video to start
  });
});
</script>

<template>
  <div class="flex w-full">
    <div class="grid border border-black flex-grow mt-2 my-1 mx-10 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never4.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>
<!--Video-->
      <div class="video-container ">
        <video loop muted>
          <source src="../../video/dans1.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 334" class="animated-svg">
          <path class="cls-1 path" d="m20.6,9c-113.77,332.07,416.34-2.02,412.36,320.43"/>
        </svg>
      </div>
      <h1 class ="mt-10 hanken font-light text-7xl ">While in battle i'm free </h1>
      <h1 class ="hanken font-light text-7xl ">Never free to rest </h1>

   
    </div>


  </div>





</template>

<style scoped>
.video-container {
  position: relative;
}

.video-container video {
  width: 40%;
  height: auto;
  margin-top:4%
}

.animated-svg {
  position: absolute;
  top: 0;
  left: -18%;
  width: 90%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
}

.video-container:hover .animated-svg {
  opacity: 1;
}

.path {
  fill: none;
  stroke: rgb(48 59 137);
  stroke-width: 25;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200; 
  animation: draw 8s linear infinite;
  transition: stroke-dashoffset 2s ease-in;
}

.video-container:hover .path {
  stroke-dashoffset: 0;
}
</style>
