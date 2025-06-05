<template>
  <section class="default-layout">
    <!-- header -->
    <DefaultHeader
      v-model="isFolded"
    />

    <Teleport to="#snackbar">
      <SnackBar />
    </Teleport>

    <!-- side bar -->
    <DefaultSidebar
      :is-folded="isFolded"
    />

    <!-- page -->
    <section
      :class="[
        'page-container',
        {
          'page-container-folded': isFolded,
          'page-container-open': !isFolded
        }
      ]"
    >
      <article 
        :class="[
          'main-container',
          {
            'main-container-wide': isWide
          }
        ]"
      >
        <router-view />
      </article>
    </section>
  </section>
</template>

<script setup>
import DefaultHeader from '@ui/header/DefaultHeader.vue'
import DefaultSidebar from '@ui/sidebar/DefaultSidebar.vue'
import SnackBar from '@ui/snackbar/SnackBar.vue'
import { computed, ref } from 'vue'
import { useCoreStore } from '@store/core'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const coreStore = useCoreStore()
const { isFolded } = storeToRefs(coreStore)

const isWide = computed(() => {
  let wideFlag = false
  if (route.path === '/converter/word-to-html') {
    wideFlag = true
  }

  return wideFlag
})
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.default-layout {
  position: relative;
  background: #fff;
  width: 100%;
  height: 100vh;
  padding-top: variables.$header-height;

  .page-container {
    overflow-y: scroll;
    height: 100%;
    width: 100%;

    &-folded {
      padding-left: variables.$nav-folded;
    }

    &-open {
      padding-left: variables.$nav-wide;
    }
  }

  .main-container {
    min-width: 600px;
    max-width: 800px;
    overflow: hidden;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    overflow-x: auto;

    &-wide {
      max-width: 100% !important;
    }
  }
}
</style>