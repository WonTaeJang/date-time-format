<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 6359"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g transform="translate(.789 1)">
      <rect
        data-name="Rectangle 5232"
        width="14"
        height="10"
        rx="2"
        transform="translate(4.211 10)"
        style="stroke:#575c63;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.6px;fill:none"
      />
      <path
        data-name="Path 993"
        d="M7 10V6.444a4.5 4.5 0 0 1 9 0V10"
        transform="translate(-.3)"
        style="stroke:#575c63;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.6px;fill:none"
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
