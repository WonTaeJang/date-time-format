<template>
  <div class="loading">
    <Icon 
      v-if="!props.gif"
      icon-type="loading"
      :width="60"
      :height="60"
      :style="{
        transform: `rotate(${deg}deg)`
      }"
    />
    <img 
      v-else
      ref="imgRef"
      src="@/assets/gif_loading.gif" 
      alt="loading"
    >
  </div>
</template>

<script setup>
import Icon from '@ui/icon/Icon.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  gif: {
    type: Boolean,
    default: false
  }
})
const deg = ref(0)
const interval = ref(null)

onMounted(() => {
  if (!props.gif) {
    interval.value = setInterval(() => {
        deg.value += 45
        if (deg.value > 360) {
          deg.value -= 360
        }
      }, 100)
  }
})

onUnmounted(() => {
  interval.value = null
})

</script>

<style lang="scss" scoped>

.loading {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  z-index: 10000;

  img {
    position: relative;
    width: 60px;
    height: 60px;
  }
}

</style>