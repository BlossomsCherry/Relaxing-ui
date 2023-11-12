<template>
  <r-space inline>
    <r-switch v-model="value1"></r-switch>
    <r-switch v-model="value2" onColor="#13ce66" closeColor="#ff4949"></r-switch>
  </r-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>

<style lang="less" scoped></style>
