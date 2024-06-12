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
    <div class="grid border border-black flex-grow mt-2 my-1 mx-8 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never4.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>

      <div class="video-container">
        <video class="mb-20" loop muted>
          <source src="../../video/dans1.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 334" class="animated-svg">
          <path class="cls-1 path" d="m20.6,9c-113.77,332.07,416.34-2.02,412.36,320.43"/>
        </svg>
      </div>
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
}

.animated-svg {
  position: absolute;
  top: 0;
  left: -22%;
  width: 80%;
  height: 80%;
  opacity: 0;
  transition: opacity 1s ease;
}

.video-container:hover .animated-svg {
  opacity: 1;
}

.path {
  fill: none;
  stroke: rgb(31, 45, 233);
  stroke-width: 25;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 2s ease;
}

.video-container:hover .path {
  stroke-dashoffset: 0;
}
</style>
