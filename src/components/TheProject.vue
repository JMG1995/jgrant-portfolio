<template>
  <div class="grid grid-cols-2 gap-6">
    <g-image src="~/images/carbon-neutral.png" class="w-full" />

    <div class="mr-24 mt-3">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-white">Carbon Neutral</h3>

        <div class="flex items-center space-x-4">
          <the-arrow
            class="text-blue-100 opacity-80 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer transform rotate-180"
          ></the-arrow>
          <the-arrow
            class="text-blue-100 opacity-80 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer"
          ></the-arrow>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum
        egestas posuere. Donec ac consequat ligula. Proin ullamcorper tempor
        quam, ac lacinia sem cursus ut. Integer tempus pellentesque libero, eget
        vestibulum sapien vulputate a.
      </p>
      <p>
        Nunc sodales vel orci vel consequat. Nunc commodo, nibh vel ultricies
        congue, libero tellus pulvinar dui, nec porttitor quam sapien a est. Sus
      </p>
      <div class="links flex text-blue-100 items-center space-x-6 mt-6">
        <a
          class="flex items-center border-b border-blue-100 opacity-80 hover:text-white hover:opacity-100 hover:border-white transition duration-200 ease-in-out"
          href="https://google.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          <template>Go to site</template>
          <the-arrow
            class="text-blue-100 opacity-80 ml-1 group-hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer transform -rotate-45 scale-75"
          ></the-arrow
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import TheArrow from "@/components/svg/TheArrow";

export default {
  name: "TheProject",
  components: {
    "the-arrow": TheArrow,
  },
};
</script>

<style scoped>
p {
  @apply text-blue-100;

  & ~ p {
    @apply mt-6;
  }
}
</style>