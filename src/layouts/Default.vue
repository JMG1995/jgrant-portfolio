<template>
  <div
    class="text-gray-900 relative flex flex-col min-h-screen"
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
    <TheHeader :menuItems="menu" @toggleMenu="toggleOverlay()" />

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <TheFooter :menuItems="menu" :socialLinks="socials" />
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
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      menu: [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Contact", url: "/contact" },
      ],
      socials: [
        { id: 1, name: "Twitter", url: "https://twitter.com/itsmejgrant" },
        { id: 2, name: "GitHub", url: "https://github.com/JMG1995" },
      ],
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