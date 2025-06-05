<template>
  <PageContainer
    :is-loading="isLoading"
    title="convert.unixtimestamp"
    :i18n="true"
  >
    <div class="current-time">
      <CurrentDateTime
        type="unixtime"
      />

      <ConvertDateTime 
        type="unixToDate"
      />

      <CurrentDateTime 
        type="datetime"
      />

      <ConvertDateTime 
        type="dateToUnix"
      />
    </div>
  </PageContainer>
</template>
<script setup>
import CurrentDateTime from '../components/CurrentDateTime.vue'
import ConvertDateTime from '../components/ConvertDateTime.vue'
import PageContainer from '@ui/container/PageContainer.vue'
import { ref } from 'vue'

const isLoading = ref(false)

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.current-time {
  // width: 900px;
  margin: 40px auto;
  margin-bottom: 300px;
}
</style>