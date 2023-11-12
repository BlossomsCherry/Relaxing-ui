<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import type { Ref } from 'vue'
import Message from '../../packages/Message/index'

const props = defineProps({
  compName: {
    type: String,
    default: '',
    require: true
  },
  demoName: {
    type: String,
    default: '',
    require: true
  }
})

const showCode: Ref<boolean> = ref(false)
const border: Ref<string> = ref('1px solid rgba(0,0,0,.06)')

const codeStatus: () => void = () => {
  showCode.value = !showCode.value
  if (showCode.value) {
    border.value = '0'
  } else {
    border.value = '1px solid rgba(0,0,0,.06)'
  }
}

const sourceCode: Ref<string> = ref('')
async function getSourceCode() {
  const isDev = import.meta.env.MODE === 'development'
  if (isDev) {
    sourceCode.value = (
      await import(/* @vite-ignore */ `/packages/${props.compName}/doc/${props.demoName}.vue?raw`)
    ).default
  } else {
    sourceCode.value = await fetch(`/packages/${props.compName}/doc/${props.demoName}.vue`).then(
      (res) => res.text()
    )
  }
}

// 复制代码
const copyCode = () => {
  navigator.clipboard.writeText(sourceCode.value)

  if (document.execCommand('copy')) {
    document.execCommand('copy')
    Message({
      type: 'success',
      message: '代码复制成功'
    })
  } else {
    Message({
      type: 'error',
      message: '代码复制失败'
    })
  }
}

onMounted(() => {
  getSourceCode()
})
</script>

<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode" @click="copyCode"><i class="m-icon-copy"></i></span>
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      ><code class="language-html">{{ sourceCode }}</code></pre>
    </transition>
    <div class="showCode" @click="codeStatus">
      <span>{{ showCode ? '隐藏代码' : '显示代码' }}</span>
      <i v-if="!showCode" class="m-icon-arrow-down-filling"></i>
      <i v-else class="m-icon-arrow-up-filling"></i>
    </div>
    <textarea id="inputCopy" />
  </div>
</template>

<style scoped lang="less">
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}

.pre-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 0px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;
  font-size: 16px;

  .m-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    i {
      font-size: 22px;
      color: #b7b3b3;

      &:hover {
        color: #000;
      }
    }
  }

  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #505050;
    cursor: pointer;

    i {
      margin-left: 10px;
    }

    i.rotate {
      transform: rotate(180deg);
    }

    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
  }

  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
}
</style>
