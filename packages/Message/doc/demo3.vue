<template>
  <r-space inline>
    <r-button @click="messageOpen1">自定义Icon</r-button>
    <r-button @click="messageOpen2">5秒后消失</r-button>
  </r-space>
</template>
<script setup lang="ts">
import Message from '../index'

const messageOpen1 = () => {
  Message({
    message: '这是一个自定义图标',
    type: 'success',
    icon: 'm-icon-hide'
  })
}
const messageOpen2 = () => {
  Message({
    message: '5秒后自动消失',
    type: 'error',
    timeout: 5000
  })
}
</script>
