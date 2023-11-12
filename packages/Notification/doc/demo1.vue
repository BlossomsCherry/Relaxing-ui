<template>
  <r-space inline>
    <r-button plain @click="open1"> 自动关闭 </r-button>
    <r-button plain @click="open2"> 不会自动关闭 </r-button>
  </r-space>
</template>
<script lang="ts" setup>
import Notification from '../index'

const open1 = () => {
  Notification({
    title: 'Title',
    message: 'This is a message that does not automatically close'
  })
}

const open2 = () => {
  Notification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0
  })
}
</script>

<style lang="less" scoped></style>
