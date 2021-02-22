<template>
  <svg
    @click="$emit('clicked')"
    class="stroke-current"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 8H1M12 15L19 8L12 15ZM19 8L12 1L19 8Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "TheArrow",
};
</script>