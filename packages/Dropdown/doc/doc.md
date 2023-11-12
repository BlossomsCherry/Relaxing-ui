<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/preview.vue'
</script>

# Dropdown 下拉菜单

#### 下拉菜单数据选择组件

<br/>

## 基本使用

#### Dropdown 下拉菜单的基本使用，需要设置 _options_ 的 _label_ 参数。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Dropdown" demoName="demo1"></Preview>
<br/>

## 图标类型

#### 通过设置 _options_ 数据的 _icon_ 属性展示图标

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Dropdown" demoName="demo2"></Preview>
<br/>

## 唤醒方式

#### 通过设置 _trigger_ 属性设置不同的唤醒方式

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Dropdown" demoName="demo3"></Preview>
<br/>
