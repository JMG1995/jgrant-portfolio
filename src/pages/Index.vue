<template>
  <Layout>
    <section class="container pl-24 py-24 flex flex-col justify-center">
      <h1 class="font-medium">Hi, I'm Joe.</h1>
      <p class="text-3xl text-gray-600 w-3/5">
        I’m a front-end developer based out of Perth. I spend my days designing
        and building JAMstack websites.
      </p>
    </section>

    <section class="bg-blue-700 relative py-12">
      <the-wave></the-wave>
      <div class="container">
        <h2 class="text-center text-blue-100 supertitle mb-12">
          Stuff I've Built
        </h2>

        <the-projects></the-projects>
      </div>
    </section>
  </Layout>
</template>

<script>
import TheWave from "@/components/svg/TheWave";
import TheArrow from "@/components/svg/TheArrow.vue";
import TheProjects from "@/components/TheProjects.vue";

export default {
  components: {
    "the-wave": TheWave,
    "the-arrow": TheArrow,
    "the-projects": TheProjects,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>