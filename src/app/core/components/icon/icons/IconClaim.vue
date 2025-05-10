<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="사각형 6970"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="그룹 14694">
      <g data-name="그룹 14695">
        <path
          data-name="패스 3776"
          d="M6.562 20.109H4.576A3.086 3.086 0 0 1 1.5 17.033V4.576A3.086 3.086 0 0 1 4.576 1.5h11.212a3.085 3.085 0 0 1 3.076 3.076v5.087"
          transform="translate(1.816 1.471)"
          :style="`stroke-miterlimit:10;stroke-width:1.8px;stroke:#575c63;stroke-linecap:round;fill:none`"
        />
        <path
          data-name="선 282"
          transform="translate(9.39 6.556)"
          style="stroke:#a71a2a;stroke-linecap:square;stroke-miterlimit:10;stroke-width:1.8px;fill:none"
          d="M0 0v4.083"
        />
        <path
          data-name="선 283"
          transform="translate(7.349 8.597)"
          style="stroke:#a71a2a;stroke-linecap:square;stroke-miterlimit:10;stroke-width:1.8px;fill:none"
          d="M4.083 0H0"
        />
        <path
          data-name="선 284"
          transform="translate(7.349 13.831)"
          :style="`stroke-miterlimit:10;stroke-width:1.8px;stroke:${colors[0]};stroke-linecap:round;fill:none`"
          d="M0 0h5.06"
        />
        <path
          data-name="선 285"
          transform="translate(7.349 16.844)"
          :style="`stroke-miterlimit:10;stroke-width:1.8px;stroke:${colors[0]};stroke-linecap:round;fill:none`"
          d="M0 0h2.838"
        />
        <path
          data-name="패스 3777"
          d="m24.674 22.793-4.3 4.3a.385.385 0 0 0-.112.272v2.679a.385.385 0 0 0 .385.385h2.679a.385.385 0 0 0 .272-.113l4.3-4.3a.385.385 0 0 0 0-.544l-2.679-2.679a.385.385 0 0 0-.545 0z"
          transform="translate(-7.325 -8.85)"
          :style="`stroke-miterlimit:10;stroke-width:1.8px;stroke:${colors[0]};stroke-linecap:round;fill:none`"
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
