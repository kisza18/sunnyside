<template>
  <div class="section w-full h-screen flex flex-col" :class="flexAlign">
    <div
      class="image h-2/5 flex items-center justify-center sm:h-1/2 md:w-1/2 md:h-96 lg:h-auto"
    >
      <img
        class="object-cover w-full h-full"
        :src="require(`../assets/images/mobile/${backgroundImage}`)"
        alt=""
      />
    </div>

    <div
      class="content h-3/5 flex flex-col items-center justify-center text-center px-8 bg-gray-50 sm:h-1/2 md:w-1/2 md:h-96 lg:h-auto md:items-start md:text-left lg:px-16"
    >
      <h1 class="text-3xl mb-5 xl:text-5xl xl:mb-8">{{ title }}</h1>
      <p class="text-base text-gray-500 mb-6 xl:text-xl xl:mb-8">{{ text }}</p>
      <button
        class="text-base font-bold border-b-4 focus:outline-none xl:text-lg"
        :class="colors"
      >
        LEARN MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "backgroundImage", "colors", "flexAlign"],
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .section {
    min-height: 550px;
    max-height: 812px;
  }
}
@media screen and (min-width: 768px) {
  .section {
    min-height: 384px;
    height: 384px;
  }
}
@media screen and (min-width: 1280px) {
  .section {
    min-height: 500px;
    height: 600px;
  }
}
h1,
button {
  font-family: "Fraunces", serif;
}
.yellow {
  border-color: hsl(51, 100%, 49%);
}
.red {
  border-color: hsl(7, 99%, 70%);
}
</style>
