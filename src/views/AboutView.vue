<template>
  <div class="flex flex-row w-full">
    <div class="grid border border-black flex-grow m-20 mt-3 w-full relative">
      <div class="p-1 image-container">
        <img src="../../public/images/about.svg" alt="HomeView.vue" class="mt-20 -mr-2 mb-4">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 334" class="animated-svg">
          <path class="cls-1 path" d="m20.6,9c-113.77,332.07,416.34-2.02,412.36,320.43"/>
        </svg>
      </div>
    
      <div class="flex flex-row justify-start align-items-center mt-6">
        <img src="../../images/hooman.jpg" alt="Image" class="small-image">
        <div class="flex-row justify-center align-self hanken font-light text-xl ml-5">
          <h3 class="text-3xl">Hooman Sharifi</h3>
          <h3>
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
}

.animated-svg {
  position: absolute;
  top: -9%;
  left: -20;
  width: 100%;
  height: 100%;
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
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 2s ease-in-out;
}

.image-container:hover .path {
  stroke-dashoffset: 0;
}

.small-image {
  width: 500px;
  height: auto;
}
</style>



