<template>
  <div class="main w-full bg-gray-200">
    <div class="section h-screen max-w-7xl mx-auto">
      <div
        class="content w-full h-full flex flex-col items-center justify-center pb-10 md:pb-28"
      >
        <h1
          class="text-white text-5xl text-center leading-tight tracking-wider lg:text-7xl"
        >
          WE ARE CREATIVES
        </h1>
        <img class="mt-28" src="../assets/icons/icon-arrow-down.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  background-image: url("../assets/images/mobile/image-header.jpg");
  background-size: cover;
  background-position: center;
  font-family: "Fraunces", serif;
}
.main {
  background: hsl(200, 100%, 62%);
}
@media screen and (max-width: 768px) {
  .section {
    min-height: 550px;
    max-height: 812px;
  }
}
@media screen and (min-width: 768px) {
  .section {
    background-image: url("../assets/images/desktop/image-header.jpg");
  }
}
@media screen and (min-width: 1280px) {
  .section {
    height: 100vh;
  }
}
</style>
