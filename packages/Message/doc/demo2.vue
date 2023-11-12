<template>
  <r-space inline>
    <r-button @click="messageOpen1">success</r-button>
    <r-button @click="messageOpen2">warn</r-button>
    <r-button @click="messageOpen3">error</r-button>
    <r-button @click="messageOpen4">info</r-button>
  </r-space>
</template>
<script setup lang="ts">
import Message from '../index'

const messageOpen1 = () => {
  Message({
    message: 'this is a success message.',
    type: 'success'
  })
}
const messageOpen2 = () => {
  Message({
    message: 'this is a warn message.',
    type: 'warn'
  })
}
const messageOpen3 = () => {
  Message({
    message: 'this is a error message.',
    type: 'error'
  })
}
const messageOpen4 = () => {
  Message({
    message: 'this is a message.',
    type: 'info'
  })
}
</script>
