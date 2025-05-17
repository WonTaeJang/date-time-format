<template>
  <section class="input-container">
    <div class="title-box">
      <input
        v-if="props.checkbox"
        v-model="check"
        type="checkbox"
      >

      <span>
        {{ props.title }}
      </span>
    </div>

    <div
      v-if="check"
      class="contents-box"
    >
      <slot></slot>
    </div>
  </section>
</template>
<script setup>
const check = defineModel({
  type: Boolean,
  default: true
})

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  checkbox: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
@use '@style/palette.scss' as palette;
@use '@style/mixins.scss' as mixins;

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  min-height: 28px;
  gap: 10px;

  .title-box {
    display: flex;
    gap: 4px;
    width: 190px;
    min-width: 190px;

    span {
      @include mixins.custom-font--bold;
      color: palette.$black;
      font-size: 16px;
    }
  }

  .contents-box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }


  input[type="checkbox"] {
    border: 2px solid red;
  }
}
</style>