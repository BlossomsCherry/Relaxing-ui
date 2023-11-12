<script setup lang="ts">
const cardValue: { title: string; text: string }[] = [
  {
    title: '更小的体积',
    text: '组件体积更小，灵活使用，按需使用。'
  },
  {
    title: '更快的响应',
    text: '配合Vue3的Composition API，更快的相应。'
  },
  {
    title: '更强的拓展性',
    text: '给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。'
  },
  {
    title: '更完美的支持',
    text: '专为Vue3版本开发。'
  },
  {
    title: '更友好的渲染',
    text: '极少的代码量，极简配置项。'
  }
]

const openGithub = () => {
  window.open('https://github.com/BlossomsCherry/Relax-ui')
}
</script>
<template>
  <div class="contentBox">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <h1>一套适合开发者使用的轻量级UI组件库，完美支持Vue3</h1>
    <div class="description-box">
      <p>
        完美支持vite+Vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的Vue世界！
      </p>
      <div class="buttonGroups">
        <r-button type="primary" @click="$router.push('/componentsUI')">立即体验</r-button>
        <r-button @click="openGithub"> GitHub </r-button>
      </div>
      <div class="card-box">
        <ul>
          <li v-for="(item, index) in cardValue" :key="index">
            <h3>{{ item.title }}</h3>
            <div class="text">{{ item.text }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.contentBox {
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: 80px;
    height: 200px;

    img {
      height: 200px;
    }
  }

  h3 {
    color: #4a5264;
  }

  .description-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #636e86;
      font-size: 14px;
    }

    .buttonGroups {
      display: flex;
      margin: 20px 0;

      .r-button {
        width: 160px;
        height: 48px;
        border-radius: 20px;
        font-size: 18px;

        &:first-child {
          margin-right: 100px;
        }
      }
    }

    .card-box {
      ul {
        display: flex;
        gap: 10px;

        li {
          padding: 20px;
          width: 200px;
          text-align: center;
          border-radius: 8px;
          // background-color: #fafefe;
          cursor: pointer;

          .text {
            font-size: 14px;
            color: #919cac;
          }

          &:hover {
            background-color: #e2f8f7;
          }
        }
      }
    }
  }
}
</style>
