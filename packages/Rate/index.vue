<script lang="ts" setup>
import { defineProps, ref, computed } from 'vue'

defineOptions({
  name: 'rRate'
})

interface rateProps {
  num?: string | number
  icons?: string
  voidIcon?: string
  size?: string
  showText?: boolean
  texts?: string[]
}

const props = withDefaults(defineProps<rateProps>(), {
  num: 5,
  icons: 'm-icon-collection',
  voidIcon: 'm-icon-collection_fill',
  // 使用函数返回默认数组
  texts: () => ['极差', '失望', '一般', '满意', '惊喜']
})

//icon的大小
const iconStyle = computed(() => {
  let fontSize = '18px'
  if (props.size) {
    if (props.size === 'small') fontSize = '14px'
    if (props.size === 'large') fontSize = '24px'
  }
  return {
    fontSize
  }
})

const flag = ref(-1)
const clickFlag = ref(-1)

const enterActive = (index: number) => {
  flag.value = index
}

const leaveActive = () => {
  flag.value = clickFlag.value
}

const clickActive = (index: number) => {
  clickFlag.value = index
}
</script>

<template>
  <div class="r-rate">
    <span
      class="r-rate_item"
      v-for="(item, index) in Number(num)"
      :key="index"
      @mouseenter="enterActive(index)"
      @mouseleave="leaveActive"
      @click="clickActive(index)"
    >
      <i
        :class="(flag || clickFlag) >= index ? voidIcon : icons"
        :style="[iconStyle, { color: (flag || clickFlag) >= index ? '#f7ba2a' : '#cdd0d6' }]"
      ></i>
    </span>
    <div class="r-rate_text" v-if="showText">{{ texts[flag] }}</div>
  </div>
</template>

<style lang="less" scoped>
.r-rate {
  display: inline-flex;
  height: 32px;
  align-items: center;
  .r-rate_item {
    i {
      margin-right: 6px;
      cursor: pointer;
      &.iconActive {
        color: #f7ba2a;
      }
    }
  }
  .r-rate_text {
    vertical-align: middle;
    color: #303133;
  }
}
</style>
