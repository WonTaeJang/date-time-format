<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="colors[0]">
      <path
        d="M6 13.5C6 15.1569 4.65685 16.5 3 16.5C1.34315 16.5 0 15.1569 0 13.5C0 11.8431 1.34315 10.5 3 10.5C4.65685 10.5 6 11.8431 6 13.5Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 15.5C4.10457 15.5 5 14.6046 5 13.5C5 12.3954 4.10457 11.5 3 11.5C1.89543 11.5 1 12.3954 1 13.5C1 14.6046 1.89543 15.5 3 15.5ZM3 16.5C4.65685 16.5 6 15.1569 6 13.5C6 11.8431 4.65685 10.5 3 10.5C1.34315 10.5 0 11.8431 0 13.5C0 15.1569 1.34315 16.5 3 16.5Z"
      />
      <path
        d="M15 18.5C15 20.1569 13.6569 21.5 12 21.5C10.3431 21.5 9 20.1569 9 18.5C9 16.8431 10.3431 15.5 12 15.5C13.6569 15.5 15 16.8431 15 18.5Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 20.5C13.1046 20.5 14 19.6046 14 18.5C14 17.3954 13.1046 16.5 12 16.5C10.8954 16.5 10 17.3954 10 18.5C10 19.6046 10.8954 20.5 12 20.5ZM12 21.5C13.6569 21.5 15 20.1569 15 18.5C15 16.8431 13.6569 15.5 12 15.5C10.3431 15.5 9 16.8431 9 18.5C9 20.1569 10.3431 21.5 12 21.5Z"
      />
      <path
        d="M24 5C24 6.65685 22.6569 8 21 8C19.3431 8 18 6.65685 18 5C18 3.34315 19.3431 2 21 2C22.6569 2 24 3.34315 24 5Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 7C22.1046 7 23 6.10457 23 5C23 3.89543 22.1046 3 21 3C19.8954 3 19 3.89543 19 5C19 6.10457 19.8954 7 21 7ZM21 8C22.6569 8 24 6.65685 24 5C24 3.34315 22.6569 2 21 2C19.3431 2 18 3.34315 18 5C18 6.65685 19.3431 8 21 8Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.8412 5.54074L12.3083 20.3696L2.47168 14.249L3.52828 12.5509L11.6916 17.6304L20.1588 4.45923L21.8412 5.54074Z"
      />
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
