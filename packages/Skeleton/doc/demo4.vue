<template>
  <r-skeleton style="width: 240px">
    <template #template>
      <r-skeleton-item variant="image">
        <i class="m-icon-picture" style="font-size: 50px; color: #dcdfe6"></i>
      </r-skeleton-item>
      <r-skeleton-item variant="p" style="width: 50%" />
      <div style="display: flex; align-items: center; justify-items: space-between">
        <r-skeleton-item variant="text" style="margin-right: 16px"></r-skeleton-item>
        <r-skeleton-item variant="text" style="width: 30%"></r-skeleton-item>
      </div>
    </template>
  </r-skeleton>
</template>
