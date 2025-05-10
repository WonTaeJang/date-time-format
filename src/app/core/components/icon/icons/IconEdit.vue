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
    <g data-name="그룹 13631">
      <g data-name="그룹 13632">
        <path
          data-name="패스 3332"
          d="M15.443 17.907h1.139a.952.952 0 0 1 .949.949v5.774a.952.952 0 0 1-.949.949H1.949A.952.952 0 0 1 1 24.63v-5.774a.952.952 0 0 1 .949-.949H3.17"
          transform="translate(2.735 -5.731)"
          :style="{
            strokeMiterlimit: 10,
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <path
          data-name="패스 3333"
          d="M11.549 8.97v2.838h2.838l7.97-7.97L19.519 1z"
          transform="translate(-2.808 3.152)"
          :style="{
            strokeMiterlimit: 10,
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <path
          data-name="선 258"
          transform="translate(14.819 6.044)"
          :style="{
            strokeMiterlimit: 10,
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
          d="m0 0 2.838 2.838"
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
