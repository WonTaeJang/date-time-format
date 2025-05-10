<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 12.15C3 11.5149 3.51487 11 4.15 11H20.65C21.2851 11 21.8 11.5149 21.8 12.15C21.8 12.7851 21.2851 13.3 20.65 13.3H4.15C3.51487 13.3 3 12.7851 3 12.15Z"
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
