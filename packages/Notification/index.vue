<script lang="ts" setup>
import { computed } from 'vue'

interface notificationProps {
  title?: string
  message?: string
  type?: 'info' | 'success' | 'error' | 'warn'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const props = defineProps<notificationProps>()

const iconType = computed(() => {
  let type = ''
  switch (props.type) {
    case 'success': {
      type = 'success'
      break
    }
    case 'warn': {
      type = 'warning'
      break
    }
    case 'info': {
      type = 'prompt'
      break
    }
    case 'error': {
      type = 'error'
      break
    }
  }

  return type
})
</script>

<template>
  <transition name="fade">
    <div v-show="true" class="notification">
      <i :class="[`m-icon-${iconType}`, `i-${type}`]"></i>
      <div class="r-notification-group">
        <h2 class="r-notification-title">{{ title }}</h2>
        <div class="r-notification-content">
          <p>{{ message }}</p>
        </div>
        <i class="m-icon-close r-notification-closeBtn"></i>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.notification {
  display: flex;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.6s;
  animation: show 0.6s;
  z-index: 99999999;

  i {
    display: inline-flex;
    margin-right: 5px;
    width: 19px;
    height: 19px;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0;
    outline: none;
    color: #fff;

    &.i-success {
      background-color: #67c23a;
    }

    &.i-warn {
      font-size: 19px;
      color: #e6a23c;
    }
    &.i-info {
      background-color: #909399;
    }
    &.i-error {
      background-color: #f56c6c;
    }
  }
  .r-notification-group {
    margin-left: 0 13px;
    .r-notification-title {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
    .r-notification-content {
      font-size: 14px;
      line-height: 24px;
      margin: 6px 0 0;
      text-align: justify;
      color: #606266;
    }

    .r-notification-closeBtn {
      position: absolute;
      top: 18px;
      right: 15px;
      cursor: pointer;
      font-size: 16px;
    }
  }
}

@keyframes show {
  0% {
    transform: rotate(-5deg);
  }
  10% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-3deg);
  }
  70% {
    transform: rotate(3deg);
  }
  80% {
    transform: rotate(-1deg);
  }
  90% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
