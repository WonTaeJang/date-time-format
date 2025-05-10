<template>
  <section>
    <header>
      <span>{{ i18n ? $t(title) : title }}</span>
    </header>

    <slot></slot>
  </section>

  <teleport to="#loading">
    <Loading 
      v-if="isLoading"
      gif
    />
  </teleport>
</template>
<script setup>
import Loading from '@ui/loading/Loading.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  i18n: {
    type: Boolean,
    default: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/variables.scss' as variables;
@use '@style/common.scss' as common;

section {
  // padding: 10px 0;
  position: relative;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    @include mixins.custom-font--bold;
    color: #0988DD;
    font-size: 20px;
  }
}
</style>