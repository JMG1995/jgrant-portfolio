<template>
  <!-- Header & Navigation -->
  <header
    class="container flex items-center justify-between py-6 px-6 sm:px-0 font-body"
  >
    <g-link
      to="/"
      class="hover:text-blue-500 transition duration-200 ease-in-out"
      >{{ $static.metadata.siteName }}</g-link
    >
    <nav class="hidden md:flex items-center gap-x-6">
      <g-link
        class="hover:text-blue-500 transition duration-200 ease-in-out"
        to="/"
        >Home</g-link
      >
      <g-link
        class="hover:text-blue-500 transition duration-200 ease-in-out"
        to="/about"
        >About</g-link
      >
      <g-link
        class="hover:text-blue-500 transition duration-200 ease-in-out"
        to="/blog"
        >Blog</g-link
      >
      <g-link
        class="hover:text-blue-500 transition duration-200 ease-in-out"
        to="/contact"
        >Contact</g-link
      >
    </nav>

    <div>
      <TheHamburger class="w-6 h-6" @clicked="toggleMenuIsOpen()" />
      <nav
        class="flex flex-col gap-y-6 md:hidden fixed top-0 w-screen bg-blue-400 h-full max-w-xl transition duration-200 ease-in-out transform"
        :class="menuIsOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <g-link
          class="hover:text-blue-500 transition duration-200 ease-in-out"
          to="/"
          >Home</g-link
        >
        <g-link
          class="hover:text-blue-500 transition duration-200 ease-in-out"
          to="/about"
          >About</g-link
        >
        <g-link
          class="hover:text-blue-500 transition duration-200 ease-in-out"
          to="/blog"
          >Blog</g-link
        >
        <g-link
          class="hover:text-blue-500 transition duration-200 ease-in-out"
          to="/contact"
          >Contact</g-link
        >
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHamburger from "@/components/svg/TheHamburger";

export default {
  components: {
    TheHamburger,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenuIsOpen() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>