<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import Attributes1 from '../../rRow/Attributes.vue'
    import Attributes2 from '../../rCol/Attributes.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Layout布局

#### 通过基础的 24 分栏，迅速简便地创建布局

## 基本使用

#### 使用列创建基础网格布局

#### 通过 _row_ 和 _col_ 组件，并通过 _col_ 组件的 _span_ 属性我们就可以自由地组合布局

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Layout" demoName="demo1"></Preview>

## 分栏间距

#### 支持列间距

#### 行提供 _gutter_ 属性来指定列之间的间距，其默认值为0

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Layout" demoName="demo2"></Preview>
<br/>

# Row API

## Row Attributes

<br/>
<attributes1/>
<br/>

# Col API

## Col Attributes

<br/>
<attributes2/>
<br/>
