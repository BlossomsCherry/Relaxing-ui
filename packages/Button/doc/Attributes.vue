<template>
  <r-table :data="options"></r-table>
</template>
<script setup lang="ts">
const options = [
  {
    属性名: 'size',
    说明: '尺寸',
    类型: 'enum',
    默认值: '—'
  },
  {
    属性名: 'type',
    说明: '类型',
    类型: 'enum',
    默认值: '—'
  },
  {
    属性名: 'round',
    说明: '	是否为圆角按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    属性名: 'loading',
    说明: '是否为加载中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    属性名: 'disabled',
    说明: '按钮是否为禁用状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    属性名: 'customColor ',
    说明: '自定义按钮颜色',
    类型: 'string',
    默认值: '—'
  }
]
</script>

<style lang="less" scoped></style>
