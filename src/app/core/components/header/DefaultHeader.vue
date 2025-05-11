
<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="header-fold">
          <NormalButton
            :width="32"
            :height="32"
            type="icon"
            class="icon-default"
            @click="onClickFoldFlag"
          >
            <template #icon>
              <Icon 
                icon-type="line-three"
                :colors="foldFlag ? ['#B3B7BF'] : ['#213A8F']"
                :width="24"
                :height="24"
              />
            </template>
          </NormalButton>
        </div>
        <div
          class="header-logo"
          @click="onClickLogo"
        >
          <span>
            WT Blog
          </span>
        </div>
      </div>

      <div class="user-box">
        <!-- locale -->
        <LocaleDropdown />
      </div>
    </div>
  </header>
</template>

<script setup>
import NormalButton from '@ui/button/NormalButton.vue'
import LocaleDropdown from '@ui/form/LocaleDropdown.vue'
import Icon from '@ui/icon/Icon.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const foldFlag = defineModel({
  type: Boolean,
  default: false
})
 
const onClickLogo = () => {
  router.push("/")
}

const onClickFoldFlag =  () => {
  foldFlag.value = !foldFlag.value
}

</script>

<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/variables.scss' as variables;
@use '@style/mixins.scss' as mixins;
@use '@style/common.scss' as common;

.header {
  width: 100%;
  // min-width: 1280px;
  height: variables.$header-height;
  top: 0;
  position: fixed;
  z-index: 9999;
  background-color: #fff; //$pale-grey-two;
  border-bottom: 1px solid palette.$silver;
  box-sizing: border-box;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);

  &-fold {
    margin: 0 8px 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-container {
    height: 100%;
    margin-right: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-left {
    display: flex;
    align-items: center;
    min-width: 500px;
    gap: 6px;
  }

  &-logo {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 5px;
    cursor: pointer;
  
    span {
      display: inline-block;
      margin-bottom: 5.5px;
      @include mixins.custom-font--bold;
      font-size: 16px;
      color: palette.$darkish-blue;
    }
  }
}

.user-box {
  display: flex;
  align-items: center;
  justify-content: end;
  // min-width: 500px;
  gap: 32px;

  .profile {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.icon-default {
  cursor: default;
}

.project-name {
  @include mixins.custom-font--bold;
  display: inline-block;
  margin-left: 100px;
  font-size: 20px;
  color: rgb(9, 136, 221) !important;
}
</style>