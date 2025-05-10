<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clip-path="url(#clip0_2224_202263)"
      :fill="colors[0]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 12C18 11.4477 18.4477 11 19 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H19C18.4477 13 18 12.5523 18 12Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6C11.4477 6 11 5.55228 11 5L11 1C11 0.447715 11.4477 -1.95703e-08 12 -4.37114e-08C12.5523 -6.78525e-08 13 0.447715 13 1L13 5C13 5.55228 12.5523 6 12 6Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 24C11.4477 24 11 23.5523 11 23L11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19L13 23C13 23.5523 12.5523 24 12 24Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_2224_202263">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
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
