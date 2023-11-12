import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RRate from '../index.vue' // 请根据你的文件路径修改


describe('RRate组件', () => {
  it('默认渲染5个图标', () => {
    const wrapper = mount(RRate)
    const rateItems = wrapper.findAll('.r-rate_item')
    expect(rateItems.length).toBe(5)
  })

  it('默认情况下第一个图标应该是voidIcon', () => {
    const wrapper = mount(RRate)
    const firstIcon = wrapper.find('.r-rate_item i')
    expect(firstIcon.classes()).toContain('m-icon-collection_fill')
  })

  it('鼠标移入图标应该改变颜色', async () => {
    const wrapper = mount(RRate)
    const firstIcon = wrapper.find('.r-rate_item i')
    await firstIcon.trigger('mouseenter')
    expect(firstIcon.element.style.color).toBe('rgb(247, 186, 42)')
  })

  it('鼠标移出图标应该恢复默认颜色', async () => {
    const wrapper = mount(RRate)
    const firstIcon = wrapper.find('.r-rate_item i')
    await firstIcon.trigger('mouseenter')
    await firstIcon.trigger('mouseleave')
    expect(firstIcon.element.style.color).toBe('rgb(205, 208, 214)')
  })

  it('点击图标应该保持颜色', async () => {
    const wrapper = mount(RRate)
    const firstIcon = wrapper.find('.r-rate_item i')
    await firstIcon.trigger('click')
    expect(firstIcon.element.style.color).toBe('rgb(247, 186, 42)')
  })

  it('显示文本时应该渲染文本内容', async () => {
    const wrapper = mount(RRate, {
      props: {
        showText: true
      }
    })
    const text = wrapper.find('.r-rate_text')
    expect(text.text()).toBe('极差')
  })

  it('更改图标大小应该应用样式', async () => {
    const wrapper = mount(RRate, {
      props: {
        size: 'large'
      }
    })
    const firstIcon = wrapper.find('.r-rate_item i')
    expect(firstIcon.element.style.fontSize).toBe('24px')
  })
})
