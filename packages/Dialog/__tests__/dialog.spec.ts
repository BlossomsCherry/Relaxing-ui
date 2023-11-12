import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RDialog from '../index.vue' // 请根据你的文件路径修改

describe('RDialog', () => {
  // 属性测试
  it('renders correctly with props', () => {
    const wrapper = mount(RDialog, {
      props: {
        modelValue: true,
        title: 'Dialog Title',
        width: '400px',
        center: true,
        showClose: true
      }
    })

    expect(wrapper.text()).toContain('Dialog Title')
    expect(wrapper.find('.r-Dialog-contentBox').attributes('style')).toContain('width: 400px')
    expect(wrapper.find('.r-Dialog-contentBox').classes()).toContain('center')
    expect(wrapper.find('.close-btn').exists()).toBe(true)
  })

  // 事件处理测试
  it('emits update:modelValue on closeDialog', async () => {
    const wrapper = mount(RDialog, {
      props: {
        modelValue: true
      }
    })

    await wrapper.find('.close-btn').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    // expect(wrapper.emitted('update:modelValue')[0]).toEqual([false])
  })

  // 插槽测试
  it('renders default and named slots content', () => {
    const wrapper = mount(RDialog, {
      props: { modelValue: true },
      slots: {
        default: 'Dialog Content',
        header: '<div class="custom-header">Custom Header</div>',
        footer: '<div class="custom-footer">Custom Footer</div>'
      }
    })

    expect(wrapper.text()).toContain('Dialog Content')
    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.custom-footer').exists()).toBe(true)
  })
})
