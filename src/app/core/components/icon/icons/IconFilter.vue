<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 6358"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="Group 15065">
      <g data-name="Group 12428">
        <path
          data-name="Path 1388"
          d="M1 2.951A.953.953 0 0 1 1.951 2h15.405a.954.954 0 0 1 .951.951v1.616l-6.772 6.4V18l-3.763-1.9v-5.132L1 4.567z"
          transform="translate(2.348 1.999)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.6px',
            fill: colors[1] ? colors[1] : 'none'
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
