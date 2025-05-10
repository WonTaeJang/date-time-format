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
    <g
      data-name="그룹 13360"
      transform="translate(-85.5 341.5)"
    >
      <circle
        data-name="타원 46"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(96 -331)"
        :style="{
          fill: colors[0]
        }"
      />
      <circle
        data-name="타원 48"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(96 -326)"
        :style="{
          fill: colors[0]
        }"
      />
      <circle
        data-name="타원 47"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(96 -336)"
        :style="{
          fill: colors[0]
        }"
      />
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
