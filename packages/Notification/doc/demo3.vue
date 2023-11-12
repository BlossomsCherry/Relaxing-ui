<template>
  <r-space inline>
    <r-button plain @click="open1"> Top Right </r-button>
    <r-button plain @click="open2"> Bottom Right </r-button>
    <r-button plain @click="open3"> Bottom Left </r-button>
    <r-button plain @click="open4"> Top Left </r-button>
  </r-space>
</template>
<script lang="ts" setup>
import Notification from '../index'

const open1 = () => {
  Notification({
    title: 'Custom Position',
    message: "I'm at the top right corner"
  })
}

const open2 = () => {
  Notification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right'
  })
}

const open3 = () => {
  Notification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left'
  })
}

const open4 = () => {
  Notification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left'
  })
}
</script>

<style lang="less" scoped></style>
