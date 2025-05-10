<template>
  <div 
    ref="inputRef"
    class="input-text-container"
    :style="containerStyle"
  >
    <div class="input-text-box">
      <div 
        v-if="props.iconType"
        class="input-text-icon"
      >
        <Icon 
          :icon-type="props.iconType"
          :colors="[isFocus ? '#4CAF50' : '#D3D3D6']"
          :width="28"
          :height="28"
        />
      </div>
      <input
        v-model="text"
        :type="props.type"
        :style="inputStyle"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        @input="inputValue"
        @focus="focusInput"
        @change="onChange($event)"
        @focusout="focusoutInput"
        @click="onClickInput($event)"
      >
    </div>
    <div 
      v-if="props.tags.length > 0"
      :class="[
        'history-container',
      ]"
      :style="inputHistoryStyle"
    >
      <div
        v-for="(item, i) of props.tags"
        :key="`history-${i}`"
        class="history-item"
        @click.capture.stop="onClickHistoryItem(item)"
      >
        <Icon 
          icon-type="history"
          :width="20"
          :height="20"
        />

        <span>
          {{ item }}
        </span>
      </div>
    </div>
    <ul 
      v-if="searchListToggle && props.searchList.length > 0"
      ref="searchListRef"
      class="search-list"
      :style="containerStyle"
    >
      <li
        v-for="(item, idx) of props.searchList"
        :key="`li-key-${idx}`"
        class="search-item"
        @click="onClickSearchItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Icon from '@ui/icon/Icon.vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  iconType: {
    type: String,
    default: null
  },
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
  color: {
    type: String,
    default: 'normal' // error
  },
  tags: {
    type: Array,
    default: () => []
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

const historyItemHeight = 24
const text = ref(null)
const isHistoryFocus = ref(false)
const isFocus = ref(false)
const inputRef = ref(null)

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

const inputHistoryStyle = computed(() => {
  let height = 0

  if (isHistoryFocus.value) {
    height = props.tags.length*historyItemHeight
  } else {
    height = props.tags.length > 0 ? historyItemHeight : 0
  }

  return {
    height: `${height}px`,
  }
})

const inputStyle = computed(() => {
  let result = {}

  if (props.iconType) {
    result['padding-left'] = '36px'
  }

  if (props.size === 'large') {
    result['height'] = '40px'
  }

  if (props.readonly) {
    result['background-color'] = '#f5f5f7'
  }

  if (props.color === 'error') {
    result['color'] = '#ff5555'
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

const onClickHistoryItem = (item) => {
  emit('update:textValue', item)
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
  if (props.searchList.length > 0) {
    searchListToggle.value = true
  }
}

const onChange = () => {
  emit('change')
}

const onClickSearchItem = (item) => {
  emit('update:textValue', item)
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
  width: 100%;

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
  top: calc(100% + 4px);
  // border-radius: 4px;
  background-color: #fff;
  overflow: auto;
  border: 1px solid #4CAF50;
  max-height: 300px;
}

.search-item {
  padding: 4px 8px !important;
  @include mixins.custom-font--400;
  color: palette.$black;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: palette.$pale-grey;
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

.history {
  &-container {
    margin: 5px 0;
    padding: 0;
    transition: all 0.5s;
    overflow: hidden;
  }

  &-item {
    display: flex;
    align-items: center;
    height: 24px;
    padding-left: 5px;
    gap: 4px;
    border: 0;
    border-radius: 8px;
    

    &:hover {
      background-color: palette.$pale-grey; 
    }

    span {
      @include mixins.custom-font--500;
      color: palette.$black;
      font-size: 15px;
      cursor: default;
    }
  }
}

</style>