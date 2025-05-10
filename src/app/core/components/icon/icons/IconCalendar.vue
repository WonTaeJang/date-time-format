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
    <g transform="translate(4.285 2.428)">
      <rect
        data-name="사각형 5751"
        width="16"
        height="16"
        rx="2"
        transform="translate(-.286 1.572)"
        :style="{
          stroke:colors[0],
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
      />
      <path
        data-name="선 208"
        transform="translate(10.714 -.428)"
        :style="{
          stroke:colors[0],
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        d="M0 0v4"
      />
      <path
        data-name="선 209"
        transform="translate(4.714 -.428)"
        :style="{
          stroke:colors[0],
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        d="M0 0v4"
      />
      <path
        data-name="선 210"
        transform="translate(-.286 5.572)"
        :style="{
          stroke:colors[0],
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        d="M0 0h16"
      />
    </g>
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
  