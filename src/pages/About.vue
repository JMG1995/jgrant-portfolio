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
            local businesses. I have a strong interest in creating clean,
            accessible websites that help small businesses really speak to their
            customers.
          </p>
          <p>
            I currently work at
            <a
              class="text-blue-600 hover:underline"
              href="https://themarketherald.com.au"
              target="_blank"
              rel="noopener noreferrer"
              >The Market Herald</a
            >
            maintaining the website and developing internal applications.
          </p>
        </div>
      </div>
      <img
        class="w-2/3 md:2/3 lg:w-1/3 mx-auto self-start rounded-full shadow-md"
        src="/images/joseph-left.webp"
        alt="Joe Grant wearing a suit, smiling"
      />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "About - Freelance WordPress Developer in Perth",
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content:
            "I'm a freelance WordPress Developer who was born and raised in Perth, Western Australia. I love helping small businesses by creating websites that represent who they are and what they makes them exceptional. Be sure to reach out to see how I can help create a positive change for your business.",
        },
      ],
    };
  },
};
</script>
