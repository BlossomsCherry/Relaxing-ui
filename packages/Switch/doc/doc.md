<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Switch 开关

#### 表示两种相互对立的状态间的切换，多用于触发「开/关」

## 基础用法

#### 绑定 _v-model_ 到一个 _Boolean_ 类型的变量。 可以使用 _onColor_ 属性与 _closeColor_ 属性来设置开关的背景色

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Switch" demoName="demo1"></Preview>

# 禁用状态

#### 可通过 _disabled_ 属性开启

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Switch" demoName="demo2"></Preview>

# 带提示信息

#### 可通过 _showText_ 属性开启

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Switch" demoName="demo3"></Preview>

# 带辅助文字

#### 可通过 closeText 和 onText 属性决定开启和关闭状态时的辅助文字，通过 textAlign 属性决定辅助文字的位置

<br/>
<component-box>
    <demo4/>
</component-box>
<Preview compName="Switch" demoName="demo4"></Preview>
