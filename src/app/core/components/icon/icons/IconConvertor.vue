<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.61603 7.56699H19.383"
      :stroke="colors[0]"
      stroke-width="1.6"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M8.18303 11.134L4.61603 7.567L8.18303 4"
      :stroke="colors[0]"
      stroke-width="1.6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.383 16.433H4.61603"
      :stroke="colors[0]"
      stroke-width="1.6"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M15.816 12.866L19.383 16.433L15.816 20"
      :stroke="colors[0]"
      stroke-width="1.6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
