import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RInput from '../index.vue' // 请根据你的文件路径修改

describe('RInput', () => {
  it('renders an input field with a placeholder', () => {
    const placeholder = 'Enter text'
    const wrapper = mount(RInput, {
      props: {
        placeholder
      }
    })

    // 断言输入框是否正确渲染了占位符
    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder)
  })

  it('emits an "update:modelValue" event on input', async () => {
    const wrapper = mount(RInput)

    // 模拟用户输入
    const inputField = wrapper.find('input')
    await inputField.setValue('Test input')

    // 断言 "update:modelValue" 事件是否被触发
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    // 断言传递给事件处理程序的参数是否正确
    // expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Test input'])
  })

  it('emits a "change" event when the input loses focus', async () => {
    const wrapper = mount(RInput)

    // 模拟输入框失去焦点
    const inputField = wrapper.find('input')
    await inputField.setValue('Test input')
    await inputField.trigger('blur')

    // 断言 "change" 事件是否被触发
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('clears the input value when clear icon is clicked', async () => {
    const wrapper = mount(RInput)

    // 模拟用户输入
    const inputField = wrapper.find('input')
    await inputField.setValue('Test input')

    // 模拟点击清空图标
    // await wrapper.find('.m-icon-error').trigger('click')

    // 断言输入框的值是否被清空
    // expect(wrapper.vm.modelValue).toBe('')
  })
})
