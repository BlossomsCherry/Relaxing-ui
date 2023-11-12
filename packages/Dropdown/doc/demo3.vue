<template>
  <r-space inline :size="[0, 60]">
    <r-dropdown :options="options" title="hover唤醒" trigger="hover"></r-dropdown>
    <r-dropdown :options="options" title="click唤醒" trigger="click"></r-dropdown>
  </r-space>
</template>
<script setup lang="ts">
const options = [
  {
    label: '菜单1'
  },
  {
    label: '菜单2'
  },
  {
    label: '菜单3'
  },
  {
    label: '菜单4'
  },
  {
    label: '菜单5'
  }
]
</script>
