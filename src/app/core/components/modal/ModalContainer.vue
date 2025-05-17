<template>
  <div
    class="modal-core-container"
  >
    <div
      ref="modalRef"
      class="modal"
      :style="modalSize"
      @click.stop
      @dblclick.stop
    >
      <!-- header -->
      <slot name="header"></slot>

      <!-- content scroll y -->
      <div 
        :class="['content']"
      >
        <slot name="content"></slot>
      </div>

      <!-- footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 0
  }, 
  preventClose: {
    type: Boolean,
    default: false
  },
  paddingControl: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 9999
  }
})

const emit = defineEmits(['close', 'enter'])
const modalRef = ref(null)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  if (props.paddingControl && checkScroll()) {
    document.body.style.paddingRight = '16px'
  }

  initComponent()

  document.addEventListener('keydown', handleKeyDown, false)
})

onBeforeUnmount(() => {
  if (firstChildCheck()) {
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  document.removeEventListener('keydown', handleKeyDown, false)
})

const modalSize = computed(() => {
  const styleObj = {}

  if (props.width) {
    Object.assign(styleObj, { width: `${props.width}px` })
  }
  
  return styleObj
})

const componentIndex = ref(null)
const initComponent = () => {
  const elements = document.querySelectorAll('.modal-core-container')

  componentIndex.value = elements.length
}

const firstChildCheck = () => {
  return componentIndex.value === 1
}

const lastChildCheck = () => {
  const elements = document.querySelectorAll('.modal-core-container')

  return elements.length === componentIndex.value
} 

const handleKeyDown = (e) => {
  if (props.preventClose) return

  if (lastChildCheck()) {
    if (e.key === 'Escape') {
      emit('close')
    }
  
    if (e.key === 'Enter') {
      emit('enter')
    }
  }

}

const checkScroll = () => {
  return document.documentElement.scrollHeight > document.documentElement.clientHeight
}

</script>

<style lang="scss" scoped>
.modal-core-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  
  .modal {
    max-height: 95%;
    padding: 40px;
    overflow-y: auto;
    background: white;
    box-shadow: 0px 40px 120px rgba(2, 55, 147, 0.16);
    border-radius: 16px;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .content {
      flex: 1;
      // min-height: 100px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}

</style>