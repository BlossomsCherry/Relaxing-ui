<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Dialog 对话框

#### 在保留当前页面状态的情况下，告知用户并承载相关操作。

<br/>

## 基本使用

#### Dialog 弹出一个对话框，适合需要定制性更大的场景。

#### 需要设置 _v-model_ 属性，它接收 _Boolean_，当为 _true_ 时显示 Dialog。 Dialog 分为两个部分：_body_ 和 _footer_，_footer_ 需要具名为 _footer_ 的 _slot_ 。 _title_ 属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了 _before-close_ 的用法。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Dialog" demoName="demo1"></Preview>
<br/>

## 自定义内容

#### 对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 Element Plus 的表格和表单。

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Dialog" demoName="demo2"></Preview>
<br/>

## 内容居中

#### 对话框的内容可以居中。

#### 将 _center_ 设置为 _true_ 即可使标题和底部居中。 _center_ 仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Dialog" demoName="demo3"></Preview>
<br/>

## 自定义头部

#### _header_ 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 _title_ 属性，或使用 _titleId_ 插槽属性来指定哪些元素应该读取为对话框标题。

<br/>
<component-box>
    <demo4/>
</component-box>
<Preview compName="Dialog" demoName="demo4"></Preview>
<br/>
