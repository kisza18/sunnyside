<template>
  <div class="hero relative w-full flex flex-col items-center justify-end">
    <img
      class="absolute object-cover h-full w-full top-0 md:hidden"
      :src="require(`../assets/images/mobile/${backgroundImage}`)"
      alt=""
    />
    <img
      class="absolute hidden md:block object-cover h-full w-full top-0"
      :src="require(`../assets/images/desktop/${backgroundImageLg}`)"
      alt=""
    />
    <div class="z-10 text-center mb-20 px-8 md:mb-10 xl:mb-20 xl:px-28">
      <h1 class="text-3xl mb-5 md:text-xl xl:text-4xl" :class="colors">
        {{ title }}
      </h1>
      <p class="text-base text-gray-500 md:text-sm xl:text-xl">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "backgroundImage", "colors", "backgroundImageLg"],
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .hero {
    min-height: 550px;
    max-height: 812px;
  }
}
@media screen and (min-width: 768px) {
  .hero {
    min-height: 384px;
    height: 384px;
  }
}
@media screen and (min-width: 1280px) {
  .hero {
    min-height: 500px;
    height: 600px;
  }
}
h1 {
  font-family: "Fraunces", serif;
}
.green {
  color: hsl(167, 40%, 24%);
}
.blue {
  color: hsl(198, 62%, 26%);
}
</style>
