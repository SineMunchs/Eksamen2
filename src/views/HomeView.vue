<script setup>
</script>

<template>
  <div class="flex w-full">
    <div class="grid border border-black flex-grow mt-2 my-1 mx-8 w-full relative">
      <div class="p-1">
        <img src="../../public/images/never4.svg" alt="HomeView.vue" class="-mr-2 mb-4">
      </div>


      <div class="video-container">
        <video class="mb-20" autoplay loop muted>
          <source src="../../video/dans1.mp4" type="video/mp4">
        </video>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271 361" class="animated-svg ">
          <path class="cls-1 path" d="m60.1,25.5C-13.9,161.5,267.67,211.91,220.1,345.5"/>
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

.video-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
}
.animated-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.path {
  fill: none;
  stroke: rgb(31, 45, 233);
  stroke-width: 10;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 1s ease;
}

.video-container:hover .path {
  stroke-dashoffset: 0;
}
</style>
