<template>
  <Layout>
    <section animate class="container pl-24 py-24 flex flex-col justify-center">
      <h1 class="font-medium">Hi, I'm Joe.</h1>
      <p class="text-3xl text-gray-600 w-3/5">
        I’m a front-end developer based out of Perth. I spend my days designing
        and building JAMstack websites.
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
  metaInfo: {
    title: "Home",
  },
};
</script>
