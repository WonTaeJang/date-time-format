<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Rectangle 6971"
      style="fill:none"
      d="M0 0h24v24H0z"
    />
    <g data-name="Group 13203">
      <g data-name="Group 13204">
        <path
          data-name="Path 1693"
          d="M0 0h10.152"
          transform="translate(12.191 12.156)"
          :style="{
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeWidth: '1.8px',
            fill: 'none' 
          }"
        />
        <path
          data-name="Path 1692"
          d="m0 0 2.875 2.875L0 5.749"
          transform="translate(19.467 9.28)"
          :style="{
            strokeLinejoin: 'round',
            stroke: colors[0],
            strokeLinecap: 'round',
            strokeWidth: '1.8px',
            fill: 'none'
          }"
        />
        <g data-name="Group 14792">
          <g data-name="Group 14793">
            <path
              data-name="Path 3790"
              d="M1.5 5.87V4.088A2.6 2.6 0 0 1 4.088 1.5h5.982a2.6 2.6 0 0 1 2.588 2.588v10.48a2.6 2.6 0 0 1-2.588 2.588H4.088A2.6 2.6 0 0 1 1.5 14.569v-1.783"
              transform="rotate(180 8.33 10.663)"
              :style="{
                strokeMiterlimit: '10',
                stroke: colors[0],
                strokeLinecap: 'round',
                strokeWidth: '1.8px',
                fill: 'none' 
              }"
            />
          </g>
        </g>
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
