<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6971"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="그룹 14702">
      <g data-name="그룹 14703">
        <path
          data-name="패스 3789"
          d="M2.076 0H11.2a2.076 2.076 0 0 1 2.076 2.076V11.8a2.076 2.076 0 0 1-2.076 2.073H2.076A2.076 2.076 0 0 1 0 11.8V2.076A2.076 2.076 0 0 1 2.076 0z"
          transform="translate(2.717 2.418)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="패스 3786"
          d="M35.353 13.772a2.082 2.082 0 0 0-2.076-2.072"
          transform="translate(-14.07 -3.987)"
          :style="`stroke-miterlimit:10;stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="패스 3787"
          d="M33.277 36.506a2.082 2.082 0 0 0 2.076-2.076"
          transform="translate(-14.07 -14.923)"
          :style="`stroke-miterlimit:10;stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="패스 3788"
          d="M11.7 34.43a2.082 2.082 0 0 0 2.076 2.076"
          transform="translate(-3.688 -14.923)"
          :style="`stroke-miterlimit:10;stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="선 288"
          transform="translate(21.283 12.752)"
          :style="`stroke-miterlimit:10;stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
          d="M0 0v3.787"
        />
        <path
          data-name="선 289"
          transform="translate(12.752 21.582)"
          :style="`stroke-miterlimit:10;stroke:${colors[0]};stroke-linecap:round;stroke-width:1.8px;fill:none`"
          d="M0 0h3.787"
        />
      </g>
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
