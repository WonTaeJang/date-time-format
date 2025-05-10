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
    <g data-name="그룹 14331">
      <g
        data-name="그룹 14332"
        transform="translate(3.912 3.912)"
      >
        <rect
          data-name="사각형 6784"
          width="12.395"
          height="12.395"
          rx="1.67"
          transform="translate(3.781 3.781)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '1.6px',
            fill: 'none' 
          }"
        />
        <path
          data-name="패스 3657"
          d="M.5 10.752V2.643A2.143 2.143 0 0 1 2.643.5h8.109"
          transform="translate(-.5 -.5)"
          :style="{
            stroke: colors[0],
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
