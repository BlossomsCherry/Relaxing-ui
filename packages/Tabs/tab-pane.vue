<script lang="ts" setup>
import { getCurrentInstance, inject, computed } from 'vue'

defineOptions({
  name: 'rTabPane'
})

interface TabPaneProps {
  label?: string
  name?: string
  icon?: string
  closable?: boolean
  disabled?: boolean
  lazy?: boolean
}

defineProps<TabPaneProps>()

// 接受父组件传过来的数据
const tabsContent: any = inject('tabsContent')
const activeTab = computed(() => {
  return tabsContent.currentTab.value as string | number
})

// 获取当前组件实例信息
const instance = getCurrentInstance()
const tabName = instance ? instance.props.name : null
</script>

<template>
  <div class="tab_pane" v-show="activeTab === tabName">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped></style>
