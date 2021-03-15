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
        v-for="item in menuItems"
        :key="item.id"
        class="self-start hover:text-blue-500 transition duration-200 ease-in-out"
        :to="item.url"
        >{{ item.name }}</g-link
      >
    </nav>

    <TheHamburger
      class="md:hidden w-6 h-6 hover:text-blue-500 cursor-pointer transition duration-200 ease-in-out"
      @clicked="toggleMenu()"
    />
    <nav
      class="flex flex-col gap-y-6 md:hidden fixed top-0 right-0 w-screen bg-white p-6 shadow-xl h-full max-w-sm transition duration-200 ease-in-out transform z-20"
      :class="menuIsOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex items-center justify-end">
        <TheCross
          class="w-6 h-6 hover:text-red-600 cursor-pointer transition duration-200 ease-in-out"
          @clicked="toggleMenu()"
        />
      </div>
      <g-link
        v-for="item in menuItems"
        :key="item.id"
        class="self-start hover:text-blue-500 transition duration-200 ease-in-out"
        :to="item.url"
        >{{ item.name }}</g-link
      >
    </nav>
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
import TheCross from "@/components/svg/TheCross";

export default {
  props: { menuItems: Array },
  components: {
    TheHamburger,
    TheCross,
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>