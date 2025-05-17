<template>
  <InputContainer
    v-model="checked"
    :title="title"
    checkbox
  >
    <TabContainer
      v-if="checked"
      v-model="selectedTab"
      :tabs="tabs"
      size="small"
    />
  </InputContainer>
</template>
<script setup>
import InputContainer from './InputContainer.vue'
import TabContainer from '@ui/tab/TabContainer.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

const checked = ref(true)
const selectedTab = ref(null)
const tabs = ref([])

const emit = defineEmits(['change'])
const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

onMounted(() => {
  init()
})

const title = computed(() => {
  if (props.item) {
    return props.item.i18n ? t(props.item.label) : props.item.label
  }

  return null
})

watch(selectedTab, () => {
  changeHandler()
})

watch(checked, () => {
  changeHandler()
})

const init = () => {
  selectedTab.value = props.item.type[0].id
  tabs.value = props.item.type

  changeHandler()
}

const changeHandler = () => {
  emit('change', {
    use: checked.value,
    id: props.item.id,
    value: selectedTab.value
  })
}

</script>
<style lang="scss" scoped>

</style>