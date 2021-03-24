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
            If you'd like to get in touch, or even just have a chat, please
            don't hesitate to reach out!
          </p>
        </div>
      </div>
      <form
        action="#"
        class="w-full md:2/3 lg:w-1/3 mx-auto flex flex-col shadow-xl space-y-4 p-4 pb-6 bg-blue-600 rounded-sm"
      >
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="name"
            >Name:</label
          >
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-md p-2 rounded-sm"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="email"
            >Email:</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-md p-2 rounded-sm"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <label
            class="uppercase text-sm text-white tracking-wide font-medium"
            for="message"
            >Message:</label
          >
          <textarea
            name="message"
            id="message"
            rows="4"
            class="shadow-md p-2 rounded-sm"
          ></textarea>
        </div>
        <button
          class="bg-white text-blue-600 rounded-sm font-medium py-2 w-1/3 mr-auto shadow-md transition duration-200 ease-in-out hover:bg-gray-200"
        >
          Submit
        </button>
      </form>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>
