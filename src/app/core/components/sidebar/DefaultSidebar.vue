<template>
  <article 
    :class="[
      'nav',
      {
        'nav-folded': props.isFolded,
        'nav-open': !props.isFolded,
      }
    ]"
  >
    <NavContents
      v-for="(nav, idx) of navigations"
      :key="idx"
      :nav="nav"
      :is-folded="props.isFolded"
    />
  </article>
</template>

<script setup>
import NavContents from './NavContents.vue'
const props = defineProps({
  isFolded: {
    type: Boolean,
    default: false
  }
})

const navigations = [
  {
    id: 'converter',
    label: 'nav.converter',
    path: '/converter',
    children: [
      {
        id: 'unix-time-stamp',
        label: 'convert.unixtimestamp',
        path: '/converter/unix-time-stamp',
      },
      {
        id: 'date-time-format',
        label: 'convert.datetimeFormat',
        path: '/converter/date-time-format',
      },
      {
        id: 'word-to-html',
        label: 'convert.word_to_html',
        path: '/converter/word-to-html',
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.nav {
  position: fixed;
  z-index: 1;
  top: variables.$header-height;
  left: 0;
  transition: width 0.3s ease;
  height: calc(100% - variables.$header-height);
  background-color: palette.$pale-grey-two;
  padding: 12px 5px 12px 12px;
  overflow-y: scroll;
  box-sizing: border-box;

  &-folded {
    width: variables.$nav-folded;
  }

  &-open {
    width: variables.$nav-wide;
  }
}
</style>