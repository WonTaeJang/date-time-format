<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6477"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <rect
      data-name="사각형 6476"
      width="13"
      height="13"
      rx="1.5"
      transform="translate(5.5 5.5)"
      :style="{
        stroke: colors[0],
        strokeWidth: '1.6px',
        fill: 'none'
      }"
    />
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#575c63'],
    },
  })
</script>
