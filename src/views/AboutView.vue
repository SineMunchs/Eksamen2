stroke  about side 
<template>
  <!--GRID-->
  <div class="flex flex-row w-full">
    <div class="grid border border-black flex-grow m-20 mt-3 w-full relative">
      <div class="p-1 image-container">
        
<!-- svg /slash img-->
        <img src="../../public/images/while.svg" alt="HomeView.vue" class=" -mr-2 mt-50 mb-80">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4698 2329.5" class="animated-svg">
          <path class="cls-3 path" d="m59,229.48c162.36-57.13,352.77,89.41,776.85,305.79,662.97,338.27,782.25,258.15,885.09,72.81,540.07-973.37,1139.93,664.83,1333.84-314.75,145.45-734.79,446.49,416.68,1514.24,1534.54"/>
          <path class="cls-1 path path-3" d="m85.49,436.8c162.36-57.13,352.77,89.41,776.85,305.79,662.97,338.27,782.25,258.15,885.09,72.81,540.07-973.37,1139.93,664.83,1333.84-314.75,145.45-734.79,446.49,416.68,1514.24,1534.54"/>
         <path class="cls-2 path path-1" d="m111.99,644.11c162.36-57.13,352.77,89.41,776.85,305.79,662.97,338.27,782.25,258.15,885.09,72.81,540.07-973.37,1139.93,664.83,1333.84-314.75,145.45-734.79,446.49,416.68,1514.24,1534.54"/>        </svg>
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
width:100%
}

.animated-svg {
  position: absolute;
  top: 17%;
  left: -18%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.image-container:hover .animated-svg {
  opacity: 1;
}

.path {
  stroke: #E6B45D; 
  stroke-width: 60;
  fill: none;
  stroke-dasharray: 9000;
  stroke-dashoffset: 9000;
  transition: stroke-dashoffset 4s ease-in-out;
}

.path-3 {
  fill: none;
  stroke: #E6B45D; 
  stroke-width: 20px;
  stroke-dasharray: 9000; 
  stroke-dashoffset: 9000; 
  transition: stroke-dashoffset 4s ease-in-out;
}

.path-1 {
  fill: none;
  stroke: #E6B45D; /* Corrected stroke color */
  stroke-width: 10px;
  stroke-dasharray: 9000; /* Extended stroke length */
  stroke-dashoffset: 9000; /* Adjusted offset to match length */
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




