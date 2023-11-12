<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import Attributes from './Attributes.vue'
    import componentsBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Button 按钮

#### 网页常用 button 按钮，常用于响应一个事件或处理某个逻辑

<br/>

## 基本使用

#### button 按钮的基本使用

<br/>
<componentsBox>
    <demo1/>
</componentsBox>
<Preview compName="Button" demoName="demo1"></Preview>
<br/>

## 禁用状态

#### 按钮不可操作的状态——通过 _disabled_ 属性设置实现

<br/>
<componentsBox>
    <demo2/>
</componentsBox>
<Preview compName="Button" demoName="demo2"></Preview>
<br/>

## 图标按钮

#### 带图标类型的按钮——通过 _leftIcon_ 或者 _rightIcon_ 属性设置实现并确定 icon 出现的位置

<br/>
<componentsBox>
    <demo4/>
</componentsBox>
<Preview compName="Button" demoName="demo3"></Preview>
<br/>

## 加载状态

#### 正在加载中的状态按钮——通过 _loading_ 和 _leftIcon_ 或者 _rightIcon_ 属性设置实现并确定 icon 出现的位置

<br/>
<componentsBox>
    <demo3/>
</componentsBox>
<Preview compName="Button" demoName="demo4"></Preview>
<br/>

## 自定义颜色

#### 可以自定义颜色的按钮类型——通过设置 _type_ 为 _customColor_ 属性设置实现

<br/>
<componentsBox>
    <demo5/>
</componentsBox>
<Preview compName="Button" demoName="demo5"></Preview>
<br/>

# Button API

## Button Attributes

<br/>
<attributes/>
<br/>
