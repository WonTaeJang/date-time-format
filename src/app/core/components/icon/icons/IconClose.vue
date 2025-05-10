<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6359"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <path
      data-name="패스 3210"
      d="M228.546 155.2h-4.667v-4.667a.8.8 0 0 0-1.6 0v4.667h-4.666a.8.8 0 1 0 0 1.6h4.666v4.667a.8.8 0 0 0 1.6 0V156.8h4.667a.8.8 0 1 0 0-1.6z"
      transform="rotate(45 291.401 -170.7)"
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
      default: ['#575c63'],
    },
  })
</script>
