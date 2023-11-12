<template>
  <r-input v-model="value1" placeholder="Please input" show-password></r-input>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
</script>
