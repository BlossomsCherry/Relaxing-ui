<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'rTable'
})

interface tableProps {
  data: any[]
  stripe?: boolean
  border?: boolean
  height?: number
  maxHeight?: number
}

const props = defineProps<tableProps>()
// 表头标题
const tableTitle = computed(() => {
  const arr = props.data.map((item) => Object.keys(item))
  let newArr: string[] = []
  arr.forEach((item) => {
    newArr = item.length >= newArr.length ? item : []
  })

  return newArr
})

const style = computed(() => {
  return {
    height: props.height + 'px',
    maxHeight: props.maxHeight + 'px'
  }
})
</script>

<template>
  <div class="r-table" :class="{ border: border }" :style="style">
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in tableTitle" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          :style="[{ backgroundColor: stripe && index % 2 === 0 ? '#fafafa' : '#fff' }]"
        >
          <td v-for="(key, index) in tableTitle" :key="index">{{ item[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.r-table {
  width: 100%;
  overflow: auto;

  table {
    width: 100%;
    border-radius: 2px;
    box-sizing: border-box;
    border-spacing: 0;
    background-color: #fff;

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      &:hover {
        background-color: #f5f7fa !important;
      }

      th,
      td {
        padding: 8px 12px;
        box-sizing: border-box;
        text-align: left;
        line-height: 20px;
        color: #646468;
        font-size: 14px;
        border-bottom: 1px solid #f0f0f0;
        border-right: 0;
      }
    }
  }

  &::-webkit-scrollbar {
    visibility: hidden;
    width: 5px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  &:hover {
    /* 设置浏览器滚动条样式 */
    &::-webkit-scrollbar {
      // width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条拖动部分的颜色 */
      background-color: #dddee0;
      /* 滚动条设置为圆角 */
      -webkit-border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      /* 滚动条轨道的颜色 */
    }
  }
}
.border {
  thead {
    td,
    th {
      border-top: 1px solid #f0f0f0;
    }
  }
  td,
  th {
    border: 1px solid #f0f0f0;
    border-top: 0;

    &:last-child {
      border-right: 1px solid #f0f0f0;
    }
  }
}
</style>
