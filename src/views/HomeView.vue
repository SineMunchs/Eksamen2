<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Hover effect for dans1
  const videoContainer1 = document.querySelector('.video-container-1');
  const videoElement1 = videoContainer1.querySelector('video');

  videoContainer1.addEventListener('mouseenter', () => {
    videoElement1.play();
  });

  videoContainer1.addEventListener('mouseleave', () => {
    videoElement1.pause();
    videoElement1.currentTime = 0; // Reset video to start
  });

  // Hover effect for dans2
  const videoContainer2 = document.querySelector('.video-container-2');
  const videoElement2 = videoContainer2.querySelector('video');

  videoContainer2.addEventListener('mouseenter', () => {
    videoElement2.play();
  });

  videoContainer2.addEventListener('mouseleave', () => {
    videoElement2.pause();
    videoElement2.currentTime = 0; // Reset video to start
  });
});
</script>

<template>
  <div class="flex flex-row w-full">
    <div class="grid border border-black flex-grow m-12 mt-3 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never4.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>
      
      <!-- Video 1 -->
      <div class="video-container video-container-1 flex flex-row">
        <video class="mt-60 mb-20 flex-row" loop muted>
          <source src="../../video/dans1.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 334" class="animated-svg">
          <path class="cls-1 path" d="m20.6,9c-113.77,332.07,416.34-2.02,412.36,320.43"/>
        </svg>
        <div class="m-auto">
        <h3 class="flex-row justify-center align-self hanken font-light  text-[#5C442B] text-4xl opacity-10 hover:opacity-100">"… a feeling of quiet euphoria arises. <br> A small step for our audience affinity, <br> a big one for Hoomanism."
        Aftonbladet
        </h3>
      </div>
      </div>

      <h1 class="mt-5 hanken font-light text-9xl">While in battle I'm free</h1>
      <h1 class=" flex justify-center hanken font-light text-9xl opacity-10 hover:opacity-100 bg-color-white text-[#5C442B] mb-4">Never free to rest</h1>
      
      <!-- Video 2 -->
      <div class="flex justify-center">
        <div class="video-container video-container-2">
          <video class="mt-60 mb-20" loop muted>
            <source src="../../video/dans2.mp4" type="video/mp4">
          </video>
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 334" class="animated-svg animated-1-svg">
            <path class="cls-2 path path-1" d="m30.6,9c-113.77,332.07,416.34-2.02,412.36,320.43"/>
          </svg>
      </div>
    </div>
    <div class=" w-full">
          <h2 class="hanken text-9xl"> Experience the experience </h2>
          <div class="button-container"> </div>
      <router-link to="/ticket">
        <button class="navigate-button hanken text-6xl underline mt-5 mb-10 hover:text-[#5C442B]">BOOK TICKET NOW</button>
      </router-link>
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

.video-container-2 {
  margin-left: 55%; /* Adjust this value to push the container to the right */
}

.video-container-2 video {;
  width: 100%; /* Adjust the width as needed */
  height: auto; /* Adjust the height as needed */
  margin-top: 20px; /* Adjust the top margin to position */
  margin-bottom: 40px; /* Adjust the bottom margin to position */

}

.animated-svg {
  position: absolute;
  top: -3%;
  left: -22%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 3s ease;
}

.animated-1-svg {
  position: absolute;
  top: -5%;
  left: -3%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 2s ease;
}

.video-container:hover .animated-svg {
  opacity: 1;
}

.path {
  fill: none;
  stroke: rgb(48, 59, 137);
  stroke-width: 15;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  transition: stroke-dashoffset 1s ease-in;
}

.path-1 {
  fill: none;
  stroke: rgb(48, 59, 137);
  stroke-width: 20;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  transition: stroke-dashoffset 1s ease-in;
}


.video-container:hover .path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease-in-out;
}

.video-container .path {
  transition: stroke-dashoffset 1s linear;
}
</style>
