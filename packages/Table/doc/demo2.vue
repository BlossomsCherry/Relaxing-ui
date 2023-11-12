<template>
  <r-table :data="tableData" border></r-table>
</template>
<script setup lang="ts">
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

<style lang="less" scoped></style>
