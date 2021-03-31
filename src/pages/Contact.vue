<template>
  <Layout>
    <section
      animate
      class="container px-6 py-12 lg:pr-0 lg:pl-12 xl:pl-24 xl:py-24 flex flex-col space-y-6 justify-between md:flex-row md:space-y-0"
    >
      <div class="lg:w-1/2">
        <h1 class="font-medium">Get In Touch</h1>
        <div class="text-lg md:text-xl text-gray-900 flex flex-col space-y-4">
          <p>
            If you'd like to hire me - or even just have a chat - please don't
            hesitate to reach out. You can also find me on socials below!
          </p>
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
      <form
        action="#"
        @submit.prevent="handleSubmit"
        class="w-full md:2/3 lg:w-1/3 mx-auto flex flex-col shadow-xl space-y-4 p-4 pb-6 bg-blue-600 rounded-sm"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="name"
            >Name*:</label
          >
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-md p-2 rounded-sm"
            required
            autocomplete="name"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="email"
            >Email*:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-md p-2 rounded-sm"
            required
            autocomplete="email"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="budget"
            >Budget:</label
          >
          <select name="budget" id="budget" class="shadow-md p-2 rounded-sm">
            <option value="none">Not relevant</option>
            <option value="1500">Less than $1,500</option>
            <option value="1500-2500">$1,500 - $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="message"
            >Message*:</label
          >
          <textarea
            name="message"
            id="message"
            rows="4"
            class="shadow-md p-2 rounded-sm"
            required
          ></textarea>
        </div>
        <button
          class="bg-white text-blue-600 rounded-sm font-medium py-2 w-1/3 mr-auto shadow-md transition duration-200 ease-in-out hover:bg-gray-200"
        >
          Submit
        </button>
        <p v-if="success" class="text-lg text-white">
          Thanks for that! I'll get back to you shortly.
        </p>
      </form>
    </section>
  </Layout>
</template>

<script>
import TheTwitter from "@/components/svg/TheTwitter";
import TheGithub from "@/components/svg/TheGithub";
export default {
  data() {
    return {
      formData: {},
      success: false,
    };
  },
  metaInfo() {
    return {
      title: "Contact - Freelance WordPress Developer in Perth",
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content:
            "Is your website lacking compared to the competition? Or maybe you're looking to improve the experience on mobile? I want to help you get the most out of your website, because your website is a reflection of your business. You are exceptional, so your website should be too.",
        },
      ],
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => (this.success = true))
        .catch((error) => alert(error));
    },
  },
  components: {
    "the-twitter": TheTwitter,
    "the-github": TheGithub,
  },
};
</script>
