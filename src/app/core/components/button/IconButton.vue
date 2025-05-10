<template>
  <button
    :class="[
      'button',
      useContainer ? 'button--container' : 'button--no-container',
      { 
        'button--disabled' : disabled,
      },
      buttonSizeClass
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <Icon
      v-if="icon && useContainer"
      :icon-type="icon"
      :colors="disabled? disabledIconColors : iconColors"
      :width="iconSize"
      :height="iconSize"
      class="button__icon button__icon--left"
    />
    <span
      v-if="!!$slots.default"
      :class="[
        'button__label',
        { 'button__label--padding-right': icon },
        { 'button__label--small': smallLabel }
      ]"
    >
      <slot></slot>
    </span>

    <Icon
      v-if="icon && !useContainer"
      :icon-type="icon"
      :colors="disabled? disabledIconColors : iconColors"
      :width="iconSize"
      :height="iconSize"
      class="button__icon button__icon--right"
    />
    
    <p
      v-if="tooltip"
      class="button__tooltip"
    >
      {{ tooltip }} 
    </p>

    <div
      v-if="props.tooltipExpand.length > 0"
      class="button__tooltip-expand"
    >
      <span
        v-for="(item, i) in props.tooltipExpand"
        :key="`icon-button-tooltip-${i}`"
      >
        {{ item }}
      </span>
    </div>
  </button>
</template>

<script setup>
import Icon from '@ui/icon/Icon.vue'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'normal'
  },
  iconColors: {
    type: Array,
    default: () => ['#B3B7BF']
  },
  iconSize: {
    type: Number,
    default: 16
  },
  useContainer: {
    type: Boolean,
    default: true
  },
  tooltip: {
    type: String,
    default: null
  },
  tooltipExpand: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  smallLabel: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const disabledIconColors = computed(() => {
  return props.iconColors.map(() => {
    return '#ebebef'
  })
})

const buttonSizeClass = computed(() => {
  return {
    'button-size--small': props.size === 'small',
    'button-size--normal': props.size === 'normal',
    'button-size--large': props.size === 'large',
  }
})
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

.button {
  position: relative;
  $button: &;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  white-space: nowrap;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;

  &--container {
    height: 40px;
    padding: 0 8px;
    border: 1px solid palette.$silver;
    border-radius: 8px;
    box-sizing: border-box;

    &:hover {
      background: palette.$pale-grey-two;
    }

    // #{$button}__icon {
    //   margin: 4px;
    // }

    i + span {
      margin-left: 4px;
    }

    #{$button}__label {
      @include mixins.custom-font--600;
      font-size: 16px;
      color: palette.$black;

      &--small {
        font-size: 14px;
      }
      
      &--padding-right {
        margin-right: 8px;
      }
    }
  }

  &--no-container {
    display: flex;
    align-items: center;
    min-height: 24px;
    border: none;
    border-radius: 4px;
    background: #fff;

    &:hover {
      background: palette.$silver;
    }

    #{$button}__label {
      font-size: 14px;
      font-weight: 500;
      color: palette.$black;
    }
  }

  &-size {
    &--small {
      height: auto;
      padding: 1px;
    }

    &--normal {

    }

    &--large {
      height: auto;
      padding: 3px !important;
    }
  }

  .button__tooltip {
    display: none;
    position: absolute;
    transform: translate(0, 180%); 
    padding: 4px 8px;
    background: palette.$black;
    color: #fff;
    border-radius: 8px;
    z-index: 10000;
    @include mixins.custom-font--500;
    font-size: 12px;
  }

  .button__tooltip-expand {
    display: none;
    top: 100%;
    position: absolute;
    margin-top: 10px;
    padding: 4px 8px;
    background: palette.$black;
    border-radius: 8px;
    z-index: 10000;
    flex-direction: column;
    
    span {
      @include mixins.custom-font--500;
      font-size: 12px;
      color: #fff;
    }
  }

  &:hover .button__tooltip {
    display: block;
  }

  &:hover .button__tooltip-expand {
    display: flex;
  }

  &--disabled {
    cursor: default;
    color: #ebebef;

    &:hover {
      background: transparent;
    }
  }
}
</style>