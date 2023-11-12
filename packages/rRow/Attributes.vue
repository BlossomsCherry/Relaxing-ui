<template>
  <r-table :data="options"></r-table>
</template>
<script setup lang="ts">
const options = [
  {
    属性名: 'gutter',
    说明: '栅格间隔',
    类型: 'number',
    默认值: '0'
  },
  {
    属性名: 'justify',
    说明: 'flex 布局下的水平排列方式',
    类型: 'enum',
    默认值: 'start'
  },
  {
    属性名: 'align',
    说明: 'flex 布局下的垂直排列方式',
    类型: 'enum',
    默认值: '—'
  },
  {
    属性名: 'tag',
    说明: '自定义元素标签',
    类型: 'string',
    默认值: 'div'
  }
]
</script>

<style lang="less" scoped></style>
