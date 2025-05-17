<template>
  <section 
    :class="[
      'tab-container',
      {
        'tab-container__small': props.size === 'small',
      }
    ]"
  >
    <div
      v-for="(tab, idx) of props.tabs"
      :key="idx"
      :class="[
        'tab-item',
        {
          'tab-item__selected': tab.id === selectedTabId,
        }
      ]"
      @click="onClick(tab)"
    >
      <span>{{ tab.i18n ? $t(tab.label) : tab.label }}</span>
    </div>
  </section>
</template>
<script setup>
const selectedTabId = defineModel({
  type: [String, Boolean, Number],
  default: null
})

/*
tabs: [
  {
    id: string,
    i18n: bool,
    label: string
  }
]
*/
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [] 
  },
  size: {
    type: String,
    default: 'normal' // small
  }
})

const onClick = (tab) => {
  selectedTabId.value = tab.id
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

.tab-container {
  display: flex;

  .tab-item {
    padding: 7.5px 12px;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      border-radius: 8px;
      background-color: palette.$pale-grey-two;
    }

    span {
      @include mixins.custom-font--400;
      font-size: 14px;
      color: palette.$black;
    }

    &__selected {
      border-radius: 8px;
      background-color: #575C63;

      span {
        @include mixins.custom-font--600;
        color: #fff;
      }

      &:hover {
        background-color: #575C63;
      }
    }
  }
} 

.tab-container__small {
  display: flex;
  gap: 10px;

  .tab-item {
    padding: 4px 12px;
    cursor: pointer;
    border-radius: 10px;
    background-color: palette.$pale-grey-two;

    &:hover {
      border-radius: 10px;
      background-color: palette.$pale-grey;
    }

    span {
      @include mixins.custom-font--400;
      font-size: 15px;
      color: palette.$cool-grey;
    }

    &__selected {
      background-color: palette.$translation;

      span {
        @include mixins.custom-font--400;
        color: #fff;
      }

      &:hover {
        background-color: palette.$translation;
      }
    }
  }
} 
</style>