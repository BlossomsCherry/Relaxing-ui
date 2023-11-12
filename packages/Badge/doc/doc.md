<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/preview.vue'
</script>

# Badge 徽章

#### 按钮和图标上的数字或状态标记。

<br/>

## 基本使用

#### 可以用来展示新消息的数量。

#### 通过设置 _value_ 来调整标记所展示的内容，支持 _Number_ or _String_ 作为参数

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Badge" demoName="demo1"></Preview>
<br/>

## 最大值

#### 你可以自定义最大值。

#### 由max属性定义，它接受一个 _Number_ ， 要注意的是，该值当且仅当在 _value_ 的值也是 _Number_ 时生效。

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Badge" demoName="demo2"></Preview>
<br/>

## 自定义内容

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Badge" demoName="demo3"></Preview>
