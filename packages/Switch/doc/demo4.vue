<template>
  <r-space inline>
    <r-switch v-model="value1" closeText="关闭" onText="开启" textAlign="left"></r-switch>
    <r-switch v-model="value2" textAlign="right"></r-switch>
  </r-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>

<style lang="less" scoped></style>
