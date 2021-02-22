<template>
  <section class="bg-blue-700 relative py-12">
    <TheWave />
    <div class="container">
      <h2 class="text-center text-blue-100 supertitle mb-12">
        Stuff I've Built
      </h2>

      <TheProject />
    </div>
  </section>
</template>

<script>
import TheWave from "@/components/svg/TheWave.vue";
import TheProject from "@/components/TheProject.vue";

export default {
  name: "TheProjects",
  components: {
    TheWave,
    TheProject,
  },
};
</script>