<template>
  <div class="input-file">
    <input
      id="file"
      ref="fileRef"
      multiple
      accept="application/*"
      type="file"
      @change="onChangeFile"
    >

    <div class="input-file-container">
      <div class="input-file-box">
        <div
          v-for="(file, index) in fileList"
          :key="`input-file-${index}`"
          class="input-file-item"
        >
          <!-- file icon -->
          <Icon
            :icon-type="fileType(file)"
            :width="24"
            :height="24"
          />

          <!-- file name -->
          <span
            class="file-name"
            :title="fileName(file)"
          >
            {{ fileName(file) }}
          </span>

          <!-- file size -->
          <span class="file-size">
            {{ dispalyFileSize(file) }}
          </span>
          <Icon
            icon-type="file-del"
            :width="24"
            :height="24"
            @click="onClickDelFile(file)"
          />
        </div>
      </div>
      <NormalButton
        :height="32"
        color="secondary"
        @click="onClickFindFile"
      >
        {{ $t('common.file__choose_file') }}
      </NormalButton>
    </div>
  </div>
</template>

<script setup>
import Icon from '@ui/icon/Icon.vue'
import NormalButton from '@ui/button/NormalButton.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useSnackbarStore } from "@store/snackbar"
import { MAX_FILE_SIZE } from '@/util/const'

const emit = defineEmits(['filesInfo'])

// File
const props = defineProps({
  files: {
    type: [Object, null],
    default: null
  }, 
  single: {
    type: Boolean,
    default: false
  }
})

const possibleExtension = [
  // 'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  // 'video'
]

const snackbarStore = useSnackbarStore()
const fileRef = ref(null)
const filesInfo = ref(null)
const fileCnt = ref(3)

onMounted(() => {
  if (props.single) {
    fileCnt.value = 1
  }
})

const fileList = computed(() => {
  if (filesInfo.value) {
    return filesInfo.value
  }

  return []
})

watch(() => props.files, () => {
  filesInfo.value = props.files
})

const fileType = (file) => {
  let type = null
  if (file instanceof File) {
    type = file.type
  } else {
    type = file.mime_type
  }

  if (type.includes('image')) {
    return 'img'
  }
  else if (type.includes('video')) {
    return 'video'
  }
  else {
    return 'file'
  }
}

const fileName = (file) => {
  let name = null

  if (file instanceof File) {
    name = file.name
  } else {
    name = file.file_name
  }

  return name
}

const onClickFindFile = () => {
  fileRef.value.value = null
  fileRef.value.click()
}

//only File 
const onChangeFile = (event) => {
  if (event.target.files.length === 0) {
    return
  }

  filesInfo.value = []

  for (const file of event.target.files) {
    if (calcFileSize(file) <= MAX_FILE_SIZE) {
      if (checkFileExtension(file)) {
        if (filesInfo.value.length < fileCnt.value) {
          filesInfo.value.push(file)
        }
      } else {
        snackbarStore.SET_SNACKBAR_DATA({type: 'file-error-1'})
      }
    } else {
      snackbarStore.SET_SNACKBAR_DATA({type: 'file-error-0'})
    }
  }

  emit('filesInfo', filesInfo.value)
}

//only File 
const checkFileExtension = (file) => {
  let result = false

  // console.log(file)

  for (const ext of possibleExtension) {
    if (!result) {
      result =  file.type.includes(ext)
    }
  }

  return result
}

const calcFileSize = (file) => {
  let totalSize = 0

  if (file instanceof File) {
    totalSize += file.size
  } else {
    totalSize += file.file_size
  }

  return ((totalSize/1024)/1024).toFixed(1)
}

const dispalyFileSize = (file) => {
  let totalSize = 0

  if (file instanceof File) {
    totalSize += file.size
  } else {
    totalSize += file.file_size
  }

  if (totalSize/1024/1024 > 1) {
    return `${((totalSize/1024)/1024).toFixed(1)}MB`
  } else {
    return `${((totalSize/1024)).toFixed(2)}KB`
  }

}

const onClickDelFile = (file) => {
  if (file instanceof File) {
    filesInfo.value = filesInfo.value.filter((el) => {
      return file.name !== el.name
    })
  } else {
    filesInfo.value = filesInfo.value.filter((el) => {
      return file.file_name !== el.file_name
    })
  }


  emit('filesInfo', filesInfo.value)
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/variables.scss' as variables;
@use '@style/common.scss' as common;

.input-file {
  width: 100%;
  border: 1px solid #D3D3D6;
  border-radius: 4px;
  padding: 4px;
  box-sizing: border-box;

  input[type='file'] {
    display: none;
  }

  &-box {
    flex: 1;
  }

  &-item {
    display: flex;
    align-items: center;

    &:hover {
      cursor: default;
      border-radius: 4px;
      background-color: palette.$pale-grey;
    }

    .file-name {
      @include mixins.custom-font--normal;
      font-size: 12px;
      color: palette.$black;
      padding: 0 4px;
      display: inline-block;
      overflow: hidden; 
      white-space: nowrap; 
      text-overflow: ellipsis; 
      max-width: 380px;
    }

    .file-size {
      @include mixins.custom-font--normal;
      font-size: 10px;
      color: #bbb;
    }

  }

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
</style>