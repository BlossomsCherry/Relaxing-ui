<template>
  <r-button type="primary" @click="openConfirm">Confirm Message</r-button>
</template>
<script lang="ts" setup>
import Confirm from '../index'
import Message from '../../Message/index'

const openConfirm = () => {
  Confirm({
    showIcon: true,
    text: 'Are you sure to delete this data?'
  })
    .then(() => {
      Message({ message: '点击了确定' })
    })
    .catch(() => {
      Message({ message: '点击了取消' })
    })
}
</script>
