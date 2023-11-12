<script setup lang="ts">
import Header from './header.vue'
</script>

<template>
  <div class="layout">
    <!-- 头部 -->
    <div class="header">
      <Header></Header>
    </div>

    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100vh;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
