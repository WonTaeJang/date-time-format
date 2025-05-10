<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 6969"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g
      data-name="Group 14770"
      transform="translate(-1)"
    >
      <rect
        data-name="Rectangle 6978"
        width="16"
        height="18"
        rx="2"
        transform="translate(6 3)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:#fff`"
      />
      <path
        data-name="Line 290"
        transform="translate(14 3)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:none`"
        d="M0 0v18"
      />
      <path
        data-name="Line 291"
        transform="translate(6.5 7.5)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:none`"
        d="M0 0h15"
      />
      <path
        data-name="Line 293"
        transform="translate(6.5 16.5)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:none`"
        d="M0 0h15"
      />
      <path
        data-name="Line 292"
        transform="translate(6.5 12)"
        :style="`stroke:${colors[0]};stroke-width:1.8px;fill:none`"
        d="M0 0h15"
      />
    </g>
    <g data-name="Group 14692">
      <path
        data-name="Rectangle 6977"
        transform="translate(1 6.25)"
        style="fill:#08743b"
        d="M0 0h12v12H0z"
      />
      <path
        data-name="Path 3802"
        d="M4.639 0 3.311 2.265h-.059L1.934 0H.049L2.2 3.535 0 7.07h1.9l1.352-2.286h.059L4.659 7.07h1.914L4.365 3.535 6.5 0z"
        transform="translate(3.714 8.715)"
        style="fill:#fff"
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
