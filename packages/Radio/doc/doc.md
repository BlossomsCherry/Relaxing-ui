<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
    import Preview from '@/components/Preview.vue'
</script>

# Radio 单选框

#### 在一组备选项中进行单选

<br/>

## 基础用法

#### 单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

#### 要使用 Radio 组件，只需要设置 _v-model_ 绑定变量， 选中意味着变量的值为相应 Radio _label_ 属性的值， _label_ 可以是 _String_ 、_Number_ 或 _Boolean_。

<br/>
<component-box>
    <demo1/>
</component-box>
<Preview compName="Drawer" demoName="demo1"></Preview>
<br/>
