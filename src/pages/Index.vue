<template>
  <Layout>
    <section class="container pl-24 py-24 flex flex-col justify-center">
      <heading-one>Hi, I'm Joe.</heading-one>
      <p class="text-3xl text-gray-600 w-3/5">
        I’m a front-end developer based out of Perth. I spend my days designing
        and building JAMstack websites.
      </p>
    </section>

    <section class="bg-blue-700 relative py-12">
      <the-wave></the-wave>
      <div class="container">
        <h2
          class="text-center text-blue-100 font-bold tracking-wider uppercase mb-12"
        >
          Stuff I've Built
        </h2>

        <div class="grid grid-cols-2 gap-6">
          <g-image src="~/images/carbon-neutral.png" class="w-full" />

          <div class="mr-24">
            <div class="flex items-center justify-between mb-2">
              <h3
                class="text-white text-2xl font-heading font-medium tracking-wide"
              >
                Carbon Neutral
              </h3>

              <div class="flex items-center space-x-4">
                <the-arrow
                  class="text-blue-100 opacity-75 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer transform rotate-180"
                ></the-arrow>
                <the-arrow
                  class="text-blue-100 opacity-75 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer"
                ></the-arrow>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              rutrum egestas posuere. Donec ac consequat ligula. Proin
              ullamcorper tempor quam, ac lacinia sem cursus ut. Integer tempus
              pellentesque libero, eget vestibulum sapien vulputate a.
            </p>
            <p>
              Nunc sodales vel orci vel consequat. Nunc commodo, nibh vel
              ultricies congue, libero tellus pulvinar dui, nec porttitor quam
              sapien a est. Sus
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import HeadingOne from "@/components/typography/HeadingOne";
import TheWave from "@/components/svg/TheWave";
import TheArrow from "../components/svg/TheArrow.vue";

export default {
  components: {
    "heading-one": HeadingOne,
    "the-wave": TheWave,
    "the-arrow": TheArrow,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style scoped>
p {
  @apply text-blue-100;

  & ~ p {
    @apply mt-4;
  }
}
</style>