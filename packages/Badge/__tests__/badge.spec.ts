import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import rBadge from '../index.vue'

describe('rBadge', () => {
  it('renders the badge with value', async () => {
    const wrapper = mount(rBadge, {
      props: {
        value: 5,
        type: 'primary',
        dot: false,
        hidden: false,
        max: 10
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言组件渲染了正确的值和样式
    expect(wrapper.text()).toContain('5')
    expect(wrapper.find('.badge').classes('primary')).toBe(true)
  })

  it('renders the badge as a dot', async () => {
    const wrapper = mount(rBadge, {
      props: {
        dot: true,
        hidden: false
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言组件渲染了一个点样式
    expect(wrapper.find('.dot').exists()).toBe(true)
  })

  it('hides the badge when hidden prop is true', async () => {
    const wrapper = mount(rBadge, {
      props: {
        value: 5,
        type: 'primary',
        dot: false,
        hidden: true,
        max: 10
      },
      slots: {
        default: 'Content'
      }
    })

    // 断言组件不渲染徽章内容
    expect(wrapper.find('.badge').exists()).toBe(false)
  })
})
