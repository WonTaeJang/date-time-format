<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_38_601)">
      <path
        d="M8.00067 2.134V11.206"
        :stroke="props.colors[0]"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M11.1827 8.02402L7.99999 11.2067L4.81799 8.02402"
        :stroke="props.colors[0]"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.89 11.2587C13.8879 11.9495 13.6125 12.6115 13.124 13.1C12.6355 13.5885 11.9735 13.8639 11.2827 13.866H4.71799C4.02713 13.8639 3.36517 13.5885 2.87666 13.1C2.38814 12.6115 2.11277 11.9495 2.11066 11.2587"
        :stroke="props.colors[0]"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_38_601">
        <rect
          width="16"
          height="16"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
 const props = defineProps({
    colors: {
      type: Array,
      default: ['#575c63'],
    },
  })
</script>
