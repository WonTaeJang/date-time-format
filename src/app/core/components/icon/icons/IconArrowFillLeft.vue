<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="colors[0]">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.95 21.459C17.95 21.959 17.35 22.159 16.95 21.859L6.45 13.059C5.85 12.559 5.85 11.659 6.45 11.159L16.95 2.05905C17.35 1.75905 17.95 2.05905 17.95 2.45905V21.459Z"
      />
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
