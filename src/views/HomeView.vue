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
    <div class="grid border border-black flex-grow m-20 mt-3 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>
      
      <!-- Video 1 -->
      <div class="video-container video-container-1 flex flex-row">
        <video class="mt-60 mb-20 p-3 flex-row" loop muted>
          <source src="../../video/dans1.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8283.67 3317.32" class="animated-svg">
          <path class="cls-1 path" d="m8276.63,3243.66c-233.5-345.74-2915.58-665.69-2893.3-1339.39,40.55-1225.49-2367.86-633.15-1850.75-1552.2C3971.92-428.75,2157.35,410.76,1.23,95.79"/>
          <path class="cls-3 path path-3" d="m8203.09,3279.81c-193.34-288.91-3089.22-691.35-3020.82-1240.15,158.14-1268.87-2319.87-650.14-1850.75-1552.2,411.99-794.59-952.24,75.95-3216.56-251.29"/>
          <path class="cls-2 path path-1" d="m8129.55,3315.94c-153.2-232.06-3249.44-712.14-3148.36-1140.89,306.7-1300.93-2083.58-738.88-1850.75-1552.2,249.13-870.23-529.28,93.21-2901.77-246.32"/>
        </svg>
        <div class="m-auto">
          <h1 class="mt-6 ml-40 hanken font-light text-7xl">While in Battle I'm Free</h1>
          <h1 class="flex ml-40 hanken font-light text-7xl">  Never Free to Rest</h1>
      
        </div>
      </div>
     
      
      <!-- Video 2 -->
      <div class="flex justify-center mt-20">
        <div class="video-container video-container-2">
          <video class="mt-90 mb-20 p-2" loop muted>
            <source src="../../video/dans2.mp4" type="video/mp4">
          </video>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="30 0 5283.67 3317.32" class="animated-svg">
            <path class="cls-1 path" d="m8276.63,3243.66c-233.5-345.74-2915.58-665.69-2893.3-1339.39,40.55-1225.49-2367.86-633.15-1850.75-1552.2C3971.92-428.75,2157.35,410.76,1.23,95.79"/>
            <path class="cls-3 path path-3" d="m8203.09,3279.81c-193.34-288.91-3089.22-691.35-3020.82-1240.15,158.14-1268.87-2319.87-650.14-1850.75-1552.2,411.99-794.59-952.24,75.95-3216.56-251.29"/>
            <path class="cls-2 path path-1" d="m8129.55,3315.94c-153.2-232.06-3249.44-712.14-3148.36-1140.89,306.7-1300.93-2083.58-738.88-1850.75-1552.2,249.13-870.23-529.28,93.21-2901.77-246.32"/>
          </svg>
        </div>
      </div>
      <div class="w-ful p-2">
        <h1 class="mt-2 hanken font-light text-2xl ">   BLÅGÅRDS PLADS CPH N 07:30pm 25 - 29/6 2024</h1>
        <h2 class="hanken font-extralight text-4xl">Experience the Experience</h2>
        <div class="button-container"></div>
        <router-link to="/ticket">
          <button class="navigate-button hanken font-light text-3xl underline mt-2 mb-10 hover:text-[#5C442B]">BOOK TICKETS NOW</button>
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
  margin-left: 55%; 
}

.video-container-2 video {
  width: 100%; 
  height: auto; 
  margin-top: 20px; 
  margin-bottom: 40px; 
}
.animated-svg {
  position: absolute;
  top: 30%;
  left: -20%;
  width: 160%;
  height: 160%;
  opacity: 0;
  transition: opacity 2s ease;
}

.video-container-2 .animated-svg {
  top: 10; 
  left: -10%; 
}

.path {
  fill: none;
  stroke: #E6B45D; /* Corrected stroke color */
  stroke-width: 40px;
  stroke-dasharray: 9000; /* Extended stroke length */
  stroke-dashoffset: 9000; /* Adjusted offset to match length */
  transition: stroke-dashoffset 1s ease-in;
}

.path-3 {
  fill: none;
  stroke: #E6B45D; 
  stroke-width: 20px;
  stroke-dasharray: 9000; 
  stroke-dashoffset: 9000; 
  transition: stroke-dashoffset 1s ease-in-out;
}

.path-1 {
  fill: none;
  stroke: #E6B45D; /* Corrected stroke color */
  stroke-width: 30px;
  stroke-dasharray: 9000; /* Extended stroke length */
  stroke-dashoffset: 9000; /* Adjusted offset to match length */
  transition: stroke-dashoffset 1s ease-in;
}

.video-container:hover .animated-svg {
  opacity: 1;
}
@keyframes draw {
  0% {
    stroke-dashoffset: 9000;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -9000;
  }
}

.path,
.path-3,
.path-1 {
  animation: draw 10s linear infinite paused;
}

.video-container:hover .path,
.video-container:hover .path-3,
.video-container:hover .path-1 {
  animation-play-state: running;
}



.video-container .path,
.video-container .path-3,
.video-container .path-1 {
  transition: stroke-dashoffset 10s linear;
}
</style>
