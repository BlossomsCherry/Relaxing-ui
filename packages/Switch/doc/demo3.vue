<template>
  <r-switch v-model="value1" showText></r-switch>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
</script>

<style lang="less" scoped></style>
