<template>
  <r-tabs v-model="activeName" type="card">
    <r-tab-pane label="User" name="first">User</r-tab-pane>
    <r-tab-pane label="Config" name="second">Config</r-tab-pane>
    <r-tab-pane label="Role" name="third">Role</r-tab-pane>
    <r-tab-pane label="Task" name="fourth">Task</r-tab-pane>
  </r-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')
</script>

<style lang="less" scoped></style>
