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
        d="M2.54095 6.99995C2.04095 6.99995 1.84095 7.59995 2.14095 7.99995L10.941 18.5C11.441 19.1 12.341 19.1 12.841 18.5L21.941 7.99995C22.241 7.59995 21.941 6.99995 21.541 6.99995H2.54095Z"
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

