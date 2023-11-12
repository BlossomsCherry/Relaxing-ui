<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/preview.vue'
</script>

# Tabs 标签页

#### 用于多个视图、数据切换展示操作

<br/>

## 基本使用

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Tabs" demoName="demo1"></Preview>
<br/>

## 卡片风格的标签

#### 你可以设置具有卡片风格的标签

#### 只需要设置 type 属性为 card 就可以使选项卡改变为标签风格

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Tabs" demoName="demo2"></Preview>
<br/>

## 带有边框的卡片风格

#### 你还可以设置标签页为带有边框的卡片

#### 将 type 设置为 border-card

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Tabs" demoName="demo3"></Preview>
<br/>

## 自定义标签页的内容

#### 可以通过具名插槽来实现自定义标签页的内容

<br/>
<component-box>
    <demo4/>
</component-box>
<Preview compName="Tabs" demoName="demo4"></Preview>
<br/>

## 动态增减标签页

<br/>
<component-box>
    <demo5/>
</component-box>
<Preview compName="Tabs" demoName="demo5"></Preview>
<br/>
