<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6358"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g
      data-name="그룹 11825"
      transform="translate(3879 -8193.001)"
    >
      <circle
        data-name="타원 365"
        cx="9"
        cy="9"
        r="9"
        transform="translate(-3876 8196)"
        :style="{
          stroke: colors[0],
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
      />
      <path
        data-name="패스 1219"
        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        transform="translate(-3879 8193.287)"
        :style="{
          stroke: colors[0],
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
      />
      <path
        data-name="선 100"
        transform="translate(-3867 8209.5)"
        :style="{
          stroke: colors[0],
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        d="M0 0h.01"
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
