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
        d="M2.54095 17.95C2.04095 17.95 1.84095 17.35 2.14095 16.95L10.941 6.45C11.441 5.85 12.341 5.85 12.841 6.45L21.941 16.95C22.241 17.35 21.941 17.95 21.541 17.95H2.54095Z"
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
