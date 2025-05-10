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
    <g data-name="그룹 13550">
      <g data-name="그룹 13551">
        <path
          data-name="선 17"
          transform="translate(4.616 7.567)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '1.6px',
            fill:'none'
          }"
          d="M0 0h14.767"
        />
        <path
          data-name="패스 3605"
          d="M4.981 8.134 1.414 4.567 4.981 1"
          transform="translate(3.202 3)"
          :style="{
            stroke: colors[0],
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <path
          data-name="선 18"
          transform="translate(4.616 16.433)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '1.6px',
            fill: 'none' 
          }"
          d="M14.767 0H0"
        />
        <path
          data-name="패스 3606"
          d="m22.206 21.172 3.567 3.567-3.567 3.567"
          transform="translate(-6.39 -8.306)"
          :style="{
            stroke: colors[0],
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
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
