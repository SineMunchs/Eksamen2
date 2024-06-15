Kode uden nav
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

});
</script>

<template>
  <div class="flex flex-row w-full">
    <div class="grid border border-black flex-grow m-20 mt-3 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>

      <!-- Video 1 -->
      <div class="video-container video-container-1 flex flex-row" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <video ref="video1" class="mt-40 mb-20 ml-40 p-3 flex-row" loop muted>
          <source src="../../video/dans.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6057.34 2747.49" class="animated-svg">
            <path class="cls-3 path" d="m-37.5,261c215.84-73.13,567.46,129.92,1131.23,406.92,881.35,433.05,1039.92,330.48,1176.63,93.21,717.97-1246.09,1515.41,851.11,1773.19-402.94,193.36-940.66,591.89,892.12,2013.95,1901.81"/>
            <path class="cls-1 path path-3" d="m-18.5,531c215.84-73.13,583.69,125.32,1147.46,402.33,881.35,433.05,1039.92,330.48,1176.63,93.21,717.97-1246.09,1515.41,851.11,1773.19-402.94,193.36-940.66,776.45,1010.81,1975.73,1847.4"/>
             <path class="cls-2 path path-1" d="m.5,801c215.84-73.13,599.91,120.73,1163.68,397.73,881.35,433.05,1039.92,330.48,1176.63,93.21,717.97-1246.09,1515.41,851.11,1773.19-402.94,193.36-940.66,961.01,1129.5,1937.51,1793"/>
        </svg>
        <div class="m-auto">
            <h1 class=" hanken font-light text-2xl ">   BLÅGÅRDS PLADS CPH N_____07:30pm 25 - 29/6 2024</h1>
          <h1 class=" hanken font-light text-7xl">While in Battle I'm Free</h1>
          <h1 class="flex hanken font-light text-7xl">  Never Free to Rest</h1>
   
        </div>
      </div>
    
      <div class=" hanken font-extralight text-4xl flex flex-col w-full p-10 mt-20">
    <div class="flex flex-row w-full">
      <div class=" ml-40 w-1/2 p-4">
      
        <p> Choreography:<br>Hooman Sharifi<br>
        Musik & sound design: <br>Neda Sanai
        <br>Light: <br>David Prokopi?, Hooman Sharifi
        <br>Costume: <br>Hooman Sharifi, Marita Tjärnström
        <br>Poets: <br>BAM - Burcu Sahin, Athena Farrokhzad, Merima Dizdarevi?
        <br>Rehearsal leader: <br>Agnieszka Dlugoszewska
        <br>Project advisor: <br>Niki Tsappos</p>

        <!--knap-->
        <div class="button-container"></div>
        <router-link to="/ticket">
          <button class="navigate-button hanken font-light text-4xl underline mt-20 mb-10 hover:text-[#5C442B]">BOOK TICKETS NOW</button>
        </router-link>
      </div>
      <div class="w-1/2 p-4">
        <p class ="p-2">Dancers: Afra Hosseini Kaladjahi,<br> Ama Kyei, Anand Bolder, <br>Anastasija Olescuka,
          Andreas <br>Sanchez, Anna Fitoussi, Camille <br> Prieux, Chiara Gilioli, <br>Eleanor Campbell,
        Elin Hallqvist, <br>Eliott Marmouset, Eszter <br>Czédulás, Freddy Houndekindo, <br>Gloria Kapako,
        Ida Holmlund, <br>Johanna Tengan, Judith Coumans,<br> Lilian Steiner, Mohamed Y.Shika,<br>Noam Segal,
        Omar<br> Velasquez Rojas, Rebecca Livaniou, <br>Robin Johansson, <br>Vincent Van der Plas </p>
        </div>
      </div>
    </div>
         <img src="../../public/images/vi ses.svg" alt="HomeView.vue" class="-mr-2 mb-4">
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
  top: 20%;
  left: 0%;
  width: 100%;
  height: 180%;
  opacity: 0;
  transition: opacity 0.6ms ease;
}

.video-container-2 .animated-svg {
  top: 10; 
  left: -10%; 
}

.path {
  fill: none;
  stroke: #E6B45D; /* Corrected stroke color */
  stroke-width: 60px;
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
  stroke-width: 10px;
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


