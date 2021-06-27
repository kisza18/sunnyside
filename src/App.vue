<template>
  <div class="section w-full h-full bg-gray-100">
    <TheNavbar />
    <TheHeader />
    <div class="max-w-screen-2xl mx-auto">
      <Section
        title="Transform your brand"
        text="We are full-service creative agency specialized in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        backgroundImage="image-transform.jpg"
        colors="yellow"
        flexAlign="md:flex-row-reverse"
      />
      <Section
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        backgroundImage="image-stand-out.jpg"
        colors="red"
        flexAlign="md:flex-row"
      />
      <div class="w-full flex flex-col md:flex-row">
        <Hero
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          backgroundImage="image-graphic-design.jpg"
          backgroundImageLg="image-graphic-design.jpg"
          colors="green"
        />
        <Hero
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          backgroundImage="image-photography.jpg"
          backgroundImageLg="image-photography.jpg"
          colors="blue"
        />
      </div>
      <Client />
      <Grid />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheHeader from "./components/TheHeader";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Client from "./components/Client";
import Grid from "./components/Grid";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: { TheNavbar, TheHeader, Section, Hero, Client, Grid, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  /* font-family: "Fraunces", serif; */
}
</style>
