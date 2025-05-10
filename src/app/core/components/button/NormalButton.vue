<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span v-if="props.type === 'normal'">
      <slot></slot>
    </span>
    <slot
      v-else
      name="icon"
    ></slot>

    <p
      v-if="tooltip"
      :class="[
        'button__tooltip',
        {
          'button__tooltip__down': props.tooltipDirection === 'down',
          'button__tooltip__up': props.tooltipDirection === 'up',
          'button__tooltip__right': props.tooltipDirection === 'right',
        }
      ]"
    >
      {{ tooltip }} 
    </p>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  inactive: {
    type: Boolean,
    default: () => false,
  },
  fullWidth: {
    type: Boolean,
    default: () => false
  },
  height: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: 'normal'
  },
  tooltip: {
    type: String,
    default: null
  },
  tooltipDirection: {
    type: String, // down, up.
    default: 'down'
  }
})

defineEmits(['click'])

const buttonStyle = computed(() => {
  const style = {}
  if (props.width > 0) {
    style.width = props.width + 'px'
  }

  if (props.height > 0) {
    style.height = props.height + 'px'
  }

  return {
    ...style
  }
})

const buttonClass = computed(() => {
  return [
    'button',
    { 'button--icon' : props.type === 'icon'},
    { 'button--icon-text' : props.type === 'icon-text'},
    { 'button--primary': props.color === 'primary' },
    { 'button--secondary': props.color === 'secondary'},
    { 'button--translation': props.color === 'translation'},
    { 'button--light': props.color === 'light'},
    { 'button--full-width': props.fullWidth },
    { inactive: props.inactive || props.disabled },
  ]
})
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

@mixin inactive($type) {
  cursor:not-allowed;

  @if ($type == fill) {
    background-color: palette.$silver !important;
    span {
      color: #fff !important;
    }
  }
}

.button {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  white-space: nowrap;
  border-radius: 8px;
  margin: 0;
  cursor: pointer;

  /** color */
  &--primary {
    border: none;
    background-color: palette.$darkish-blue;
    
    span {
      color: #fff;
      @include mixins.zeplin-body-bold;
    }

    &:hover {
      background-color: palette.$darkish-blue-two;
    }

    &.inactive {
      @include inactive(fill);
    }
  }

  &--secondary {
    border: none;
    background-color: palette.$pale-grey;

    span {
      @include mixins.zeplin-body-bold;
      color: palette.$black;
    }

    &:hover {
      background-color: palette.$silver;
    }

    &.inactive {
      @include inactive(fill);
    }
  }

  &--translation {
    border: none;
    background-color: #4CAF50;
    // background-color: #fff;
    
    span {
      color: #fff;
      @include mixins.zeplin-body-bold;
    }

    &:hover {
      background-color: #45a049;
    }

    &.inactive {
      @include inactive(fill);
    }
  }

  &--light {
    border: 1px solid palette.$silver;
    background-color: #fff;
    box-sizing: border-box;
    
    span {
      color: palette.$black;
      @include mixins.zeplin-body-bold;
    }

    &:hover {
      background-color: palette.$pale-grey;
    }

    &.inactive {
      @include inactive(fill);
    }
  }

  &--icon {
    padding: 0;
    background-color: transparent;

    &:hover {
      background-color: palette.$pale-grey;
    }
  }

  &--icon-text {
    padding: 0 4px;
    display: flex;
    gap: 4px;
    color: palette.$black;
    @include mixins.zeplin-body-400;
    background-color: transparent;

    &:hover {
      background-color: palette.$pale-grey;
    }
  }

  /** size */
  &--full-width {
    width: 100%;
  }

  .button__tooltip {
    display: none;
    position: absolute;
    padding: 4px 8px;
    background: palette.$black;
    color: #fff;
    border-radius: 8px;
    z-index: 10000;
    @include mixins.zeplin-body-500;
    font-size: 12px;
  }

  .button__tooltip__down {
    transform: translate(0, 180%); 
  }

  .button__tooltip__up {
    transform: translate(0, -150%); 
  }

  .button__tooltip__right {
    transform: translate(0, 0); 
  }

  &:hover .button__tooltip {
    display: block;
  }
}
</style>
