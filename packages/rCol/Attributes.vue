<script setup lang="ts">

interface IOption {
  属性名: string
  说明: string
  类型: string
  默认值: string
}
const options: IOption[] = [
  {
    属性名: 'span',
    说明: '栅格占据的列数',
    类型: 'number',
    默认值: '24'
  },
  {
    属性名: 'offset',
    说明: '栅格左侧的间隔格数',
    类型: 'number',
    默认值: '0'
  },
  {
    属性名: 'push',
    说明: '栅格向右移动格数',
    类型: 'number',
    默认值: '0'
  },
  {
    属性名: 'pull',
    说明: '栅格向左移动格数',
    类型: 'number',
    默认值: '0'
  }
]
</script>

<template>
  <r-table :data="options"></r-table>
</template>

<style lang="less" scoped></style>
