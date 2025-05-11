<template>
  <div class="dropdown">
    <div
      ref="dropdownRef"
      :class="[
        'dropdown-wrap',
        {'dropdown-wrap--focus' : isFocus}
      ]"
      @click="onClick"
    >
      <span>{{ selectedLanguage.label }}</span>
      <Icon
        :icon-type="'chevron-down'"
        :width="20"
        :height="20"
      />
    </div>
    <div
      v-if="isFocus"
      class="dropdown-list"
    >
      <div
        v-for="(item, itemIndex) of languageList"
        :key="`dropdown-item-${itemIndex}`"
        :class="[
          'dropdown-item',
          {
            'dropdown-item__selected': item.id === locale
          }
        ]"
        @click="onClickItem(item)"
      >
        <span>
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from '@ui/icon/Icon.vue'
import { onClickOutside } from '@vueuse/core'
import { onBeforeMount, ref } from 'vue'
import { useUserStore } from '@store/user'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

const dropdownRef = ref(null)
const userStore = useUserStore()
const isFocus = ref(false)
const selectedLanguage = ref(null)
const languageList = [
  {
    id: 'en_US',
    label: 'English'
  },
  {
    id: 'ko_KR',
    label: '한국어'
  }
]

onBeforeMount(() => {
  init ()
})

onClickOutside(dropdownRef, () => {
  if (isFocus.value) {
    close ()
  }
})

const init = () => {
  if (userStore.userLocale) {
    selectedLanguage.value = languageList.find(el => el.id === userStore.userLocale) 
  } else {
    selectedLanguage.value = languageList[0]
  }
}

const applyLocale = () => {
  locale.value = selectedLanguage.value.id

  history.go(0)
}

const onClick = () => {
  isFocus.value = true
}

const onClickItem = (item) => {
  if (item.id !== locale.value) {
    userStore.userLocale = item.id
    init ()
    applyLocale ()
  }
  close ()
}

const close = () => {
  isFocus.value = false
}

</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;
@use '@style/variables.scss' as variables;

.dropdown {
  &-wrap {
    height: 32px;
    width: 160px;
    border-radius: 8px;
    border: solid 1px palette.$silver;
    position: relative;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 4px 0 8px;

    span {
      @include mixins.custom-font--normal;
      font-size: 15px;
      color: palette.$black;
    }

    &:hover {
      background-color: #f8f8f8;
    }

    &--focus {
      border: solid 1px palette.$translation;

      span {
        color: #023894;
      }
    }
  }

  &-list {
    position: absolute;
    box-sizing: border-box;
    // top: 100%; 
    width: 160px;
    background-color: #fff;
    border-radius: 8px;
    border: solid 1px #e3e5e8;
    box-shadow: 0 4px 16px #0000000f;
    overflow: hidden;
  }

  &-item {
    height: 32px;
    display: flex;
    box-sizing: border-box;
    padding: 8px;
    align-items: center;
    cursor: pointer;

    span {
      @include mixins.custom-font--normal;
      font-size: 15px;
      color: palette.$black;
    }

    &:hover {
      background-color: #f8f8f8;
    }

    &__selected {
      span {
        @include mixins.custom-font--bold;
        color: palette.$translation !important;
      }
    }
  }
}
</style>