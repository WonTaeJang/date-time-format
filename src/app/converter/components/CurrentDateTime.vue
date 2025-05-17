<template>
  <div
    v-if="props.type==='unixtime'"
    class="container"
  >
    <div class="title">
      <span>
        Current epoch unix timestamp (seconds)
      </span>
    </div>
  
    <div class="unixtime">
      <span
        class="unixtime-text"
      >
        {{ currentUnixTime }}
      </span>
  
      <input
        id="hidden-input-unixtime"
        v-model="currentUnixTime"
        type="hidden"
      >
  
      <NormalButton
        :width="80"
        :height="40"
        color="secondary"
        @click="onClickCopy('unixtime')"
      >
        <label>
          {{ $t('common.copy') }}
        </label> 
      </NormalButton>
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <div class="title">
      <span>
        Current date & time format (UTC)
      </span>
    </div>
  
    <div class="datetime">
      <span
        class="datetime-text"
      >
        {{ dateTime }}
      </span>
  
      <input
        id="hidden-input-datetime"
        v-model="dateTime"
        type="hidden"
      >
  
      <NormalButton
        :width="80"
        :height="40"
        color="secondary"
        @click="onClickCopy('datetime')"
      >
        <label>
          {{ $t('common.copy') }}
        </label> 
      </NormalButton>
    </div>
  </div>
</template>
<script setup>
import NormalButton from '@ui/button/NormalButton.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
import { useSnackbarStore } from "@store/snackbar"

const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss'

const props = defineProps({
  type: {
    type: String,
    default: 'unixtime' // datetime
  }
})

const snackbarStore = useSnackbarStore()
const currentUnixTime = ref(dayjs().unix())
const intervalId = ref(null)

onMounted(() => {
  intervalId.value = setInterval(() => {
    currentUnixTime.value = dayjs().utc().unix()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

const dateTime = computed(() => {
  return dayjs(currentUnixTime.value*1000).utc().format(dateTimeFormat)
})

const onClickCopy = (type) => {
  let copy = document.getElementById(`hidden-input-${type}`)
  copy.setAttribute('type', 'text')
  copy.select()
  try {
    document.execCommand('copy')
    snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-1'})
  } catch (err) {
    // 복사 실패
    snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-0'})
  }
  copy.setAttribute('type', 'hidden')
}

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;


.title {
  span {
    @include mixins.custom-font--normal;
    font-size: 15px;
    color: palette.$black;
  }
}

.container {
  margin-bottom: 40px;
  width: 100%;
}

.unixtime {
  display: flex;
  align-items: center;
  gap: 20px;

  &-text {
    display: inline-block;
    // width: 500px;
    flex: 1;
    @include mixins.custom-font--400;
    font-size: 40px;
    color: palette.$black;
  }
}

.datetime {
  display: flex;
  align-items: center;
  gap: 20px;

  &-text {
    display: inline-block;
    flex: 1;
    @include mixins.custom-font--400;
    font-size: 40px;
    color: palette.$black;
  }
}
</style>