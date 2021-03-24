<template>
  <Layout>
    <section
      animate
      class="container px-6 py-12 lg:pr-0 lg:pl-12 xl:pl-24 xl:py-24 flex flex-col space-y-6 justify-between md:flex-row md:space-y-0"
    >
      <div class="lg:w-1/2">
        <h1 class="font-medium">About Me</h1>
        <div class="text-lg md:text-xl text-gray-900 flex flex-col space-y-4">
          <p>
            My name is Joe and I'm a front-end developer and designer working in
            Perth, WA.
          </p>
          <p>
            I have 2+ years commercial experience developing web solutions for
            local businesses. I have a strong interest in technology and solving
            head-scratching problems.
          </p>
          <p>
            I'm currently working for
            <a
              class="text-blue-600 hover:underline"
              href="https://themarketherald.com.au"
              target="_blank"
              rel="noopener noreferrer"
              >The Market Herald</a
            >, maintaining the website and developing internal applications.
          </p>
        </div>
      </div>
      <img
        class="w-2/3 md:2/3 lg:w-1/3 mx-auto self-start rounded-full shadow-md"
        src="/images/joseph-left.jpg"
        alt="Joe Grant wearing a suit, smiling"
      />
    </section>
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
