<template>
  <section class="result-box">
    <div
      v-for="(item, idx) of historyList"
      :key="idx"
      class="result-item"
      @click="onClickCopy(item)"
    >
      <span>
        {{ `${historyList.length - idx}. ${item.before} -> ` }}
      </span>
      <span>
        {{ `${item.after}` }}
      </span>

      <Icon
        class="icon"
        icon-type="copy"
        :with="20"
        :height="20"
      />
    </div>
  </section>

  <input
    :id="uniqueId"
    v-model="copyValue"
    type="hidden"
  >
</template>

<script setup>
import Icon from '@ui/icon/Icon.vue'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useSnackbarStore } from "@store/snackbar"

const snackbarStore = useSnackbarStore()
const props = defineProps({
  history: {
    type: Array,
    default: () => []
  }
})

const uniqueId = `input-${Math.random().toString(36).substr(2, 9)}`
const historyList = ref([])
const copyValue = ref(null)

onMounted(() => {
  historyList.value = props.history
})

watch(() => props.history, () => {
  historyList.value = [...props.history]
  historyList.value.reverse()
}, {deep: true})

const onClickCopy = async (item) => {
  
  let copy = document.getElementById(uniqueId)
  copy.setAttribute('type', 'text')
  copyValue.value = item.after
  await nextTick()
  copy.select()
  try {
    document.execCommand('copy')
    snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-1'})
  } catch (err) {
    console.log(err)
    // 복사 실패
    snackbarStore.SET_SNACKBAR_DATA({type: 'clipboard-0'})
  }
  copy.setAttribute('type', 'hidden')
}
</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

.result-box {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid palette.$silver;
  background-color: palette.$pale-grey-two;
  box-sizing: border-box;
  max-height: 100px;
  overflow-y: scroll;
}

.result-item {
  display: flex;
  align-items: center;
  height: 24px;
  gap: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: palette.$pale-grey;
  }

  &:hover .icon {
    display: block;
  }

  .icon {
    display: none;
  }

  span {
    @include mixins.custom-font--500;
    color: palette.$black;
    font-size: 16px;
  }
}
</style>