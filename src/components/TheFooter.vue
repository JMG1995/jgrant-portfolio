<template>
  <div class="relative">
    <footer
      class="grid md:grid-cols-2 gap-6 container py-6 md:py-12 px-6 xl:px-0 font-body"
    >
      <div>
        <h3>
          <g-link
            to="/"
            class="hover:text-blue-500 transition duration-200 ease-in-out"
            >{{ $static.metadata.siteName }}</g-link
          >
        </h3>
        <p>
          Copyright Joe Grant {{ new Date().getFullYear() }}. All rights
          reserved
        </p>
      </div>

      <div class="flex md:justify-end space-x-16">
        <div>
          <span class="supertitle text-blue-500">Links</span>
          <ul class="flex flex-col space-y-1">
            <li><a href="#" class="hover:text-blue-500">Twitter</a></li>
            <li><a href="#" class="hover:text-blue-500">Github</a></li>
          </ul>
        </div>

        <div>
          <span class="supertitle text-blue-500">Site</span>
          <ul class="flex flex-col space-y-1">
            <li v-for="item in menuItems" :key="item.id">
              <g-link class="hover:text-blue-500" :to="item.url">{{
                item.name
              }}</g-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
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
export default {
  props: { menuItems: Array },
};
</script>