<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM7.15 11C6.51487 11 6 11.5149 6 12.15C6 12.7851 6.51487 13.3 7.15 13.3H16.85C17.4851 13.3 18 12.7851 18 12.15C18 11.5149 17.4851 11 16.85 11H7.15Z"
      :fill="colors[0]"
    />
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#B3B7BF'],
    },
  })
</script>
