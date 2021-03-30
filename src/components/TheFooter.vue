<template>
  <div class="relative mt-auto">
    <footer
      class="grid md:grid-cols-2 gap-6 container py-6 md:py-12 px-6 xl:px-0 font-body"
    >
      <p class="text-sm self-end">
        Copyright Joe Grant {{ new Date().getFullYear() }}. All rights reserved
      </p>

      <div class="flex md:justify-end space-x-16">
        <div>
          <span class="supertitle text-blue-700">Links</span>
          <ul class="flex flex-col space-y-1">
            <li v-for="item in socialLinks" :key="item.id">
              <g-link
                :to="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-blue-500"
                >{{ item.name }}</g-link
              >
            </li>
          </ul>
        </div>

        <div>
          <span class="supertitle text-blue-700">Site</span>
          <ul class="flex flex-col space-y-1">
            <li v-for="item in menuItems" :key="item.id">
              <g-link class="hover:text-blue-500" :to="item.url">{{
                item.name
              }}</g-link>
            </li>
            <li>
              <g-link class="hover:text-blue-500" to="/sitemap.xml"
                >Sitemap</g-link
              >
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
  props: { menuItems: Array, socialLinks: Array },
};
</script>