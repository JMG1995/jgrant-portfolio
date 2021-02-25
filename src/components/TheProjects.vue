<template>
  <section class="bg-blue-700 relative py-6 lg:py-12">
    <TheWave />
    <div class="container">
      <h2 class="text-center text-blue-100 supertitle mb-6 lg:mb-12">
        Stuff I've Built
      </h2>

      <div class="grid lg:grid-cols-2 gap-6">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum
            egestas posuere. Donec ac consequat ligula. Proin ullamcorper tempor
            quam, ac lacinia sem cursus ut. Integer tempus pellentesque libero, eget
            vestibulum sapien vulputate a.
          </p>
          <p>
            Nunc sodales vel orci vel consequat. Nunc commodo, nibh vel ultricies
            congue, libero tellus pulvinar dui, nec porttitor quam sapien a est. Sus
          </p>`,
          image: "/images/carbon-neutral.png",
          alt: "MacBook Pro with a great looking website on the screen.",
          url: "https://carbonneutral.com.au",
          source: null,
        },
        {
          id: 2,
          title: "Risk Advisory Services",
          description: `
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum
            egestas posuere. Donec ac consequat ligula. Proin ullamcorper tempor
            quam, ac lacinia sem cursus ut. 
          </p>
          <p>
            Nunc sodales vel orci vel consequat. Nunc commodo, nibh vel ultricies
            congue, Integer tempus pellentesque libero, eget vestibulum sapien vulputate a. libero tellus pulvinar dui, nec porttitor quam sapien a est. Sus
          </p>`,
          image: "/images/joegrant.png",
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