<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Scrollbar 滚动条

#### 用于替换浏览器原生滚动条。

<br/>

## 基础用法

#### 通过 _height_ 属性设置滚动条高度，若不设置则根据父容器高度自适应。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Scrollbar" demoName="demo1"></Preview>
<br/>

## 横向滚动

#### 当元素宽度大于滚动条宽度时，会显示横向滚动条。

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Scrollbar" demoName="demo2"></Preview>
<br/>

## 最大高度

#### 当元素高度超过最大高度，才会显示滚动条。

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Scrollbar" demoName="demo3"></Preview>
<br/>
