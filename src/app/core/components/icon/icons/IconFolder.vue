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
    <g data-name="그룹 13416">
      <g data-name="그룹 13417">
        <path
          data-name="패스 3590"
          d="M2.461 30.407A1.462 1.462 0 0 1 1 28.946V17.3a1.461 1.461 0 0 1 1.444-1.461l4.5-.054a1.464 1.464 0 0 1 1.033.428l2.623 2.631h6.934A1.462 1.462 0 0 1 19 20.3v8.641a1.462 1.462 0 0 1-1.461 1.461z"
          transform="translate(2 -11.095)"
          :style="{
            stroke:colors[0],
            strokeLinecap: 'round',
            strokeMiterlimit: 10, 
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
