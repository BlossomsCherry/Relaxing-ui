<template>
  <r-space>
    <r-input v-model="value1" placeholder="Please input" leftIcon="m-icon-search"></r-input>
    <r-input
      v-model="value2"
      placeholder="Please input"
      rightIcon="m-icon-search"
      clearable
    ></r-input>
  </r-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>
