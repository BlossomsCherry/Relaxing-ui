<template>
  <r-button type="primary" style="margin-left: 16px" @click="drawer = true"> open </r-button>

  <r-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </r-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>
