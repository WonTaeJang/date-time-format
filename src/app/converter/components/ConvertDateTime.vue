<template>
  <div
    v-if="props.type === 'unixToDate'"
    class="container"
  >
    <div class="title">
      <span>
        {{ $t('convert.enter_timestamp') }}
      </span>
    </div>
  
    <div class="unixtime">
      <TextInput 
        v-model:text-value="textUnixTime"
        type="Number"
        size="large"
        :placeholder="unixTimeplaceholder"
      />
  
      <input
        id="hidden-input-unixtime"
        v-model="textUnixTime"
        type="hidden"
      >
  
      <NormalButton
        :width="80"
        :height="40"
        color="translation"
        @click="onClickConvert('unixToDate')"
      >
        <label>
          {{ $t('nav.converter') }}
        </label> 
      </NormalButton>
    </div>
    <div 
      v-if="unixConvertToggle"
      class="convert-container--result"
    >
      <ResultBox 
        :history="unixToDateHistory"
      />
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <div class="title">
      <span>
        {{ $t('convert.enter_datetime') }}
      </span>
    </div>
  
    <div class="datetime">
      <DateTimePicker
        v-model:date="datePicker"
        :style="{
          flex: 1
        }"
        type="input"
        :data-format="dateTimeFormat"
      />
  
      <NormalButton
        :width="80"
        :height="40"
        color="translation"
        @click="onClickConvert('dateToUnix')"
      >
        <label>
          {{ $t('nav.converter') }}
        </label> 
      </NormalButton>
    </div>
    <div 
      v-if="dateConvertToggle"
      class="convert-container--result"
    >
      <ResultBox 
        :history="dateToUnixHistory"
      />
    </div>
  </div>
</template>
<script setup>
import NormalButton from '@ui/button/NormalButton.vue'
import TextInput from '@ui/form/TextInput.vue'
import DateTimePicker from '@ui/calendar/DateTimePicker.vue'
import ResultBox from './ResultBox.vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import { ref } from 'vue'
import { dateTimeFormat } from '@util/datetimeformat.js'

const unixTimeplaceholder = dayjs().unix()

const props = defineProps({
  type: {
    type: String,
    default: 'unixToDate' // dateToUnix
  }
})

const textUnixTime = ref(null)
const convertUnixTime = ref(null)
const datePicker = ref(dayjs().utc().format(dateTimeFormat))
const convertDatePicker = ref(null)

const unixConvertToggle = ref(false)
const dateConvertToggle = ref(false)

const unixToDateHistory = ref([])
const dateToUnixHistory = ref([])
const onClickConvert = (type) => {
  let textUnix = 0

  switch (type) {
    case 'unixToDate':
      // console.log(textUnixTime.value)
      textUnix = textUnixTime.value ?? 0
      convertUnixTime.value = dayjs(textUnix * 1000).utc().format(dateTimeFormat)
      unixToDateHistory.value.push({
        before: textUnix,
        after: convertUnixTime.value
      })
      unixConvertToggle.value = true
      break
    case 'dateToUnix':
      convertDatePicker.value = dayjs.utc(datePicker.value).unix()
      dateToUnixHistory.value.push({
        before: datePicker.value,
        after: convertDatePicker.value
      })
      dateConvertToggle.value = true
      break
  }
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

.convert-container {
  display: flex;
  align-items: center;
  gap: 20px;

  &--result {
    margin-top: 10px
  }

  span {
    @include mixins.custom-font--normal;
    font-size: 20px;
    color: palette.$black;
  }
}

.unixtime {
  display: flex;
  align-items: center;
  gap: 20px;

  &-text {
    display: inline-block;
    width: 500px;
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
    width: 500px;
    @include mixins.custom-font--400;
    font-size: 40px;
    color: palette.$black;
  }
}

.container {
  margin-bottom: 40px;
  width: 100%;
}
</style>