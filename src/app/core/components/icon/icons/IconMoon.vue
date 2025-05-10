<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6605"
      style="fill:#fff"
      d="M0 0h24v24H0z"
    />
    <path
      d="M20.039 12.266A8.519 8.519 0 1 1 10.773 3a6.626 6.626 0 0 0 9.266 9.266z"
      transform="translate(.962 1)"
      :style="{ 
        fill:'none', 
        stroke: colors[0], 
        strokeLinecap:'round',
        strokeLinejoin:'round',
        strokeWidth: '2px'
      }"
    />
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#b3b7bf'],
    },
  })
</script>
