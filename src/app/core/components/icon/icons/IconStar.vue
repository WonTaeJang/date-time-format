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
    <path
      data-name="패스 3211"
      d="m1192.9 307.541 1.732 3.508a.967.967 0 0 0 .723.523l3.866.562a.959.959 0 0 1 .536 1.632l-2.8 2.73a.876.876 0 0 0-.241.389.888.888 0 0 0-.036.457l.661 3.856a.955.955 0 0 1-1.384 1.009l-3.464-1.82a.958.958 0 0 0-.446-.11.988.988 0 0 0-.447.11l-3.464 1.82a.955.955 0 0 1-1.384-1.009l.661-3.856a.888.888 0 0 0-.036-.457.874.874 0 0 0-.241-.389l-2.8-2.73a.96.96 0 0 1 .536-1.632l3.866-.562a.967.967 0 0 0 .723-.523l1.732-3.508a.955.955 0 0 1 1.707 0z"
      transform="translate(-1180.039 -302.664)"
      :style="{
        stroke: colors[0],
        strokeWidth: '1.6px',
        fillRule: 'evenodd',
        fill: colors[1] ? colors[1] : 'none'
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
