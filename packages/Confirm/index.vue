<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'

interface confirmProps {
  text: string
  title: string
  icon: string
  confirmText: string
  cancelText: string
  showIcon: boolean
  confirmShow: boolean
  cancelShow: boolean
  // 确认按钮
  confirmCallback: () => void
  // 取消按钮
  cancelCallback: () => void
  // 关闭
  closeCallBack: () => void
}

withDefaults(defineProps<confirmProps>(), {
  showIcon: true,
  cancelShow: true
})

const isShow: Ref<boolean> = ref(false)

onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <transition name="fade">
    <div class="r-confirm-wrapper" v-if="isShow">
      <div :class="['r-confirm']">
        <div class="r-confirm-header">
          <div class="box-title">
            <p>{{ title }}</p>
          </div>
          <button class="close-btn" type="button" @click="closeCallBack">
            <i class="m-icon-close"></i>
          </button>
        </div>
        <div class="r-confirm-content">
          <i v-if="showIcon" :class="icon"></i>
          <p>{{ text }}</p>
        </div>
        <div class="r-confirm-footer">
          <button
            v-if="cancelShow"
            @click="cancelCallback"
            class="cancel"
            style="margin-right: 10px"
          >
            {{ cancelText }}
          </button>
          <button v-if="confirmShow" @click="confirmCallback" class="confirm">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.r-confirm-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999999;
  .r-confirm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 420px;
    width: 100%;
    padding-bottom: 10px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    box-shadow: 0 2px 12px 0 rgba(7, 7, 7, 0.1);
    overflow: hidden;

    .r-confirm-header {
      position: relative;
      padding: 15px;
      padding-bottom: 10px;

      .box-title {
        font-size: 18px;
        line-height: 1;
        color: #303133;
      }
      .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 16px;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
          color: var(--primary-color);
        }
      }
    }

    .r-confirm-content {
      display: flex;
      padding: 14px 15px;
      font-size: 14px;
      color: #606266;
      align-items: center;
      i {
        margin-right: 5px;
        color: #f57b29;
        vertical-align: middle;
      }
    }
    .r-confirm-footer {
      display: flex;
      padding: 5px 15px 0;
      justify-content: end;
      align-items: center;

      button {
        padding: 8px 15px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        height: 32px;
        white-space: nowrap;
        cursor: pointer;
        vertical-align: middle;
        outline: none;
        color: #606266;
        background-color: transparent;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        font-size: 14px;
      }

      .confirm {
        background-color: var(--primary-color);
        color: #fff;
        border: 1px solid var(--primary-color);
      }
    }
  }
}
</style>
