<template>
  <div
    v-if="props.type === 'unixToDate'"
    class="container"
  >
    <div class="title">
      <span>
        Enter a timestamp (seconds)
      </span>
    </div>
  
    <div class="unixtime">
      <TextInput 
        v-model:text-value="textUnixTime"
        :style="{
          width: '500px'
        }"
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

      <div 
        v-if="unixConvertToggle"
        class="convert-container"
      >
        <span>-></span>

        <span>
          {{ convertUnixTime }}
        </span>
      </div>
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <div class="title">
      <span>
        Enter a date time picker
      </span>
    </div>
  
    <div class="datetime">
      <DateTimePicker
        v-model:date="datePicker"
        :style="{
          width: '500px'
        }"
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

      <div 
        v-if="dateConvertToggle"
        class="convert-container"
      >
        <span>-></span>

        <span>
          {{ convertDatePicker }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import NormalButton from '@ui/button/NormalButton.vue'
import TextInput from '@ui/form/TextInput.vue'
import DateTimePicker from '@ui/calendar/DateTimePicker.vue'
import dayjs from 'dayjs'
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
const datePicker = ref(dayjs().format(dateTimeFormat))
const convertDatePicker = ref(null)

const unixConvertToggle = ref(false)
const dateConvertToggle = ref(false)

const onClickConvert = (type) => {
  switch (type) {
    case 'unixToDate':
      // console.log(textUnixTime.value)
      convertUnixTime.value = dayjs(textUnixTime.value * 1000).format(dateTimeFormat)
      unixConvertToggle.value = true
      break
    case 'dateToUnix':
      convertDatePicker.value = dayjs(datePicker.value).unix()
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
  gap: 10px;

  span {
    @include mixins.custom-font--normal;
    font-size: 20px;
    color: palette.$black;
  }
}

.unixtime {
  display: flex;
  align-items: center;
  gap: 10px;

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
  gap: 10px;

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
}
</style>