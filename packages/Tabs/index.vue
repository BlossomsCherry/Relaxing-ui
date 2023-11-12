<script lang="ts" setup>
import { defineProps, useSlots, provide, ref, computed } from 'vue'
import tabsNav from './tab-nav.vue'

defineOptions({ name: 'rTabs' })

interface TabProps {
  modelValue: string | number
  activeName?: string | number
  icon?: string
  type?: string
  closeable?: boolean
  addable?: boolean
}

const emits = defineEmits<{
  'update:activeName': [value: string | number]
  'update:modelValue': [value: string | number]
}>()

const props = withDefaults(defineProps<TabProps>(), {
  modelValue: 'first',
  activeName: 'first'
})

const slots = useSlots()
const currentIndex = ref(
  localStorage.getItem('currentIndex') ? Number(localStorage.getItem('currentIndex')) : 0
)

// 判断是插槽是否有内容
const panes = ref(slots.default ? slots.default() : [])

// console.log(panes.value)

const currentTab = computed(() => {
  // 先查看本地存储的数据来确定初始的tab页
  const currentPane = panes.value[currentIndex.value]
  if (currentPane && currentPane.props && currentPane.props.name) {
    return currentPane.props.name
  } else {
    return props.modelValue // 或者提供其他默认值
  }
})

// 传递给子组件
provide('tabsContent', {
  emits,
  currentTab,
  props
})

/**
 * 渲染tab页
 * @param index 当前tab页的索引
 * @param activeName tab页的唯一标识
 */
const onTabClick: (index: number, activeName: string | number) => void = (index, activeName) => {
  currentIndex.value = index

  emits('update:modelValue', activeName)
  emits('update:activeName', activeName)
}
</script>

<template>
  <div :class="['r-tabs', type]">
    <!-- nav区域 -->
    <tabs-nav
      :panes="panes"
      @activeClick="onTabClick"
      :type="type"
      :closeable="closeable"
      :addable="addable"
      :icon="icon"
    ></tabs-nav>

    <!-- 内容区域 -->
    <div class="tabs_content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.r-tabs {
  .tabs_content {
    margin-top: 15px;
    padding: 32px;
    font-size: 32px;
    font-weight: 600;
    color: #6b778c;
  }
  &.border-card {
    border: 1px solid #ccc;
    .tabs_content {
      padding: 15px;
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>
