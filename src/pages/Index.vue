<template>
  <Layout>
    <section
      animate
      class="container px-6 py-12 lg:pr-0 lg:pl-12 xl:pl-24 xl:py-24 flex flex-col justify-center"
    >
      <h1 class="font-medium">Hi, I'm Joe.</h1>
      <p class="text-lg lg:text-3xl text-gray-600 lg:w-3/5">
        I’m a front-end developer based out of Perth. I spend my days designing
        and building websites using WordPress or the JAMStack.
      </p>
    </section>

    <TheProjects />
  </Layout>
</template>

<script>
import TheProjects from "@/components/TheProjects.vue";

export default {
  components: {
    TheProjects,
  },
  metaInfo() {
    return {
      title: "Freelance WordPress Developer in Perth",
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content:
            "My name is Joe and I'm a freelance WordPress Developer based in Perth, Western Australia. I help local businesses build clean, fast and accessible WordPress websites that help them grow their business. Don't hesitate to reach out if you're looking for a new site, or some help with your existing website.",
        },
      ],
    };
  },
};
</script>
