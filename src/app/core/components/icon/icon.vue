<template>
  <i :style="iconStyle">
    <component
      :is="iconComponent"
      v-bind="{ colors }"
    />
    <span
      v-if="props.tooltip"
      :class="[
        'icon__tooltip',
        {'icon__tooltip--right': props.tooltipDirection === 'right'}
      ]"
    >
      {{ props.tooltip }}
    </span>
  </i>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  iconType: {
    type: String,
    default: () => null,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  colors: {
    type: Array,
  },
  tooltip: {
    type: String,
    default: null
  },
  tooltipDirection: {
    type: String,
    default: 'bottom'
  }
})

const iconComponent = computed(() => {
  const componentName = `Icon${pascalize(props.iconType)}`
  return defineAsyncComponent(() => import(`./icons/${componentName}.vue`))
})


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const pascalize = (string) => {
  const words = string.split('-')
  const capitalized = words.map((word) => capitalize(word))
  return capitalized.join('')
}

const iconStyle = computed(() => {
  return {
    width: `${props.width}px !important`,
    height: `${props.height}px !important`
  }
})
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

i {
  display: inline-block;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover .icon__tooltip{
    display: block;
  }
}

.icon__tooltip {
  display: none;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150%); 
  padding: 4px 8px;
  background: palette.$black;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  z-index: 10000;
  @include mixins.custom-font--500;
  font-size: 12px;

  &--right {
    left: auto;
    right: 0;
    transform: translate(0, 150%); 
  }
}
</style>
