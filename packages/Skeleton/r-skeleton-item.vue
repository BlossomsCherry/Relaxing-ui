<script lang="ts" setup>
defineOptions({
  name: 'rSkeletonItem'
})

interface skeletonItemProps {
  variant?: 'p' | 'text' | 'image' | 'circle'
}

withDefaults(defineProps<skeletonItemProps>(), {
  variant: 'p'
})
</script>

<template>
  <div :class="['r-skeleton-item', `r-skeleton-${variant}`]">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.r-skeleton-item {
  display: inline-block;
  width: 100%;
  height: 16px;
  margin-top: 16px;
  background-color: #f0f2f5;
  border-radius: 4px;
}

.r-skeleton-circle {
  width: var(--r-skeleton-circle-size);
  height: var(--r-skeleton-circle-size);
  line-height: var(--r-skeleton-circle-size);
  border-radius: 50%;
}

.r-skeleton-image {
  display: flex;
  width: 240px;
  height: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.r-skeleton-text {
  width: 100%;
  height: 13px;
}
</style>
