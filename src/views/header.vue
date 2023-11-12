<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['changeDark'])
const switchVal: boolean = ref(
  localStorage.getItem('switchVal')
    ? JSON.parse(localStorage.getItem('switchVal') as string)
    : false
)

const changeDark: (item: boolean) => void = (val) => {
  localStorage.setItem('switchVal', JSON.stringify(val))
  emit('changeDark', val)
}
</script>

<template>
  <div class="header">
    <div class="left" :style="{ filter: switchVal ? 'drop-shadow(2px 2px 6px #409eff)' : '' }">
      <router-link to="/home">
        <img src="@/assets/logo.png" alt="" />
        <h2>Relax-UI</h2>
      </router-link>
    </div>
    <div class="right">
      <router-link to="/home" :class="{ active: $route.path === '/home' }">主页</router-link>
      <router-link to="/componentsUI" :class="{ active: $route.path !== '/home' }"
        >组件</router-link
      >
      <r-switch v-model="switchVal" :width="45" onColor="#2c2c2c" @click="changeDark(switchVal)">
        <i v-if="!switchVal" class="m-icon-loading1"></i>
        <i v-else class="m-icon-collection_fill"></i>
      </r-switch>

      <div class="item"></div>

      <a href="https://github.com/BlossomsCherry/Relax-ui" target="_blank" class="github">
        <img src="@/assets/github.png" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 0 100px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;

  .left {
    width: 200px;
    color: var(--primary-color);
    // filter: drop-shadow(2px 2px 6px #409eff);

    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        cursor: pointer;
      }
      h2 {
        margin: 0;
        color: var(--primary-color);
        cursor: pointer;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    a {
      margin-right: 20px;
      padding: 10px 5px;
      border-bottom: 2px solid transparent;
      // transition: all 0.3s ease;
      &:hover {
        color: var(--primary-color);
      }
      &.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
      }
      &.github {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 20px;
        }
      }
    }
    .item {
      margin: 0 8px;
      width: 2px;
      height: 22px;
      background-color: #cacaca;
    }
  }
}
</style>
