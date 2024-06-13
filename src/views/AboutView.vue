<template>
  <!--GRID-->
  <div class="flex flex-row w-full">
    <div class="grid border border-black flex-grow m-20 mt-3 w-full relative">
      <div class="p-1 image-container">
<!-- svg /slash img-->
        <img src="../../public/images/about.svg" alt="HomeView.vue" class=" -mr-2 mt-50 mb-4">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -30 244 250" class="animated-svg">
          <path class="cls-1 path" d="m20.6,5c-113.77,242.07,516.34-2.02,212.36,320.43"/>
        </svg>
      </div>
        <!--hide never : "m20.6,12c-213.77,532.07,416.34-2.02,412.36,320.43"-->
    
      <div class="flex flex-row justify-start align-items-center m-6">
        <img src="../../images/hooman.jpg" alt="Image" class="small-image">
        <div class="flex-row justify-center align-self hanken font-light text-xl ml-5">
          <h3 class="text-4xl mb-2">Hooman Sharifi</h3>
          <h3 class="text-2xl">
            born in Tehran in 1973, moved to Norway at 15. He started with hip-hop and later studied classical and modern ballet. Graduating from the Oslo National Academy of the Arts, he focuses on the intersection of dance, theater, and visual arts. <br><br>
            In 2000, he founded Impure Company, creating socially and politically engaged dance works. Sharifi's intense and powerful style examines hierarchies, power, and violence.
            From 2014 to 2018, he was artistic director of Carte Blanche in Bergen, programming notable works.<br><br>
            His own works include Shadows Remain Silent and While They Are Floating, achieving success both in Norway and internationally.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.image-container {
  position: relative;
  display: inline-block;
width:100%
}

.animated-svg {
  position: absolute;
  top: -13%;
  left: -20%;
  width: 120%;
  height: 120%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.image-container:hover .animated-svg {
  opacity: 1;
}

.path {
  stroke: rgb(237, 225, 52);
  stroke-width: 15;
  fill: none;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  transition: stroke-dashoffset 4s ease-in-out;
}

.image-container:hover .path {
  stroke-dashoffset: 2;
}

.small-image {
  width: 500px;
  height: auto;
}
</style>



