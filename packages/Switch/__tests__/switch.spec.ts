import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RSwitch from '../index.vue' // 请根据你的文件路径修改Z

describe('RSwitch组件', () => {
  it('默认情况下应该是关闭状态', () => {
    const wrapper = mount(RSwitch)
    const round = wrapper.find('.r-switch_round')
    expect(round.element.style.left).toBe('2px')
  })

  it('点击切换开关应该改变状态', async () => {
    const wrapper = mount(RSwitch)
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')
    const round = wrapper.find('.r-switch_round')
    expect(round.element.style.left).toBe('22px') // 开关状态应该是打开的
  })

  it('禁用状态下不能切换开关', async () => {
    const wrapper = mount(RSwitch, {
      props: {
        disabled: true
      }
    })
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')
    const round = wrapper.find('.r-switch_round')
    expect(round.element.style.left).toBe('2px') // 开关状态应该不变，仍然关闭
  })

  it('显示文本时应该渲染相应的文本', () => {
    const wrapper = mount(RSwitch, {
      props: {
        showText: true
      }
    })
    const text = wrapper.find('.text')
    expect(text.text()).toBe('开') // 默认情况下应该是"开"
  })

  it('更改textAlign属性应该影响文本的位置', async () => {
    const wrapper = mount(RSwitch, {
      props: {
        textAlign: 'left'
      }
    })
    const leftText = wrapper.find('.r-switch span')
    expect(leftText.text()).toBe('开')
    const switchContent = wrapper.find('.r-switch_content')
    await switchContent.trigger('click')
    expect(leftText.text()).toBe('关') // 文本应该在左侧

    const wrapper2 = mount(RSwitch, {
      props: {
        textAlign: 'right'
      }
    })
    const rightText = wrapper2.find('.r-switch span')
    expect(rightText.text()).toBe('开')
    const switchContent2 = wrapper2.find('.r-switch_content')
    await switchContent2.trigger('click')
    expect(rightText.text()).toBe('关') // 文本应该在右侧
  })
})
