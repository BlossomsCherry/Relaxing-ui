<template>
  <r-space inline>
    <r-button type="primary" @click="moduleShow = true">Open</r-button>
    <r-button type="primary" @click="moduleShow2 = true"> with footer</r-button>
  </r-space>

  <r-drawer v-model="moduleShow" :before-close="handleClose" title="I am the title">
    <span>Hi, there!</span>
  </r-drawer>

  <r-drawer v-model="moduleShow2">
    <template #header>
      <h4>set title by slot</h4>
    </template>

    <template #default>
      <span>Hi, there!</span>
    </template>

    <template #footer>
      <div style="flex: auto">
        <r-button @click="cancelClick" style="margin-right: 10px">Cancel</r-button>
        <r-button @click="confirmClick" type="primary">Confirm</r-button>
      </div>
    </template>
  </r-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Confirm from '../../Confirm/index'

const moduleShow = ref(false)
const moduleShow2 = ref(false)

const handleClose = () => {
  Confirm({
    text: 'Are you sure to close this dialog?'
  })
    .then(() => {
      moduleShow.value = false
    })
    .catch()
}

const cancelClick = () => {
  moduleShow2.value = false
}

const confirmClick = () => {
  Confirm({
    text: 'Are you sure to close this drawer?'
  })
    .then(() => {
      moduleShow2.value = false
    })
    .catch()
}
</script>
