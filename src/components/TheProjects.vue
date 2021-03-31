<template>
  <section class="bg-blue-700 relative py-6 md:py-12">
    <TheWave />
    <div class="container">
      <h2 class="text-center text-blue-100 supertitle mb-6 lg:mb-12">
        Stuff I've Built
      </h2>

      <div class="grid lg:grid-cols-2 gap-6 px-6 lg:px-0">
        <transition name="image" mode="out-in">
          <img
            :key="currentProject.id"
            :src="currentProject.image"
            :alt="currentProject.alt"
          />
        </transition>

        <transition name="slide" mode="out-in">
          <TheProject
            :key="currentProject.id"
            :project="currentProject"
            @prevProject="prevProject"
            @nextProject="nextProject"
          />
        </transition>
      </div>
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
  data() {
    return {
      projectId: 1,
      projects: [
        {
          id: 1,
          title: "Carbon Neutral",
          description: `
          <p>
            Carbon Neutral is a custom-themed WordPress website with a focus on communicating to businesses the effect of their carbon offset.
          </p>
          <p>
            The site has been successful in getting more businesses to reduce their carbon impact and was built using Twig, Timber, WooCommerce and integrates with a custom developed carbon calculator plugin.
          </p>`,
          image: "/images/carbon-neutral.webp",
          alt: "MacBook Pro with a great looking website on the screen.",
          url: "https://carbonneutral.com.au",
          source: null,
        },
        {
          id: 2,
          title: "Risk Advisory Services",
          description: `
          <p>
            With their original site being dated and unmaintained, Risk Advisory Services were on the hunt for a new, modern WordPress website. After being designed by <a class="font-bold hover:underline" href="https://drawhistory.com/" target="_blank" rel="noopener noreferrer">DrawHistory</a>, we were happy to help with the build.
          </p>
          <p>
            Built with the <a class="font-bold hover:underline" href="https://twig.symfony.com/" target="_blank" rel="noopener noreferrer">Twig</a> for templating and <a class="font-bold hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a> for styling, this custom-built theme features dozens of components. This approach to building the site allows the the client to easily create pages with unique layouts.
          </p>`,
          image: "/images/risk-advisory-services.webp",
          alt: "A MacBook Pro with an excellent-looking website on the screen.",
          url: "https://riskadvisoryservices.com.au",
          source: null,
        },
      ],
    };
  },
  methods: {
    prevProject() {
      const firstProject = this.projects[0];
      const lastProject = this.projects[this.projects.length - 1];

      this.projectId === firstProject.id
        ? (this.projectId = lastProject.id)
        : (this.projectId -= 1);
    },
    nextProject() {
      const lastProject = this.projects[this.projects.length - 1];

      this.projectId === lastProject.id
        ? (this.projectId = 1)
        : (this.projectId += 1);
    },
  },
  computed: {
    currentProject() {
      const index = this.projects.findIndex(
        (project) => project.id === this.projectId
      );

      return this.projects[index];
    },
  },
};
</script>

<style>
.image-enter-active {
  transition: all 0.3s ease;
}
.image-leave-active {
  transition: all 0.3s ease;
}
.image-enter {
  opacity: 0.6;
}
.image-leave-to {
  opacity: 0.6;
}
</style>