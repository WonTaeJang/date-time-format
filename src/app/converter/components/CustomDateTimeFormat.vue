<template>
  <div class="custom-format">
    <InputContainer
      :title="$t('lokalise.table_option')"
    >
      <TabContainer
        v-model="selectedTab"
        :tabs="tabs"
        size="small"
      />
    </InputContainer>

    <!-- simple -->
    <div
      v-if="selectedTab === SIMPLE_CODE"
      class="custom-format_box"
    >
      <CheckboxFormatTab
        v-for="(item, idx) of simpleFormat"
        :key="`simple-${idx}`"
        :item="item"
        @change="onChange($event, SIMPLE_CODE)"
      />
    </div>
    <div
      v-else-if="selectedTab === DETAIL_CODE"
      class="custom-format_box"
    >
      <CheckboxFormatTab
        v-for="(item, idx) of detailFormat"
        :key="`detail-${idx}`"
        :item="item"
        @change="onChange($event, DETAIL_CODE)"
      />
    </div>
    <div
      v-else-if="selectedTab === CUSTOM_CODE"
      class="custom-format_box"
    >
      <InputContainer
        :title="$t('datetime.format')"
      >
        <TextInput 
          v-model:text-value="customValue"
          :style="{
            width: '300px',
          }"
          size="large"
          :placeholder="'YYYY-DD-MM HH:mm:ss'"
          @focusout="onChange($event, CUSTOM_CODE)"
        />
      </InputContainer>
    </div>

    <!-- common option -->
    <div
      v-if="selectedTab !== CUSTOM_CODE"
      class="custom-format_box"
    >
      <CheckboxFormatTab
        v-for="(item, idx) of commonOption"
        :key="`common-${idx}`"
        :item="item"
        @change="onChange($event, COMMON_CODE)"
      />
    </div>
  </div>
</template>
<script setup>
import InputContainer from './InputContainer.vue'
import TabContainer from '@ui/tab/TabContainer.vue'
import CheckboxFormatTab from './CheckboxFormatTab.vue'
import TextInput from '@ui/form/TextInput.vue'
import { ref, watch } from 'vue'
import { simpleFormat, detailFormat, commonOption } from '@util/datetimeformat.js'
import { SIMPLE_CODE, DETAIL_CODE, CUSTOM_CODE, COMMON_CODE } from '@util/datetimeformat.js'

const tabs = [
  {
    id: SIMPLE_CODE,
    i18n: false,
    label: 'Simple'
  },
  {
    id: DETAIL_CODE,
    i18n: false,
    label: 'Detail'
  },
  {
    id: CUSTOM_CODE,
    i18n: false,
    label: 'Custom'
  },
]
const emit = defineEmits(['options'])

const selectedTab = ref(tabs[0].id)
const customValue = ref('YYYY-DD-MM HH:mm:ss')
const formatOptions = ref(new Map())
const commonOptions = ref(new Map())

// reset 
watch(selectedTab, (value) => {
  if (value === CUSTOM_CODE) {
    onChange(customValue.value, CUSTOM_CODE)
  }

  formatOptions.value.clear()
})

/*
use: bool, 사용 여부
id: string, option id
value: string, option value
*/
const onChange = ($event, type) => {
  if (type === CUSTOM_CODE) {
    emit('options', {
      id: type,
      options: $event
    })
    return
  }

  if (type === COMMON_CODE) {
    if ($event.use) {
      commonOptions.value.set($event.id, $event.value)
    } else {
      if (commonOptions.value.has($event.id)) {
        commonOptions.value.delete($event.id)
      }
    }
  } else {
    if ($event.use) {
      formatOptions.value.set($event.id, $event.value)
    } else {
      if (formatOptions.value.has($event.id)) {
        formatOptions.value.delete($event.id)
      }
    }    
  }

  let options = {}

  if (formatOptions.value.size > 0) {
    for (const key of formatOptions.value.keys()) {
      options[key] = formatOptions.value.get(key)
    }
  }

  if (commonOptions.value.size > 0) {
    for (const key of commonOptions.value.keys()) {
      options[key] = commonOptions.value.get(key)
    }
  }

  emit('options', {
    id: type,
    options: options
  })
}
</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.custom-format {

}
</style>