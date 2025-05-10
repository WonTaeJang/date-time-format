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
    <g data-name="그룹 14221">
      <g
        data-name="그룹 14222"
        transform="translate(2.371 4.714)"
      >
        <path
          data-name="패스 3653"
          d="M24.277 21.051h-2.564v-2.564l5.265-5.265 2.563 2.563z"
          transform="translate(-10.282 -6.477)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <rect
          data-name="사각형 6664"
          width="12.874"
          height="4.141"
          rx="1.3"
          transform="translate(0 4.141)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <path
          data-name="패스 3654"
          d="M10.177 20.149H2.443A1.443 1.443 0 0 1 1 18.706v-1.255a1.443 1.443 0 0 1 1.443-1.443h9.987"
          transform="translate(-1 -7.726)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeLinejoin: 'round', 
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <rect
          data-name="사각형 6665"
          width="12.873"
          height="4.141"
          rx="1.3"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
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
