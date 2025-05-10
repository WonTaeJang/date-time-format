<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 540"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="Group 26056">
      <path
        data-name="Path 3865"
        d="M15.582 8.9a3.714 3.714 0 1 1-3.714-3.714A3.714 3.714 0 0 1 15.582 8.9z"
        :style="{
          stroke: colors[0],
          strokeLinejoin: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        transform="translate(.073 3.101)"
      />
      <path
        data-name="Path 3866"
        d="M11.926 16.989c2.024 0 6.361-.567 10.987-8.089C18.287 1.378 13.95.8 11.926.8"
        :style="{
          stroke: colors[0],
          strokeLinejoin: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        transform="translate(.073 3.101)"
      />
      <path
        data-name="Path 3867"
        d="M11.926.8C9.9.8 5.565 1.378.939 8.9 5.565 16.422 9.9 17 11.926 17"
        :style="{
          stroke: colors[0],
          strokeLinejoin: 'round',
          strokeMiterlimit: '10',
          strokeWidth: '1.6px',
          fill: 'none'
        }"
        transform="translate(.073 3.101)"
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
