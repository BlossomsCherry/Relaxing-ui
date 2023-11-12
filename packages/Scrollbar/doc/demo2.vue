<template>
  <r-scrollbar row>
    <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </r-scrollbar>
</template>

<style lang="less" scoped>
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #fef0f0;
  color: var(--error-color);
}
</style>
