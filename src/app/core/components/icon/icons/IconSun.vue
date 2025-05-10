<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6604"
      style="fill:#fff"
      d="M0 0h24v24H0z"
    />
    <g transform="translate(1 1)">
      <circle
        data-name="타원 348"
        cx="4"
        cy="4"
        r="4"
        transform="translate(7 7)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
      />
      <path
        data-name="선 85"
        transform="translate(11 1)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 0v2"
      />
      <path
        data-name="선 86"
        transform="translate(11 19)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 0v2"
      />
      <path
        data-name="선 87"
        transform="translate(3.927 3.927)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="m0 0 1.291 1.291"
      />
      <path
        data-name="선 88"
        transform="translate(16.782 16.782)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="m0 0 1.291 1.291"
      />
      <path
        data-name="선 89"
        transform="translate(1 11)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 0h2"
      />
      <path
        data-name="선 90"
        transform="translate(19 11)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 0h2"
      />
      <path
        data-name="선 91"
        transform="translate(3.927 16.782)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 1.291 1.291 0"
      />
      <path
        data-name="선 92"
        transform="translate(16.782 3.927)"
        :style="{ 
          fill:'none', 
          stroke: colors[0], 
          strokeLinecap:'round',
          strokeLinejoin:'round',
          strokeWidth: '2px'
        }"
        d="M0 1.291 1.291 0"
      />
    </g>
  </svg>
</template>

<script setup>
  defineProps({
    colors: {
      type: Array,
      default: ['#b3b7bf'],
    },
  })
</script>
