<template>
  <r-space inline>
    <r-button @click="add">Add Item</r-button>
    <r-button @click="onDelete">Delete Item</r-button>
  </r-space>
  <r-scrollbar maxHeight="400">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </r-scrollbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: var(--primary-color);
}
</style>
