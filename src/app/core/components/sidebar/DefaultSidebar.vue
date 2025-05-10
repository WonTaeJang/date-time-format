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
    <section v-if="props.isFolded">
      <!--  -->
    </section>
    <section v-else>
      <!--  -->
      ddd
    </section>
  </article>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  isFolded: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const router = useRouter()
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