<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 6971"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="Group 14975">
      <g data-name="Group 14976">
        <path
          data-name="Line 312"
          transform="translate(2.393 2.394)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
          d="M0 19.215 19.215 0"
        />
        <path
          data-name="Path 3806"
          d="M8.708 10.132H6.28a4.78 4.78 0 0 0 0 9.56h2.428"
          transform="translate(.5 -2.91)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="Path 3807"
          d="M24.373 19.692H26.8a4.78 4.78 0 1 0 0-9.56h-2.427"
          transform="translate(-9.581 -2.91)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
        />
      </g>
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
