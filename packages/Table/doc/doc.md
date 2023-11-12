<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
    
</script>

# Table 表格

#### 用于展示多层次结构的数据，可自定义并保持高度灵活

<br/>

## 基础表格

#### table 表格基本使用示例,需要一个主要的 _data_ 对象数组。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Table" demoName="demo1"></Preview>
<br/>

## 带边框表格

#### 默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 _border_ 属性，把该属性设置为 _true_ 即可启用

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Table" demoName="demo2"></Preview>
<br/>

## 带斑马纹表格

#### 使用带斑马纹的表格，可以更容易区分出不同行的数据。

#### stripe 可以创建带斑马纹的表格。 如果 _true_, 表格将会带有斑马纹。

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Table" demoName="demo3"></Preview>
<br/>

## 带状态表格

#### 可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

#### 可以通过指定 Table 组件的 _row-class-name_ 属性来为 Table 中的某一行添加 class， 这样就可以自定义每一行的样式了。

<br/>
<component-box>
    <demo4/>
</component-box>
<Preview compName="Table" demoName="demo4"></Preview>
<br/>

## 固定表头

#### 纵向内容过多时，可选择固定表头。

#### 只要在 r-table 元素中定义了 _maxHeight_ 属性，即可实现固定表头的表格，而不需要额外的代码。

<br/>
<component-box>
    <demo5/>
</component-box>
<Preview compName="Table" demoName="demo5"></Preview>
<br/>
