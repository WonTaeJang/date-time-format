<template>
  <div class="picker">
    <IconButton 
      v-if="props.button"
      size="large"
      icon="calendar"
      :icon-size="24"
      :icon-colors="['#575c63']"
      @click="onClickPopover"
    />
    <div 
      v-else
      class="input-datetime"
      @click="onClickPopover"
    >
      <span
        class="span-title"
      >
        {{ calendarDate ? localeDateTime : null }}
      </span>
      <Icon 
        icon-type="calendar"
        :width="40"
        :height="40"
      />
    </div>
    <Transition name="slide-fade">
      <div
        v-if="popoverToggle"
        ref="datetimeRef"
        :class="[
          'datetime-picker',
          {
            'datetime-picker--left': props.position === 'left',
            'datetime-picker--right': props.position === 'right'
          }
        ]"
      >
        <VDatePicker
          v-model="calendarDate"
          mode="dateTime"
          :locale="calendarLocale"
          class="my-calendar"
          :min-date="props.minDate"
          :time-accuracy="3"
          hide-time-header
          :is-required="props.required"
          :masks="{
            model: 'iso',
            iso: 'YYYY-MM-DDTHH:mm:ss.SSSSSZ',
          }"
        />
      </div>
    </Transition>
  </div>
</template>
<script setup>
import Icon from '@ui/icon/Icon.vue'
import IconButton from '@ui/button/IconButton.vue'
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import { onClickOutside } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

const props = defineProps({
  date: {
    type: [String, Number, null],
    required: true
  },
  minDate: {
    type: Date,
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
  dataFormat: {
    type: String,
    default: null
  },
  button: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'left'
  }
})

const emit = defineEmits(['update:date', 'focusout'])

const popoverToggle = ref(false)
const calendarDate = ref(null)
const datetimeRef = ref(null)

onMounted(() => {
  if (Number.isInteger(props.date)) {
    calendarDate.value = dayjs(props.date*1000).format(props.dataFormat)
  } else {
    calendarDate.value = props.date
  }
})

onClickOutside(datetimeRef, () => {
  popoverToggle.value = false
  emit('update:date', dayjs(calendarDate.value).format(props.dataFormat))
  emit('focusout')
})

const calendarLocale = computed(() => {
  let lang = locale.value.split('_')[0]
  return lang
})

const localeDateTime = computed(() => {
  if (calendarDate.value) {
    return dayjs(calendarDate.value).format(props.dataFormat)
  }

  return null
})

const onClickPopover = () => {
  if (props.readonly) return 
  
  popoverToggle.value = true
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins; 

:deep(button){
  background-color: transparent;
  color: black;
}

:deep(.vc-base-select){
  select {
    border: 0;
  }
}

.picker {
  position: relative;
}

.datetime-picker {
  position: absolute;
  top: 100%;
  z-index: 10;

  &--left {
    left: 0;
  }

  &--right {
    right: 0;
  }
}

.input-datetime {
  display: flex;
  gap: 4px;
  align-items: center;
  z-index: 900;

  .span-title {
    @include mixins.custom-font--400;
    font-size: 40px;
    color: palette.$black;
    cursor: pointer;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>