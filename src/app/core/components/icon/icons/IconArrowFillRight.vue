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
        d="M6.05 21.459C6.05 21.959 6.65 22.159 7.05 21.859L17.55 13.059C18.15 12.559 18.15 11.659 17.55 11.159L7.05 2.05905C6.65 1.75905 6.05 2.05905 6.05 2.45905L6.05 21.459Z"
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
