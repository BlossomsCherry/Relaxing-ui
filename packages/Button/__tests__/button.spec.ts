import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RButton from '../index.vue'

describe('RButton', () => {
  // 属性测试
  it('renders correctly with different props', () => {
    const wrapper = mount(RButton, {
      props: { type: 'primary', plain: true, round: true, disabled: true }
    })
    expect(wrapper.classes()).toContain('r-button-primary')
    expect(wrapper.classes()).toContain('is-plain')
    expect(wrapper.classes()).toContain('is-round')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  // 样式测试
  it('applies custom styles correctly', () => {
    const wrapper = mount(RButton, {
      props: { width: 100, height: 50, customColor: 'red' }
    })
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 100px')
    expect(style).toContain('height: 50px')
    expect(style).toContain('background-color: red')
  })

  // 插槽测试
  it('renders default slot content', () => {
    const wrapper = mount(RButton, {
      slots: { default: 'Click me' }
    })
    expect(wrapper.text()).toContain('Click me')
  })

  // 图标测试
  it('renders left and right icons correctly', () => {
    const wrapper = mount(RButton, {
      props: { leftIcon: 'm-icon-left', rightIcon: 'm-icon-right' }
    })
    expect(wrapper.find('i').classes()).toContain('m-icon-left')
    expect(wrapper.findAll('i')[1].classes()).toContain('m-icon-right')
  })
})
