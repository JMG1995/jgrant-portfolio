<template>
  <div
    class="text-gray-900 relative"
    :class="
      menuIsOpen
        ? 'max-h-screen overflow-hidden md:max-h-full md:overflow-visible'
        : ''
    "
  >
    <div
      class="fixed h-full w-full pointer-events-none z-10 bg-transparent transition duration-200 ease-in-out"
      :class="menuIsOpen ? 'bg-black md:bg-transparent bg-opacity-50' : ''"
    ></div>
    <TheHeader @toggleMenu="toggleOverlay()" />

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
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleOverlay() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>