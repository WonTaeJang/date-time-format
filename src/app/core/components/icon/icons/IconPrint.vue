<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6967"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="그룹 12705">
      <g
        data-name="그룹 12697"
        transform="translate(2.111 3.751)"
      >
        <path
          data-name="패스 1484"
          d="M4.254 7.539H3.205A2.212 2.212 0 0 0 1 9.744v8.018a2.212 2.212 0 0 0 2.205 2.206h15.367a2.212 2.212 0 0 0 2.205-2.206V9.744a2.212 2.212 0 0 0-2.205-2.205h-1.048"
          transform="translate(-1 -2.92)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
        />
        <rect
          data-name="사각형 5453"
          width="13.269"
          height="10.623"
          rx="2"
          transform="translate(3.254)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
        />
        <path
          data-name="선 158"
          transform="translate(3.024 13.764)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
          d="M0 0h1.631"
        />
        <path
          data-name="선 159"
          transform="translate(6.487 7.11)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
          d="M0 0h6.804"
        />
        <path
          data-name="선 160"
          transform="translate(6.487 3.805)"
          :style="`stroke:${colors[0]};stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.8px;fill:none`"
          d="M0 0h6.804"
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
