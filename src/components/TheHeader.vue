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
    <nav class="flex items-center gap-x-6">
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
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>