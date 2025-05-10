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
    <g data-name="그룹 13374">
      <g data-name="그룹 13361">
        <path
          data-name="패스 3237"
          d="M12.663 4.144A3.144 3.144 0 1 1 9.519 1a3.144 3.144 0 0 1 3.144 3.144z"
          transform="translate(-.939 1.292)"
          :style="{
            strokeMiterlimit: 10,
            strokeLinecap: 'round',
            stroke: colors[0],
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
        <path
          data-name="패스 3238"
          d="M1 24.787a4.24 4.24 0 0 1 4.227-4.227H8.11"
          transform="translate(1.911 -9.081)"
          :style="{
            strokeMiterlimit: 10,
            strokeLinecap: 'round',
            stroke: colors[0],
            strokeWidth: '1.6px',
            fill: 'none'
          }"
        />
      </g>
    </g>
    <g data-name="그룹 14127">
      <circle
        data-name="타원 542"
        cx="6"
        cy="6"
        r="6"
        transform="translate(10 10)"
        :style="{
          stroke: colors[0],
          strokeWidth: '1.6px',
          fill: 'none'
        }"
      />
      <g data-name="그룹 14126">
        <g
          data-name="타원 543"
          transform="translate(15.201 12.501)"
          :style="{
            fill: colors[0],
            stroke: colors[0],
            strokeWidth: '1.6px'
          }"
        >
          <circle
            cx=".8"
            cy=".8"
            r=".8"
            style="stroke:none"
          />
          <circle
            cx=".8"
            cy=".8"
            style="fill:none"
          />
        </g>
        <path
          data-name="선 230"
          transform="translate(16.002 15.801)"
          :style="{
            strokeLinecap: 'round',
            stroke: colors[0],
            strokeWidth:'1.6px',
            fill:'none'
          }"
          d="M0 3V0"
        />
      </g>
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
