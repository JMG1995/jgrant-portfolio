<template>
  <Layout>
    <section
      animate
      class="container px-6 py-12 lg:pr-0 lg:pl-12 xl:pl-24 xl:py-24 flex flex-col space-y-6 justify-between md:flex-row md:space-y-0"
    >
      <div class="lg:w-2/3">
        <h1 class="font-medium">Sorry, we couldn't find this page!</h1>
        <div class="text-lg md:text-xl text-gray-900 flex flex-col space-y-4">
          <p>
            This page wasn't available, but there's tons of other great pages
            you could check out instead!
          </p>
          <ul class="text-blue-700">
            <li><g-link class="hover:underline" to="/">Home</g-link></li>
            <li><g-link class="hover:underline" to="/about">About</g-link></li>
            <li>
              <g-link class="hover:underline" to="/contact">Contact</g-link>
            </li>
          </ul>
          <div class="flex space-x-4">
            <a
              href="https://twitter.com/itsmejgrant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <the-twitter
                class="w-10 h-10 text-white bg-blue-600 rounded-sm p-2"
              ></the-twitter>
            </a>
            <a
              href="https://github.com/JMG1995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <the-github
                class="w-10 h-10 text-white bg-black rounded-sm p-2"
              ></the-github>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import TheTwitter from "@/components/svg/TheTwitter";
import TheGithub from "@/components/svg/TheGithub";
export default {
  components: {
    "the-twitter": TheTwitter,
    "the-github": TheGithub,
  },
};
</script>
