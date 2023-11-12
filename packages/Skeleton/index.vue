<template>
  <div class="r-skeleton" :class="{ 'is-animated': animated }">
    <slot name="template">
      <r-skeleton-item
        v-for="(item, index) in rows + 1"
        :key="index"
        :class="[{ 'is-first': index === 0 }, { 'is-last': index === rows }]"
        :variant="variant"
      />
    </slot>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'rSkeleton'
})

interface skeletonProps {
  variant?: string
  rows?: number
  animated?: boolean
}

withDefaults(defineProps<skeletonProps>(), {
  rows: 3
})
</script>

<style lang="less" scoped>
.r-skeleton {
  width: 100%;

  .is-first {
    width: 33%;
  }
  .is-last {
    width: 61%;
  }
}

.is-animated {
  .r-skeleton-item {
    animation: plus-bg 1.4s ease infinite;
  }

  @keyframes plus-bg {
    0% {
      background-color: #f0f2f5;
    }

    50% {
      background-color: #e6e8eb;
    }

    100% {
      background-color: #f0f2f5;
    }
  }
}
</style>
