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
    <rect
      data-name="사각형 6815"
      width="14"
      height="4"
      rx="1"
      transform="translate(5 5)"
      :style="{
        stroke: colors[0],
        strokeWidth: '1.6px',
        fill: 'none'
      }"
    />
    <rect
      data-name="사각형 6816"
      width="12"
      height="11"
      rx="1"
      transform="translate(6 9)"
      :style="{
        stroke: colors[0],
        strokeWidth: '1.6px',
        fill: 'none'
      }"
    />
    <rect
      data-name="사각형 6817"
      width="6"
      height="2"
      rx="1"
      transform="translate(9 3)"
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
