<template>
  <r-row :gutter="20">
    <r-col :span="12">
      <div class="col-box col-box-1">12</div>
    </r-col>
    <r-col :span="12">
      <div class="col-box col-box-2">12</div>
    </r-col>
  </r-row>
  <r-row :gutter="20">
    <r-col :span="8">
      <div class="col-box col-box-1">8</div>
    </r-col>
    <r-col :span="8">
      <div class="col-box col-box-2">8</div>
    </r-col>
    <r-col :span="8">
      <div class="col-box col-box-1">8</div>
    </r-col>
  </r-row>
  <r-row :gutter="20">
    <r-col :span="6">
      <div class="col-box col-box-1">6</div>
    </r-col>
    <r-col :span="6">
      <div class="col-box col-box-2">6</div>
    </r-col>
    <r-col :span="6">
      <div class="col-box col-box-1">6</div>
    </r-col>
    <r-col :span="6">
      <div class="col-box col-box-2">6</div>
    </r-col>
  </r-row>
  <r-row :gutter="20">
    <r-col :span="12">
      <div class="col-box col-box-1">12</div>
    </r-col>
    <r-col :span="6">
      <div class="col-box col-box-2">6</div>
    </r-col>
    <r-col :span="4">
      <div class="col-box col-box-1">4</div>
    </r-col>
    <r-col :span="2">
      <div class="col-box col-box-2">2</div>
    </r-col>
  </r-row>
</template>

<style lang="less" scoped>
.col-box {
  height: 34px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 34px;
  border-radius: 5px;
}
.col-box-1 {
  background-color: #9eaaaf;
  color: #333;
}
.col-box-2 {
  background-color: #505050;
  color: #fff;
}
</style>
