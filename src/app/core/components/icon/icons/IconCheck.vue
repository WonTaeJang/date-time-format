<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6002 17.2001C10.3002 17.2001 10.0002 17.1001 9.8002 16.8001L5.2002 12.2001C4.7002 11.7001 4.7002 11.0001 5.2002 10.5001C5.7002 10.0001 6.4002 10.0001 6.9002 10.5001L10.6002 14.2001L17.2002 7.6001C17.7002 7.1001 18.4002 7.1001 18.9002 7.6001C19.4002 8.1001 19.4002 8.8001 18.9002 9.3001L11.5002 16.7001C11.2002 17.1001 10.9002 17.2001 10.6002 17.2001Z"
      :fill="colors[0]"
    />
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
