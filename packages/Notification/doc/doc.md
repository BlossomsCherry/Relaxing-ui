<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Notification 通知

#### 悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Notification" demoName="demo1"></Preview>
<br/>

## 不同类型的通知

#### 我们提供了四种不同类型的提醒框：success、warning、info 和error。

#### Relax-ui 为 Notification 组件准备了四种通知类型：_success_, _warning_, _info_, _error_。 他们可以设置 _type_ 字段来修改，除上述的四个值之外的值会被忽略。

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Notification" demoName="demo2"></Preview>
<br/>

## 自定义消息弹出的位置

#### 可以让 Notification 从屏幕四角中的任意一角弹出

#### 使用 position 属性设置 Notification 的弹出位置， 支持四个选项：_top-right_、_top-left_、_bottom-right_ 和 _bottom-left_， 默认为 _top-right_。

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Notification" demoName="demo3"></Preview>
<br/>
