<template>
  <Layout>
    <section class="container mx-24 py-24 flex flex-col justify-center">
      <heading-one>Hi, I'm Joe.</heading-one>
      <p class="text-3xl text-gray-600 w-3/5">
        I’m a front-end developer based out of Perth. I spend my days designing
        and building JAMstack websites.
      </p>
    </section>

    <section class="bg-blue-500 relative py-12">
      <the-wave></the-wave>
    </section>
  </Layout>
</template>

<script>
import HeadingOne from "@/components/typography/HeadingOne";
import TheWave from "@/components/svg/TheWave";

export default {
  components: {
    "heading-one": HeadingOne,
    "the-wave": TheWave,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>