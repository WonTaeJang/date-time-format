<template>
  <div 
    ref="previewRef"
    class="preview-container"
  >
    <div
      ref="htmlRef"
      class="preview-html-2"

      v-html="htmlValue"
    >
    </div>
  </div>
</template>
<script setup>
import { useFileEditorStore } from '@store/file-editor'
import { ref, watch } from 'vue'
import { useScroll, useElementSize  } from '@vueuse/core'

defineProps({
  htmlValue: {
    type: [null, String],
    default: null
  }
})
const fileEditorStore = useFileEditorStore()
const previewRef = ref(null)
const htmlRef = ref(null)

const { y:scrollTop } = useScroll(previewRef)
const { height } = useElementSize(htmlRef)

// preview scroll 제어
watch(() => fileEditorStore.scrollPercentage, (pct) => {
  scrollTop.value = (height.value * pct).toFixed(1)

})

</script>
<style lang="scss">
.preview-container {
  // height: 100%;
  overflow-y: scroll;
}

.preview-html-2 {
  padding: 10px 20px;

  h1 {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.14;
    margin-bottom: 12px;

    &:nth-child(1) {
      font-size: 24px;
      font-weight: bold;
      color: #002c83;
      padding: 0;
      margin: 0;
      line-height: 1.33;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 800;
    line-height: 1.14;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
  }

  ul li {
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  ul > li {
    font-size: 12px;
    line-height: 1.67;
    margin-bottom: 8px;
  }

  ul > li > p {
    padding-left: 10px;
  }

  ol {
    // list-style: none;
  }

  ol > li {
    font-size: 12px;
    line-height: 1.67;
    margin-bottom: 8px;
  }

  a {
    // text-decoration: none;
    // color: black;
    text-decoration: underline;
    color: blue;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    line-height: 1.67;
    margin-bottom: 8px;
  }

  strong {
    font-weight: 800;
    line-height: 1.29;
  }

  table {
    width: 100%;
    margin-bottom: 12px;
    table-layout: fixed;
  }

  table thead tr {
    height: 28px;
    line-height: 28px;
  }

  table th {
    background-color: #002c83;
    color: #fff;
    font-size: 12px;
    padding: 4px 0;
  }

  tr { 
    height: 28px; 
  }

  td {
    font-size: 12px;
    color: #2f3743;
    text-align: left;
    word-break: break-all;
    vertical-align: middle;
    line-height: 1.43;
    padding: 4px;
  }
}
</style>