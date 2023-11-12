<template>
  <r-table :data="tableData" :row-class-name="tableRowClassName"></r-table>
</template>
<script lang="ts" setup>
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

const tableRowClassName = tableData.map((item, rowIndex) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
})
</script>
