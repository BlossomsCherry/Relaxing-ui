<script lang="ts" setup>
import { defineProps, computed } from 'vue'

defineOptions({
  name: 'rSpace'
})

interface spaceProps {
  inline?: boolean
  size?: Array<number>
}

const props = withDefaults(defineProps<spaceProps>(), {
  inline: false,
  size: () => [10, 10]
})

const styles: any = computed(() => {
  return {
    display: props.inline ? 'inline-flex' : 'flex',
    margin: `${props.size[0] / 2}px 0px`,
    gap: `${props.size[1]}px`,
    flexDirection: props.inline ? 'inherit' : 'column',
    flexWrap: 'wrap',
    width: props.inline ? '100%' : 'fit-content'
  }
})
</script>

<template>
  <div class="r-space" :style="styles" ref="spaceRef">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped></style>
