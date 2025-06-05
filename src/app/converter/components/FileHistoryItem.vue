<template>
  <div class="history-container">
    <div
      class="history-item"
      @click="onClickItem"
    >
      <span class="idx">
        {{ props.idx + 1 }}
      </span>
  
      <span class="name">
        {{ name }}
      </span>
  
      <span class="file">
        {{ fileSize }}
      </span>
  
      <span class="created-at">
        {{ createdAt }}
      </span>
    </div>
    <Icon
      icon-type="close"
      :width="24"
      :height="24"
      @click="onClickDelete"
    />
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import Icon from '@ui/icon/Icon.vue'
import dayjs from 'dayjs'

const emit = defineEmits(['click', 'delete'])
const props = defineProps({
  item: {
    type: Object,
    default: null
  },
  idx: {
    type: Number,
    default: 1
  }
})

const name = ref(null)
const fileSize = ref(null)
const createdAt = ref(null)

onMounted(() => {
  init()
})

watch(() => props.item, () => {
  init()
}, {deep: true})

const init = () => {
  if (props.item) {
    name.value = props.item.value.name
    fileSize.value = dispalyFileSize(props.item.value)
    createdAt.value = dayjs(props.item.key * 1000).format('YYYY-MM-DD HH:MM:ss')
  }
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

const onClickItem = () => {
  emit('click', [props.item.value])
}

const onClickDelete = () => {
  emit('delete', props.item.key)
}

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.history-container {
  width: 100%;
  border-bottom: 1px solid palette.$silver;
  display: flex;
  align-items: center;
}

.history-item {
  flex: 1;
  border-radius: 4px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: palette.$pale-grey-two;
  }

  .idx {
    display: inline-block;
    text-align: center;
    width: 20px;
  }

  .name {
    flex: 1;
  }

  .file {
    width: 100px;
  }

  .created-at {
    width: 160px;
    display: inline-block;
    text-align: end;
  }
}
</style>