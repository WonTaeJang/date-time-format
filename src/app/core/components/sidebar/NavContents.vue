<template>
  <section v-if="props.isFolded">
    <!--  -->
  </section>
  <section v-else>
    <div
      :class="[
        'nav-box',
        {
          'nav-box--children': props.children,
          'nav-box--selected': isSelected
        }
      ]"
      @click="onClickNav"
    >
      <span
        v-if="props.children"
      >
        -
      </span>
      <span>
        {{ $t(nav.label) }}
      </span>
    </div>
    <div
      v-for="(item, idx) of nav.children"
      :key="idx"
    >
      <NavContents 
        :nav="item"
        :is-folded="props.isFolded"
        children
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import NavContents from './NavContents.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  // console.log(route.path)
})

const props = defineProps({
  isFolded: {
    type: Boolean,
    default: false
  },
  nav: {
    type: Object,
    default: null
  },
  children: {
    type: Boolean,
    default: false
  }
})

const isSelected = computed(() => {
  return route.path === props.nav.path
})

const onClickNav = () => {
  router.push(props.nav.path)
}
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.nav-box {
  @include mixins.custom-font--500;
  font-size: 16px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: palette.$pale-grey;
  }

  &--children {
    font-size: 13px;
    color: palette.$battleship-grey;
  }

  &--selected {
    border-radius: 8px;
    background-color: palette.$green !important;
    color: #fff !important;
  }
}
</style>