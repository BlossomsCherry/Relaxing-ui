<template>
  <r-button @click="moduleShow = true">Click to open the Dialog</r-button>
  <r-dialog v-model="moduleShow" title="Warning" width="30%" center>
    <template #footer>
      <span class="dialog-footer">
        <r-button @click="moduleShow = false">Cancel</r-button>
        <r-button type="primary" @click="moduleShow = false"> Confirm </r-button>
      </span>
    </template>
  </r-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const moduleShow = ref(false)
</script>

<style lang="less" scoped>
.dialog-footer button:first-child {
  margin-right: 20px;
}
</style>
