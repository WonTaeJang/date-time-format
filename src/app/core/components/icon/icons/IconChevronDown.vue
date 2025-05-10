<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6358"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <path
      data-name="패스 3209"
      d="M34.542 113.568a.935.935 0 0 1 .26-.64.9.9 0 0 1 1.27 0l3.87 3.87 3.86-3.87a.9.9 0 0 1 1.27 1.27l-4.5 4.5a.9.9 0 0 1-1.27 0l-4.5-4.5a.894.894 0 0 1-.26-.63z"
      transform="translate(-27.986 -103.813)"
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
      default: () => ['#404040'],
    },
  })
</script>
