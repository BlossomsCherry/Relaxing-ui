<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    // import Attributes from './Attributes.vue'
    import componentsBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Skeleton 骨架屏

#### 在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

<br/>

## 基础用法

#### 基础的骨架效果。

<br/>
<componentsBox>
    <demo1/>
</componentsBox>
<Preview compName="Skeleton" demoName="demo1"></Preview>
<br/>

## 更多参数

#### 可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。

<br/>
<componentsBox>
    <demo2/>
</componentsBox>
<Preview compName="Skeleton" demoName="demo2"></Preview>
<br/>

## 动画效果

#### 我们提供了一个开关标志，表明是否显示加载动画， 调用 _animated_ 如果真是这样，所有的 _el-skeleton_ 的子节点将显示动画。

<br/>
<componentsBox>
    <demo3/>
</componentsBox>
<Preview compName="Skeleton" demoName="demo3"></Preview>
<br/>

## 自定义样式

#### Relax-ui 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot template 来自己设定模板。

<br/>
<componentsBox>
    <demo4/>
</componentsBox>
<Preview compName="Skeleton" demoName="demo4"></Preview>
<br/>
