<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="colors[0]">
      <path d="M10.5 14H18v-2h-5.5ZM6 14h2.45l5.9-5.85q.15-.15.15-.375t-.15-.375L12.6 5.65q-.15-.15-.375-.15t-.375.15L6 11.55Zm-4 8V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Zm2-4.825L5.175 16H20V4H4ZM4 4v13.175Z" />
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
