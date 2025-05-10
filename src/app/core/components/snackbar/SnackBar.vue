<template>
  <div 
    :class="[
      'snackbar', 
      display
    ]"
  >
    <span>{{ snackText }}</span>
  </div>
</template>

<script setup>
import { useSnackbarStore } from "@store/snackbar"
import { computed, ref, watch } from "vue"
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const snackbarStore = useSnackbarStore()
const snackText = ref(null)
const isShow = ref(null)

const snackbarState = computed(() => {
  return snackbarStore.GET_SNACKBAR_STATE
})

let timeoutID = null

const display = computed(() => {
  if (isShow.value === null) {
    return ''
  } else {
    return isShow.value ? 'show' : 'hide'
  } 
})

watch(snackbarState, () => {
  if (snackbarState.value) {
    showSnackbar ()
  }
})

function showSnackbar () {
  let data = snackbarStore.GET_SNACKBAR_DATA

  if (data) {
    if (data.type === 'custom') {
      snackText.value = data.text
    } else {
      snackText.value = getSnackForm(data.type, data.arr)
    }

    isShow.value = true

    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      isShow.value = false
    }, 2000)
  }
}

function getSnackForm (type, args) {
  let result = ''

  switch (type) {
    case 'feedback-0' :
      result = t('err.snackbar__026') // 전송 실패
      break
    case 'feedback-1' :
      result = t('err.snackbar__027') // 전송 성공
      break
    case 'feedback-2' : 
      result = t('err.snackbar__042') // 수정 요청 실패하였습니다.
      break
    case 'feedback-3' : 
      result = t('err.snackbar__043') // 저장 되었습니다.
      break
    case 'feedback-4' : 
      result = t('err.snackbar__001') // 다운로드 실패
      break
    case 'feedback-5' : 
      result = t('err.snackbar__002') // 다운로드 성공
      break
    case 'merge-0' : 
      result = t('err.snackbar__003') // 머지 성공.
      break
    case 'merge-1' : 
      result = t('err.snackbar__004') // 머지 실패.
      break
    case 'req-error-0': 
      result = t('err.snackbar__005') // 요청 실패
      break
    case 'req-error-1': 
      result = t('err.snackbar__010') // 비활성화 기능
      break
    case 'req-update-0':
      result = t('err.snackbar__006') // 수정되었습니다.
      break
    case 'clipboard-0' : 
      result = t('err.snackbar__014') // 클립보드에 복사 실패하였습니다.
      break
    case 'clipboard-1' : 
      result = t('err.snackbar__015') // 클립보드에 복사 되었습니다.
      break
    case 'req-create-0' : 
      result = t('err.snackbar__008')
      break
    case 'auth-error-0': 
      result = t('err.snackbar__009') // 수정 권한 없음
      break
    case 'git-error-0':
      result = t('err.snackbar__011') // Aleady Started
      break
    case 'file-error-0':
      result = t('err.snackbar__012') // 파일용량 초과
      break
    case 'file-error-1':
      result = t('err.snackbar__013') // 허용되는 파일 형식은 docx 입니다.
      break
  }

  return result
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.snackbar {
  padding: 16px;
  visibility: hidden;
  position: fixed;
  z-index: 99999;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%,-50%); 
  min-width: 400px;
  border-radius: 12px;
  background: rgba(25, 28, 34, 0.5);

  span {
    @include mixins.custom-font--600;
    font-size: 14px;
    color: white;
  }
}

.show {
  visibility: visible;
  animation: fadein 0.5s;
}
.hide {
  visibility: visible;
  animation: fadeout 0.5s;
  animation-fill-mode: forwards;  // 애니메이션 마지막 동작을 유지한다.
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 40px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 40px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 40px; opacity: 1;}
  to {bottom: 0; opacity: 0; z-index: 0;}
}

@keyframes fadeout {
  from {bottom: 40px; opacity: 1;}
  to {bottom: 0; opacity: 0; z-index: 0;}
}

</style>