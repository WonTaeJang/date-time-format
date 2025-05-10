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
    <g data-name="그룹 14457">
      <g data-name="그룹 14458">
        <path
          data-name="패스 3667"
          d="M11.5 4.5V12a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 12V2A1.5 1.5 0 0 1 2 .5h5.5z"
          transform="translate(6 5)"
          :style="{
            stroke: colors[0],
            strokeWidth: '1.6px',
            fill:'#fff'
          }"
        />
        <path
          data-name="패스 3668"
          d="M11.5 4.5H9A1.5 1.5 0 0 1 7.5 3V.5"
          transform="translate(6 5)"
          :style="{
            stroke: colors[0],
            strokeWidth: '1.6px',
            fill:'#fff'
          }"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
  const props = defineProps({
    colors: {
      type: Array,
      default: ['#575c63'],
    },
  })
</script>
