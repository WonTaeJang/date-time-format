<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      data-name="사각형 6499"
      style="fill:none"
      d="M0 0h16v16H0z"
    />
    <path
      data-name="패스 3612"
      d="M118.323 173.148a.359.359 0 0 1-.239-.6l5.263-6.28a.734.734 0 0 1 1.136 0l5.443 6.28a.378.378 0 0 1-.239.6z"
      transform="rotate(180 66 88.787)"
      :style="{
        fill: colors[0],
        fillRule: 'evenodd'
      }"
    />
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#0f6ad5'],
    },
  })
</script>
