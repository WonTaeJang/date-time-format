<template>
  <PageContainer
    :is-loading="isLoading"
    title="Word to HTML"
    :i18n="false"
  >
    <!-- 첨부파일 불러오기 -->
    <div class="file-input">
      <BaseFileInput
        :files="files"
        single
        @files-info="getFilesInfo"
      />
    </div>

    <textarea
      id="html_value"
      v-model="currentHtml"
      :style="{
        display: 'none'
      }"
    ></textarea>

    <!-- contents -->
    <div
      v-if="files && files.length > 0"
      ref="editContainerRef"
      class="file-contents"
    >
      <div class="nav-options">
        <IconButton 
          v-if="isHover"
          :size="'large'"
          icon="copy"
          :icon-size="24"
          :icon-colors="['#575c63']"
          @click="onClickHtmlCopy"
        />
      </div>

      <!-- html -->
      <div 
        ref="htmlRef"
        class="html-container"
      >
        <div 
          ref="editor"
          class="html-editor"
        ></div>
      </div>

      <!-- css editor -->
      <!-- on/off -->

      <!-- 
        file save 후 저장하기 
      -->

      <!-- preview -->
      <PreviewHtml 
        ref="previewRef"
        class="html-preview"
        :html-value="currentHtml"
      />
    </div>
    <div 
      v-else
      class="file-history"
    >
      <FileHistoryItem 
        v-for="(item, idx) in storedRows"
        :key="idx"
        :idx="idx"
        :item="item"
        @click="rederFileHandler($event)"
        @delete="deleteFile"
      />
    </div>
  </PageContainer>
</template>
<script setup>
// components
import IconButton from '@ui/button/IconButton.vue'
import PageContainer from '@ui/container/PageContainer.vue'
import BaseFileInput from '@ui/form/BaseFileInput.vue'
import PreviewHtml from '../components/PreviewHtml.vue'
import FileHistoryItem from '../components/FileHistoryItem.vue'

// docx
import mammoth from 'mammoth'

// prettier
import * as prettier from "https://unpkg.com/prettier@3.4.2/standalone.mjs"
import prettierPluginHtml from "https://unpkg.com/prettier@3.4.2/plugins/html.mjs"

// codemirror
import { EditorView, basicSetup } from 'codemirror'
import { html } from '@codemirror/lang-html'

// store
import { useUserStore } from '@store/user'
import { useSnackbarStore } from "@store/snackbar"
import { useFileEditorStore } from '@store/file-editor'

import { onMounted, ref, watch } from 'vue'
import { useElementHover, useScroll, useElementSize  } from '@vueuse/core'
import dayjs from 'dayjs'

// index db
import { saveToDB, getAllRows, deleteRow } from '@/util/file-db.js'

const userStore = useUserStore()
const snackbarStore = useSnackbarStore()
const fileEditorStore = useFileEditorStore()

const editor = ref(null)
const editorInstance = ref(null)
const currentHtml = ref('')

const isLoading = ref(false)
const files = ref(null)

const htmlRef = ref(null)
const editContainerRef = ref(null)
const isHover = useElementHover(editContainerRef)

const { y:scrollTop } = useScroll(htmlRef)
const { height:scrollHeight } = useElementSize(editor)
const { height:clientHeight} = useElementSize(htmlRef)

// indexedDB 
const storedRows = ref([])

onMounted(async () => {
  if (userStore.isAdmin) {
    init()
    await loadFileDB()
  }
})

watch(scrollTop, () => {
  scrollYPecentage()
})

const getHtml = () => {
  currentHtml.value = editorInstance.value.state.doc.toString()
}

const init = () => {
  try {
    isLoading.value = true
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const loadFileDB = async () => {
  const storedData = await getAllRows()

  if (storedData.length > 0) {
    storedRows.value = storedData.reverse()
  } else {
    storedRows.value = []
  }
}

const deleteFile = async ($event) => {
  try {
    isLoading.value = true
    await deleteRow($event)
    await loadFileDB()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const getFilesInfo = async ($event) => {
  try {
    isLoading.value = true
    
    if ($event && $event.length > 0) {
      await saveToDB(dayjs().unix(), $event[0])
      await loadFileDB()
    }
    
    await rederFileHandler($event)

  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const rederFileHandler = async ($event) => {
  files.value = $event
  fileEditorStore.scrollPercentage = 0 // scroll reset

  try {
    if (files.value && files.value.length > 0) {
      let aBuffer = files.value[0].arrayBuffer()
      let { value } = await mammoth.convertToHtml({arrayBuffer: aBuffer})

      if (value) {
        let prettierValue = await prettier.format(value, {
          parser: "html",
          plugins: [prettierPluginHtml],
        })

        if (editorInstance.value) {
          editorInstance.value.destroy()
        }

        editorInstance.value = new EditorView({
          doc: prettierValue,
          extensions: [
            basicSetup, // 기본 확장
            html(), // HTML 문법 하이라이팅
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                // 사용자가 내용을 수정했을 때 감지
                currentHtml.value = update.state.doc.toString() // 현재 에디터 내용을 업데이트
              }
            }),
          ],
          parent: editor.value,
        })

        getHtml()
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const onClickHtmlCopy = () => {
  if (currentHtml.value) {
    const copyText = document.querySelector("#html_value")
    copyText.style.display = 'block'
    copyText.select()

    try {
      document.execCommand('copy')
      snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-1'})
    } catch (err) {
      // 복사 실패
      snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-0'})
    }
    copyText.style.display = 'none'
  }
}

// 0.xx
const scrollYPecentage = () => {
  let scrollPercentage = (scrollTop.value / (scrollHeight.value - clientHeight.value)).toFixed(2)
  fileEditorStore.scrollPercentage = scrollPercentage
}

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.file-input {
  margin-bottom: 20px;
}

.nav-options {
  position: absolute;
  left: calc(50% - 20px - 24px - 20px);
  z-index: 1;
  top: 10px;
}

.file-contents {
  position: relative;
  display: flex;
  width: 100%;
  gap: 20px;
  height: calc(100vh - 180px);
  min-height: 300px;
}

.file-history {
  
}

.html {
  &-container {
    flex: 1;
    border: 1px solid palette.$silver; 
    border-radius: 4px;
    overflow: hidden;
    overflow-y: scroll;
  }

  &-preview {
    flex: 1;
    border: 1px solid palette.$silver; 
    border-radius: 4px;
  }
}
</style>