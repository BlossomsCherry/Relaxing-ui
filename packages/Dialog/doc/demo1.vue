<template>
  <r-button type="primary" @click="moduleShow = true"> 打开对话框</r-button>
  <r-Dialog v-model="moduleShow" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span>
        <r-button style="margin-right: 10px" @click="moduleShow = false">Cancel</r-button>
        <r-button type="primary" @click="moduleShow = false">Confirm</r-button>
      </span>
    </template>
  </r-Dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Confirm from '../../Confirm/index'

const moduleShow = ref(false)

const handleClose = () => {
  Confirm({
    text: 'Are you sure to close this dialog?'
  })
    .then(() => {
      moduleShow.value = false
    })
    .catch()
}
</script>

<style lang="less" scoped></style>
