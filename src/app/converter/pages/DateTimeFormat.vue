<template>
  <PageContainer
    :is-loading="isLoading"
    title="Locale-based date/time formats"
    :i18n="false"
  >
    <div class="current-time">
      <InputContainer 
        :title="$t('datetime.convert_title')"
      >
        <TextInput
          v-model:text-value="dateTimeValue"
          size="large"
          :placeholder="'1745991443'"
          @focusout="setLocaleDateTime"
        />

        <DateTimePicker
          v-model:date="dateTimeValue"
          button
          required
          position="right"
          :data-format="dateTimeFormat"
          @focusout="setLocaleDateTime"
        />
      </InputContainer>

      <InputContainer
        :title="$t('editor.locale')"
      >
        <TextInputLocale
          v-model:text-value="language"
          size="large"
          locale-type="language"
          :placeholder="'ko'"
          @focusout="setLocaleDateTime"
        />

        <TextInputLocale
          v-model:text-value="country"
          size="large"
          locale-type="country"
          :placeholder="'KR'"
          @focusout="setLocaleDateTime"
        />
      </InputContainer>

      <InputContainer
        :title="$t('datetime.timezone')"
      >
        <TextInput
          v-model:text-value="timezoneValue"
          size="large"
          :search-list="timezoneListFilter"
          :placeholder="timezonePlaceholder"
          @change="setLocaleDateTime"
        />
      </InputContainer>
  
      <CustomDateTimeFormat
        @options="getOptions"
      />
  
      <InputContainer
        :style="{
          marginTop: '20px'
        }"
        :title="$t('common.result')"
      >
        <TextInput 
          v-model:text-value="result"
          size="large"
          :color="isResultError ? 'error' : 'normal'"
          readonly
        />

        <IconButton 
          size="large"
          icon="copy"
          :icon-size="24"
          :icon-colors="['#575c63']"
          @click="onClickCopy"
        />
      </InputContainer>

      <input
        id="html_value"
        v-model="result"
        :style="{
          display: 'none'
        }"
      >
    </div>
  </PageContainer>
</template>
<script setup>
import DateTimePicker from '@ui/calendar/DateTimePicker.vue'
// import SelectLocaleModal from '../components/SelectLocaleModal.vue'
import InputContainer from '../components/InputContainer.vue'
import CustomDateTimeFormat from '../components/CustomDateTimeFormat.vue'
import PageContainer from '@ui/container/PageContainer.vue'
import TextInput from '@ui/form/TextInput.vue'
import TextInputLocale from '@ui/form/TextInputLocale.vue'
import IconButton from '@ui/button/IconButton.vue'
import { useSnackbarStore } from "@store/snackbar"
import { useDateTimeStore } from '@store/datetime'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'
import moment from 'moment-timezone'

import { 
  SIMPLE_CODE, 
  DETAIL_CODE, 
  CUSTOM_CODE, 
  COMMON_CODE,
  dateTimeFormat
} from '@util/datetimeformat.js'

const isLoading = ref(false)
const snackbarStore = useSnackbarStore()
const dateTimeStore = useDateTimeStore()
const dateTimeValue = ref(dayjs().unix())

const country = ref('KR')
const language = ref('ko')

const result = ref(null)
const isResultError = ref(false)

const {
  type,
  options,
  customOptions
} = storeToRefs(dateTimeStore)

const localeToggle = ref(false)
const timezoneValue = ref(moment.tz.guess())
const timezonePlaceholder = moment.tz.guess() // current timezone

const timezoneListFilter = computed(() => {
  if (countryCode.value && moment.tz.zonesForCountry(countryCode.value)) {
    return moment.tz.zonesForCountry(countryCode.value) // get country timezone list
  }
  return moment.tz.names()  // timezone list
})

const countryCode = computed(() => {
  if (locale.value) {
    let country = locale.value.split('-').length > 1 ? locale.value.split('-')[1] : null

    return country ? country.toLowerCase() : null
  }

  return null
})

const locale = computed(() => {
  if (language.value && country.value) {
    return `${language.value.toLowerCase()}-${country.value.toUpperCase()}`
  }

  return null
})

const getOptions = ($event) => {
  if ($event.id !== COMMON_CODE) {
    type.value = $event.id
  }

  if ($event.id === CUSTOM_CODE) {
    customOptions.value = $event.options
  } else {
    options.value = $event.options
  }

  setLocaleDateTime()
}

const setLocaleDateTime = () => {
  try {
    if (locale.value !== null && dateTimeValue.value !== null && isLocaleSupported(locale.value)) {
      let date = null
      isResultError.value = false
  
      switch (type.value) {
        case SIMPLE_CODE:
        case DETAIL_CODE:
          if (Number.isInteger(dateTimeValue.value)) {
            date = dayjs(dateTimeValue.value * 1000).valueOf()
          } else {
            date = dayjs(dateTimeValue.value).valueOf()
          }
  
          result.value = new Intl.DateTimeFormat(locale.value, {
              ...options.value,
              timeZone: timezoneValue.value ?? 'UTC'
            }).format(date)
          break
        case CUSTOM_CODE:
          if (Number.isInteger(dateTimeValue.value)) {
            date = dayjs(dateTimeValue.value * 1000).valueOf()
          } else {
            date = dayjs(dateTimeValue.value).valueOf()
          }
  
          result.value = customOptions.value ? dayjs(date).format(customOptions.value) : date
          break
      }
    }
  } catch (error) {
    console.log(error)
    result.value = error.toString()
    isResultError.value = true
  }
}

const onClickCopy = () => {
  if (result.value) {
    const copyText = document.querySelector("#html_value")
    copyText.style.display = 'block'
    copyText.select()

    try {
      document.execCommand('copy')
      snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-1'})
    } catch (err) {
      // 복사 실패
      snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-0'})
    }
    copyText.style.display = 'none'
  }
}

const isLocaleSupported = (locale) => {
  try {
    return Intl.DateTimeFormat.supportedLocalesOf([locale]).length > 0
  } catch (error) {
    console.log(error)
    result.value = error.toString()
    isResultError.value = true
    return false
  }
}

</script>
<style lang="scss" scoped>
  @use '@style/palette.scss' as palette;
  @use '@style/mixins.scss' as mixins;
  @use '@style/common.scss' as common;
  
  .current-time {
    // width: 900px;
    margin: 40px auto;
  }
  </style>