<template>
  <r-space inline>
    <r-button plain @click="open1"> success </r-button>
    <r-button plain @click="open2"> warning </r-button>
    <r-button plain @click="open3"> info </r-button>
    <r-button plain @click="open4"> error </r-button>
  </r-space>
</template>
<script lang="ts" setup>
import Notification from '../index'

const open1 = () => {
  Notification({
    title: 'Title',
    message: 'This is a success message',
    type: 'success'
  })
}

const open2 = () => {
  Notification({
    title: 'Prompt',
    message: 'This is a warning message',
    type: 'warn'
  })
}

const open3 = () => {
  Notification({
    title: 'Info',
    message: 'This is a info message',
    type: 'info'
  })
}

const open4 = () => {
  Notification({
    title: 'error',
    message: 'This is a error message',
    type: 'error'
  })
}
</script>

<style lang="less" scoped></style>
