<template>
  <r-tabs v-model="activeName" closeable addable>
    <r-tab-pane label="Config" name="1">Config</r-tab-pane>
    <r-tab-pane label="Config" name="2">Config</r-tab-pane>
    <r-tab-pane label="Config" name="3">Config</r-tab-pane>
  </r-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')
// const TabList = ref([
//   {
//     title: 'Tab 1',
//     name: '1',
//     content: 'Tab 1 content'
//   },
//   {
//     title: 'Tab 2',
//     name: '2',
//     content: 'Tab 2 content'
//   },
//   {
//     title: 'Tab 3',
//     name: '3',
//     content: 'Tab 3 content'
//   }
// ])
</script>

<style lang="less" scoped></style>
