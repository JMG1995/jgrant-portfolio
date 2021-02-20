<template>
  <div class="text-gray-900">
    <TheHeader />

    <!-- Page Content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
/* Add any Global Styles Here */

.active--exact {
  /* Active Nav Link */
  @apply text-gray-900;
}
</style>