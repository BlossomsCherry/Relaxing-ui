<script setup lang="ts">
import { ref } from 'vue'
import Message from '../../Message/index'
import iconList from '@/assets/data/iconList'

const keywords = ref('')
const IconListData = ref(iconList)
const search = (e: any) => {
  IconListData.value = []
  iconList.filter((item) => {
    if (item.className.indexOf(e) !== -1) {
      IconListData.value.push(item)
    }
  })
}

/**
 * 复制
 * @param {*} name icon图标的名字
 */
const copyIconName = (name: string) => {
  navigator.clipboard.writeText(name)

  if (document.execCommand('copy')) {
    document.execCommand('copy')
    Message({
      type: 'success',
      message: '复制成功'
    })
  } else {
    Message({
      type: 'error',
      message: '复制失败'
    })
  }
}
</script>

<template>
  <p style="margin-bottom: 10px">所有图标</p>
  <div class="searchBox" style="margin: 0 1px">
    <r-input
      v-model="keywords"
      leftIcon="m-icon-search"
      placeholder="输入图标关键词进行搜索"
      @input="search"
      style="font-size: 12px"
    ></r-input>
  </div>
  <div class="iconListBox">
    <div
      class="iconItem"
      v-for="(item, index) in IconListData"
      :key="index"
      @click="copyIconName(item.className)"
    >
      <i class="iconfont" :class="item.className"></i>
      <span>{{ item.className }}</span>
    </div>
  </div>
</template>

<style lang="less" scope>
.iconListBox {
  display: grid; // 网格布局
  // gap: 30px;
  // grid-template-columns: repeat(6, 1fr);
  grid-template-columns: repeat(auto-fill, minMax(170px, 1fr));
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 2vh;

  .iconItem {
    height: 140px;
    float: left;
    padding: 1vw;
    text-align: center;
    transition: all 0.15s ease;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    i {
      font-size: 40px;
      color: #555;
      display: block;
      margin-top: 1vh;
    }
    span {
      margin-top: 1vh;
      display: inline-block;
      font-size: 0.9vw;
      color: #555;
      margin-bottom: 1vh;
    }
    &:hover {
      background-color: #0e80eb;
      i {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
  }
}
</style>
