<template>
  <r-button @click="moduleShow = true">Open Dialog with customized header</r-button>
  <r-dialog v-model="moduleShow" :show-close="false">
    <template #header="{ close, titleClass }">
      <div class="my-header">
        <h4 :id="titleClass">This is a custom header!</h4>
        <r-button type="danger" @click="close" leftIcon="m-icon-close"> Close </r-button>
      </div>
    </template>
    This is dialog content.
  </r-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const moduleShow = ref(false)
</script>

<style lang="less" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
