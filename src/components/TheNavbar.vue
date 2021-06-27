<template>
  <div
    class="header fixed left-0 z-20 w-full animated duration-500"
    :class="{ scrolled: !view.atTopOfPage }"
  >
    <div class="max-w-screen-2xl mx-auto flex items-center justify-between p-5">
      <div class="logo">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="nav-list hidden md:block">
        <ul class="flex items-center text-white text-sm lg:text-base">
          <li>
            <a
              class="mr-8 hover:text-darkGreeny transition duration-300 ease-in-out"
              href=""
              >About</a
            >
          </li>
          <li>
            <a
              class="mr-8 hover:text-darkGreeny transition duration-300 ease-in-out"
              href=""
              >Services</a
            >
          </li>
          <li>
            <a
              class="mr-8 hover:text-darkGreeny transition duration-300 ease-in-out"
              href=""
              >Projects</a
            >
          </li>
          <li>
            <a
              class="contact bg-white text-black text-xs px-4 py-2 rounded-full hover:bg-opacity-50 transition duration-300 ease-in-out"
              href=""
              >CONTACT</a
            >
          </li>
        </ul>
      </div>
      <div class="hamburger md:hidden">
        <button class="focus:outline-none" @click="hamburgerToggle">
          <i v-if="!hamburger" class="fal fa-bars text-white text-2xl"></i>
          <i v-if="hamburger" class="fal fa-times text-white text-2xl"></i>
        </button>
      </div>
      <div
        v-if="hamburger"
        class="mobile-menu md:hidden absolute bg-gray-100 top-24 pt-5 left-1/2 transform -translate-x-1/2 w-10/12"
      >
        <ul class="text-center text-base p-6 text-gray-600">
          <li class="p-3"><a href="">About</a></li>
          <li class="p-3"><a href="">Services</a></li>
          <li class="p-3"><a href="">Projects</a></li>
          <li class="p-3 pt-5">
            <a
              class="bg-yellowy py-3 px-5 rounded-full font-semibold text-black text-sm"
              href=""
              >CONTACT</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburger: false,
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    hamburgerToggle() {
      this.hamburger = !this.hamburger;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
.header.scrolled {
  background: hsl(157, 28%, 71%);
  border-bottom: 1px;
}
.mobile-menu {
  clip-path: polygon(0 8%, 93% 8%, 100% 0, 100% 100%, 0% 100%);
}
.contact {
  font-family: "Fraunces", serif;
}
</style>
