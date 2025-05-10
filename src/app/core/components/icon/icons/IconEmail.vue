<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6968"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="그룹 14699">
      <g
        data-name="사각형 6972"
        transform="translate(2 4)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:none`"
      >
        <rect
          width="20"
          height="16"
          rx="3"
          style="stroke:none"
        />
        <rect
          x=".9"
          y=".9"
          width="18.2"
          height="14.2"
          rx="2.1"
          style="fill:none"
        />
      </g>
      <path
        data-name="패스 3772"
        d="m157.526-335.394 8.371 6.541 8.257-6.541"
        transform="translate(-153.795 341.484)"
        :style="`stroke-linecap:round;stroke-linejoin:round;stroke:${colors[0]};stroke-width:1.8px;fill:none`"
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
