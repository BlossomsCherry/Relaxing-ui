<template>
  <r-space inline>
    <r-button text @click="table = true">Open Drawer with nested table</r-button>
    <!-- <r-button text @click="dialog = true">Open Drawer with nested form</r-button> -->
  </r-space>

  <r-drawer v-model="table" title="I have a nested table inside!" size="50%">
    <r-table :data="tableData"></r-table>
  </r-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const table = ref(false)
const tableData = [
  {
    Date: '2016-05-03',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-02',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-04',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-01',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
