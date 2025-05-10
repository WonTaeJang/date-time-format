<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
  >
    <g
      data-name="Rectangle 6773"
      :style="{
        stroke: colors[0],
        fill: 'none'
      }"
    >
      <rect
        width="22"
        height="22"
        rx="11"
        style="stroke:none"
      />
      <rect
        x=".5"
        y=".5"
        width="21"
        height="21"
        rx="10.5"
        style="fill:none"
      />
    </g>
    <g
      data-name="Group 14297"
      transform="translate(18480 18192.5)"
    >
      <circle
        data-name="Ellipse 544"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(-18470.5 -18187)"
        :style="{fill:colors[0]}"
      />
      <rect
        data-name="Rectangle 6774"
        width="2"
        height="6.5"
        rx="1"
        transform="translate(-18470 -18182.5)"
        :style="{fill:colors[0]}"
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