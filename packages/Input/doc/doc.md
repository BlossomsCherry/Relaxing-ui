<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import demo6 from './demo6.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Input 输入框

#### 数据输入框类型，通过键盘输入字符

## 基本使用

#### _input_ 的基本使用

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Input" demoName="demo1"></Preview>

## 禁用状态

#### 通过 _disabled_ 属性指定是否禁用 _input_ 组件

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Input" demoName="demo2"></Preview>

## 一键清空

#### 使用 _clearable_ 属性即可得到一个可一键清空的输入框

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Input" demoName="demo3"></Preview>

## 密码框

#### 使用 _show-password_ 属性即可得到一个可切换显示隐藏的密码框

<br/>
<component-box>
    <demo4/>
</component-box>
<Preview compName="Input" demoName="demo4"></Preview>

# 图标

#### 可使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置。需要注意的是如果定义了右侧显示图标，那 _clearable_ 将不再起作用

<br/>
<component-box>
    <demo5/>
</component-box>
<Preview compName="Input" demoName="demo5"></Preview>

# 组合输入

#### 可通过插槽完成组合输入，插槽名默认为 btn

<br/>
<component-box>
    <demo6/>
</component-box>
<Preview compName="Input" demoName="demo6"></Preview>
