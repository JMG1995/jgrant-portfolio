<template>
  <div class="grid grid-cols-2 gap-6">
    <img :src="project.image" />
    <div class="mr-24 mt-3">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-white">{{ project.title }}</h3>

        <div class="flex items-center space-x-4">
          <the-arrow
            @clicked="$emit('prevProject')"
            class="text-blue-100 opacity-50 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer transform rotate-180"
          ></the-arrow>
          <the-arrow
            @clicked="$emit('nextProject')"
            class="text-blue-100 opacity-50 hover:opacity-100 transition duration-200 ease-in-out w-5 h-4 cursor-pointer"
          ></the-arrow>
        </div>
      </div>
      <div
        class="text-blue-100 flex flex-col space-y-6"
        v-html="project.description"
      ></div>
      <div class="links flex text-blue-100 items-center space-x-6 mt-6">
        <a
          class="flex items-center border-b border-blue-100 opacity-80 hover:text-white hover:opacity-100 hover:border-white transition duration-200 ease-in-out"
          :href="project.url"
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
  props: ["project"],
  components: {
    "the-arrow": TheArrow,
  },
};
</script>

<style>
.slide-enter-active {
  transition: all 0.7s ease;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>