<template>
  <Layout>
    <div class="container">
      <!-- Back to Blog Button -->
      <g-link to="/blog/"
        ><button class="text-blue-600 hover:underline">
          &larr; Back
        </button></g-link
      >

      <article>
        <!-- Title + Date -->
        <div class="my-6">
          <h1 class="text-3xl mb-2">{{ $page.post.title }}</h1>
          <p class="text-gray-600">{{ $page.post.date }}</p>
          <hr class="my-2" />
        </div>

        <!-- Blog Post -->
        <div v-html="$page.post.content" class="space-y-6" />
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          // Meta Description
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>