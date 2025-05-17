<template>
  <div 
    ref="inputRef"
    class="input-text-container"
    :style="containerStyle"
  >
    <div class="input-text-box">
      <span 
        v-if="props.localeType === 'country'"
        class="input-flag"
        :class="`fi fi-${text?.toLowerCase()}`"
      ></span>

      <input
        v-model="text"
        :type="props.type"
        :style="inputStyle"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        @input="inputValue"
        @focus="focusInput"
        @focusout="focusoutInput"
        @click="onClickInput($event)"
      >
    </div>

    <ul 
      v-if="searchListToggle && searchListFilter.length > 0"
      ref="searchListRef"
      class="search-list"
      :style="searchListStyle"
    >
      <li
        v-for="(item, idx) of searchListFilter"
        :key="`li-key-${idx}`"
        class="search-item"
        @click="onClickSearchItem(item)"
      >
        <span 
          v-if="props.localeType === 'country'"
          :class="`fi fi-${item} border-pale-grey`"
        ></span>

        <span class="name">
          {{ props.localeType === 'country' ? item.toUpperCase() : item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { onClickOutside, useElementSize } from '@vueuse/core'
import { countries, languages } from '@util/locale.js'

const props = defineProps({
  size: {
    type: String,
    default: 'normal' // large
  },
  textValue: {
    type: [String, null, Number],
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  localeType: {
    type: String, // country, language
    default: null
  },
  width: {
    type: Number,
    default: null
  },
  searchList: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: [String, Number, null],
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:textValue', 
  'input', 
  'focusout',
  'focus',
  'change'
])

const text = ref(null)
const isHistoryFocus = ref(false)
const isFocus = ref(false)
const inputRef = ref(null)
const { width:componentWidth } = useElementSize(inputRef)

const searchListRef = ref(null)
const searchListToggle = ref(false)

onMounted(() => {
  initInput()
})

onClickOutside(inputRef, () => {
  if (isHistoryFocus.value) {
    isHistoryFocus.value = false
  }
})

onClickOutside(searchListRef, () => {
  searchListToggle.value = false
})

const searchListFilter = computed(() => {
  if (props.localeType === 'country') {
    let list = [...countries]

    if (props.textValue && props.textValue.length > 0) {
      list = list.filter((el) => {
        return el.toLowerCase().includes(props.textValue.toLowerCase())
      })
    }

    return list
  }
  else if (props.localeType === 'language') {
    let list = [...languages]

    if (props.textValue && props.textValue.length > 0) {
      list = list.filter((el) => {
        return el.toLowerCase().includes(props.textValue.toLowerCase())
      })
    }

    return list
  }


  return []
})

const inputStyle = computed(() => {
  let result = {}

  if (props.size === 'large') {
    result['height'] = '40px'
  }

  if (props.localeType === 'country') {
    result['padding-left'] = '32px'
  }

  if (props.readonly) {
    result['background-color'] = '#f5f5f7'
  }

  return result
})

const containerStyle = computed(() => {
  let style = {}

  if (props.width) {
    style['width'] = `${props.width}px`
  }

  return style
})

const searchListStyle = computed(() => {
  let style = {}

  if (componentWidth.value) {
    style['width'] = `${componentWidth.value}px`
  }

  return style
})

watch(() => props.textValue, (value) => {
  if (text.value !== value) {
    initInput()
  }
})

const initInput = () => {
  text.value = props.textValue
}

const inputValue = ($event) => {
  emit('update:textValue', $event.target.value)
  emit('input', $event.target.value)
}

const focusInput = () => {
  emit('focus', text.value)
  isFocus.value = true
  isHistoryFocus.value = true
}

const focusoutInput = () => {
  emit('focusout', text.value)
  isFocus.value = false
}

const onClickInput = ($event) => {
  if (searchListFilter.value.length > 0) {
    searchListToggle.value = true
  }
}

const onClickSearchItem = (item) => {
  let value = item

  if (props.localeType === 'country') {
    value = value.toUpperCase()
  }

  emit('update:textValue', value)
  emit('change')
  searchListToggle.value = false
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/variables.scss' as variables;
@use '@style/common.scss' as common;

.input-text-container {
  flex: 1;

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  input {
    height: 32px;
    width: 100%;
    padding: 0 8px;
    margin: 0;
    display: inline-block;
    border:  1px solid palette.$silver;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    outline: none;
    @include mixins.custom-font--500;
    color: palette.$black;
    
    &:focus {
      border: 1px solid #4CAF50;
    }

    &::placeholder {
      @include mixins.custom-font--400;      
      color: #D3D3D6;
      font-size: 12px;
    }
  }
}

.search-list {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: calc(100% + 4px);
  // border-radius: 4px;
  background-color: #fff;
  overflow: auto;
  border: 1px solid #4CAF50;
  max-height: 300px;
}

.search-item {
  padding: 4px 8px !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: palette.$pale-grey;
  }

  .name {
    @include mixins.custom-font--400;
    color: palette.$black;
    font-size: 14px;
  }
}

.input-text-icon {
  position: absolute;
  width: 28px;
  height: 28px;
  left: 4px;
  top: 50%;
  transform: translate(0,-50%);
}

.input-text-box {
  position: relative;
}

.input-flag {
  position: absolute;
  z-index: 1;
  left: 8px;
  top: 50%;
  transform: translate(0,-50%);
  border: 1px solid palette.$pale-grey;
}

.border-pale-grey {
  border: 1px solid palette.$pale-grey;
}

</style>