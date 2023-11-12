

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'rButton'
})

const props = defineProps<{
  type?: 'default' | 'success' | 'warn' | 'primary' | 'danger'
  plain?: boolean
  round?: boolean
  //禁用按钮
  disabled?: boolean

  //按钮宽度
  width?: number
  //按钮高度
  height?: number
  Loading?: Boolean
  leftIcon?: String
  rightIcon?: String
  //自定义颜色
  customColor?: String | null
}>()

const style: any = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px',
    backgroundColor: props.customColor ? props.customColor : '',
    color: props.customColor ? '#fff' : '',
    borderColor: props.customColor ? props.customColor : ''
  }
})

//loading图标
const isIconClass = computed(() => {
  return [
    props.leftIcon || props.rightIcon,
    props.Loading
      ? props.leftIcon == 'm-icon-loading1' ||
        props.leftIcon == 'm-icon-loading2' ||
        props.leftIcon == 'm-icon-loading3' ||
        props.leftIcon == 'm-icon-loading4' ||
        props.leftIcon == 'm-icon-loading5' ||
        props.leftIcon == 'm-icon-loading6' ||
        props.rightIcon == 'm-icon-loading1' ||
        props.rightIcon == 'm-icon-loading2' ||
        props.rightIcon == 'm-icon-loading3' ||
        props.rightIcon == 'm-icon-loading4' ||
        props.rightIcon == 'm-icon-loading5' ||
        props.rightIcon == 'm-icon-loading6'
        ? 'mzl-icon-loading'
        : ''
      : ''
  ]
})
</script>

<template>
  <button
    :class="[
      'r-button',
      `r-button-${type}`,
      { 'is-plain': plain, 'is-round': round, 'is-disabled': disabled }
    ]"
    :style="style"
    :disabled="disabled"
  >
    <i :class="isIconClass" style="margin: 0 3px" v-if="leftIcon"></i>
    <span>
      <slot></slot>
    </span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>

<style>
@import '../../styles/iconfont.css';
@import '../../styles/main.css';
</style>
<style lang="less" scoped>
.r-button {
  padding: 8px 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #666;
  font-size: 90%;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #409eff;
    background-color: rgba(64, 158, 255, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* 按钮被禁用 */
  &.is-disabled {
    color: #a8abb2;
    background-color: #fff;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
}

.r-button-success {
  background-color: #67c23a;
  color: #fff;
  border: 1px solid #67c23a;

  &.is-plain {
    color: #67c23a;
    background-color: rgba(103, 194, 58, 0.3);

    &:hover {
      background-color: #67c23a;
    }

    &.is-disabled {
      color: #b3e19d;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      cursor: not-allowed;
    }
  }

  &:hover {
    color: #fff;
    background-color: rgba(103, 194, 58, 0.7);
    border: 1px solid rgba(103, 194, 58, 0.7);
  }

  &.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    cursor: not-allowed;
  }
}

.r-button-warn {
  background-color: orange;
  color: #fff;
  border: 1px solid orange;

  &.is-plain {
    color: orange;
    background-color: rgba(255, 165, 0, 0.3);

    &:hover {
      background-color: orange;
    }

    &.is-disabled {
      color: #f3d19e;
      background-color: #fdf6ec;
      border-color: #faecd8;
      cursor: not-allowed;
    }
  }

  &:hover {
    color: #fff;
    background-color: rgba(255, 165, 0, 0.7);
    border: 1px solid rgba(255, 165, 0, 0.7);
  }

  &.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    cursor: not-allowed;
  }
}

.r-button-primary {
  background-color: #409eff;
  color: #fff;
  border: 1px solid #409eff;

  &.is-plain {
    color: #409eff;
    background-color: rgba(64, 158, 255, 0.3);

    &:hover {
      background-color: #409eff;
    }

    &.is-disabled {
      color: #a0cfff;
      background-color: #ecf5ff;
      border-color: #d9ecff;
      cursor: not-allowed;
    }
  }

  &:hover {
    color: #fff;
    background-color: rgba(64, 158, 255, 0.7);
    border: 1px solid rgba(64, 158, 255, 0.7);
  }

  &.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    cursor: not-allowed;
  }
}

.r-button-danger {
  background-color: #f56c6c;
  color: #fff;
  border: 1px solid #f56c6c;

  &.is-plain {
    color: #f56c6c;
    background-color: rgba(245, 108, 108, 0.3);

    &:hover {
      background-color: #f56c6c;
    }

    &.is-disabled {
      color: #fab6b6;
      background-color: #fef0f0;
      border-color: #fde2e2;
      cursor: not-allowed;
    }
  }

  &:hover {
    color: #fff;
    background-color: rgba(245, 108, 108, 0.7);
    border: 1px solid rgba(245, 108, 108, 0.7);
  }

  &.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    cursor: not-allowed;
  }
}

.is-round {
  border-radius: 25px;
}

//loading加载动画
.mzl-icon-loading {
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
