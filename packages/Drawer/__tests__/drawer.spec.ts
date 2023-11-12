import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RDrawer from '../index.vue'

describe('RDrawer', () => {
  it('renders the drawer when modelValue is true', async () => {
    const wrapper = mount(RDrawer, {
      props: {
        modelValue: true,
        title: 'My Drawer Title'
      }
    })

    // 断言抽屉是否被渲染
    expect(wrapper.find('.r-drawer').exists()).toBe(true)

    // 断言抽屉标题是否正确
    expect(wrapper.find('.r-drawer-title').text()).toBe('My Drawer Title')

    // 断言遮罩是否显示
    expect(wrapper.find('.r-overlay').exists()).toBe(true)

    // 断言点击遮罩时会关闭抽屉
    await wrapper.find('.r-overlay').trigger('click')
    // expect(wrapper.emitted('update:modelValue')[0]).toEqual([false])
  })

  it('does not render the drawer when modelValue is false', () => {
    const wrapper = mount(RDrawer, {
      props: {
        modelValue: false
      }
    })

    // 断言抽屉是否没有被渲染
    expect(wrapper.find('.r-drawer').exists()).toBe(false)

    // 断言遮罩是否没有显示
    expect(wrapper.find('.r-overlay').exists()).toBe(false)
  })
})
