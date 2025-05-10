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
        fill: 'none'
      }"
    />
    <g
      data-name="그룹 13475"
      transform="translate(-86 419)"
    >
      <rect
        data-name="사각형 6478"
        width="13"
        height="13"
        rx="1.5"
        transform="translate(91.5 -413.5)"
        :style="{
          strokeWidth: '1.6px',
          fill: colors[1],
          stroke: colors[1],
        }"
      />
      <path
        data-name="패스 3601"
        d="M125.185-430.811v4.531h8.47"
        transform="rotate(-45 137.852 -380.617)"
        :style="{
          stroke: colors[2],
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none',
        }"
      />
    </g>
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#c9c9c9', '#003894', '#fff'],
    },
  })
</script>
