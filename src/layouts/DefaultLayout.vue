<template>
  <section class="default-layout">
    <!-- header -->
    <DefaultHeader
      v-model="isFolded"
    />

    <!-- page -->
    <section class="page-container">
      <!-- side bar -->
      <DefaultSidebar
        :is-folded="isFolded"
      />

      <article class="main-container">
        <router-view />
      </article>
    </section>
  </section>
</template>

<script setup>
import DefaultHeader from '@ui/header/DefaultHeader.vue'
import DefaultSidebar from '@ui/sidebar/DefaultSidebar.vue'
import { ref } from 'vue'
import { useCoreStore } from '@store/core'
import { storeToRefs } from 'pinia'
const coreStore = useCoreStore()
const { isFolded } = storeToRefs(coreStore)

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.default-layout {
  background: #fff;
  width: 100%;
  height: 100vh;
  padding-top: variables.$header-height;
  

  .page-container {
    height: 100%;
    display: flex;
  }

  .main-container {
    flex: 1;
  }
}
</style>