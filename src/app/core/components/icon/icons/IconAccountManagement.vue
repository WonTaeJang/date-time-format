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
    <g data-name="그룹 14223">
      <g data-name="그룹 13374">
        <g data-name="그룹 13361">
          <path
            data-name="패스 3237"
            d="M12.726 4.175A3.175 3.175 0 1 1 9.551 1a3.175 3.175 0 0 1 3.175 3.175z"
            transform="translate(-1.825 1.291)"
            :style="{
              strokeMiterlimit: '10',
              stroke: colors[0],
              strokeLinecap: 'round',
              strokeWidth: '1.6px',
              fill: 'none'
            }"
          />
          <path
            data-name="패스 3238"
            d="M1 24.829a4.282 4.282 0 0 1 4.269-4.269h2.912"
            transform="translate(1 -8.991)"
            :style="{
              strokeMiterlimit: '10',
              stroke: colors[0],
              strokeLinecap: 'round',
              strokeWidth: '1.6px',
              fill: 'none'
            }"
          />
        </g>
      </g>
      <path
        data-name="패스 3242"
        d="M6.183 7.821a1.955 1.955 0 1 1 1.383-.573 1.955 1.955 0 0 1-1.383.573zM11 6.906a1.488 1.488 0 0 1-.418-1.035V5.86A1.487 1.487 0 0 1 11 4.825l.5-.517a.666.666 0 0 0 .1-.794l-.671-1.161a.663.663 0 0 0-.736-.312l-.7.175a1.486 1.486 0 0 1-1.11-.158l-.01-.005a1.476 1.476 0 0 1-.678-.871l-.2-.7A.664.664 0 0 0 6.854 0H5.512a.664.664 0 0 0-.638.482l-.216.751a1.331 1.331 0 0 1-.621.794l-.093.054a1.339 1.339 0 0 1-1.011.148l-.76-.19a.664.664 0 0 0-.736.312l-.67 1.163a.665.665 0 0 0 .1.794l.5.517a1.49 1.49 0 0 1 .417 1.035v.012a1.49 1.49 0 0 1-.418 1.035l-.266.277a1.107 1.107 0 0 0-.166 1.323l.5.872a.663.663 0 0 0 .736.312l.76-.19a1.339 1.339 0 0 1 1.011.148l.093.054a1.329 1.329 0 0 1 .621.794l.215.751a.664.664 0 0 0 .638.482h1.346a.664.664 0 0 0 .638-.482l.215-.751a1.329 1.329 0 0 1 .621-.797l.093-.054a1.339 1.339 0 0 1 1.01-.146l.76.19a.664.664 0 0 0 .736-.312l.673-1.16a.665.665 0 0 0-.1-.794l-.5-.518z"
        transform="translate(9.976 10.269)"
        :style="{
          strokeLinejoin: 'round',
          fillRule: 'evenodd',
          stroke: colors[0],
          strokeLinecap: 'round',
          strokeWidth: '1.6px',
          fill: 'none'
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
