<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Rate 评分

#### 用于评分

## 基础用法

#### 评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 _colors_ 属性设置，而它们对应的两个阈值则通过 _low-threshold_ 和 _high-threshold_ 设定

<br/>
<component-box>
    <demo1></demo1>
</component-box>
<Preview compName="Rate" demoName="demo1"></Preview>

## 尺寸

#### 可以选择图标尺寸

#### 通过设置 _size_ 属性来选择尺寸，可以设置 _small_ 和 _large_ ,大小分别为 _14px_ 和 _24px_,如果没有设置 _size_ ，默认大小为 _18px_

<br/>
<component-box>
    <demo2></demo2>
</component-box>
<Preview compName="Rate" demoName="demo2"></Preview>

## 辅助文字

#### 用辅助文字直接地表达对应分数

#### 为组件设置 _show-text_ 属性会在右侧显示辅助文字。 通过设置 _texts_ 可以为每一个分值指定对应的辅助文字。 _texts_ 为一个数组，长度应等于最大值 _max_

<br/>
<component-box>
    <demo3></demo3>
</component-box>
<Preview compName="Rate" demoName="demo3"></Preview>

## 更多种类的图标

#### 当有多层评价时，可以用不同类型的图标区分评分层级

#### 设置 _icons_ 属性可以自定义不同分段的图标。 若传入数组，共有 3 个元素，为 3 个分段所对应的类名。 本例还使用 _void-icon_ 指定了未选中时的图标类名

<br/>
<component-box>
    <demo4></demo4>
</component-box>
<Preview compName="Rate" demoName="demo4"></Preview>
