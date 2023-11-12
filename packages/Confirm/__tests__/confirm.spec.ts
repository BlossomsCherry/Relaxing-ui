import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RConfirm from '../index' // 替换为组件实际的导入路径

describe('RConfirm', () => {
  // 渲染和属性测试
  it('renders correctly with props', () => {
    const wrapper = mount(RConfirm, {
      props: {
        text: 'Confirm Text',
        title: 'Confirm Title',
        icon: 'icon-class',
        confirmText: 'Yes',
        cancelText: 'No'
      }
    })

    expect(wrapper.text()).toContain('Confirm Text')
    expect(wrapper.text()).toContain('Confirm Title')
    expect(wrapper.find('.icon-class').exists()).toBe(true)
    expect(wrapper.text()).toContain('Yes')
    expect(wrapper.text()).toContain('No')
  })

  // 事件处理测试
  it('triggers callbacks correctly', async () => {
    const confirmCallback = vi.fn()
    const cancelCallback = vi.fn()
    const closeCallback = vi.fn()

    const wrapper = mount(RConfirm, {
      props: {
        confirmCallback,
        cancelCallback,
        closeCallBack: closeCallback
      }
    })

    await wrapper.find('.confirm').trigger('click')
    expect(confirmCallback).toHaveBeenCalled()

    await wrapper.find('.cancel').trigger('click')
    expect(cancelCallback).toHaveBeenCalled()

    await wrapper.find('.close-btn').trigger('click')
    expect(closeCallback).toHaveBeenCalled()
  })

  // 条件渲染测试
  it('conditionally renders elements based on props', () => {
    const wrapper = mount(RConfirm, {
      props: {
        showIcon: false,
        cancelShow: false
      }
    })

    expect(wrapper.find('i').exists()).toBe(false)
    expect(wrapper.find('.cancel').exists()).toBe(false)
  })
})
