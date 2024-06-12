<script setup>
</script>

<template>
  <div class="flex w-full">
    <div class="grid border border-black flex-grow mt-2 my-1 mx-8 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never4.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>
      <div class="video-container">
        <video class="h-40" autoplay loop muted>
          <source src="../../video/dans.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 361" class="animated-svg">
          <path class="cls-1" d="m60.1,25.5C-13.9,161.5,267.67,211.91,220.1,345.5"/>
        </svg>
      </div>
    </div>
  </div>
</template>



<style scoped>

.cls-1{
  
  fill: none;
  stroke: #000000;
  stroke-width: 0.3rem;
  stroke-miterlimit: 10;
  transition: stroke-dashoffset 3s ease;
}
.video-container:hover .cls{
  stroke-dashoffset: 0;
}
.cls-1 {
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
}
.video-container {
  position: relative;
}

.animated-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: animateSvg 5s infinite;
}


@keyframes animateSvg {
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
}
</style>