<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Drawer 抽屉

#### 有些时候, _Dialog_ 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 _Dialog_ 几乎相同的 API, 在 UI 上带来不一样的体验.

<br/>

## 基础用法

#### 呼出一个临时的侧边栏, 可以从多个方向呼出

#### 你必须像 _Dialog_ 一样为 _Drawer_ 设置 _model-value_ 属性来控制 Drawer 的显示与隐藏状态，该属性接受一个 _boolean_ 类型。 _Drawer_ 包含三部分: _title_ & _body_ & _footer_, 其中 _title_ 是一个具名 _slot_, 你还可以通过 _title_ 属性来设置标题, 默认情况下它是一个空字符串, 其中 _body_ 部分是 _Drawer_ 组件的主区域, 它包含了用户定义的主要内容. _footer_ 和 _title_ 用法一致, 用来显示页脚信息. 当 _Drawer_ 打开时，默认设置是从右至左打开 30% 浏览器宽度。 你可以通过传入对应的 _direction_ 和 _size_ 属性来修改这一默认行为。 下面一个示例将展示如何使用 before-close API，更多详细用法请参考页面底部的 API 部分。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Drawer" demoName="demo1"></Preview>
<br/>

## 不添加 Title

#### 当你不需要标题的时候，你可以将它移除。

#### 通过设置 _with-header_ 属性为 _false_ 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 _title_。

<br/>
<component-box>
    <demo2/>
</component-box>
<Preview compName="Drawer" demoName="demo2"></Preview>
<br/>

## 自定义内容

#### 像 Dialog 组件一样，Drawer 也可以用来显示多种不同的交互。

<br/>
<component-box>
    <demo3/>
</component-box>
<Preview compName="Drawer" demoName="demo3"></Preview>
<br/>
