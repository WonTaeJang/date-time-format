<template>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="colors[0]">
      <path d="M8 12L3 8L8 4V12Z" />
      <path d="M13 12L8 8L13 4V12Z" />
    </g>
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
