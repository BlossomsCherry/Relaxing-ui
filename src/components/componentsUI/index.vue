<script setup lang="ts">
import { ref } from 'vue'
import menuList from '@/assets/data/menuList.json'

const list = ref(menuList)
</script>

<template>
  <div class="components">
    <div class="left">
      <div class="menu-list" v-for="(item, index) in list" :key="index">
        <p class="title">{{ item['title-cn'] }}</p>
        <router-link
          v-for="(value, key) in item.list"
          :key="key"
          :class="{ active: value.eName === $route.name }"
          :to="value.eName"
        >
          {{ value.eName }} {{ value.name }}
        </router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.components {
  display: flex;
  margin-top: 90px;
  height: calc(100vh - 90px);

  .left {
    display: flex;
    padding: 0px 32px 96px 87px;
    width: 321px;
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;

    .menu-list {
      display: flex;
      flex-direction: column;

      .title {
        color: #303133;
        font-size: 1rem;
        font-weight: 700;
        margin: 14px 0;
        line-height: 24px;
      }

      a {
        padding: 10px 16px;
        width: 220px;
        height: 40px;
        font-size: 14px;
        color: #606266;
        line-height: 1.5;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
          color: var(--primary-color);
        }

        &.active {
          background-color: #e6f2fd;
          color: var(--primary-color);
          font-weight: 600;
          border-radius: 8px;
        }
      }
    }
  }

  .main {
    flex: 1;
    padding-bottom: 50px;
    // margin-left: 50px;
    margin: 0 200px 0 50px;
    // margin-right: 200px;
    overflow: scroll;
  }

  .right {
    width: 190px;
  }

  .left,
  .main {
    //隐藏滚动条
    &::-webkit-scrollbar {
      width: 5px;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }

  .left:hover,
  .main:hover {
    /* 设置浏览器滚动条样式 */
    &::-webkit-scrollbar,
    &::-webkit-scrollbar {
      width: 5px;
      /* 滚动条宽度 */
    }

    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-thumb {
      /* 滚动条拖动部分的颜色 */
      background-color: #dddee0;
      /* 滚动条设置为圆角 */
      -webkit-border-radius: 5px;
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-track {
      background-color: #fff;
      /* 滚动条轨道的颜色 */
    }
  }
}
</style>
